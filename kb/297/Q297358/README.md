---
layout: page
title: "Q297358: Mac Outlook Err Msg About MS OLE Base Library"
permalink: /kb/297/Q297358/
---

## Q297358: Mac Outlook Err Msg About MS OLE Base Library

	Article: Q297358
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.1,8.2,8.2.1,8.2.2
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbOutlook2001
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook for Macintosh, Exchange Server Edition, versions 8.0, 8.1, 8.2, 8.2.1, 8.2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Microsoft Outlook for Macintosh Exchange Server Edition,
	version 8.2, you may receive the following error message:
	
	  Application could not be opened because MS OLE Base library--do drag drop
	  mac.exe could not be found
	
	This issue may also occur with other versions of the product.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable the Microsoft extensions and then reinstall
	Outlook:
	
	1. Move the following extensions to the Extensions (Disabled) folder:
	
	  Microsoft OLE Automation
	  Microsoft OLE Extension
	  Microsoft OLE Library
	  Microsoft RPC Runtime Library
	
	2. Restart the computer.
	
	3. Reinstall Outlook.
	
	MORE INFORMATION
	================
	
	Verify that Word, Excel, and the other Office programs still work correctly.
	They also rely on the extensions that are being disabled and reinstalled, so you
	may need to reinstall Office completely.
	
	Additional query words: ol2001 mac macintosh
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbOutlook2001 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbOutlookMacSearch kbOutlook800Mac kbOutlook810Mac kbOutlook820Mac kbOutlook821Mac kbOutlook822Mac
	Version           : :8.0,8.1,8.2,8.2.1,8.2.2
	Issue type        : kbprb
	
	=============================================================================
	
