---
layout: page
title: "Q250521: XADM: How to Prevent Sending SMTP Mail to a Specific Address"
permalink: /kb/250/Q250521/
---

## Q250521: XADM: How to Prevent Sending SMTP Mail to a Specific Address

	Article: Q250521
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure Exchange Server so that all of the users
	in an organization cannot send SMTP e-mail messages to a specific address.
	
	MORE INFORMATION
	================
	
	To configure Exchange Server so that all of the users in an organization cannot
	send SMTP e-mail messages to a specific address, create a custom recipient and
	set delivery restrictions for that recipient:
	
	1. Create an SMTP custom recipient that uses the e-mail address that you want to
	  prevent users from sending SMTP e-mail messages to.
	
	2. In the custom recipient properties, click the Delivery Restrictions tab, and
	  then perform either one of the following steps:
	
	   - Under "Reject messages from", click List, and then either add everyone in
	     the local Recipients container or add a global distribution list (DL) to
	     the "Reject messages from" list.
	
	   - Under "Accept messages from", click List, and then add a single user to
	     the "Accept messages from" list.
	
	3. Ensure that the display name for the user is the same as the SMTP address
	  (for example, someone@microsoft.com).
	
	4. Click the Advanced tab, and then under "Custom recipients options", click to
	  select the "Hide from address book" check box.
	
	After you perform these steps, if a user in that organization sends mail to the
	SMTP address, the user receives a non-delivery report (NDR) similar to the
	following:
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: test
	  Sent: 1/10/2000 2:46 PM
	
	  The following recipient(s) could not be reached:
	
	  Someone@microsoft.com on 1/10/2000 2:46 PM
	  A restriction in the system prevented delivery of the message.
	  The MTS-ID of the original message is: c=US;a=
	  ;p=Organization;l=Servername-000110194626Z-183
	  MSEXCH:MSExchangeMTA:Sitename:Servername
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
