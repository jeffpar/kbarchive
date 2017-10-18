---
layout: page
title: "Q124963: TCP/IP Fails with SMC Ultra Elite 32 EISA Adapter"
permalink: kb/124/Q124963/
---

## Q124963: TCP/IP Fails with SMC Ultra Elite 32 EISA Adapter

	Article: Q124963
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The TCP/IP protocol will not function with the SMC Ultra Elite 32 adapter if an
	EISA SCSI adapter is installed on your computer. Windows NT 3.5 boots without
	problems, but PING results in a "request time-out" message. If you boot
	Microsoft Windows or Microsoft Windows for Workgroups first, and then soft-boot
	Windows NT 3.5 (by pressing CTRL+ALT+DEL), this configuration will work as
	expected. It is only after you cold boot Windows NT 3.5 (turn the power off)
	that TCP/IP malfunctions. If no SCSI EISA adapter is present, TCP/IP works as
	expected.
	
	TEST
	----
	
	This problem was reproduced under the following configurations:
	
	- Dell 466Me, SMC Ultra Elite adapter, Adaptec 2742 or BUSLOGIC SCSI EISA
	  Adapter
	
	- ALR SMP Revolution Dual Pentium, BUSLOGIC SCSI EISA Adapter
	
	RESOLUTION
	==========
	
	Run EISA configuration and disable Bus Mastering on the SMC adapter. Install the
	SMC patch, SMC8232N.SYS (file size: 45,344, file date: 11/16/94). This patch can
	be found on SMC's BBS at (516) 434-3162. The file to look for is called
	CNT105.EXE, a self-extracting zip file.
	
	NOTE: If you use the Micronics EISA configuration utility to disable bus
	mastering, the option is labeled "ADAPTER TIMING" with choices of "PRIMARY" or
	"ALTERNATE". ALTERNATE is the required choice.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
