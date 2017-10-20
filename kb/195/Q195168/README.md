---
layout: page
title: "Q195168: SNACFG Doesn't Output Complete Data for the ADDPARTNER Option"
permalink: /kb/195/Q195168/
---

## Q195168: SNACFG Doesn't Output Complete Data for the ADDPARTNER Option

{% raw %}

	Article: Q195168
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The ADDPARTNER option may not display all of its available information when an
	output file is created using the SNACFG /PRINT command.
	
	In the output file, you may see line similar to the following:
	
	APPCLLU LOCALLU
	
	  /ADDPARTNER:REMOTELU,#INTER,HOSTCONN
	
	When multiple local Advanced Program-to-Program Communications (APPC) logical
	units (Lus) with the same alias name are configured on several SNA Servers
	within the same SNA subdomain, SNA Server uses the first instance of the local
	APPC LU alias it finds. In these cases, SNACFG fails to add the following
	instances of the partner APPC LUs when used to configure SNA Servers in
	unattended mode.
	
	CAUSE
	=====
	
	This problem appears since the Server name is not added to the output file. To
	support the multinode functionality introduced with SNA Server 4.0, the instance
	of the Node (SNA Server Service) needs to be added as well.
	
	With the corrected version, the Server name and Node name are now added
	correctly.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	WORKAROUND
	==========
	
	To work around the problem, you need to add the Server name and Node name in the
	output file as shown below:
	
	APPCLLU LOCALLU Server\Node
	
	  /ADDPARTNER:REMOTELU,#INTER,HOSTCONN
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	3.0, 3.0 Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0
	Service Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack
	4.
	
	Additional query words: SNACFG ADDPARTNER APPCLLU
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
