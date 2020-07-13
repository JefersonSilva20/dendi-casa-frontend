import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategorieModel } from 'src/app/models/categorie-model/categorie-model';
import { CATEGORIES } from 'src/app/models/constants/categories';
import { CATEGORIE_LOCAL_STORAGE } from 'src/app/models/constants/local-storage';
import { MarketModel } from 'src/app/models/market-model/market-model';
import { CrudMarketService } from 'src/app/services/crud-market/crud-market.service';


@Component({
  selector: 'app-list-markets',
  templateUrl: './list-markets.component.html',
  styleUrls: ['./list-markets.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ListMarketsComponent implements OnInit {

  public displayedColumns: string[];
  public dataSource: MatTableDataSource<MarketModel>;
  public expandedElement: MarketModel | null;
  public categories: Array<CategorieModel> = CATEGORIES;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChildren('button') buttons: QueryList<MatButtonToggle>;
  public categorieName : string;

  constructor(private crudMarketsService: CrudMarketService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = ['name', 'phone', 'instagram'];
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    const paginatorIntl = this.paginator._intl;
    paginatorIntl.nextPageLabel = 'Próxima página';
    paginatorIntl.previousPageLabel = 'Página anterior';
    paginatorIntl.firstPageLabel = 'Primeira página';
    paginatorIntl.lastPageLabel = 'Última página';
    paginatorIntl.itemsPerPageLabel = 'Itens por página';
    this.categorieName = localStorage.getItem(CATEGORIE_LOCAL_STORAGE);
    this.listMarket(this.categorieName);
  }

  ngAfterViewInit() {
    this.initCategorieSelected();
  }

  private initCategorieSelected() {
    this.buttons.forEach(element => {
      if (element.value === localStorage.getItem(CATEGORIE_LOCAL_STORAGE)) {
        setTimeout(() => { element._onButtonClick() }, 100);
      }
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public listMarket(categorieName: string) {
    localStorage.setItem(CATEGORIE_LOCAL_STORAGE,categorieName);
    this.categorieName = categorieName;
    this.crudMarketsService.getMarketsByCategorie(categorieName)
      .subscribe((list: MarketModel[]) => {
        this.dataSource.data = list;
      })
  }
}


