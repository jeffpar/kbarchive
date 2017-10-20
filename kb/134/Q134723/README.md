---
layout: page
title: "Q134723: PRB: Datasource Name Too Long Error as Establishing Connection"
permalink: /kb/134/Q134723/
---

## Q134723: PRB: Datasource Name Too Long Error as Establishing Connection

{% raw %}

	Article: Q134723
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbDSupport kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to establish a connection to a remote data source using a
	connection created with the Connection Designer, Visual FoxPro fails, and
	displays this error message:
	
	  Connectivity error: [Microsoft][ODBC DLL]Data Source Name Too Long
	
	CAUSE
	=====
	
	In the Connection Designer, the Connect String was chained together using commas
	instead of semi-colons.
	
	RESOLUTION
	==========
	
	The connection string specified in the connection designer must be changed to be
	chained together using semi-colons.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following connection string, if entered in the Connection Designer, fails
	due to the presence of commas:
	
	     DSN=vfpsql,USERID=sa,PASSWORD=sa,DATABASE=pubs
	
	The correct syntax is:
	
	     DSN=vfpsql;USERID=sa;PASSWORD=sa;DATABASE=pubs
	
	Additional query words: 3.00 VFoxWin ODBC
	
	======================================================================
	Keywords          : kbvfp300 kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
