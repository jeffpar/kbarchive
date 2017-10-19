---
layout: page
title: "Q172576: Changing PW on FPNW Prompts for Fully Qualified NDS User Name"
permalink: /kb/172/Q172576/
---

## Q172576: Changing PW on FPNW Prompts for Fully Qualified NDS User Name

	Article: Q172576
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your password has expired and you try to change it when logging on to your
	computer, you could be prompted for a NetWare Directory Service (NDS)
	fully-qualified user name. You will not be prompted for this name if you are
	already logged on and it is not obvious what this name should be.
	
	CAUSE
	=====
	
	When you change the password on a Windows NT computer using NDS, Windows NT will
	search for the NDS information in the registry using the security ID (SID). If
	you have not completed the logon process, the SID is not known and this
	information has to be obtained from the user.
	
	RESOLUTION
	==========
	
	When you are prompted for this information you can click Cancel and then proceed
	to change the password once you've logged on to the computer. You can then use
	the SID of the current user to query the registry.
	
	Additional query words: prodnt novel ipx
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : x86
	
	=============================================================================
	
