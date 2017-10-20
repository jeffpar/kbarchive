---
layout: page
title: "Q241632: XCON: Event ID 290 When Sending Mail to a Distribution List"
permalink: /kb/241/Q241632/
---

## Q241632: XCON: Event ID 290 When Sending Mail to a Distribution List

{% raw %}

	Article: Q241632
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user has rights to a distribution list, but messages sent to that distribution
	list result in the following non-delivery report (NDR):
	
	  Your message did not reach some or all of the intended recipients.
	
	  Subject: Test 2 Users
	  Sent: 9/14/99 10:07 AM
	
	  The following recipient(s) could not be reached:
	
	  Test User on 9/14/99 10:08 AM
	  A restriction in the system prevented delivery of the message. The MTS-ID of
	  the original message is: c=US;a= ;p=ORGANIZATION;l=SERVER-990914140729Z-8
	  MSEXCH:MSExchangeMTA:Site:SERVER
	
	Additionally, the application log shows the following error message:
	
	  Event ID: 290
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	  A non-delivery report (reason code restricted-delivery and diagnostic code
	  Omit any diagnostic code) is being generated for message C=US;A=
	  ;P=Organization;L=SERVER-990913203559Z-36. It was originally destined for
	  DN:/o=ORGANIZATION/ou=SITE/cn=RECIPIENTS/cn=TESTU<A7> (recipient number 6), and
	  was to be redirected to . [MTA DISP:RESULT 22 136] (12)
	
	CAUSE
	=====
	
	This is by design. The sender does not have permission to send to one of the
	nested distribution lists or users.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Verify that the sender has permissions to the distribution list.
	
	2. Verify that the sender has permissions to each distribution list nested
	  within the specified list.
	
	3. Verify that the sender has permissions to each user on the distribution list.
	
	4. Give the sender permissions to ALL distribution lists and users that are part
	  of the selected distribution list.
	
	NOTE: Rights to distribution lists are not inherited.
	
	The error message contains the information about which user or distribution list
	returned the error. The event 290 is logged for each user or list that does not
	get the message because of delivery restrictions.
	
	Also, the NDR contains information about which message transfer agent (MTA)
	returned the error and which user and list did not receive the message because
	of delivery restrictions.
	
	MORE INFORMATION
	================
	
	To determine where the restriction is in place, start with the NDR. The last
	line of the NDR contains the MTA that returned the error in the following
	format:
	
	  MSEXCH:MSExchangeMTA:<Site>:<Server>
	
	Open the application event log on that server, and look for event 290. The text
	of the error message specifies the user or recipient that has the restriction in
	place.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Component         : MTA
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
