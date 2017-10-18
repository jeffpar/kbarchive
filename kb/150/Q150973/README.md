---
layout: page
title: "Q150973: PRB: OLE Error 0x80040113 Invalid Class String with MSGraph"
permalink: kb/150/Q150973/
---

## Q150973: PRB: OLE Error 0x80040113 Invalid Class String with MSGraph

	Article: Q150973
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a command that uses OLE automation to MSGraph causes the error message:
	
	  OLE error code 0x80040113 Invalid class string. Example: Append General
	  myGeneralFieldName Class "MSGraph
	
	CAUSE
	=====
	
	MSGraph has not been installed or registered to the operating system.
	
	RESOLUTION
	==========
	
	If the user has not installed a Workstation version of Visual FoxPro, but is
	running Visual FoxPro from an Administrative installation on a file server, then
	choose one of the following options:
	
	- Run setup, and select a "Workstation" installation
	
	  -or-
	
	- Run setup, and select "Custom" installation and only install the Microsoft
	  Tools option.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	MSGraph is installed to the <drive>:\<Windows95 dir>\MSGraph5
	directory. HKEY_CLASSES_ROOT contains registry information about MSGraph,
	MSGraph.Application, MSGraph.Application.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	
	=============================================================================
	
