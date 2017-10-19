---
layout: page
title: "Q145952: Event ID 26 Appears If Large File Transfer Fails"
permalink: /kb/145/Q145952/
---

## Q145952: Event ID 26 Appears If Large File Transfer Fails

	Article: Q145952
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to transfer large amounts of data or install a disk I/O
	intensive application through the network, the following system event appears in
	the Event Viewer:
	
	  Event ID: 26
	  Description: System Process - Lost Delayed-Write Data : The system was
	  attempting to transfer file data from buffers to <file path>.
	
	CAUSE
	=====
	
	This problem occurs due to a defective network hardware, such as a hub or cable.
	
	RESOLUTION
	==========
	
	To troubleshoot this behavior:
	
	1. Copy another file through the network (preferably between two computers in
	  close proximity) and check the Event Viewer.
	
	2. Connect the two computers to the same hub. Copy the file again.
	
	3. If you have enough hard disk space, install the disk I/O intensive
	  application directly on the Windows NT Server, instead of over the network.
	
	4. Disable any "filter" drivers, such as quota management, anti-virus, or
	  open-file software.
	
	If Event ID 26 appears again in step 1 and the file transfer fails in step 2 and
	the installation in step 3 completes successfully, replace the hub and cable,
	and repeat the steps above.
	
	
	Additional query words: tp
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
