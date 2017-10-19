---
layout: page
title: "Q159499: XCLN: Using Microsoft Mail Forms with Exchange"
permalink: /kb/159/Q159499/
---

## Q159499: XCLN: Using Microsoft Mail Forms with Exchange

	Article: Q159499
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Electronic Forms created in Microsoft Mail version 3.x can be used from within
	the Microsoft Exchange client, but cannot be opened or modified by the Microsoft
	Exchange Electronic Forms Designer nor "migrated" to a native Microsoft Exchange
	Electronic Form.
	
	MORE INFORMATION
	================
	
	In order for Microsoft Mail Electronic Forms to be accessible from the Microsoft
	Exchange client, there must be an Msmail.ini and a Shared.ini file (created by
	the Microsoft Mail client) on the client computer with the proper pointers to
	the locations of the Microsoft Mail forms.
	
	In order to access Microsoft Mail forms from a Microsoft Exchange client computer
	that did not have the Microsoft Mail client installed prior to upgrading, an
	Msmail.ini and a Shared.ini file must be copied from a known working computer
	and/or the existing .ini files must be manually modified with the proper
	pointers.
	
	If the Msmail.ini and Shared.ini have the proper entries, you can access the
	Microsoft Mail forms by clicking "Compose/ ......" You cannot access the forms
	by clicking New Form on the Compose menu, nor will a menu selection appear under
	the Compose option (as do Exchange Forms installed in a Public Folder).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
