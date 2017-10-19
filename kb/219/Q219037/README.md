---
layout: page
title: "Q219037: XCLN: Advanced Security Setting Not Consistent"
permalink: /kb/219/Q219037/
---

## Q219037: XCLN: Advanced Security Setting Not Consistent

	Article: Q219037
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbExchange500preSP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server 5.0 Client advanced security setting is not consistent when
	you reply to an encrypted and digitally signed message.
	
	When you reply to messages that have been encrypted and digitally signed, the
	security setting on the reply message is different, depending on whether the
	original message is open in a separate window or highlighted in the Inbox. When
	a user receives encrypted and digitally signed messages and if the user has
	encryption and digital signature on by default, regardless of the whether the
	message is replied to/forwarded from a message window or from the Inbox, all
	replies or forwards should be encrypted and signed. However, when the user opens
	the message and clicks the Reply button, the resulting message is signed but not
	encrypted.
	
	CAUSE
	=====
	
	The Exchange Windows NT Client does not preserve the security settings when you
	forward a message from an open item.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.0 service pack that contains
	this fix.
	
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
	
	Component: Exchange Windows NT Client
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Etexch32.dll | 5.0.1461.87 | 
	+----------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Windows NT
	Client version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
