---
layout: page
title: "Q123182: Setup Accepts Invalid Computer Name that Begins with Braces"
permalink: kb/123/Q123182/
---

## Q123182: Setup Accepts Invalid Computer Name that Begins with Braces

	Article: Q123182
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbsetup kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are unable to complete Windows NT version 3.5 Setup. Setup fails and the
	following error messages appear:
	
	  Noncritical Error An error has occurred.
	
	  External library procedure SetMyComputerName reported the following error:
	  Unable to set the local computer name.
	
	  You may continue (ignoring the error), retry the operation, or exit Setup. If
	  you choose to ignore the error, Setup may not be able to completely and/or
	  correctly install the software. If you exit, you will have to repeat the
	  Setup process from the beginning.
	
	  Ignore Retry Exit Setup
	
	If you choose Retry, your system beeps. If you choose Ignore, the following STOP
	message appears:
	
	  STOP: Setup couldn't modify your computer name. Cannot proceed with Install.
	
	After you choose the OK button, the following error message appears:
	
	  Windows NT 3.5 has not been installed.
	
	  Remove disks from the floppy disk drives and choose Restart Computer to
	  restart your computer."
	
	If you attempt to run Windows NT after you restart the computer, the following
	error message appears:
	
	  The system is not fully installed. Please setup again.
	
	CAUSE
	=====
	
	When Setup prompts you for a computer name, you are allowed to create an invalid
	computer name by entering braces ("{}") as the first two characters of the
	computer name.
	
	The following characters are usually invalid for use in a computer name:
	
	  /\[]":;|<>+=,?*
	
	Due to the way the .INF files in Setup process the computer name, a computer name
	that begins with braces always passes the validation tests; however, the invalid
	computer name eventually causes Setup to fail when Setup attempts to register
	the computer name.
	
	
	RESOLUTION
	==========
	
	To avoid this problem, do not use braces at the beginning of a computer name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
