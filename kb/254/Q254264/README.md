---
layout: page
title: "Q254264: XADM: Autoforwarding Rule to a Deleted Custom Recipient NDRs"
permalink: kb/254/Q254264/
---

## Q254264: XADM: Autoforwarding Rule to a Deleted Custom Recipient NDRs

	Article: Q254264
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a user creates an autoforwarding rule that forwards e-mail messages from a
	mailbox to a custom recipient and that custom recipient is deleted, non-delivery
	reports (NDRs) are sent to the mailbox of the e-mail message originator and an
	event ID 290 that refers to the deleted address of the custom recipient is
	logged in the Windows NT Event Viewer application event log.
	
	MORE INFORMATION
	================
	
	To verify that a user has an autoforwarding rule that uses a deleted custom
	recipient and fix that autoforwarding rule:
	
	1. From the mailbox of the user, send an e-mail message that is addressed to
	  that same user. If the e-mail message arrives in the user's Inbox and an NDR
	  similar to the following is sent to the same Inbox, proceed to the next step:
	
	  The following recipient(s) could not be reached:
	
	  Public, John Q. on 2/10/00 9:54 AM
	
	  The recipient name is not recognized
	
	  The MTS-ID of the original message is: c=US;a=XXXX
	  ;p=XXXXX;l=ServerName-000210145404Z-7928
	  MSEXCH:MSExchangeMTA:intl:ServerName
	
	2. In the application event log on the server that the user's mailbox is homed
	  on, look for an event ID 290 similar to the following that was logged at the
	  same time that the NDR appeared in the user's mailbox:
	
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: X.400 Service
	  Event ID: 290
	
	  Description:
	  A non-delivery report (reason code unable-to-transfer and diagnostic code
	  unrecognised-OR-name) is being generated for message
	  C=US;A=ADMINDOM;P=DOMAIN;L=MSG05INT-000128154450Z-35477. It was originally
	  destined for DN:/o=DOMAIN/ou=INTL/cn=Recipients/cn=PUBLICJ<A7> (recipient number
	  1), and was to be redirected to . [MTA DISP:RESULT 18 136] (12)
	
	3. Use the address in the NDR to find the autoforwarding rule on the user's
	  mailbox that is generating the NDRs by logging on to the user's mailbox and
	  finding the address that is in the NDR attached to one of the autoforwarding
	  rules.
	
	4. When you find the address, remove it from the autoforwarding rule, and then
	  attempt to re-add the address from the global address list. If you cannot
	  re-add the address, perform one of the following steps, as applicable:
	
	   - Remove the autoforwarding rule from the mailbox.
	
	   - Recreate the custom recipient and reassociate that address with the rule.
	
	Additional query words: auto forward rule; recipient name is not recognized GAL
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
