---
layout: page
title: "Q259343: XADM: Events 2028 and 290 from Messages Sent by a Public Folder"
permalink: /kb/259/Q259343/
---

## Q259343: XADM: Events 2028 and 290 from Messages Sent by a Public Folder

	Article: Q259343
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 07-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following events may be logged in the application event log regarding
	non-delivery report (NDR) messages that are sent from a public folder:
	
	   - Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: X.400 Service
	  Event ID: 290
	  Description:
	  A non-delivery report (reason code unable-to-transfer and diagnostic code
	  unrecognised-OR-name) is being generated for message C=US;A=
	  ;P=ORGANIZATION;L=AANGBWAS012-000407193425Z-5. It was originally destined
	  for DN:/o=ORGANIZATION/ou=SITE/cn=RECIPIENTS/cn=MAILBOX<A7>
	
	  (recipient number 1), and was to be redirected to . [MTA DISP:RESULT
	  14 136] (12)
	
	   - Event Type: Error
	  Event Source: MSExchangeIS Public
	  Event Category: Transport Delivering
	  Event ID: 2028
	  Description:
	  The delivery of a message sent by a public folder
	  /o=ORGANIZATION/ou=SITE/cn=RECIPIENTS/cn=FOLDERX16A69D5016A69D5016
	  A69D50D194BB5600177D has failed
	  To: MAILBOX
	  Cc:
	
	  The non-delivery report has been deleted.
	
	   - Event Type: Information
	  Event Source: MSExchangeIS Private
	  Event Category: Transport Delivering
	  Event ID: 2025
	  Date: 4/7/2000
	  Time: 3:41:08 PM
	  User: N/A
	  Computer: AANGBWAS012
	  Description:
	  The delivery of a message failed due to error 8004010F. A non-delivery
	  report is being sent to the message's originator.
	
	CAUSE
	=====
	
	This issue can occur if a moderated public folder or another rule that forwards
	posts to Exchange Server mailboxes sends e-mail messages to specified accounts.
	If an account is deleted, the rule still attempts to send the message and
	generates an NDR and the events in the "Symptoms" section of this article.
	
	RESOLUTION
	==========
	
	To resolve this issue, open the properties for the public folder in question
	from a mailbox that has owner rights. Click the Administration tab, click
	Moderated Folder, and then verify that any mailboxes in the To box are still
	valid mailboxes. Click Folder Assistant, and then check any rules that are
	created for the folder to ensure that all of the accounts that are listed are
	valid.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q249796 XGEN: Outlook Rule Creates Message Loop in Information Store
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
