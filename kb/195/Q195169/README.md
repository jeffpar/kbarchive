---
layout: page
title: "Q195169: NvRunCmd Hangs When it Receives Data with a Certain Length"
permalink: kb/195/Q195169/
---

## Q195169: NvRunCmd Hangs When it Receives Data with a Certain Length

	Article: Q195169
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
	
	NvRunCmd may stop responding (hang) when it receives a certain amount of data.
	
	This was observed when a Type (for example, type c:\Test.txt) was issued, where
	the file length to be typed was 242 bytes in total.
	
	CAUSE
	=====
	
	In certain situations, the NvRunCmd service reads beyond the end of a receive
	buffer, when it gets data of a certain length.
	
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
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	3.0, 3.0 Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0
	Service Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack
	4.
	
	Additional query words: NetView NvRunCmd
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
