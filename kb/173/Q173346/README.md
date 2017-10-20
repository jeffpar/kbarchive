---
layout: page
title: "Q173346: XADM: Upgrading Exchange 5.0 Evaluation Copy to Release Version"
permalink: /kb/173/Q173346/
---

## Q173346: XADM: Upgrading Exchange 5.0 Evaluation Copy to Release Version

{% raw %}

	Article: Q173346
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 22-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the Microsoft Exchange Administrator program, you receive the
	following error message:
	
	  The promotional version of Microsoft Exchange server on SERVERNAME has
	  expired. Users on this server will no longer be able to send or receive
	  messages.
	
	Users cannot send or receive mail.
	
	CAUSE
	=====
	
	The version of Microsoft Exchange Server installed is the 120-day promotional
	copy.
	
	The promotional copy of Microsoft Exchange Server version 5.0 is available on the
	Microsoft World Wide Web site (http://www.microsoft.com/).
	
	RESOLUTION
	==========
	
	Run the Setup.exe program from the Microsoft Exchange Server regular (not
	promotional) version and click the Reinstall option.
	
	MORE INFORMATION
	================
	
	One way to check when a promotional copy of Exchange Server 5.0 is due to expire
	is to view an object attribute of the server properties.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Open the Exchange Administrator program in raw mode.
	
	2. Select the Raw Properties on the server that you want to check.
	
	3. Look for an object attribute called Promo-Expiration.
	
	This attribute will show the date when the promotional copy is due to expire. The
	format is Universal Time.
	
	If there is no Promo-Expiration attribute, the copy of Exchange Server is most
	likely not the evaluation version.
	
	The Promo-Expiration attribute cannot be deleted or modified through the Exchange
	Administrator program.
	
	
	
	Additional query words: trial version
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
