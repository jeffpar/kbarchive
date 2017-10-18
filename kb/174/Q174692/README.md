---
layout: page
title: "Q174692: OLE Objects Don't Display Correctly on Macintosh Clients"
permalink: kb/174/Q174692/
---

## Q174692: OLE Objects Don't Display Correctly on Macintosh Clients

	Article: Q174692
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0; WINDOWS:4.0,5.0; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to view an embedded OLE object in the Macintosh client that
	originated from a Windows client, you do not see the object or you see an object
	with question marks.
	
	WORKAROUND
	==========
	
	Attempt to send the graphic as an attachment to the message. When the message is
	opened on the Macintosh client, you may be able to open the image.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange client for
	the Macintosh versions 4.0 and 5.0 and for the Microsoft Outlook client for the
	Macintosh version 8.0.
	
	MORE INFORMATION
	================
	
	This is a current limitation of OLE between Windows and the Macintosh. Bitmap
	images are native to Windows environments and not to the Macintosh.
	
	The following information is taken from the Exchange Server 5.0 Macintosh Release
	Notes, section 1.10:
	
	  When sending messages containing embedded OLE objects between Windows and
	  Macintosh platforms, the embedded object may not display correctly when you
	  open the file.
	
	Additional query words: cut copy
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchange550 kbExchangeClientSearch kbZNotKeyword2 kbOutlookMacSearch kbExchange500Mac kbExchange400Mac kbOutlook800Mac
	Version           : MACINTOSH:8.0; WINDOWS:4.0,5.0; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
