---
layout: page
title: "Q173104: XCLN: No MAPI or Programmable APIs for Macintosh Client"
permalink: /kb/173/Q173104/
---

## Q173104: XCLN: No MAPI or Programmable APIs for Macintosh Client

	Article: Q173104
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Macintosh client is not extensible via custom coding
	through Messaging Application Programming Interface (MAPI), Common Messaging
	Calls (CMCs), or any other APIs on the Macintosh platform.
	
	MORE INFORMATION
	================
	
	This is due to the design of the Exchange Macintosh client, which is not
	programmable in a MAPI or CMC sense. The only support available includes a
	response to the Apple OpenDocument event (open a new message with the document
	provided as a file attachment) and a GURL mailto or news AppleEvent. For more
	information about these, see Apple documentation.
	
	MAPI calls are specific to the Windows platform and make function calls to the
	Mapi.dll and Mapi32.dll files. These files are not used on the Macintosh
	platform, therefore MAPI programming is not possible on the Macintosh.
	
	Microsoft does not document or support any MAPI or CMC calls for the Macintosh
	platform. In addition, Microsoft does not have a version of Visual Basic for the
	Macintosh platform.
	
	
	Additional query words: mapi programming sdk extending
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac
	Version           : WINDOWS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
