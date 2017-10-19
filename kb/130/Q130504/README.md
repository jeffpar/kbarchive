---
layout: page
title: "Q130504: PRB: Connection Dialog Box Doesn't Show Data Source Choices"
permalink: /kb/130/Q130504/
---

## Q130504: PRB: Connection Dialog Box Doesn't Show Data Source Choices

	Article: Q130504
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to create a remote view or when using the Connection Designer
	functions, you may get a connection dialog box with no available data source
	choices. Even though you have ODBC installed and have available data sources in
	the ODBC Control Panel in Windows, Visual FoxPro does not seem to recognize the
	data sources.
	
	CAUSE
	=====
	
	The computer is running Windows 95 or Windows NT but has only 16-bit data
	sources installed. Both of these platforms require 32-bit data sources.
	
	RESOLUTION
	==========
	
	To use the installed data sources, you must install the 32-bit ODBC components
	by reinstalling the ODBC components using Setup or the ODBC Driver 2 Pack.
	
	For information about Windows 95 ODBC drivers, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q128376 ODBC on Windows 95
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbfest VFoxWin
	
	======================================================================
	Keywords          : kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbprb
	
	=============================================================================
	
