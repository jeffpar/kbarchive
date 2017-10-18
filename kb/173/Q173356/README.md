---
layout: page
title: "Q173356: XCLN: Protecting an OST File"
permalink: kb/173/Q173356/
---

## Q173356: XCLN: Protecting an OST File

	Article: Q173356
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no way to password-protect an offline folder (OST - Offline Folder
	Storage - .Ost file), as you can with a .Pst file. Nonetheless, the .Ost file is
	safe because it is specific to the particular Exchange user profile. The
	Exchange user profile is in the registry under HKEY_CURRENT_USER and cannot be
	accessed without logging on as the proper user.
	
	MORE INFORMATION
	================
	
	Under Windows 95, users can customize their preferences and desktop settings.
	Windows switches to your personal settings when you log on. This option can be
	found by opening Control Panel, double-clicking the Passwords icon, and clicking
	the User Profiles tab.
	
	(You can also do this with the Roving Users setup in Windows 95. If the option
	"All users of this PC use the same preference and desktop settings" is selected
	from the Control Panel, Password, User Profile tab, then Windows defaults to the
	default user profile, and there is no protection of the OST file. Any user will
	have access to the offline folder.)
	
	Under Windows NT Workstation 3.51 and 4.0, you must log on to either the domain
	or the local computer. You are not given a default profile to use. The OST file
	is protected through the Windows profile as long as the client is not using the
	default user profile. However, if the user does not log on using his or her
	Windows username and password, the user will not be able to access his or her
	OST file.
	
	For more information about OST and PST files, see the following article in the
	Microsoft Knowledge Base:
	
	  Q161889 XCLN: OST and PST Quick Reference
	
	Additional query words: Win95
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT kbExchange500Win95
	Version           : WINDOWS:5.0
	Solution Type     : kbfix
	
	=============================================================================
	
