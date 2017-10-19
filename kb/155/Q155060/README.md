---
layout: page
title: "Q155060: XCLN: MAPIAddress Function Does Not Allocate Memory"
permalink: /kb/155/Q155060/
---

## Q155060: XCLN: MAPIAddress Function Does Not Allocate Memory

	Article: Q155060
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Simple MAPI C function, MAPIAddress, does not dynamically allocate memory,
	as suggested in the MAPI Software Developer's Kit (SDK) online documentation.
	
	MORE INFORMATION
	================
	
	The MAPI SDK online documentation states the following for the lppNewRecips
	parameter of the MAPIAddress function:
	
	  lppNewRecips
	  Output parameter pointing to an array of MapiRecipDesc structures containing
	  the final list of recipients. This array is allocated by MAPIAddress...
	
	This description implies that the MAPIAddress function allocates an array for the
	MapiRecipDesc structures. This is not accurate. In order to use this function
	properly, you must allocate memory for the array with a MALLOC statement in your
	code. If you do not do this, you may receive an exception error in Kernel32.dll
	and/or a MAPI_E_FAILURE error when using the MAPIAddress function.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
