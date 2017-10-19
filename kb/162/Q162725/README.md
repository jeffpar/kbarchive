---
layout: page
title: "Q162725: XCLN: &quot;Internal Error Installing Forms&quot; During Client Setup"
permalink: /kb/162/Q162725/
---

## Q162725: XCLN: &quot;Internal Error Installing Forms&quot; During Client Setup

	Article: Q162725
	Product(s): Microsoft Exchange
	Version(s): Win95:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Client for Windows 95, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Microsoft Exchange Windows 95 client, you may
	receive the following error:
	
	  Internal error installing forms.
	  Please contact your system administrator.
	
	RESOLUTION
	==========
	
	Two different resolutions have been found for this issue. It may be necessary to
	follow both of the procedures listed below before attempting to reinstall the
	Microsoft Exchange Windows 95 client:
	
	- The Msvcrt40.dll file in the Windows\System directory may be outdated. Rename
	  Msvcrt40.dll on the affected workstation and run the Microsoft Exchange
	  client setup again.
	
	- Rename the Mapi.dll and Mapi32.dll files on the affected workstation and run
	  the Microsoft Exchange client setup again.
	
	MORE INFORMATION
	================
	
	The Msvcrt40.dll file that the Microsoft Exchange Service Pack 2 client will
	install is Msvcrt40.dll, with a date of 7-14-96, a file size of 312,832 bytes,
	and version number of 4.0.0.5270.
	
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : Win95:4.0
	
	=============================================================================
	
