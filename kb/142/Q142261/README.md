---
layout: page
title: "Q142261: XFOR: Correct Syntax For Debug Option of Restest.exe"
permalink: /kb/142/Q142261/
---

## Q142261: XFOR: Correct Syntax For Debug Option of Restest.exe

{% raw %}

	Article: Q142261
	Product(s): Microsoft Exchange
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Support directory contains a utility, Restest.exe,
	for testing TCP/IP host resolution the same way that the Microsoft Exchange
	Internet Mail Connector (IMC) performs host resolution. However, it does not
	return additional debugging information when using the -debug switch.
	
	WORKAROUND
	==========
	
	The proper syntax for the Restest utility is:
	
	  restest -debug <domain>
	
	where <domain> is the part of the SMTP address to the right of the @ sign.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.00
	
	=============================================================================
	

{% endraw %}
