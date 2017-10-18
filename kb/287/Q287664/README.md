---
layout: page
title: "Q287664: W32.FunLove.4099 Virus Compromises Server Security"
permalink: kb/287/Q287664/
---

## Q287664: W32.FunLove.4099 Virus Compromises Server Security

	Article: Q287664
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbvirus
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The W32.FunLove.4099 virus can attack the Windows NT file security system and
	infects the Ntoskrnl.exe file. This virus can give all users full access to each
	file, regardless of its protection, when the computer is booted with the
	modified kernel file. This allows a guest account to read and modify all files,
	including files that are typically accessible only by administrators.
	
	MORE INFORMATION
	================
	
	The W32.FunLove.4099 virus infects a computer when a user runs a program that is
	infected with the virus. If an administrative user runs an infected program, the
	virus immediately gains access to that computer and attempts to install itself
	as a service on the computer.
	
	For the W32.FunLove.4099 virus to succeed in the attack, it needs administrative
	rights on a computer that is running Windows NT Server or Windows NT Workstation
	during the initial infiltration, which occurs when an infected program is ran by
	an administrative user on the computer. After the administrator or someone with
	equivalent rights logs on, the W32.FunLove.4099 virus has the opportunity to
	patch the Ntoskrnl.exe file (this is the Windows NT kernel file that is located
	in the Winnt\System32 folder).
	
	The virus modifies two bytes in a security function named SeAccessCheck that is
	part of Ntoskrnl.exe. Therefore, the virus can give full access to all users for
	every file, regardless of the file's protection, when the computer is booted
	with the modified kernel. This means that a guest can obtain administrative
	access to files on the computer. This poses a security risk because the virus
	can spread, regardless of the actual access restrictions on the particular
	computer.
	
	After the virus has infected the computer, no data can be considered protected
	from any user until after the virus has been removed from the computer.
	
	Virus Removal
	-------------
	
	For information about this virus and instructions about removing it, visit the
	following Symantec web site:
	
	  http://service1.symantec.com/sarc/sarc.nsf/html/W32.Funlove.4099.html
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbvirus 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
