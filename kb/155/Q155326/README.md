---
layout: page
title: "Q155326: Windows 95 Defrag.exe Command-Line Parameters"
permalink: /kb/155/Q155326/
---

## Q155326: Windows 95 Defrag.exe Command-Line Parameters

	Article: Q155326
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the command-line parameters for the Disk Defragmenter tool
	(Defrag.exe) in Windows 95.
	
	MORE INFORMATION
	================
	
	You can use the following command-line parameters with Defrag.exe, either on the
	Open line in the Run dialog box or within System Agent:
	
	  /ALL          Defragment all local, non-removable drives.
	
	  /F            Defragment files and free space.
	
	  /U            Defragment files only.
	
	  /Q            Defragment free space only.
	
	  /P            System and hidden files will be optimized.
	
	  /CONCISE      Display the Hide Details view (Default).
	
	  /DETAILED     Display the Show Details view.
	
	  /NOPROMPT     Unattended mode; do not stop and display confirmation
	                messages.
	
	  /PMIOCTL      Turns off use of the protected-mode IOCTL from
	                Drvspacx.vxd.
	
	  /SAGESET:n    Display the System Agent-Aware Setting dialog box and
	                store the settings in the SETn registry key.
	
	  /SAGERUN:n    Runs in unattended mode using the System Agent-aware
	                settings in the SETn registry key.
	
	The following switches are valid in MS-DOS version 6.x, but are not valid in
	Windows 95. If you use these switches, they are ignored and no error message is
	generated:
	
	  /SKIPHIGH
	  /LCD
	  /BW
	  /B
	  /GO
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
