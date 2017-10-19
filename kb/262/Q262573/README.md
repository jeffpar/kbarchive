---
layout: page
title: "Q262573: Japanese CICS File Transfer Fails with 3270 Applet"
permalink: /kb/262/Q262573/
---

## Q262573: Japanese CICS File Transfer Fails with 3270 Applet

	Article: Q262573
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CICS files that are downloaded by using the 3270 SNA applet are not correctly
	translated from EBCDIC to JISCII. The files remain in EBCDIC and are not usable
	by the client. This problem only occurs with CICS downloads.
	
	CAUSE
	=====
	
	The file transfer utility is searching for an incorrect command line string.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, version 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
