---
layout: page
title: "Q253457: Visual FoxPro 6.0 Sample: Demonstrates the ListView Control"
permalink: /kb/253/Q253457/
---

## Q253457: Visual FoxPro 6.0 Sample: Demonstrates the ListView Control

{% raw %}

	Article: Q253457
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ListView.exe is a sample that illustrates the use of the properties and methods
	of the ActiveX ListView control in Visual FoxPro.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ListView.exe
	  (http://download.microsoft.com/download/vfox60/vfp60/6.0/win98/en-us/ListView.exe)
	
	Release Date: Jul-07-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The ListView.exe file contains the following files:
	
	+-----------------------------+
	| File name           | Size  | 
	+-----------------------------+
	| Readme.txt          | 2865  | 
	+-----------------------------+
	| ListView.pjt        | 6105  | 
	+-----------------------------+
	| ListView.pjx        | 5743  | 
	+-----------------------------+
	| ListView.sct        | 69852 | 
	+-----------------------------+
	| ListView.scx        | 6265  | 
	+-----------------------------+
	| Countrys.cdx        | 3072  | 
	+-----------------------------+
	| Countrys.dbf        | 977   | 
	+-----------------------------+
	| Customer.cdx        | 15360 | 
	+-----------------------------+
	| Customer.dbf        | 25978 | 
	+-----------------------------+
	| Ascend.bmp          | 322   | 
	+-----------------------------+
	| Descend.bmp         | 322   | 
	+-----------------------------+
	| Santa Fe Stucco.bmp | 65832 | 
	+-----------------------------+
	| Vw-Dtls.bmp         | 246   | 
	+-----------------------------+
	| Vw-List.bmp         | 246   | 
	+-----------------------------+
	| Vw-Lrgic.bmp        | 246   | 
	+-----------------------------+
	| Vw-Smlic.bmp        | 246   | 
	+-----------------------------+
	| Flgargen.ico        | 1078  | 
	+-----------------------------+
	| Flgausta.ico        | 1078  | 
	+-----------------------------+
	| Flgbelg.ico         | 1078  | 
	+-----------------------------+
	| Flgbrazl.ico        | 1078  | 
	+-----------------------------+
	| Flgcan.ico          | 1078  | 
	+-----------------------------+
	| Flgden.ico          | 1078  | 
	+-----------------------------+
	| Flgfin.ico          | 1078  | 
	+-----------------------------+
	| Flgfran.ico         | 1078  | 
	+-----------------------------+
	| Flggerm.ico         | 1078  | 
	+-----------------------------+
	| Flgirel.ico         | 1078  | 
	+-----------------------------+
	| Flgitaly.ico        | 1078  | 
	+-----------------------------+
	| Flgmex.ico          | 1078  | 
	+-----------------------------+
	| Flgnorw.ico         | 1078  | 
	+-----------------------------+
	| Flgpolan.ico        | 1078  | 
	+-----------------------------+
	| Flgport.ico         | 1078  | 
	+-----------------------------+
	| Flgspain.ico        | 1078  | 
	+-----------------------------+
	| Flgswed.ico         | 1078  | 
	+-----------------------------+
	| Flgswitz.ico        | 1078  | 
	+-----------------------------+
	| Flguk.ico           | 1078  | 
	+-----------------------------+
	| Flgusa01.ico        | 1078  | 
	+-----------------------------+
	| Flgusa02.ico        | 1078  | 
	+-----------------------------+
	| Flgvenez.ico        | 1078  | 
	+-----------------------------+
	| Question.ico        | 2158  | 
	+-----------------------------+
	
	The ListView control is an ActiveX control that provides a visual interface to
	display items in table form or in lists with an associated icon. Windows
	Explorer is an example of an application that uses a ListView control.
	
	The ListView control uses two collections of objects, ListItems and
	ColumnHeaders, to store and display data. The ListItems collection contains
	ListItem objects. Each ListItem represents an individual item that can be
	displayed in the control. Each ColumnHeader represents a column of ListItem
	objects.
	
	A ListItem has a label represented by the Text property and an icon represented
	by the Icon or SmallIcon properties. In addition, a ListItem has a Selected
	property to indicate if a user selects the item. It also has a ListSubItems
	collection that you can use to add other information to the control.
	
	This example contains a project (ListView) that contains one form (ListView), two
	tables, each with an index (.cdx) and a collection of bitmap (.bmp) and icon
	(.ico) files. The ListView form contains a ListView control as well as other
	controls that allow you to manipulate or view the properties of the ListView as
	well as the currently selected list item in the ListView. There are Tooltips
	that help explain the purpose of the property that is being controlled or
	displayed. There are also three ImageList controls on the form. Both
	oleImageList1 and oleImageList2 contain icons for the ListView control to use.
	The icons for the "large icon" view are stored in oleImageList1. The icons for
	the "small icon" and "list" views are stored in oleImageList2. Both of these
	image lists are loaded with images through code in the form's Init event. Icons
	used on the Column Headings in the "detail/report" view are stored in
	oleImageList3. The images for oleImageList3 are loaded during design time.
	
	When the form is executed, it loads information from the Customer table. It uses
	the Countrys table to find the name of the Icon file to use for that country. If
	a country cannot be found, it uses the default icon (Question.ico) and the
	Ghosted property of that ListItem is set to True. If the country is USA, the
	Bold properties of the ListItem and the ListSubItems are set to True and the
	ForeColor properties are set to Blue.
	
	The default view of the ListView is the "large icon" view with the icons listed
	in company name order in ascending sequence. When the ListView is in
	"detail/report" view, you can click on the column headings to set the sort order
	and sequence. The first click on a column heading sets it in ascending sequence;
	the second click sets it in descending sequence.
	
	The ListView control does have a Picture property so you can set a wallpaper
	behind the ListItems. The Santa Fe Stucco bitmap file has been included so that
	you may try this feature out.
	
	REFERENCES
	==========
	
	For more information about the ListView control, please see that topic in the
	Windows Controls Help file, CMCTL198.CHM, located where you have installed your
	MSDN Library.
	
	For additional information the ListView control, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q163803 BUG: Cannot Set ImageList Property of TreeView Visually
	
	  Q192693 BUG: License Error with ActiveX Control Added at Run-Time
	
	Additional query words: ListView
	
	======================================================================
	Keywords          : kbfile kbsample kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
