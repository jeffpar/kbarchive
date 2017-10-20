---
layout: page
title: "Q112911: MHS: README.TXT: Gateway to MHS, Version 3.0"
permalink: /kb/112/Q112911/
---

## Q112911: MHS: README.TXT: Gateway to MHS, Version 3.0

{% raw %}

	Article: Q112911
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is the text of the README.TXT file from the Microsoft Mail Gateway
	to MHS.
	
	This document supplements the information in version 3.0 of Microsoft Mail
	Gateway to MHS "Administrator's Guide" and covers the following topics:
	
	- Exchanging mail with WordPerfect Office users.
	
	- Leading and trailing spaces in extended portion of an MHS address.
	
	- Sending attachments from the Microsoft Mail Macintosh client.
	
	EXCHANGING MAIL WITH WORDPERFECT OFFICE USERS
	---------------------------------------------
	
	WordPerfect Office users can address MS Mail users in one of two ways:
	
	- Simple addressing
	
	- Extended addressing
	
	Below is a brief description of each of these addressing methods and when they
	can be used.
	
	Simple Addressing
	-----------------
	
	To address a MS Mail user on the gateway postoffice, a WordPerfect office user
	can use the simple addressing syntax:
	
	  Route:MHS:Foreign:Gate:Mailbox
	
	where:
	
	  Route - is the local WordPerfect Office System Routing
	  MHS - is the WordPerfect MHS connection Host Name
	  Foreign - is the conversion type indicator
	  Gate - is the gateway name
	  Mailbox - is the MS Mail Mailbox name
	
	Extended Addressing
	-------------------
	
	To address a MS Mail user on a downstream postoffice or a gateway postoffice, a
	WordPerfect office user can use the extended addressing syntax:
	
	  Route:MHS:Foreign:"Host{extended address}":Mailbox
	
	where:
	
	  Route - is the local WordPerfect Office System Routing
	  MHS - is the WordPerfect MHS connection Host Name
	  Foreign - is the conversion type indicator
	  Host - is the destination MHS Host/Gateway
	  {Extended Address} - is the MS Mail recipient's address
	  Mailbox - is the MS Mail recipient's Mailbox
	
	LEADING AND TRAILING SPACES IN EXTENDED PORTION OF AN MHS ADDRESS
	-----------------------------------------------------------------
	
	When using "Full Extended Addressing" OR "Concise Extended Addressing," ensure
	that you do NOT have leading AND/OR trailing blanks in the extended portion of
	the MHS address.
	
	Example:
	
	  Valid address - USER@GATEWAY {NETWORK/POSTOFFICE/MAILBOX}
	  Invalid address - USER@GATEWAY { NETWORK/POSTOFFICE/MAILBOX }
	
	SENDING ATTACHMENTS FROM THE MICROSOFT MAIL MACINTOSH CLIENT
	------------------------------------------------------------
	
	You should use the "PC format" option available in the Microsoft Mail Macintosh
	client when including attachments in a message that have MHS recipients.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
