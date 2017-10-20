---
layout: page
title: "Q164702: WINDISK Stops Responding During Initialization"
permalink: /kb/164/Q164702/
---

## Q164702: WINDISK Stops Responding During Initialization

{% raw %}

	Article: Q164702
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a SCSI system (no IDE hard disk drive), connect an ATAPI powerdrive on either
	IDE controller. With no media in the drive, start Windows NT and run Disk
	Administrator. Disk Administrator will load. Click View and then click Volumes.
	Disk Administrator will stop responding and bring up Dr. Watson exception error.
	
	CAUSE
	=====
	
	A flaw in the removable media *DRAW* handling code of WINDISK shows up when the
	removable media is selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
