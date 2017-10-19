---
layout: page
title: "Q128414: Failure during Setup of Localized Version of NT"
permalink: /kb/128/Q128414/
---

## Q128414: Failure during Setup of Localized Version of NT

	Article: Q128414
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Upgrading an installation of the U.S. version of Windows NT to a version
	localized for another country may render the Windows NT installation unusable,
	and is not supported.
	
	MORE INFORMATION
	================
	
	If Setup finds Windows NT is already installed on your computer, when you
	install a localized version of Windows NT, Setup prompts you to either upgrade
	the existing version or to perform a separate installation. If you choose to
	upgrade the existing U.S. version, you may render the Windows NT installation
	unusable.
	
	In one case, trying to "upgrade" from US version to the Japanese version resulted
	in the following trap error:
	
	  C000007B ( STATUS_INVALID_IMAGE_FORMAT), The application or DLL
	  DosDevices\D:\WinNT35\userfont.fon is not a valid Windows NT image. Please
	  check this against your installation diskette.
	
	To correct this problem, reinstall Windows NT to a new directory.
	
	Localized versions of NT ship with the Microsoft Developer Network CD-ROM (MSDN)
	disk.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : WinNT:3.5,4.0
	
	=============================================================================
	
