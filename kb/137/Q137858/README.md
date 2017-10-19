---
layout: page
title: "Q137858: Network Failure Using the SMC EtherCard Plus Series NIC"
permalink: /kb/137/Q137858/
---

## Q137858: Network Failure Using the SMC EtherCard Plus Series NIC

	Article: Q137858
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install an SMC EtherCard Plus series network interface card (NIC) on
	your computer and the SMC NDIS 3 driver (SMC8000W.386) in Windows for Workgroups
	3.11, you may experience one or more of the following network problems:
	
	- Your network connections get disconnected sporadically.
	
	- You are unable to PING any network hosts.
	
	- You are unable to connect to other computers on the network.
	
	The symptoms above occur with the following SMC NIC models installed on your
	computer:
	
	- WD8003E
	
	- WD8003E/A
	
	- WD8003ET/A
	
	- WD8003EB
	
	- WD8003EBT
	
	- WD8003EP
	
	- WD8003S
	
	- WD8003SH
	
	- WD8003ST/A
	
	- WD8003W
	
	- WD8003W/A
	
	- WD8003WT
	
	- WD8013EP
	
	- WD8013EW
	
	- WD8013W
	
	CAUSE
	=====
	
	You are using the faulty SMC8000W.386 driver from the Windows NT 3.5 or 3.51
	Server compact disc.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Obtain ETHER.EXE, which contains a new version of SMC8000W.386, from one of
	  the following SMC electronic services:
	
	  - SMC forum (GO SMC) on CompuServe
	  - Internet: info.smc.com
	  - SMC Bulletin Board Service (BBS) at (516) 434-3162
	
	2. Ensure the SMC8000W.386 driver file has a file date of 4/28/95 and file size
	  of 42,589 bytes.
	
	3. Replace the existing driver file in the \WINDOWS\SYSTEM directory with the
	  new SMC8000W.386 file.
	
	4. Restart Windows for Workgroups 3.11.
	
	The SMC products discussed here are manufactured by Standard Micro Systems, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: prodnt 3.11 wfw wfwg winnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:; winnt:3.5,3.51
	
	=============================================================================
	
