---
layout: page
title: "Q178819: XCLN: OLE Objects Do Not Display Correctly on Macintosh Clients"
permalink: kb/178/Q178819/
---

## Q178819: XCLN: OLE Objects Do Not Display Correctly on Macintosh Clients

	Article: Q178819
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0 WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to view an embedded OLE object in the Macintosh client that
	originated from a Windows client, you may not see the object or may see an
	object with questions marks.
	
	CAUSE
	=====
	
	This is a current limitation of OLE between Windows and the Macintosh. Bitmap
	images are native to Windows environments and not the Macintosh. From the
	Exchange 5.0 Macintosh release Notes, Section 1.10: "When sending messages
	containing embedded OLE objects between Windows and Macintosh platforms, the
	embedded object may not display correctly when you open the file."
	
	WORKAROUND
	==========
	
	One possible workaround is to attach the graphic to the message, rather than
	embedding it. This usually works because attachments are different from embedded
	objects.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the above listed versions of
	Microsoft Exchange Macintosh client. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: bitmap cut copy paste graphics image
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbOutlookMacSearch kbExchange500Mac kbExchange400Mac kbOutlook800Mac
	Version           : MACINTOSH:8.0 WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
