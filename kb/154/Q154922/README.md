---
layout: page
title: "Q154922: DBWEB: DbWeb Administrator Reports the Datasource is Invalid"
permalink: /kb/154/Q154922/
---

## Q154922: DBWEB: DbWeb Administrator Reports the Datasource is Invalid

{% raw %}

	Article: Q154922
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 24-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft dbWeb, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	A sample schema works when accessed through the Web browser, but the dbWeb
	Administrator reports that the data source you are trying to access is either
	non-existent or invalid when attempting to view the schema. This produces the
	following error:
	
	  Error IM002: ODBC Data Source not found
	
	CAUSE
	=====
	
	The dbWeb installation program creates two ODBC system data sources named
	dbWebSchema and dbpubs in the NT registry. Because the dbWeb Administrator is a
	16-bit application, it looks for these data sources in the ODBC initialization
	file (ODBC.ini). When it fails to locate the data sources, the dbWeb
	Administrator reports that the data source is nonexistent or was not found.
	
	RESOLUTION
	==========
	
	The ODBC.ini file must be synchronized with the Windows NT registry.
	
	MORE INFORMATION
	================
	
	To synchronize the ODBC.ini file with the NT registry, follow the steps below:
	
	1. Open the Control Panel by double clicking its icon in the Main program group
	
	2. Double-click the 32-bit ODBC Administrator Icon to launch the ODBC
	  administrator. You can identify the 32-bit ODBC Administrator because it has
	  a 32 in the icon. You can also launch the ODBC Manager in the dbWeb
	  Administrator by clicking Utilities on the dbWeb menu bar and selecting ODBC
	  Manager.
	
	3. Click System DSN at the bottom of the ODBC Administrator window.
	
	4. Click on a data source in the System Data Sources (Driver) pane of the System
	  Data Sources Window, then click Setup.
	
	5. Type a comment in the Description field to modify the data source setup, then
	  click OK.
	
	6. Repeat steps 4 and 5 for each System Data Source the dbWeb administrator was
	  unable to recognize.
	
	7. Click Close on the System Data Sources window.
	
	8. Click Close on the Data Sources Window.
	
	Adding comments to the Description field forces a refresh of the Windows NT
	registry and the ODBC.INI file. This enables the dbWeb Administrator to detect
	the list of system data sources.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using a text editor like Notepad, open the ODBC.ini file in the Winnt folder.
	
	2. Go to the [dbwebschema] section.
	
	3. Place a semicolon at the start of the following line:
	
	  Driver32=C:\Winnt\System32\Odbcjt32.dll
	
	4. On the File menu, click Save.
	
	5. In the dbWeb program group, double-click the dbWeb Administrator.
	
	6. In the Data Sources window, double-click the dbwbSchema entry.
	
	7. Double-click the Schemas entry to open the schema for modification.
	
	8. The following error message appears:
	
	  Error IM002: ODBC Data Source not found
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbAudDeveloper kbdbWebSearch kbdbWeb100 kbdbWeb110
	Version           : WINDOWS:1.0,1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
