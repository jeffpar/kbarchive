---
layout: page
title: "Q286435: OLMAC: Error Message:  Exceeded the Maximum Amount of Text"
permalink: kb/286/Q286435/
---

## Q286435: OLMAC: Error Message:  Exceeded the Maximum Amount of Text

	Article: Q286435
	Product(s): Microsoft Exchange
	Version(s): 8.2,8.2.1,8.2.2
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 13-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook for Macintosh, Exchange Server Edition, versions 8.2, 8.2.1, 8.2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to read messages by using Outlook for Macintosh, Exchange Server
	edition, you may receive the following error message:
	
	  The item could not be displayed. You have exceeded the maximum amount of text
	
	You may also experience one of the following symptoms:
	
	- Messages from personal computer users result in the preceding error message.
	
	- Your system stops responding when you try to display your calendar (schedule)
	  in Outlook for Macintosh, Exchange Server edition.
	
	CAUSE
	=====
	
	This behavior occurs because of a damaged font or because too many fonts are
	installed on your system.
	
	This behavior has been observed and reproduced when too many fonts were present
	on an Apple Macintosh system. The exact number of fonts that your system can
	handle can vary with the amount of random access memory (RAM) that you have and
	with the available resources on your system.
	
	WORKAROUND
	==========
	
	To work around this behavior, either replace your installed fonts or reduce the
	number of active fonts in Adobe Type Manager Deluxe. To do this:
	
	- Temporarily disable any font utilities that can cause a font conflict. To
	  disable the font utilities, turn off the font smoothing feature in the
	  Appearance Control Panel, turn off both Adobe Type Manager and Adobe Type
	  Reunion, and turn off any other utility that can affect the font appearance.
	
	- Move all fonts (except for the Chicago, Charcoal, Geneva, and Monaco system
	  fonts) to a folder on your desktop. Add back fonts individually or in small
	  groups to identify the offending font and to verify the number of active
	  fonts that your system enables.
	
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q250672 Outlook For Macintosh Stops Responding at Splash Screen
	
	  Q258569 How to Troubleshoot Internet Explorer Startup Problems on Mac
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbOutlookMacSearch kbOutlook820Mac kbOutlook821Mac kbOutlook822Mac
	Version           : :8.2,8.2.1,8.2.2
	Issue type        : kbprb
	
	=============================================================================
	
