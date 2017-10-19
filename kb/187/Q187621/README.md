---
layout: page
title: "Q187621: Msvbvm50.dll Missing From Building Applications with Outlook 98"
permalink: /kb/187/Q187621/
---

## Q187621: Msvbvm50.dll Missing From Building Applications with Outlook 98

	Article: Q187621
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Building Applications With Microsoft Outlook 98 ISBN 1-57231-718-3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run the installation program on the companion disc for
	"Building Applications with Microsoft Outlook 98," you may receive the following
	error message:
	
	  Error Starting Program
	  A required .DLL file, MSVBVM50.DLL, was not found.
	
	The installation program will then exit.
	
	CAUSE
	=====
	
	The setup program requires Msvbvm50.dll to be installed in your \Windows\System
	folder. If this file is not present, the error will occur.
	
	RESOLUTION
	==========
	
	The Msvbvm50.exe file from the Microsoft Download Center. To download this file,
	view the following article in the Microsoft Knowledge Base:
	
	  Q180071 FILE: Msvbvm50.exe Installs Visual Basic 5.0 Run-Time Files
	
	
	MORE INFORMATION
	================
	
	Programs written in Microsoft Visual Basic require that the client computer have
	a local copy of the Microsoft Visual Basic Virtual Machine run-time engine.
	"Building Applications with Microsoft Outlook 98" did not properly distribute
	this engine.
	
	See the following Microsoft Knowledge Base article for further information on
	Msvbm50.exe:
	
	  Q180071 FILE: MSVBVM50.EXE Visual Basic 5.0 Run-Time Files
	
	
	Additional query words: ms_press ol98 setup installation
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
