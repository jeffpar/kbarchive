---
layout: page
title: "Q111840: SMTP: Configuring the Gateway to Use Company Domain Names"
permalink: /kb/111/Q111840/
---

## Q111840: SMTP: Configuring the Gateway to Use Company Domain Names

{% raw %}

	Article: Q111840
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Incoming Mail
	-------------
	
	The Microsoft Mail SMTP Gateway needs to receive mail with an address that can be
	associated with a single postoffice in order to route mail to the appropriate
	postoffice. If you have more than one postoffice, the gateway needs to receive
	addresses with different domain names and at least one unique name per
	postoffice.
	
	Most companies like to be able to give addresses as USER@COMPANY.COM instead of
	USER@PO.COMPANY.COM. This means that another process has to change the address
	from USER@COMPANY.COM to USER@PO.COMPANY.COM before the mail gets to the SMTP
	gateway. This is usually resolved by having an alias file (one record per user)
	or .FORWARD files for each user on some TCP/IP host that routes mail before it
	gets to the SMTP gateway. The alias file or .FORWARD file changes the address
	from USER@COMPANY.COM to USER@PO.COMPANY.COM before the mail gets to the SMTP
	gateway. Consult the administrator of the Mail Routing Host for details on
	accomplishing this.
	
	Outgoing Mail
	-------------
	
	The SMTP gateway can be configured to send outgoing mail with the "from" field
	address USER@COMPANY.COM. In the Mail Administrator program, select Gateway,
	SMTP, Address Map, Create. Then create an additional address map for each
	postoffice. In this second entry, type COMPANY.COM in the SMTP Domain field. Now
	each postoffice has two address map entries. It is important that in each case
	the first entry is the company domain name, COMPANY.COM. When the gateway
	processes outgoing mail, it finds the first occurrence of Network/PO, and uses
	that SMTP domain name, which in this case is COMPANY.COM. When incoming mail
	arrives, the gateway finds the first occurrence of PO.COMPANY.COM, and sends it
	to the appropriate Network/PO.
	
	The file being changed by the Mail Administrator program is M:\SMTP\ADDR_MAP.CFG.
	This file can also be edited at the MS-DOS command prompt to ensure the entries
	are in the correct order.
	
	Additional query words: 3.00 admin downstream
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
