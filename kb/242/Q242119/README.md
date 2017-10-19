---
layout: page
title: "Q242119: Unable to Lock for Exclusive Use Message in Disk Administrator"
permalink: /kb/242/Q242119/
---

## Q242119: Unable to Lock for Exclusive Use Message in Disk Administrator

	Article: Q242119
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to remove a partition, stripe set, or mirror set in Disk
	Administrator, you may receive the following error message:
	
	  The drive cannot be locked for exclusive use.
	
	CAUSE
	=====
	
	This behavior can occur if a file is open on the volume that you are trying to
	work with. A file is open when:
	
	- A paging file is located on the volume.
	
	- A program that was started from the volume is still running.
	
	- A program that is running has loaded a .dll file from the volume.
	
	- A program has a file open on the volume.
	
	- A program's current folder is on the volume.
	
	This behavior can also occur even when there are no files open on the volume
	because a service that is running on the computer may place a lock on the
	volume.
	
	RESOLUTION
	==========
	
	To resolve this issue, perform the following steps, and try to gain access to
	the volume after each step, and if the issue is resolved, do not finish the
	remaining steps:
	
	1. Make sure that all files and programs are closed.
	
	2. Stop all services except those required for the most basic computer
	  operation.
	
	3. If you were running Microsoft Mail or Microsoft Schedule+, start Mail, and
	  then, on the File menu, click Exit and Sign Out to stop any hidden processes.
	
	4. If you were running Microsoft Outlook, start Task Manager, and then stop the
	  Outlook.exe process if it appears in the list on the Processes tab.
	
	5. If you run a Systems Management Server (SMS) client, use the Kill.exe program
	  in the Psstools folder on the Systems Management Server CD-ROM, or use
	  Process Viewer in the Microsoft Windows NT Resource Kit to stop the following
	  processes:
	
	  APPCTL32
	  PCMWIN32
	
	6. If there is a paging file on the volume, define a paging file of sufficient
	  size on another volume, remove the one on the volume where you are trying to
	  gain access, and then restart the computer.
	
	7. If you log on to the computer with a logon script containing an SMS batch
	  file, remove the batch file from the logon script, and then log on again.
	
	8. To make the volume inaccessible to any processes and to ensure that Disk
	  Administrator can lock the volume:
	
	  a. Start Disk Administrator.
	
	  b. On the Tools menu, click Assign Drive Letter.
	
	  c. Click "Do not assign a drive letter", and then click OK.
	
	  d. On the Partition menu, click Commit Changes Now.
	
	  e. Quit Disk Administrator, and then restart the computer.
	
	Additional query words: admin extended logical partition thread
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
