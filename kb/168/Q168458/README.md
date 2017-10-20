---
layout: page
title: "Q168458: XCLN: Formatting on Incoming Internet E-mail Is Wrong"
permalink: /kb/168/Q168458/
---

## Q168458: XCLN: Formatting on Incoming Internet E-mail Is Wrong

{% raw %}

	Article: Q168458
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0;WinNT:4.0;Win95:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The formatting, word wrapping, or horizontal spacing in Internet e-mail messages
	received by Microsoft Exchange Client may be incorrect; they appear different
	from the way they were composed.
	
	CAUSE
	=====
	
	The original e-mail message may have come from a system such as a mainframe
	e-mail system that uses a fixed format system font for composing messages. When
	the message is received at the Exchange client, the formatting and horizontal
	spacing of the characters appear differently because of font mapping.
	
	RESOLUTION
	==========
	
	To resolve this problem, do one of the following:
	
	- In Microsoft Exchange Server 5.0, change the default font for incoming
	  Internet e-mail to a fixed format by checking the Use Fixed-Width Font option
	  in the Internet Mail tab of the Internet Mail Service properties.
	
	  NOTE: The Use Fixed-Width Font setting does not apply to RTF and HTML
	  messages.
	
	  -OR-
	
	- Install the Exchange Server Preview Pane Extension (tripane extension),
	  available in the Exchange Server Resource Kit. The Preview Pane Extension
	  supports a fixed font setting. The Resource Kit can be downloaded from the
	  following location:
	
	  http://www.microsoft.com/exchange/reskit.htm
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0;WinNT:4.0;Win95:4.0
	
	=============================================================================
	

{% endraw %}
