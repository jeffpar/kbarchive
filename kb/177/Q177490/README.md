---
layout: page
title: "Q177490: TN3270 Does Not Appear in Manager Without TN5250 Installed"
permalink: kb/177/Q177490/
---

## Q177490: TN3270 Does Not Appear in Manager Without TN5250 Installed

	Article: Q177490
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the TN3270 Service, the TN3270 Service folder does not appear
	in SNA Manager unless the TN5250 Service is also installed.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. Run SNA Server Setup again, and install the TN5250 Service.
	
	2. After installation, start SNA Server Manager. Both the TN3270 Service and the
	  TN5250 Service folders are listed.
	
	3. The TN5250 Service can be uninstalled through Setup, if not needed, and the
	  TN3270 Service folder will still appear in SNA Manager, as it should.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 SP2. This problem
	was corrected in the latest SNA Server version 3.0 U.S. Service Pack. For
	information on obtaining this Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
