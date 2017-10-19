---
layout: page
title: "Q135918: RAS Does Not Function on IBM PS/Valuepoint 466DX2 Computers"
permalink: /kb/135/Q135918/
---

## Q135918: RAS Does Not Function on IBM PS/Valuepoint 466DX2 Computers

	Article: Q135918
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to use the Windows NT Remote Access (RAS) AutoDetect feature to
	detect your modem on an IBM PS/Valuepoint 466DX2 Type 6384 or 6387 computer, the
	auto-detection fails. After you manually configure RAS for the correct modem and
	you try to dial a RAS server, RAS fails with the error message:
	
	  Error 692: Hardware failure in port or attached device.
	
	
	CAUSE
	=====
	
	Your computer system BIOS is outdated.
	
	According to IBM Technical Support, BIOS revisions prior to revision 68 have
	serial port problems that can cause the serial port initialization to fail
	during a warm boot (when you press CTRL+ALT+DEL) of your computer, thus
	rendering the serial ports inoperable. However, if you reboot your computer by
	turning it off and on (cold boot), the problem still exists.
	
	To check your computer system BIOS revision level:
	
	1. Cold boot your computer and immediately press the F1 key.
	
	  The CMOS Setup screen appears.
	
	2. Find the six-digit BIOS version number at the bottom of the screen.
	
	  The last two digits represent the system BIOS revision level.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade your computer system BIOS to revision level 68
	or later.
	
	If your IBM PS/Valuepoint 466DX2 computer has a flash-upgradable BIOS, download
	the L6JT68A.EXE file from the IBM BBS to obtain BIOS revision 68.
	
	For additional information, contact IBM at:
	
	  BBS: (919) 517-0001
	  Technical Support: (800) 772-2227
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
