---
layout: page
title: "Q183530: XCLN: How Exchange Macintosh Client Calls the Internet Browser"
permalink: /kb/183/Q183530/
---

## Q183530: XCLN: How Exchange Macintosh Client Calls the Internet Browser

	Article: Q183530
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH: 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When attempting to start an Internet browser from the Microsoft Exchange
	MacIntosh client by selecting a URL from within a mail message, it is possible
	that the Internet browser will not start.
	
	One possible cause is that two Internet browsers have been installed. The
	Exchange Macintosh Client will attempt to use the first Internet browser
	installed.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Remove all Internet browsers installed on the Macintosh.
	
	2. Reinstall the Internet browser you prefer to use.
	
	3. Reinstall the Microsoft Exchange Macintosh Client.
	
	MORE INFORMATION
	================
	
	To view which Internet browser the client is trying to access:
	
	1. Back up the Exchange Preferences file located in the System
	  Folder/Preferences directory. This is a precautionary step in case the
	  preferences are corrupted or changed while using ResEdit.
	
	2. Start ResEdit.
	
	3. Within ResEdit, open the Exchange Preferences file.
	
	4. Double-click on the file STR#.
	
	5. Double-click on Options.
	
	6. For Microsoft Internet Explorer, line 2 should read Browser=:MSIE:APPL.
	
	Additional query words: Link Browser Netscape Internet Explorer HTML HTTP hyperlink
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac kbExchange400Mac
	Version           : MACINTOSH: 4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
