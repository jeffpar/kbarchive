---
layout: page
title: "Q151208: XCLN: Unable to Copy Mssp2_en.lex During Client Setup"
permalink: /kb/151/Q151208/
---

## Q151208: XCLN: Unable to Copy Mssp2_en.lex During Client Setup

	Article: Q151208
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempting an Exchange client setup on a computer that is using a
	shared copy of Office 95, the following error messages may be encountered:
	
	  Unable to copy mssp2_en.lex the file is currently in use.
	
	-OR-
	
	  Setup cannot create folder <Run from Server
	  Path>\msapps\proof\mssp2_en.lex
	
	MORE INFORMATION
	================
	
	Exchange does share a copy of this file with Office95. If the share where this
	is located, or the file itself, is marked read-only, the above error message
	will occur during the client setup.
	
	RESOLUTION
	==========
	
	To get around this error message make sure the file is not marked read- only,
	and if the file is on NTFS, change the permissions to Change for everyone and
	rerun setup.
	
	This solution will not work if any user has the .LEX file open. An alternate
	solution using either the Microsoft Exchange Setup Editor or Custom Setup, is to
	deselect Spelling as an option. This will not attempt to install spelling, but
	spell checking will still be an option on Windows NT or Windows 95 clients,
	because the registry entries still point to the shared directories on the
	Server. Spell checking will be available but will use the older .LEX file for
	spell checking.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
