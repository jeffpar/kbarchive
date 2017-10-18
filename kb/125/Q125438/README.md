---
layout: page
title: "Q125438: Network Icon in Control Panel Does Not Work"
permalink: kb/125/Q125438/
---

## Q125438: Network Icon in Control Panel Does Not Work

	Article: Q125438
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the Network icon in Control Panel, an hourglass appears
	and immediately disappears, but the Network dialog box is not displayed.
	
	CAUSE
	=====
	
	This behavior can occur if you have an old or damaged WFWNET.DRV file in either
	the Windows directory or the Windows\SYSTEM subdirectory.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. If there is a WFWNET.DRV file in the Windows directory, rename it to some
	  other name (such as WFWNET.OLD).
	
	2. If there is a WFWNET.DRV file in the Windows\SYSTEM subdirectory, rename it
	  to some other name (such as WFWNET.OLD).
	
	3. If your original Windows for Workgroups disks are 3.5-inch, 1.44 MB disks,
	  insert disk 7 in the appropriate disk drive. If your disks are 5.25-inch, 1.2
	  MB disks, insert disk 8 in the appropriate disk drive.
	
	4. Type the following line at an MS-DOS command prompt
	
	  expand <fdrive>:\wfwnet.dr_
	  <hdrive>:\<windir>\system\wfwnet.drv
	
	  where <fdrive> is the drive containing the original Windows for
	  Workgroups disk, <hdrive> is the hard disk where Windows for Workgroups
	  is installed, and <windir> is the directory in which Windows for
	  Workgroups is installed. For example, if the original Windows for Workgroups
	  disk is in drive A, and Windows for Workgroups is installed in the WINDOWS
	  directory on drive C, type the following line
	
	  expand a:\wfwnet.dr_ c:\windows\system\wfwnet.drv
	
	  and then press ENTER.
	
	MORE INFORMATION
	================
	
	The WFWNET.DRV file supplies the network dialog boxes for Windows for
	Workgroups. If this file is old or damaged, a Network dialog box will not be
	displayed when you choose the Network icon in Control Panel. Network services
	will not be affected.
	
	Additional query words: WFW windows 3.11 upgrade
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
