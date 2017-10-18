---
layout: page
title: "Q79092: File Manager Can Delete All Data on a Logical Drive"
permalink: kb/079/Q79092/
---

## Q79092: File Manager Can Delete All Data on a Logical Drive

	Article: Q79092
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using File Manager included with Windows 3.0 or 3.0a, it is possible to
	delete all data on a logical drive (either floppy or hard drive).
	
	NOTE: This problem does not occur in later versions of Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	NOTE: The following steps will delete all the data on your logical drive. Be sure
	to back up your drive before performing these steps.
	
	1. Run File Manager and select the [..] entry in a directory one level down from
	  the root.
	
	2. From the File menu, choose Delete. Because [..] always refers to the parent
	  directory, File Manager will interpret this as a request to delete everything
	  on a logical drive, proceeding to delete all files and all subdirectories,
	  and even IO.SYS and MSDOS.SYS if these exist.
	
	Reasons for Behavior
	--------------------
	
	This behavior can seemingly "spontaneously" happen if the following circumstances
	apply:
	
	1. [..] was inadvertently highlighted prior to exercising the Delete command.
	
	2. Confirm On Delete and Confirm On Subtree Delete are not selected in the
	  dialog box that appears when you choose Confirmation from the Options menu.
	
	  File Manager would otherwise generate warnings about the deletions that would
	  occur.
	
	Safely Deleting All the Files in a Directory
	--------------------------------------------
	
	From the File menu, choose Select All to select all of the files in a directory.
	This command will not select the [..] entry.
	
	Additional query words: 3.00 3.00a double dots
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
