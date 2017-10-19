---
layout: page
title: "Q146674: XCLN: Win95 Registry Entries for MSMail Function Incorrectly"
permalink: /kb/146/Q146674/
---

## Q146674: XCLN: Win95 Registry Entries for MSMail Function Incorrectly

	Article: Q146674
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft Mail 3.x extensions to the Microsoft Exchange Windows 95 Client
	cannot be added to the Windows 95 registry under:
	
	  CURRENT_USER\Software\Microsoft\Mail
	
	because Windows 95 registry does not support them. When Windows 95 is installed,
	these entries are not created and if these extensions are added to the registry,
	they will not function correctly.
	
	STATUS
	======
	
	This is by design. Windows 95 will only support registry extensions for the
	Microsoft Exchange Clients installed on Windows 95. Windows NT will allow these
	registry extensions for both Microsoft Mail 3.x, Windows NT Mail, and the
	Microsoft Exchange Windows NT Client.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Windows 95 Client will read the Microsoft Mail 3.x INI
	file for the extension information. To get Microsoft Mail 3.x extensions to work
	in the Microsoft Exchange Windows 95 Client, add them to MSMAIL.INI or
	MSMAIL32.INI, not the registry. You should use WritePrivateProfileString() when
	adding Microsoft Mail 3.x extension entries for Windows NT, Windows 3.x, and
	Windows 95 clients to the MSMAIL(32).INI. The registry settings work in Windows
	NT because of Windows NT's IniFileMapping feature, which will read MSMAIL32.INI
	to a registry entry.
	
	Additional query words: Custom Messages Registry 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
