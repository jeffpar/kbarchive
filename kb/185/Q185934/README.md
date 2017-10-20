---
layout: page
title: "Q185934: XCON: Exchange Server MTA Always Uses RTSE Window Size 3"
permalink: /kb/185/Q185934/
---

## Q185934: XCON: Exchange Server MTA Always Uses RTSE Window Size 3

{% raw %}

	Article: Q185934
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you connect Microsoft Exchange Server to other X.400 systems or to other
	Exchanger Servers computers via an X.400 connector, Exchange Server does not use
	a reliable transfer service element (RTSE) window size greater than 3. Exchange
	Server requests the window size is 3, even if the configuration in the MTA
	Override Property Page says 5 for example. If the connection is opened by
	another MTA, Exchange Server will negotiate the RTSE window size down to 3.
	
	RESOLUTION
	==========
	
	Exchange Server 5.0
	-------------------
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Exchange Server 5.0
	-------------------
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 5.0.
	
	Exchange Server 5.5
	-------------------
	
	Microsoft has confirmed this to be a problem in Exchange Server versions 5.5.This
	problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	MORE INFORMATION
	================
	
	The new Exchange MTA will now use the RTSE window size as specified in the
	Exchange Server Administrator program.
	
	
	Additional query words:
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
