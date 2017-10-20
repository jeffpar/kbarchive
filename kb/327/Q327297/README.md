---
layout: page
title: "Q327297: BUG: 5250 Client in TN5250 Mode May Stop Responding"
permalink: /kb/327/Q327297/
---

## Q327297: BUG: 5250 Client in TN5250 Mode May Stop Responding

{% raw %}

	Article: Q327297
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000 kbhis2000bug
	Last Modified: 09-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While in TN5250 mode, 5250 Client may stop responding when you type data in some
	AS/400 programs or AS/400 menus. When the problem occurs, the Input Inhibited
	(II) status indicator and the Keystroke Buffering (KB) status indicator are
	highlighted in the 5250 Client Status line at the bottom of the 5250 session
	window.
	
	CAUSE
	=====
	
	This problem can occur if an AS/400 sends data to the TN5250 client that
	includes X'FF' as part of a SNA General Data Stream (GDS) message.
	
	The Telnet (TN) specifications define X'FF' as an Interpret As Command (IAC)
	character. If an SNA GDS message contains an X'FF' character, the TN5250 server
	must replace this character with X'FFFF' to indicate that the character is not
	to be treated as an IAC character.
	
	5250 Client cannot correctly parse X'FFFF' if it is part of a GDS header. The
	result is that the data received from the AS/400 is not interpreted correctly,
	which causes 5250 Client to wait for additional data.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Host Integration
	Server 2000.
	
	
	
	MORE INFORMATION
	================
	
	For more information about SNA GDS messages, see the IBM SNA Formats (GA27-3136)
	manual.
	
	For additional information about the 5250 Status indicators, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q107117 5250 Applet Status Line
	
	For more information about the IAC character, see the following Telnet RFC:
	
	  RFC 764
	  http://www.faqs.org/rfcs/rfc764.html
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
