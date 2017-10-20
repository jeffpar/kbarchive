---
layout: page
title: "Q156962: XFOR: Problem with BCC Line in Messages from AppleTalk Mail"
permalink: /kb/156/Q156962/
---

## Q156962: XFOR: Problem with BCC Line in Messages from AppleTalk Mail

{% raw %}

	Article: Q156962
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Exchange Server, mail sent from AppleTalk mail to Microsoft
	Exchange with recipients on the BCC line will display the blind copied
	recipients on the TO line in the Microsoft Exchange client.
	
	This problem occurs when using either the Microsoft Exchange Connection or
	Microsoft Mail Connection 3.2 software.
	
	MORE INFORMATION
	================
	
	Microsoft Mail does not support BCC, so both the Microsoft Mail Connection
	version 3.2 and Exchange Connection get around this limitation by using a
	Microsoft Mail feature called "hidden recipient." Basically the Microsoft Mail
	client knows not to display blind copied recipients.
	
	Because this is a Microsoft Mail feature that Microsoft Exchange does not
	support, the Microsoft Exchange client will display the blind copied recipients
	on the TO line.
	
	The following note can be found in the Microsoft Exchange Administrator's Guide:
	
	  Note: If you send messages using the BCC feature in MS Mail (AppleTalk) to
	  Microsoft Exchange or MS Mail (PC) users, the information in the BCC line
	  appears in the TO box
	
	Microsoft Exchange Administrator's Guide, Chapter 10, p. 315.
	
	Additional query words: blind copy copied mac
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
