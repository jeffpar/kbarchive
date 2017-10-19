---
layout: page
title: "Q118324: Choosing Network Icon Hangs System with Access 1.1 Installed"
permalink: /kb/118/Q118324/
---

## Q118324: Choosing Network Icon Hangs System with Access 1.1 Installed

	Article: Q118324
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the Network icon in Control Panel, your system stops
	responding (hangs).
	
	CAUSE
	=====
	
	This problem can occur if Microsoft Access version 1.1 has been installed after
	Windows for Workgroups version 3.11.
	
	Microsoft Access 1.1 ships with an older version of the WFWNET.DRV file (dated
	5/28/93), which replaces the Windows for Workgroups WFWNET.DRV file during the
	Access Setup. This version does not support the dialog boxes used in Windows for
	Workgroups 3.11.
	
	RESOLUTION
	==========
	
	Follow the steps below to reinstall the Windows for Workgroups 3.11 version of
	the WFWNET.DRV file.
	
	1. Exit Windows for Workgroups.
	
	2. At the MS-DOS prompt, change to the Windows SYSTEM subdirectory.
	
	3. Use the MS-DOS RENAME command to rename the WFWNET.DRV file dated 5/28/93 to
	  WFWNET.OLD:
	
	  rename wfwnet.drv wfwnet.old
	
	4. Use the MS-DOS or Windows for Workgroups EXPAND.EXE command to expand the
	  Windows for Workgroups WFWNET.DR_ file to the Windows SYSTEM subdirectory.
	  (WFWNET.DR_ is located on Disk 7 of the 3.5-inch disk set and Disk 8 of the
	  5.25-inch disk set.) For example, if the disk containing WFWNET.DR_ is in
	  drive A and drive C contains your Windows directory, type the following
	  command:
	
	  expand a:\wfwnet.dr_ c:\windows\system\wfwnet.drv
	
	Additional query words: icon hourglass freeze freezes froze frozen hung hangs 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
