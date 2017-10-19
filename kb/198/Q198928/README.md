---
layout: page
title: "Q198928: PRB: MSDN Library g_ccolCollection.Open Error During Setup"
permalink: /kb/198/Q198928/
---

## Q198928: PRB: MSDN Library g_ccolCollection.Open Error During Setup

	Article: Q198928
	Product(s): Microsoft Developer Network
	Version(s): 
	Operating System(s): 
	Keyword(s): kbHTMLHelp kbMSDN kbGrpDSTools
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Developer Network (MSDN) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing or uninstalling the MSDN Library, one or more of the following
	MSDN Setup error messages appear:
	
	  RemoveCollection g_ccolCollection.Open(collectionname) dwError = 7
	
	  -or-
	
	  CloseCollection g_ccolCollection.Open(collectionname) dwError = 8
	
	  -or-
	
	  CloseCollection g_ccolCollection.Open(collectionname) dwError = 5
	
	NOTE: Sometimes dwError has other values, but the same resolution applies.
	
	CAUSE
	=====
	
	The file Hhcolreg.dat file may have been corrupted. This file is located in the
	%WINDIR%\Help folder. By default this is C:\Windows\Help on Windows 95/98 and
	C:\WINNT\Help on Windows NT.
	
	RESOLUTION
	==========
	
	Search for all instances of the Hhcolreg.dat file on the machine. Rename each
	instance of Hhcolreg.dat to Hhcolreg.txt. Attempt to perform the MSDN Library
	install or uninstall again.
	
	Note that all other HTML Help collections will need to be reinstalled after
	performing this step. This includes, but is not limited to the following:
	
	- Other versions of the MSDN Library
	
	- Platform SDK documentation
	
	If this troubleshooting step does not work, a manual removal of the MSDN Library
	may be necessary before attempting the setup action again. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q240350 HOWTO: Manually Uninstall the MSDN Library
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q216109 HOWTO: Troubleshoot MSDN Library Run-Time/Install/Uninstall Problems
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHTMLHelp kbMSDN kbGrpDSTools 
	Technology        : kbMSDNSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
