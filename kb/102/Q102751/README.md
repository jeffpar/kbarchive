---
layout: page
title: "Q102751: PC DOS: Err Msg: The Folder Is Busy..."
permalink: /kb/102/Q102751/
---

## Q102751: PC DOS: Err Msg: The Folder Is Busy...

{% raw %}

	Article: Q102751
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a folder in versions 3.0, 3.0b, and 3.2 of Microsoft
	Mail for PC Networks, MS-DOS workstation, the following error message may
	appear:
	
	  The folder is busy. Please try again. If the problem persists,
	  please contact the system administrator
	
	CAUSE
	=====
	
	A folder may be left locked open for several reasons, such as a hardware
	failure. A locked folder cannot be deleted, sorted, or compressed. These locks
	are called semaphore locks, and are used to prevent simultaneous access to
	folders.
	
	RESOLUTION
	==========
	
	The FOLDCOMP utility (FOLDCOMP.EXE) is used to recover disk space from private
	folders stored on a user's local PC (rather than on the server). Space will only
	be recovered if mail has been deleted since the last folder compress with
	FOLDCOMP.
	
	You can use the FOLDCOMP utility's -S parameter to override and reset the
	semaphore locks on folders. You should only use this parameter if there is a
	persistent problem with deleting, re-sorting, or compressing the folders. You
	can use the -S parameter to unlock a folder in this state. However, you should
	take care not to reset the lock while the folder is actually in use.
	
	Usage
	-----
	
	Change to the directory where the private folders are stored. Run FOLDCOMP.EXE.
	
	Example
	-------
	
	The following command will run the FOLDCOMP utility on the folders in the current
	directory, resetting the semaphore locks and using the sort order of the
	database on drive M:
	
	  foldcomp -dm -s
	
	NOTE: FOLDCOMP.EXE will not except a path statement on the command line. The
	mapped drive must be in the FOLDER\PUB directory or the file FOLDCOMP.EXE must
	be run in the FOLDER\PUB directory in order to work.
	
	MORE INFORMATION
	================
	
	You can find the FOLDCOMP.EXE file on the following Microsoft Mail for PC
	Networks disks:
	
	  Mail Version       Disk
	  -------------------------------------------------------------------
	
	  2.1                Disk 1 (3.5, 5.25)
	  3.0a, 3.0b         Disk 3 (3.5, 5.25)
	  3.2                Disk 2 (3.5, 5.25)
	
	Additional query words: 3.00 3.00b 3.20 errmsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300b
	Version           : WINDOWS:3.0,3.0b,3.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
