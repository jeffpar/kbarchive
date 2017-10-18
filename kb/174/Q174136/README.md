---
layout: page
title: "Q174136: Err Msg: Not Enough Disk Space"
permalink: kb/174/Q174136/
---

## Q174136: Err Msg: Not Enough Disk Space

	Article: Q174136
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the full version of MSN, The Microsoft Network, you may
	receive the following error message:
	
	  Not enough disk space.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- The hard disk is compressed using a third-party program.
	
	- There is less than 30 megabytes (MB) of disk space available on the hard
	  disk.
	
	- There are too many files and folders in the root folder of the hard disk.
	
	- The Msnver.txt file is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this behavior, try the following sets of instructions in the order
	presented. If the first does not resolve your problem, continue on to the next
	set of instructions until you find a resolution.
	
	Uncompress Your Disk
	
	If your disk is compressed, consult the compression program's instructions or
	manufacturer to uncompress the disk. Test to determine if the behavior has been
	resolved. If the behavior is resolved, skip the remaining steps.
	
	Verify that you have more than 30 MB of free disk space available for the
	installation.
	
	1. Double-click My Computer on the desktop, right-click the drive on which MSN
	  is installed, and then click Properties.
	
	2. On the General tab, verify that there is 30 MB of free space available. If
	  there is less than 30 MB of free space available, continue on to the next
	  step.
	
	3. Click Start, point to Find, and then click "Files Or Folders".
	
	4. Type *.tmp in the Named box, and then click Find Now.
	
	5. On the Edit menu, click Select All.
	
	6. On the File menu, click Delete, and then close the Find dialog box.
	
	7. On the desktop, right-click the Recycle Bin, and then click Empty Recycle
	  Bin. If you are prompted to confirm that you want to delete the files, click
	  Yes.
	
	8. Test to determine if the issue has been resolved. If the issue is resolved,
	  skip the remaining steps. If the issue is not resolved, continue to the next
	  step.
	
	Determine if there are more than 512 entries in the root folder of the hard disk
	on which the operating system is installed.
	
	1. Double-click My Computer on the desktop.
	
	2. Double-click the drive on which the operating system is installed.
	
	3. Look at the lower-left corner of the window. The number of objects in the
	  root folder is displayed.
	
	4. For information about how to determine if there are more than 512 entries in
	  the root folder of the hard disk, please see the following article in the
	  Microsoft Knowledge Base:
	
	  Q120138 <A0>Errors Creating Files or Folders in the Root Directory.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	
