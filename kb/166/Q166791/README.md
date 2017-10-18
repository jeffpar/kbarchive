---
layout: page
title: "Q166791: Windows Explorer Error: Unable to Copy Disk on This Drive"
permalink: kb/166/Q166791/
---

## Q166791: Windows Explorer Error: Unable to Copy Disk on This Drive

	Article: Q166791
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While using Windows Explorer to copy a disk, the following error is returned:
	
	  COPY DISK - error: unable to copy disk on this drive.
	
	CAUSE
	=====
	
	While the drive is selected in the left pane in Windows Explorer, there is an
	open handle to the drive to display its contents in the right pane. This causes
	a conflict between the two processes, as each tries to access the same
	resource.
	
	
	RESOLUTION
	==========
	
	Use one of the following workarounds:
	
	- Use My Computer instead of Windows Explorer to copy the disk.
	
	-or-
	
	- While in Windows Explorer, double click the My Computer icon in the left pane
	  and then use the floppy (A:) drive in the right pane to copy the disk.
	
	Either of these two procedures allows you to copy a disk, if the drive is not in
	use by any other process or application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
