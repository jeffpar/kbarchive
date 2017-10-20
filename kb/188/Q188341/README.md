---
layout: page
title: "Q188341: XFOR: AUTH/EHLO Commands Cause Internet Mail Service to Stop"
permalink: /kb/188/Q188341/
---

## Q188341: XFOR: AUTH/EHLO Commands Cause Internet Mail Service to Stop

{% raw %}

	Article: Q188341
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 05-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A malicious attacker might connect to the SMTP port of an Microsoft Exchange
	Server 5.0 or 5.5 computer and disrupt the Internet Mail Service by issuing
	specific sequences of AUTH or XAUTH commands. When this occurs, the following
	error message may be displayed:
	
	  msexcimc.exe - Application Error
	
	  The instruction at "0x77f7d514" reference memory at "0x711cc771". The memory
	  could not be written.
	
	CAUSE
	=====
	
	Improper checking of bounds conditions on certain AUTH or XAUTH command
	sequences may result in a buffer overflow.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-IMS/
	
	
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: base64 extended hello helo ims connector imc
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
