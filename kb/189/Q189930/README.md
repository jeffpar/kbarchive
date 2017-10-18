---
layout: page
title: "Q189930: XCLN: Macintosh Client Error &quot;The Item Could Not Be Displayed&quot;"
permalink: kb/189/Q189930/
---

## Q189930: XCLN: Macintosh Client Error &quot;The Item Could Not Be Displayed&quot;

	Article: Q189930
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0; WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): exc4 exc5
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open or create a new message using an Exchange or Outlook
	client for Macintosh, the following error may occur:
	
	  The items could not be displayed. You have exceeded the maximum amount of
	  text.
	
	CAUSE
	=====
	
	This error may be caused by a corrupt font that is used to display the message
	text.
	
	WORKAROUND
	==========
	
	To test for a corrupted font, open the system folder and drag the fonts folder
	to the desktop. Shut down and restart the system. A new fonts folder will be
	created in the system folder with a default system font.
	
	After you restart the computer, open the Exchange or Outlook client again and
	test the message. The contents should be displayed in the default system font.
	If this works correctly, replace the affected font(s). If the same symptoms
	occur, it may be necessary to remove and reinstall the Exchange or Outlook
	client software.
	
	MORE INFORMATION
	================
	
	For more information on reinstalling the Exchange Client for Macintosh, see the
	following article in the Microsoft Knowledge Base:
	
	  Q158519 XCLN: Removing and Reinstalling the Macintosh Client
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbOutlookMacSearch kbExchange500Mac kbExchange400Mac kbOutlook800Mac
	Version           : MACINTOSH:8.0; WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
