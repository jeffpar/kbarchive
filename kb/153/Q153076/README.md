---
layout: page
title: "Q153076: XCLN: Err Msg: MAPI Was Unable to Load Emsmdb.dll"
permalink: /kb/153/Q153076/
---

## Q153076: XCLN: Err Msg: MAPI Was Unable to Load Emsmdb.dll

{% raw %}

	Article: Q153076
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears:
	
	  The set of folders could not be opened. An unexpected error has occurred.
	  MAPI was unable to load the information service Emsmdb.dll. Be sure the
	  service is correctly installed and configured.
	
	CAUSE
	=====
	
	The error message references Emsmdb.dll, but the correct DLL, Emsmdb32.dll, does
	reside in the <Winroot>\System directory. The wrong file is being
	referenced because the Wsock32.dll is not the right version; Wsock32.dll
	therefore references Emsmdb.dll instead of Emsmdb32.dll.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Replace Wsock32.dll with the Windows 95 version.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
