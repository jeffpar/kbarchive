---
layout: page
title: "Q188369: XADM: AUTHINFO Command Causes Information Store Problems"
permalink: /kb/188/Q188369/
---

## Q188369: XADM: AUTHINFO Command Causes Information Store Problems

{% raw %}

	Article: Q188369
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A malicious attacker could connect to the NNTP port of an Exchange Server 5.5 or
	5.0 machine and disrupt the information store process by issuing specific
	sequences of AUTHINFO commands.
	
	When this occurs, an application error similar to one of the following may
	occur:
	
	   - The instruction at "0x00611a00" referenced memory at "0x8b4475db". The memory
	  could not be "read".
	
	   - The instruction at "0x005cd600" referenced memory at "0x068fb87a". The memory
	  could not be "written".
	
	In addition, the Exchange Server information store may stop unexpectedly, causing
	the Internet Mail Service and other Exchange Server information services to no
	longer function properly.
	
	CAUSE
	=====
	
	Improper checking of bounds conditions on certain AUTHINFO command sequences can
	result in a buffer overflow.
	
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
	
	  ftp://ftp.microsoft.com/bussys/exchange/exchange-public/fixes/Eng/Exchg5.0/Post-SP2-STORE/
	
	
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: ims internet mail connector imc
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
