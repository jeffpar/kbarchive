---
layout: page
title: "Q138306: Setup Changes Date and Time Stamp of Installed Files"
permalink: kb/138/Q138306/
---

## Q138306: Setup Changes Date and Time Stamp of Installed Files

	Article: Q138306
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 95 Setup program changes the date and time stamp of some installed
	Windows 95 files.
	
	MORE INFORMATION
	================
	
	Setup changes the date and time stamp of the following files so that they match
	the date and time of installation:
	
	Windows folder:
	
	- Setver.exe
	
	- Smartdrv.exe
	
	Windows\Command folder:
	
	- Extract.exe
	
	- Scandisk.exe
	
	Windows\System folder:
	
	- Commctrl.dll
	
	- Commdlg.dll
	
	- Dskmaint.dll
	
	- Lzexpand.dll
	
	- Mini.cab
	
	- Msprint.dll
	
	- Mstcp.dll
	
	- Netapi.dll
	
	- Netdi.dll
	
	- Netos.dll
	
	- Rnasetup.dll
	
	- Setupx.dll
	
	- Shell.dll
	
	- Sysdetmg.dll
	
	- Ver.dll
	
	When you upgrade an earlier version of Windows to Windows 95, Setup stamps the
	.dll files listed above as the earlier version of Windows. When Setup is
	finished, it stamps these files as Windows 95 versions (4.0).
	
	The other files listed above are copied directly from the Windows 95 disks or
	CD-ROM and not from cabinet files. The file copy process does not preserve the
	date and time stamp.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
