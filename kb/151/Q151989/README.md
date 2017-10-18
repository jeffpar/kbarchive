---
layout: page
title: "Q151989: List of Documentation Errors in Pan Chinese WinNT Start Here"
permalink: kb/151/Q151989/
---

## Q151989: List of Documentation Errors in Pan Chinese WinNT Start Here

	Article: Q151989
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation, Pan Chinese Edition, version 4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists known documentation errors in the Pan Chinese Windows NT
	Start Here manual.
	
	The following known documentation errors are described in this article:
	
	- Page 66: Beginning Installation
	
	- Page 76: Previous Operating System and Installation Directory Migrate
	  Settings Table
	
	MORE INFORMATION
	================
	
	Page 66: Beginning Installation
	-------------------------------
	
	This section states the following:
	
	  Memory 12-MB RAM minimum for x86-based systems; 16-MB recommended
	
	This section should state:
	
	  Memory 16-MB RAM minimum for x86-based systems; 24-MB recommended
	
	Page 76: Previous Operating System and Installation Directory Migrate
	
	Settings Table
	--------------
	
	The "Previous Operating System and Installation Directory Migrate Settings" table
	implies that you can migrate to Pan Chinese Windows NT from Windows NT or
	Windows 3.x. This is not the case. If you install Pan Chinese Windows NT to the
	same folder as Windows NT or Windows 3.x, the following error message occurs:
	
	  STOP: 0x00000001E(0xC0000005,0x00000000,0x00000014)
	  KMODE_EXCEPTION_NOT_HANDLED*** Address a002339e has base at a000000-
	  win32k.sys
	
	  CPUID;GeniuneIntel 5.2.b irgl:1f SYSVER 0xf0000565
	
	For additional information about installation, please see the following article
	in the Microsoft Knowledge Base:
	
	Q166425Pan Chinese WinNT 4.0 Installation Question & Answer
	
	Additional query words: 4.00 prodnt
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbHLangChinesePan kbWinNT400search
	Version           : 4.0
	
	=============================================================================
	
