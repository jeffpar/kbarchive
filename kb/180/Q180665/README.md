---
layout: page
title: "Q180665: SNA Server Code Conversion Between 037 And 932 does not work"
permalink: kb/180/Q180665/
---

## Q180665: SNA Server Code Conversion Between 037 And 932 does not work

	Article: Q180665
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An application which uses the Trnsdt API to convert characters between code page
	037 and 932 will receive an trnsdt error.
	
	When using the SNA Server 4.0 COM Transaction Integrator (COMTI) FriendShip
	Insurance Playback demo on Japanese versions of Windows NT, this problem causes
	the following error message to occur:
	
	  Event ID: 1512
	  Source: COM Transaction Integrator
	  Description: An error occurred when converting character parameter
	  DATE_OF_SERVICE in method INSERTCLAIM.
	
	CAUSE
	=====
	
	This code page conversion between 037 and 932 does not work correctly using the
	COMTI FriendShip Insurance Playback Demo on Japanese versions of Windows NT.
	
	Note: This problem may also occur with other applications that use the Trnsdt API
	to perform require code page conversion using these code pages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	Service Pack 1 (SP1), 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server version 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: japanese
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
