---
layout: page
title: "Q303938: XIMS: Netscape IMAP4 Clients Cannot View the Message Body"
permalink: /kb/303/Q303938/
---

## Q303938: XIMS: Netscape IMAP4 Clients Cannot View the Message Body

{% raw %}

	Article: Q303938
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Microsoft Outlook Messaging Application Programming Interface (MAPI) client
	sends a message to a distribution list (DL) and multiple mailboxes exist on the
	same information store, when a user uses a Netscape Navigator Internet Message
	Access Protocol, Version 4rev1 (IMAP4) client to open the message, the message
	body is visible to that first user, but when subsequent users open the message,
	the body of the message may not be visible. Restarting the information store or
	changing the order of retrieval does not make the message body visible after the
	message is opened by the first Netscape IMAP4 user.
	
	CAUSE
	=====
	
	This problem can occur if there is a Multipurpose Internet Mail Extensions
	(MIME) message boundary mismatch.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Exchange Server 5.5 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Internet mail
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2655.27 | 
	+-------------------------+
	
	
	
	WORKAROUND
	==========
	
	To work around this problem if a user does not see the message body, advise the
	user to forward the message to himself or herself; this rebuilds the message
	boundary and makes the message body visible.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5.
	
	MORE INFORMATION
	================
	
	
	NOTE: After you apply this fix, the old messages in the information store are
	still missing their body for Netscape IMAP4 clients. The fix only changes this
	behavior for any new messages that are sent from MAPI clients and retrieved by a
	Netscape IMAP4 client.
	
	Additional query words: IS
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
