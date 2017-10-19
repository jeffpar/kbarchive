---
layout: page
title: "Q96509: Installing OS/2 on EISA Gateway 486 with Ultrastore 24F"
permalink: /kb/096/Q96509/
---

## Q96509: Installing OS/2 on EISA Gateway 486 with Ultrastore 24F

	Article: Q96509
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	SYMPTOMS
	========
	
	After getting the right bid file from Ultrastore and putting it on the OS/2
	Install Disk, a Gateway 486/33 machine hangs after the initial OS/2 operating
	system banner.
	
	CAUSE
	=====
	
	The EISA configuration program for the Gateway computer incorrectly detects the
	amount of memory that is in the system.
	
	RESOLUTION
	==========
	
	To correct the problem, specify the amount of memory in the system in EISA
	Config, then reboot.
	
	MORE INFORMATION
	================
	
	The Ultrastore 24F is an unsupported SCSI controller for Microsoft OS/2 1.30.1.
	However, Ultrastore has a .BID file for it on their bulletin board. The bulletin
	board phone number is (510) 623-9091.
	
	You must obtain the ULTRA24.BID file from the Ultrastore BBS. You must rename
	this file to BOOTBID.BID and place it on the OS/2 Install A disk. After doing
	this, you can boot with this disk and proceed with the rest of the OS/2
	installation.
	
	You will need to use the EISA configuration utility from Gateway to configure the
	Ultrastore controller since it is an EISA device. At this time, manually insert
	the correct amount of memory to avoid the "hanging" problem.
	
	This is an unsupported configuration, and thus should be used with caution.
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
