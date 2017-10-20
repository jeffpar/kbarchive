---
layout: page
title: "Q152950: XCLN: Text Attachments Open in Word on Macintosh Client"
permalink: /kb/152/Q152950/
---

## Q152950: XCLN: Text Attachments Open in Word on Macintosh Client

{% raw %}

	Article: Q152950
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a plain text attachment is sent to a Microsoft Exchange Macintosh client,
	the attachments appear associated with Microsoft Word. When the attachment is
	opened, Word opens and the text file is opened in Word.
	
	CAUSE
	=====
	
	The Exchange Preferences file does not contain a reference for opening Plain
	Text attachments using SimpleText or TeachText.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The Exchange Preferences file contains information that the Microsoft Exchange
	Macintosh client uses for making associations to various applications. The
	Exchange Preferences file is located in System Folder: Preferences on the client
	computer.
	
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange400Mac
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
