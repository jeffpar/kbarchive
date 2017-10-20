---
layout: page
title: "Q136018: PRB: &quot;Incorrect Syntax Near 'Like'&quot; ODBC Error"
permalink: /kb/136/Q136018/
---

## Q136018: PRB: &quot;Incorrect Syntax Near 'Like'&quot; ODBC Error

{% raw %}

	Article: Q136018
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error can occur when updating data from a memo field in a remote
	view to a SQL Server database table:
	
	  Connectivity error: [Microsoft][ODBC SQL Server Driver][SQL Server] Incorrect
	  syntax near 'Like.'
	
	CAUSE
	=====
	
	You are using the 16- or 32-bit 2.0 SQL Server ODBC drivers in Windows for
	Workgroups or Windows NT. The error occurs because the 2.0 ODBC drivers map the
	memo field incorrectly to the back end data source.
	
	NOTE: This is just one of several possible reasons for this error.
	
	WORKAROUND
	==========
	
	There is no workaround under Windows version 3.11. However, if you are using
	Windows NT version 3.51, you can install the Windows 95 ODBC drivers. This will
	upgrade the 2.0 ODBC drivers to the 2.5 version.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin connectivity text memo convert
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
