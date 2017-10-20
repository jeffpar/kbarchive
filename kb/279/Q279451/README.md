---
layout: page
title: "Q279451: MSN Companion sends but cannot receive e-mail"
permalink: /kb/279/Q279451/
---

## Q279451: MSN Companion sends but cannot receive e-mail

{% raw %}

	Article: Q279451
	Product(s): The Microsoft Network
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN Companion, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MSN Companion can send e-mail fine, but has never been able to receive the
	e-mail that people send.
	
	CAUSE
	=====
	
	There are two steps to setting up an MSN Companion e-mail account:
	
	1. Create a mailbox on the Hotmail servers.
	
	2. Set correct routing on the MSN servers so that e-mail sent to your address at
	  @msn.com gets routed into the Hotmail mailbox.
	
	In this case, the Hotmail account was created, which is why you can send e-mail
	just fine. However, the e-mail routing was never set up properly. So, the e-mail
	that was sent to your @msn.com address never gets routed to the mailbox that the
	MSN Companion uses.
	
	RESOLUTION
	==========
	
	1. Reset the device with the "MURMUR" code to re-run Setup. See Q279037 - MSN
	  Companion Troubleshooting Tool MURMUR
	
	2. When asked for the member id and password, type in your existing member id
	  and most recent password.
	
	3. Run through the rest of Setup.
	
	4. If Setup shows an e-mail error on the You're Done! page, then you will need
	  to wait a few minutes and try again from step 1.
	
	If Setup succeeds with no errors, then your routing has been set up correctly.
	Note: if the process doesn't work the first time, there's a chance that the MSN
	servers are down. This is always a possibility with every e-mail issue.
	
	Additional query words: kbimu e-mail
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbMSNSearch kbMSNCompanion
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
