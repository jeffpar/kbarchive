---
layout: page
title: "Q194933: Problems Displaying Underscored Greek Characters in 3270 Applet"
permalink: /kb/194/Q194933/
---

## Q194933: Problems Displaying Underscored Greek Characters in 3270 Applet

	Article: Q194933
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the SNA Client 3270 emulator is configured to use the Greek() code page,
	certain font sizes may result in the underscore from underlined characters not
	being removed when the screen display is refreshed.
	
	CAUSE
	=====
	
	Greek and eastern European code pages which use the "Courier New" font do not
	leave room for an underline in certain font sizes. In these circumstances, the
	underline appears beneath the actual character cell in the emulator display.
	
	This results in the underline not getting cleared properly when the screen is
	refreshed.
	
	To correct this problem, the font size selected is forced to be one line shorter
	than needed by the character cell to leave room for the underscore.
	
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
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	SP1. This problem was corrected in the latest SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1, 3.0 Service Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service
	Pack 1. This problem was first corrected in SNA Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
