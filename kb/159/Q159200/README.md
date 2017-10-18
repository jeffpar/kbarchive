---
layout: page
title: "Q159200: Setpass.exe May Not Change a NetWare Password"
permalink: kb/159/Q159200/
---

## Q159200: Setpass.exe May Not Change a NetWare Password

	Article: Q159200
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a client that is running both a Microsoft Client Server Message
	Block (SMB) and Novell NetWare, NetWare Core Protocol (NCP) redirectors, the
	Setpass.exe utility provided with File and Print Services for NetWare (FPNW)
	will only change the password on the SMB network.
	
	You may see either of the following errors when attempting to change your
	Password:
	
	  Error Getting PDC Name
	
	-or-
	
	  Error Changing Password
	
	CAUSE
	=====
	
	Setpass.exe checks to see what type of client it is running on, and sets the
	corresponding password. It checks for the SMB client first. If both an SMB and
	NCP redirector are loaded, Setpass.exe will detect the SMB redirector, and only
	change the password on the SMB network.
	
	RESOLUTION
	==========
	
	To resolve this problem, run Setpass.exe with the -N switch. Doing this forces
	Setpass.exe to change the password on the NCP network. You can also use the -S
	switch to force Setpass.exe to change the password on the SMB network.
	
	The following are some examples on the use of Setpass.exe:
	
	  SETPASS -N <-- Changes the password on an NCP network.
	
	  SETPASS -S <-- Changes the password on an SMB network.
	
	Additional query words: prodnt redirector chgpass
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch
	Version           : WINNT:3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	
