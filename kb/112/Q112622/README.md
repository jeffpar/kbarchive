---
layout: page
title: "Q112622: WFWG Err Msg: The Compressed Disk...Is Not Set Up Correctly"
permalink: /kb/112/Q112622/
---

## Q112622: WFWG Err Msg: The Compressed Disk...Is Not Set Up Correctly

	Article: Q112622
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Windows for Workgroups 3.11, you receive the following
	error message:
	
	  32-bit File System
	
	  The compressed disk on this computer is not currently set up to use 32-bit
	  file access. You can enable 32-bit file access for this disk by using Control
	  Panel:
	
	  1. Choose the 386 Enhanced icon.
	
	  2. Choose Virtual Memory, and then choose Change.
	
	  3. Choose OK.
	
	This message occurs if compression is enabled after Windows for Workgroups is set
	up. Following steps 1-3 should correct the problem. If the message reappears
	after you follow the steps, your RMM.D32 file may be corrupted or missing from
	the Windows SYSTEM subdirectory.
	
	RESOLUTION
	==========
	
	To correct this problem, re-expand RMM.D32 and place it in the Windows SYSTEM
	subdirectory.
	
	RMM.D3_ can be found on Disk 6 of the 3.5-inch disk set and Disk 8 of the
	5.25-inch disk set.
	
	MORE INFORMATION
	================
	
	Windows for Workgroups requires RMM.D32 to use 32-bit file access with either a
	non-32-bit disk access volume or with a compressed volume. It is used by the
	system to route VFAT disk I/O request packets through the real-mode MS-DOS
	driver chain for these volumes and by default is installed into the Windows
	SYSTEM subdirectory.
	
	Windows for Workgroups replaces *BLOCKDEV with IOS.386 and VXDLDR.386 in the
	SYSTEM.INI file when the above volumes are detected. IOS.386 then uses
	VXDLDR.386 to call RMM.D32 for 32-bit file access. If the disk volumes are
	capable of 32-bit disk access and are not compressed, IOS.386 and VXDLDR.386 are
	not placed in the SYSTEM.INI file and therefore RMM.D32 is never loaded.
	
	REFERENCES
	==========
	
	
	"Microsoft Windows for Workgroups Resource Kit Addendum for Operating System
	version 3.11"
	
	Additional query words: dblspace 3.11 error msg compress vfat bfa bda doublespace stacker superstor
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
