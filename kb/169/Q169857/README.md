---
layout: page
title: "Q169857: Print Service Ignores Bytes in LU3 Datastream"
permalink: /kb/169/Q169857/
---

## Q169857: Print Service Ignores Bytes in LU3 Datastream

{% raw %}

	Article: Q169857
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print an LU3 print job through the SNA Server Print service, characters
	that are not ASCII printable characters or printer definition file (PDF) codes
	are ignored. In the following example, the characters 5F 4DF1F0E4 (in the first
	line) will be ignored. (These characters are the escape sequence designating the
	printer symbol set [PC-8]).
	
	  F5C8405F 4DF1F0E4 5F4DA2F0 97F1F64B
	  F6F788F8 4BF5A5F0 A2F082F0 E35F5093
	  F0D35F50 93F34BF1 F0C34040 40404040
	  40404040 40404040 40404040 40404040
	  40404040 40404040 40404040 40404040
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	SP1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
