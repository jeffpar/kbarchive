---
layout: page
title: "Q84170: Re-Creating the StartUp Group in Windows 3.1"
permalink: /kb/084/Q84170/
---

## Q84170: Re-Creating the StartUp Group in Windows 3.1

	Article: Q84170
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The StartUp group is a new group that is added to the Program Manager during
	Windows version 3.1 installation.
	
	If you place a program item for an application in the StartUp group, the
	application starts each time Windows 3.1 is loaded.
	
	MORE INFORMATION
	================
	
	If you delete the StartUp group and need to re-create it, follow these
	procedures:
	
	NOTE: If you had any program icons in the StartUp group that were corrupt when
	the group was deleted, they are not recovered. You need to add them manually.
	
	1. From the File menu in Program Manager, choose New to open the New Program
	  Object Window.
	
	2. Select Program Group, then press ENTER.
	
	3. In the Program Group Properties Window, type the following in the Description
	  box:
	
	  StartUp
	
	  NOTE: If you leave this box empty, the StartUp Group does not function
	  correctly (nothing starts).
	
	4. On the Group File line, type the following
	
	  [drive]:\[directory]\startup.grp
	
	  where [drive] is the drive letter that Windows 3.1 has been loaded on and
	  [directory] is the name of the Windows directory.
	
	5. Press ENTER to complete re-creating the StartUp group.
	
	REFERENCES
	==========
	
	"Microsoft Windows User's Guide," version 3.1
	
	Additional query words: 3.10 3.11 rebuild recreate recreating reproducing
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
