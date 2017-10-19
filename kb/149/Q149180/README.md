---
layout: page
title: "Q149180: Dualboot of WinNT 3.51 and 4.0 Fails After SP Installation"
permalink: /kb/149/Q149180/
---

## Q149180: Dualboot of WinNT 3.51 and 4.0 Fails After SP Installation

	Article: Q149180
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0 SUR
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a service pack on a Windows NT 3.5 or 3.51 computer that also
	has Windows NT 4.0 installed, attempting to start Windows NT 4.0 may result in a
	failure to load the operating system. The failure may trigger a momentary error
	message and cause the system to restart immediately.
	
	CAUSE
	=====
	
	The Ntldr file for Windows NT 3.5x is incompatible with Windows NT 4.0. The
	installation of the service pack may replace the Ntldr file placed on the boot
	drive with a version included with the service pack.
	
	RESOLUTION
	==========
	
	To resolve this condition, manually replace the NTLDR file on the boot drive
	with the file of same name from the Windows NT 4.0 distribution set. This
	version is compatible with both operating systems. If the boot partition is
	NTFS, you may need to obtain access to the partition through the Windows NT 3.5x
	installation in order to replace the file.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0 SUR
	
	=============================================================================
	
