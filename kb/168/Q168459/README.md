---
layout: page
title: "Q168459: XCLN: Preventing User Access to Exchange Profiles"
permalink: /kb/168/Q168459/
---

## Q168459: XCLN: Preventing User Access to Exchange Profiles

{% raw %}

	Article: Q168459
	Product(s): Microsoft Exchange
	Version(s): Win95:4.0;WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server administrators can prevent users from accessing their
	Exchange profile editor. In this way, administrators can prevent users from
	modifying individual Exchange profiles or adding new profiles to their
	workstations.
	
	MORE INFORMATION
	================
	
	To prevent users from changing or adding Exchange profiles:
	
	- Rename the file Mlcfg32.cpl to Mlcrg32.xxx (located in the
	  <Windows>\System subdirectory or System32 subdirectory).
	
	Users will no longer be able to change or add Exchange profiles by using the
	Control Panel Mail and Fax tool or by using the Services command on the Tools
	menu in Exchange Client.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : Win95:4.0;WinNT:4.0
	
	=============================================================================
	

{% endraw %}
