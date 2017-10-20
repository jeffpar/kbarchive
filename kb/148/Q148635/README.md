---
layout: page
title: "Q148635: 3270 Applet May Hang If Session Uses Definite Response Only"
permalink: /kb/148/Q148635/
---

## Q148635: 3270 Applet May Hang If Session Uses Definite Response Only

{% raw %}

	Article: Q148635
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The 3270 applet that is included with SNA Server may send a message using the
	Exception Response protocol even though only the Definite Response protocol has
	been negotiated during the bind. Therefore, the 3270 emulator stops responding
	(hangs) unexpectedly.
	
	CAUSE
	=====
	
	The 3270 applet does not check the session parameter all the time to determine
	what type of request it should send.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 2.11 and 2.11
	Service Pack 1. This problem was corrected in the latest Microsoft SNA Server
	2.11 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	
	Additional query words: prodsna 3270 Emulator hang
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
