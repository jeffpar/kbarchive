---
layout: page
title: "Q251016: XCON: Events 290 and 270 Logged From Public Folder Permissions"
permalink: /kb/251/Q251016/
---

## Q251016: XCON: Events 290 and 270 Logged From Public Folder Permissions

{% raw %}

	Article: Q251016
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a public folder has an SMTP e-mail address, and a user who does not have
	rights to post to that folder sends an e-mail message to that SMTP e-mail
	address, Event ID 270 and Event ID 290 may be logged in the application event
	log of the server. A descriptive non-delivery report (NDR) may also be
	generated.
	
	This issue may also occur if a user from the Internet sends an e-mail message to
	the public folder, and in the client permissions for that folder, the Default
	item under Name has anything less than Contributor permissions selected under
	Role. In this case, the NDR is non-descriptive.
	
	MORE INFORMATION
	================
	
	If you examine Event ID 290 and Event ID 270, you can determine who sent the
	e-mail messages, and to which public folder the e-mail messages were sent.
	
	The Event IDs are similar to the following:
	
	  Event Type: Warning
	  Event Source: MSExchangeMTA
	  Event Category: X.400 Service
	  Event ID: 290
	
	  Description:
	  A non-delivery report (reason code transfer-failure and diagnostic code
	  undeliverable-mail-recipient-deceased) is being generated for message C=US;A=
	  ;P=JOE;L=EXCHSRVR0001131622C7AY64QH. It was originally destined for
	  DN:/o=JOE/ou=MS/cn=CONFIGURATION/cn=SERVERS/cn=EXCHSRVR/cn=MICROSOFT PUBLIC
	  MDB<A7>DDA:EX=/O=JOE/OU=MS/CN=RECIPIENTS/CN=PUBLICFOLDERNAME8082D0C08082D0C08082D0C06979B64F00271F;
	  (recipient number 1), and was to be redirected to. [MTA DISP:RESULT 14 136]
	  (12)
	
	  Event Type: Information
	  Event Source: MSExchangeMTA
	  Event Category: X.400 Service
	  Event ID: 270
	  Description:
	  A permanent error has occurred with Entity
	  /O=JOE/OU=MS/CN=CONFIGURATION/CN=SERVERS/CN=EXCHSRVR/CN=MICROSOFT PUBLIC MDB.
	  Entity is a Message Object is a Normal Priority Message. Object: 06000033.
	  Message ID: C=US;A= ;P=JOE;L=EXCHSRVR0001131622C7AY64QH Content length: 2422,
	  External Trace information (first 100 bytes) =
	  3080638061801302555300006280130120000013034A4F4500003180800D3030303131333136323230345A8201008302060000000000,
	  PDU dump reference 1 [MTA SUBMIT 12 74] (14)
	
	The public folder that is affected is displayed in Event ID 290. To determine
	which public folder is affected, examine the Distinguished Name (DN) that
	follows the following text:
	
	  It was originally destined for
	
	In the example of Event ID 290 in this article, the DN is:
	
	  DN:/o=JOE/ou=MS/cn=CONFIGURATION/cn=SERVERS/cn=EXCHSRVR/cn=MICROSOFT PUBLIC
	  MDB<A7>DDA:EX=/O=JOE/OU=MS/CN=RECIPIENTS/CN=PUBLICFOLDERNAME8082D0C08082D0C08082D0C06979B64F00271F
	
	The last CN of the string is the directory name of the public folder, which is
	composed of the folder name and a unique ID. In this case, the folder name is
	PUBLICFOLDERNAME.
	
	If message tracking is enabled, you can determine who sent the e-mail message, as
	well as the SMTP address of the public folder.
	
	To track the e-mail message, perform the following steps:
	
	1. Copy the message ID from Event ID 270 to the clipboard. In the Event ID 270
	  example in this article, the message ID is:
	
	  C=US;A= ;P=JOE;L=EXCHSRVR0001131622C7AY64QH
	
	2. In the Exchange Server Administrator program, click Tools, and then click
	  Track Message.
	
	3. If you are prompted to do so, select an Exchange Server computer, and then
	  click OK.
	
	4. In the "Select Message to Track" dialog box, click Cancel.
	
	5. Click Advanced Search.
	
	6. Click By Message ID, and then click OK.
	
	7. Paste the message ID that you copied in step 1 in the Message ID box.
	
	8. In the Look Back box, type the number of days earlier that the event IDs 270
	  and 290 occurred.
	
	9. Click OK.
	
	10. Click Track to track the e-mail message.
	
	11. Click a tracking log entry, and then click Properties to obtain information
	  on the sender and recipient of the e-mail message.
	
	For additional information about e-mail message tracking, please see chapter 17
	of the Microsoft Exchange Server Administrator?s Guide.
	
	
	Additional query words: MTA error Public MDB
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
