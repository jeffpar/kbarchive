---
layout: page
title: "Q113187: Reasons for Failure of SetRestartDir"
permalink: /kb/113/Q113187/
---

## Q113187: Reasons for Failure of SetRestartDir

	Article: Q113187
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SetRestartDir subroutine from the Setup Toolkit will return 0 (zero) for any
	of the following reasons:
	
	- The restart directory has already been set by an earlier call to
	  SetRestartDir from the setup script.
	
	- The value of the STF_CWDDIR symbol is an empty string or it is not a valid
	  directory.
	
	- _MSSETUP.EXE is not in the STF_CWDDIR directory. This is true if MSSETUP.EXE
	  is not included in the [Files] section of the SETUP.LST file.
	
	- _MSSETUP.EXE cannot be copied from the STF_CWDDIR directory to the restart
	  directory.
	
	- _MSSETUP._Q_, a temporary file created in the temporary directory specified
	  in SETUP.LST by SETUP.EXE, cannot be copied to the restart directory.
	
	- The restart directory specified is invalid. The syntax for the directory name
	  is:
	
	     drive:\[dir[\subdir...][\]]
	
	Additional query words: 3.10 no32bit mssetup
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
