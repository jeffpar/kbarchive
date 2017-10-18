---
layout: page
title: "Q119431: SHARE Internal Error: RSC: SFT Not Found in SFT List"
permalink: kb/119/Q119431/
---

## Q119431: SHARE Internal Error: RSC: SFT Not Found in SFT List

	Article: Q119431
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.20,3.21,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.2, 3.21, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs while SHARE.EXE is loaded:
	
	  RSC: SFT NOT FOUND IN SFT LIST
	  SHARE INTERNAL ERROR
	
	CAUSE
	=====
	
	This error is caused by programs that attempt to gain access to the System File
	Tables (SFT), bypassing SHARE in the process. This problem occurs most often
	with small peer-to-peer network operating systems.
	
	SHARE.EXE requires continuous communication between the sharing information
	tables that it maintains and the tables that the MS-DOS kernel maintains. SHARE
	adds tables that link SFTs to paths and locks records for all open files. When
	it searches the SFT and finds an entry for which it has no entry in its own
	tables, the above error is generated and the system may stop responding (hang)
	because SHARE is in an infinite loop.
	
	RESOLUTION
	==========
	
	If you do not use Windows, you must choose between SHARE and the other program
	that wants to have access to the SFT. No workaround is available.
	
	For information about this error in Windows for Workgroups, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q115884 Err Msg in WFWG 3.11 w/LANtastic 5.x: RFC:SFT Not in SFT List.
	
	Additional query words: 6.20 lock sharing nos lan tastic rsc:sft lantastic Artisoft machine workstation node wfwg wfw win31
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.20,3.21,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
