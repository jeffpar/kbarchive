---
layout: page
title: "Q197976: XFOR: Inbound Mail Failure Error with MS Mail and IMC"
permalink: kb/197/Q197976/
---

## Q197976: XFOR: Inbound Mail Failure Error with MS Mail and IMC

	Article: Q197976
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Connector (IMC) administrator may receive
	inbound mail failures when trying to deliver a message to a MS Mail custom
	recipient.
	
	  -or-
	
	When you attempt to send a message to MS Mail users through an Exchange Internet
	Mail Connector you may receive a non-delivery report (NDR) similar to the
	following:
	
	  Your message did not reach some or all of the intended recipients.
	
	  The following recipient(s) could not be reached:
	
	  user@company on 6/26/97 18:58:04 PM
	  Recipient Not Found
	  [MSEXCH:IMC:ROHR:EXGATE:ROHR_EX]
	
	CAUSE
	=====
	
	This is not an Exchange Server problem. If the customer is using a UNIX "alias
	file" to resolve the names, it is a third-party issue.
	
	If the customer is not using an "alias file" then the problem is caused by an
	incorrect SMTP address in Exchange Server.
	
	RESOLUTION
	==========
	
	Confirm the MS Mail custom recipient SMTP address is the same as the address
	given by the sender. If the address is different the customer may be using alias
	files to redirect the message to an alternate address.
	
	For example:
	
	The SMTP address on the custom recipient is me@my.house.com
	The SMTP address the message is to be addressed to is me@house.com
	
	Messages to me@house.com are returned with a Non Delivery Receipt. Messages to
	me@my.house.com are sent and received.
	
	If the problem is affecting all users, then perform the following steps to change
	the default site addressing:
	
	1. In the Exchange Server Administrator program, click Organization, Site,
	  Configuration Container, and then double-click on the Site Addressing.
	
	2. Select the Site Addressing property page, highlight the SMTP address, and
	  then click Edit.
	
	3. Modify the address as needed.
	
	If the problem is affecting one recipient, then modify the SMTP address of that
	recipient as follows:
	
	1. Select the container of the recipient in the left pane.
	
	2. Double-click the recipient, and select E-mail Addresses.
	
	3. Select the SMTP address, click Edit, then modify the address as needed.
	
	NOTE: When you edit an existing partial e-mail address, you are given the
	opportunity to update addressing information for all Microsoft Exchange
	recipients with the new information.
	
	MORE INFORMATION
	================
	
	For more information regarding alias files, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q111840 SMTP: Configuring the Gateway to Use Company Domain Names
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
