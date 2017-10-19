---
layout: page
title: "Q131676: PC NTMMTA: Maximum Number of Instances Running as a Service"
permalink: /kb/131/Q131676/
---

## Q131676: PC NTMMTA: Maximum Number of Instances Running as a Service

	Article: Q131676
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Multitasking MTA for Windows NT, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Multitasking MTA for Windows NT (NT MMTA) running as a
	Service is limited to seven instances per machine. This limit is related to the
	number of drive letters available on the machine. Each instance of the NT MMTA
	takes three drive letters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.5 of the Microsoft
	Mail Multitasking MTA for Windows NT. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	For a machine that has drives A: through E: reserved for other devices (for
	example, floppy disk drives, CD ROMs, etc.), there are 21 drives left. The
	following are examples of uses for these drives:
	
	  Instance        1   2   3   4   5   6   7
	  Home Drive      f   i   l   o   r   u   x
	  Dynamic Drives  gh  jk  mn  pq  st  vw  yz
	
	Two dynamic drives are used; one for sending mail, and one for receiving mail.
	This is the same as the DynamicDrives option in the MS-DOS and OS/2 versions of
	the External program.
	
	NOTE: When you use a single postoffice instance, it will map only one drive.
	
	
	Additional query words: 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMailMMTA350NT
	Version           : :3.5
	
	=============================================================================
	
