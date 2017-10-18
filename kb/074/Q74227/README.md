---
layout: page
title: "Q74227: Updating to Windows 3.0a on a Network"
permalink: kb/074/Q74227/
---

## Q74227: Updating to Windows 3.0a on a Network

	Article: Q74227
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Follow the procedure in this article to upgrade a copy of Microsoft Windows 3.0,
	which is expanded in a share directory, to Windows 3.0a:
	
	MORE INFORMATION
	================
	
	1. Run File Manager and ensure that you can read and write to all the Windows
	  files by selecting all the Windows files, choosing Change Attributes from the
	  File menu, and clearing the Read Only check box. The Windows files are in the
	  WINDOWS directory. There should be about 284 (or more) files.
	
	2. Follow steps 3 through 9 on page 553 in the "Microsoft Windows User's Guide"
	  on creating an EXPALL.BAT file.
	
	3. Insert the Windows 3.0a Disk 1 in drive A and type the following:
	
	  EXPALL.BAT A:*.* <Windows network drive and directory>
	
	  Repeat this procedure for all the new Windows disks.
	
	4. Make all the files read-only in the WINDOWS directory.
	
	You do not need to update the individual user directories, so the upgrade is
	done.
	
	This information applies to Microsoft Windows versions 3.00 and 3.00a. This does
	not apply to later versions of Windows.
	
	Additional query words: 3.0 3.00 3.0a 3.00a novell 3com banyan lan manager
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
