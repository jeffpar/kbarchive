---
layout: page
title: "Q123216: Keyboard Interface Not Available for MS-DOS Based Applications"
permalink: /kb/123/Q123216/
---

## Q123216: Keyboard Interface Not Available for MS-DOS Based Applications

	Article: Q123216
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbtool kbbug3.10 kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a Program Information File (PIF) for COMMAND.COM or CMD.EXE, an
	MS-DOS based application, such as EDIT.COM, that is run from AUTOEXEC.NT does
	not have access to the keyboard interface. Keyboard strokes made during the
	execution of the MS-DOS based application are displayed after you exit the
	application. The mouse interface still works correctly.
	
	If you run the same PIF without the MS-DOS based application in AUTOEXEC.NT and
	load the application from the command prompt (either COMMAND.COM or CMD.EXE),
	this problem does not occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	
