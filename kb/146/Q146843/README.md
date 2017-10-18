---
layout: page
title: "Q146843: XCLN: Caption Fields Created in EFD Are Truncated"
permalink: kb/146/Q146843/
---

## Q146843: XCLN: Caption Fields Created in EFD Are Truncated

	Article: Q146843
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When caption fields are created in Exchange Forms Designer in a high resolution
	environment and then viewed in a low resolution, the captions may be truncated.
	
	
	MORE INFORMATION
	================
	
	This is by design. The problem is that the font maps differently depending on
	resolution, availability, and so on. Label fields should not be created without
	allowing for this to occur. This same problem exists in VB as well.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
