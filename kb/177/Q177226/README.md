---
layout: page
title: "Q177226: Memory Usage Increases When Querying Access 97 DB w/ ASP"
permalink: /kb/177/Q177226/
---

## Q177226: Memory Usage Increases When Querying Access 97 DB w/ ASP

	Article: Q177226
	Product(s): Internet Information Server
	Version(s): WINNT:2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Active Server Pages (ASP) to connect to an Access 97 Datasource,
	memory usage may increase and ASP pages may take a long time to complete
	requests.
	
	The memory usage level may return to normal after the number of connections to
	the ASP pages decreases.
	
	CAUSE
	=====
	
	By default, an Access 97 Datasource has two parameters that affect system
	performance: MaxBufferSize and Threads. The default value for the MaxBufferSize
	parameter is 512 and the default value for Threads parameter is 3.
	
	RESOLUTION
	==========
	
	To improve performance and minimize memory usage, configure these parameters as
	follows:
	
	1. Open the Control Panel (click Start, point to Settings and then click Control
	  Panel.
	
	2. Click the ODBC Control Panel tool.
	
	3. In the ODBC Datasource Administrator, click the "System DSN" tab.
	
	4. Select an Access 97 DSN and click Configure.
	
	5. In the ODBC Microsoft Access 97 Setup dialog box, click Advanced on the right
	  of the screen.
	
	6. In the Set Advanced Options dialog box, select the MaxBufferSize parameter.
	  In the Value of MaxBufferSize box, enter 8192.
	
	7. Select the Threads parameter. In the Value of Threads box, enter 20.
	
	8. Click OK to commit the changes and close the Set Advanced Options dialog box.
	  Click OK to exit the ODBC Microsoft Access 97 Setup dialog box.
	
	9. Quit the ODBC Datasource Administrator.
	
	MORE INFORMATION
	================
	
	The recommended values of MaxBufferSize and Threads (8192 and 20) are resource
	dependent and should work in most cases. If the symptoms do not improve under
	high load, increase the value of these settings to utilize available resources.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : WINNT:2.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	
