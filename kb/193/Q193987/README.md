---
layout: page
title: "Q193987: Win95 Client May Trap When Client/Server Encryption is Enabled."
permalink: /kb/193/Q193987/
---

## Q193987: Win95 Client May Trap When Client/Server Encryption is Enabled.

	Article: Q193987
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server Windows 95 clients that connect to an SNA Server from a non- trusted
	Windows NT domain may generate an access violation in Snakrnl.dll if the SNA
	Server is configured to support data encryption for the Everyone group. This
	problem has been observed when starting the SNA Server Win3270 tool, which led
	to the following error message being displayed:
	
	  WIN3270 caused an invalid page fault in module Snakrnl.dll at 0137:620867e7.
	
	This problem may occur when running the SNA Server Windows 95 client on Windows
	95, Windows 98, or Windows NT.
	
	CAUSE
	=====
	
	Data encryption is not supported across non-trusted Windows NT domains. If the
	decryption fails, the received data will be processed as a good message, which
	causes an access violation in Snakrnl.dll.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The updated causes the client connection to be closed. In addition, the
	following error message is displayed, "ERROR - Reading SNA Server
	Configuration", rather than generating an access violation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
