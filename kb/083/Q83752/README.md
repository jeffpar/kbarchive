---
layout: page
title: "Q83752: Advanced Button Not Available in Ports Option in Control Panel"
permalink: /kb/083/Q83752/
---

## Q83752: Advanced Button Not Available in Ports Option in Control Panel

	Article: Q83752
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Microsoft Windows operating system version 3.1, if the Windows 3.1
	COMM.DRV driver is not installed correctly, the button for the advanced section
	of Ports in Control Panel is unavailable (dimmed). The correct entry for the
	Windows 3.1 COM driver in the SYSTEM.INI file is:
	
	     [Boot]
	     COMM.DRV=COMM.DRV
	
	MORE INFORMATION
	================
	
	Windows 3.1 Setup does not upgrade third-party device drivers. Because there is
	no guarantee that the third-party device drivers are not required to run your
	installation of Windows, Setup may not be able to complete the installation of
	Windows 3.1 if the drivers are removed.
	
	If the Communications port driver entry is not correct, do the following:
	
	1. Edit the SYSTEM.INI file with a text editor and change the COMM.DRV entry as
	  shown above.
	
	2. Using the EXPAND command (EXPAND.EXE), expand COMM.DRV from the original
	  Windows 3.1 disks by typing the following:
	
	  EXPAND A:COMM.DR_ C:\WINDOWS\SYSTEM\COMM.DRV
	
	NOTE: The COMM.DR_ file is located on Disk 1 of the 1.44 MB (3.5-inch) disk set;
	and Disk 2 of the 1.2 MB (5.25-inch) and 720K (3.5-inch) disk sets.
	
	Additional query words: 3.10 grey gray
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
