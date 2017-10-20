---
layout: page
title: "Q170076: XWEB: Outlook Web Access Client May Not Print Entire Message"
permalink: /kb/170/Q170076/
---

## Q170076: XWEB: Outlook Web Access Client May Not Print Entire Message

{% raw %}

	Article: Q170076
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, versions 5.0, 5.5 
	- Microsoft Internet Explorer versions 3.01, 3.02 for Windows 95 
	- Microsoft Internet Explorer versions 3.01, 3.02a for Windows 3.1 
	- Microsoft Internet Explorer versions 3.01, 3.02a for Windows NT 3.51 
	- Microsoft Internet Explorer versions 3.01, 3.02 for Windows NT 4.0 
	- Microsoft Internet Explorer versions 3.01, 3.02 for Macintosh 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Only the Subject line of a message may print when you print from the Microsoft
	Outlook Web Access (OWA) client in Microsoft Internet Explorer.
	
	CAUSE
	=====
	
	The OWA client uses frames to separate the header and body of a message. Because
	of the way Internet Explorer uses frames, the header of the message will have
	the focus by default. Therefore, only the Subject line or the title of the
	window containing the message will be printed.
	
	This is a problem with Internet Explorer, not Microsoft Exchange Server or the
	OWA client. This problem is corrected in Microsoft Internet Explorer version
	4.0.
	
	WORKAROUND
	==========
	
	Select any part of the message body before printing the message. You will then
	be able to print the entire message.
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbIEsearch kbZNotKeyword2 kbOWASearch kbIENT400Search kbIENT351Search kbIE95Search kbIE310Search kbIEMacSearch kbZNotKeyword3 kbOWA550 kbIE301Win310 kbIE302aWin310 kbIE301Win95 kbIE302Win95 kbIE301WinNT351 kbIE302aWinNT351 kbIE301WinNT400 kbIE302WinNT400
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
