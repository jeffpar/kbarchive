---
layout: page
title: "Q164145: Cannot Open File Accessing Visual FoxPro Database"
permalink: /kb/164/Q164145/
---

## Q164145: Cannot Open File Accessing Visual FoxPro Database

{% raw %}

	Article: Q164145
	Product(s): Internet Information Server
	Version(s): 2.00
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform an Internet Database Connector (IDC) query from an IIS 2.0
	server to a Microsoft Visual FoxPro database on a different server, you may get
	the following error message on the client browser:
	
	  Error Performing Query
	
	  [State=S1000][Error=171][Microsoft][ODBC Visual FoxPro Driver]Cannot
	  open file {filename}.DBF
	
	If the FoxPro database is on the same computer as the IIS server, the query
	returns data properly.
	
	RESOLUTION
	==========
	
	To correct this problem, perform the following steps:
	
	1. In Control Panel, click the ODBC icon.
	
	2. Select the System DSN option; then select the Visual FoxPro DSN used by the
	  IDC file. Click the Setup or the Configure button.
	
	3. Select the Options button, and clear the Fetch Data in Background check box.
	
	4. Select OK. Then select Close to apply these changes.
	
	The query should work correctly.
	
	MORE INFORMATION
	================
	
	In looking at a trace from the problem, a different User ID is used to Open the
	.DBC file and other files. However, when the .DBF file is accessed a blank or
	different user name is sent from the IIS server to the Microsoft Windows NT
	Server where the database is located. However, if Fetch Data in Background is
	not selected, the same User ID is used to access all files in the database.
	
	Additional query words: uncheck
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbiisSearch kbiis200
	Version           : 2.00
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
