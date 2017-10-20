---
layout: page
title: "Q321493: FP: Err Msg: PivotTable List Could Not Connect to Data Source"
permalink: /kb/321/Q321493/
---

## Q321493: FP: Err Msg: PivotTable List Could Not Connect to Data Source

{% raw %}

	Article: Q321493
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to view a page of your Microsoft FrontPage Web that contains a
	PivotTable list component, you may receive the following error message:
	
	  The PivotTable list <PivotTableName> could not connect to data source
	  <DataSourceName>. For information about the data source, contact the
	  creator of the file.
	
	  0x80004005: "[Microsoft][ODBC Driver Manager] Data source name not found and
	  no default driver specified."
	
	You can access the Web page and view the PivotTable component from your own
	computer where FrontPage is installed and on which you created the Web page.
	This problem occurs only when you try to access the page from a remote computer.
	
	CAUSE
	=====
	
	This problem occurs if the PivotTable component cannot connect to the Open
	Database Connectivity (ODBC) data source on the server.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods, as appropriate to
	your situation.
	
	NOTE: The steps in the following methods assume that you use a Microsoft Access
	database as the data source.
	
	Method 1
	--------
	
	In this method, use the Microsoft OLE DB Provider for ODBC Drivers to configure
	the PivotTable component for the System Data Source Name (DSN). Then on each
	client computer, map a drive to the database share on the server, and then
	create a System DSN.
	
	On the Server Computer:
	
	1. Create a share for the database on the server.
	
	2. Assign appropriate permissions to users to access the share.
	
	3. Create and configure the System (DSN) for the database.
	
	  For additional information about how to create a System DSN, click the article
	  numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q265034 FP2000: How to Change from File DSN to System DSN in FrontPage
	
	  Q305599 HOW TO: Create a System Data Source Name in Windows XP
	
	4. Configure the PivotTable component to connect to the System DSN that you
	  created in step 3:
	
	  a. Start FrontPage, and then open the page that contains the PivotTable
	     component.
	
	  b. On the PivotTable toolbar, click Property Toolbox.
	
	  c. Click Data Source, click Connection, and then click Connection Editor.
	
	  d. Click the Provider tab.
	
	  e. In the OLE DB Provider(s) list, click "Microsoft OLE DB Provider for ODBC
	     Drivers", and then click Next.
	
	  f. Under "Specify the source of data", click to select "Use data source
	     name", click the name of the data source that you created in step 3, and
	     then click OK.
	
	  g. Click "Data member" under "User data from" in the PivotTable Property
	     Toolbox dialog box, and then click the database element that you want.
	
	  h. Close the PivotTable Property Toolbox dialog box.
	
	On the Client Computer:
	
	1. Install Microsoft Office XP or Microsoft Office 2000 (if it is not already
	  installed).
	
	2. Map a drive to the share on the server that contains the database. For
	  example, \\<ServerName>\<ShareName>.
	
	3. Create a System DSN that uses the same name as the DSN on the server, and
	  point it to the server DSN.
	
	  For additional information about how to create a System DSN, click the article
	  numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q265034 FP2000: How to Change from File DSN to System DSN in FrontPage
	
	  Q305599 HOW TO: Create a System Data Source Name in Windows XP
	
	Method 2
	--------
	
	In this method, use the Microsoft Jet 4.0 OLE DB Provider and a Universal Naming
	Convention (UNC) path to the database when you configure the PivotTable
	component on the server computer. By doing so, users of client computers do not
	have to map a drive to the database share on the server or create a System DSN
	to access the Web page and view the PivotTable component.
	
	On the Server Computer:
	
	1. Create a share for the database on the server.
	
	2. Assign appropriate permissions (at least Read and Change permissions) to
	  users to access the share.
	
	  For additional information about how to create a System DSN, click the article
	  numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q265034 FP2000: How to Change from File DSN to System DSN in FrontPage
	
	  Q305599 HOW TO: Create a System Data Source Name in Windows XP
	
	3. Create and configure the System DSN for the database.
	
	4. Configure the PivotTable component to connect to the System DSN that you
	  created in step 3:
	
	  a. Start FrontPage, and open the page that contains the PivotTable component.
	
	  b. On the PivotTable toolbar, click Property Toolbox.
	
	  c. Click Data Source, click Connection, and then click Connection Editor.
	
	  d. Click the Provider tab.
	
	  e. In the OLE DB Provider(s) list, click "Microsoft Jet 4.0 OLE DB Provider",
	     and then click Next.
	
	  f. Under "Select or enter a database name", type the UNC path to the
	     database. For example, type "\\ServerName\ShareName\Database.mdb" (without
	     the quotation marks), and then click OK.
	
	  g. Click "Data member" under "User data from" in the PivotTable Property
	     Toolbox dialog box, and then click the database element that you want.
	
	On the Client Computer:
	
	Install Office XP or Office 2000 (if it is not already installed) on the client
	computers. You do not have to map a drive to the database share on the server or
	create a System DSN.
	
	MORE INFORMATION
	================
	
	For more information about PivotTables and other Microsoft Office Web
	components, visit the following Microsoft Web site, and then see the Microsoft
	Office 2000 Web Components white paper:
	
	  Microsoft Office 2000 Web Components
	  http://www.microsoft.com/office/previous/webtech/WebCmpnt.asp
	
	Also, visit the following Microsoft Web site, and then see the "Microsoft Office
	2000 Web Components Basics" article:
	
	  Microsoft Office 2000 Web Components Basics
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dno2kta/html/msowcbasics.asp
	
	For more information about how to work with Office 2000 Web components, visit the
	following Microsoft Web site, and then see the "Office Web Components" section:
	
	  Microsoft Office Development with Visual Studio
	  http://msdn.microsoft.com/library/default.asp?url=/library/en-us/dnoffdev/html/vsofficedev.asp
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
