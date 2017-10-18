---
layout: page
title: "Q171935: TN3270 Server Incorrectly Truncates Last Character of SSCP Data"
permalink: kb/171/Q171935/
---

## Q171935: TN3270 Server Incorrectly Truncates Last Character of SSCP Data

	Article: Q171935
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you connect through the SNA Server TN3270 server using a TN3270 emulator,
	the last character of the initial host screen (USSMSG10) does not appear.
	
	CAUSE
	=====
	
	The SNA Server TN3270 server incorrectly truncates the last character of SSCP
	data. This problem only occurs with TN3270 sessions. If an emulator connects
	using TN3270E protocol, this problem does not occur.
	
	
	RESOLUTION
	==========
	
	A hotfix to SNA Server 3.0 (post SP1) is available to correct this problem. The
	updated module is Tn3servr.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 Service
	Pack 1 (SP1). This problem was corrected in the latest SNA Server version 3.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
