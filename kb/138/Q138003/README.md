---
layout: page
title: "Q138003: PC Forms: Err Msg: ...No E-forms Available in Shared Mail..."
permalink: kb/138/Q138003/
---

## Q138003: PC Forms: Err Msg: ...No E-forms Available in Shared Mail...

	Article: Q138003
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Electronic Forms Designer has been installed in a shared Microsoft Windows
	installation, and the Novell NetWare Map ROOT command has been used to map the
	Windows directory, MEFBROWSE.EXE will not find the existing E- forms and gives
	the following error:
	
	  There are no e-forms available in the shared Mail extensions directory, or
	  installed on your machine.
	
	CAUSE
	=====
	
	This is due to the result returned from the GetWindowsDirectory() function that
	may or may not return the trailing backslash in the path to the Windows
	directory. If the Windows directory is the root of the drive, or Novell's Map
	Root has been used, then the function returns a trailing backslash.
	
	In all other cases, the path returned does not include a trailing backslash. This
	creates a problem when the MEFBrowse code appends a backslash to the returned
	path because, in some cases, the path is invalid due to having two backslashes.
	As a result, Browser fails to locate your MSMAIL.INI.
	
	RESOLUTION
	==========
	
	To verify the cause of this problem remap the Windows directory so that it is
	not the root of a drive. Then change to the Windows directory, and run Windows.
	See if Browser returns the error above.
	
	You can also modify the code of MEFBROWS.EXE by making the following changes to
	the BROWSER.FRM file, and recompile the VB project.
	
	In the BROWSER.FRM object Form:
	
	1. Remove the following line:
	
	        szMSMailIni = Trim$(Left$(szWinDir$, cbRet) & "\" & LOCAL_INI)
	
	2. Replace the above line with the following lines:
	
	        predir$ = Trim$(Left$(szWinDir$, cbRet))
	        If Right$(predir$,1) = "\" Then
	            szMSMailIni = predir$ & LOCAL_INI
	        Else
	            szMSMailIni = predir$ & "\" & LOCAL_INI
	        EndIF
	
	3. Save the project, and recompile the EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 of Microsoft
	Electronic Forms Designer. We are researching the problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 1.00 eform shared windows
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	
