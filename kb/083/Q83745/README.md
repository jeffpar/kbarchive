---
layout: page
title: "Q83745: WIN.COM Is Required to Upgrade Windows 3.0 to 3.1"
permalink: /kb/083/Q83745/
---

## Q83745: WIN.COM Is Required to Upgrade Windows 3.0 to 3.1

	Article: Q83745
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you upgrade a Windows 3.0 installation to Windows 3.1, and WIN.COM has been
	renamed to something else, Windows 3.1 Setup will not perform an upgrade, but
	will install on top of Windows 3.0. You will be left with a nonfunctional setup,
	and may receive one or more of the following error messages:
	
	- Cannot find a device that may be needed to run Windows in 386 enhanced mode.
	  You need to run the Setup program again.
	
	- Invalid VxD dynamic link call to device number xxxx, service yyyy. Your
	  Windows configuration is invalid. Run the Windows Setup program again to
	  correct this problem. To continue running Windows, press Y or ENTER. To quit
	  the current program, press N. If you continue running Windows, your system
	  may become unstable. Do you want to continue?
	
	MORE INFORMATION
	================
	
	Windows 3.1 Setup looks for WIN.COM to determine if there is a current
	installation of Windows 3.0 or Windows 3.1. If Setup finds a Windows 3.0
	WIN.COM, it will perform an upgrade, keeping the Windows 3.0 configuration,
	while adding the Windows 3.1 files and settings.
	
	If no WIN.COM is found, Windows 3.1 will perform a standard installation over the
	top of a Windows 3.0 installation. Windows will not function correctly if this
	is done.
	
	If you have renamed WIN.COM to something else, and the Windows 3.1 Setup fails,
	the following works around the problem:
	
	1. Rename WINVER.EXE to WIN.COM. This has the result of removing the Windows 3.1
	  WINVER.EXE file, and creating a dummy WIN.COM.
	
	2. Rerun Windows 3.1 Setup. Setup will not find WINVER.EXE and will find
	  WIN.COM. Setup should complete normally.
	
	NOTE: If the above procedure is not followed and Windows 3.1 is installed again,
	the Windows 3.1 WINVER.EXE file will cause Windows 3.1 Setup to improperly
	install the Windows 3.1 files and settings, and will not update your printer
	drivers.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
