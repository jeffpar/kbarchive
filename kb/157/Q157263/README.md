---
layout: page
title: "Q157263: Msbatch.inf Parameters: Installing Default Screen Saver"
permalink: /kb/157/Q157263/
---

## Q157263: Msbatch.inf Parameters: Installing Default Screen Saver

	Article: Q157263
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install a default screen saver and settings using
	the Msbatch.inf file for batch installations of Windows 95.
	
	Note: Due to limitations of batch file installations, it is not possible to set
	up the screen saver password with a batch installation.
	
	MORE INFORMATION
	================
	
	Microsoft does not encourage or support changes to .inf files; therefore,
	Microsoft Technical Support does not support the procedure in this article.
	Although we have tested the following procedure and it appears to function as
	described, make a backup copy of your .inf file before you proceed.
	
	NOTE: The following example only shows how to install the screen saver. The
	screen saver itself must still be copied to the Windows\system folder for proper
	functionality.
	
	In the Msbatch.inf file, modify the [Install] section to include the following
	lines:
	
	  " UpdateInis=screensaver
	  Addreg=screensaver.regm." (without the quotation marks)
	
	Also, add the following sections and keys
	
	  [screensaver]
	  %10%\system.ini,Boot,,"SCRNSAVE.EXE=c:\windows\System\<name>"
	
	  [screensaver.reg]
	  HKCU,"Control Panel\desktop",ScreenSaveActive,,"1"
	  HKCU,"Control Panel\desktop",ScreenSaveLowPowerActive,,"0"
	  HKCU,"Control Panel\desktop",ScreenSaveLowPowerTimeout,,"n"
	  HKCU,"Control Panel\desktop",ScreenSavePowerOffActive,,"n"
	  HKCU,"Control Panel\desktop",ScreenSavePowerOffTimeout,,"n"
	  HKCU,"Control Panel\desktop",ScreenSaveTimeOut,,"<n>"
	
	where <name> is the name of the screen saver and <n> is the delay
	time before the screen saver starts.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
