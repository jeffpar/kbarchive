---
layout: page
title: "Q164589: IBM DFT Link Service Not Integrated In SNA Server Manager"
permalink: kb/164/Q164589/
---

## Q164589: IBM DFT Link Service Not Integrated In SNA Server Manager

	Article: Q164589
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In SNA Server Manager, if you click Link Service on the Insert menu to add the
	IBM DFT Link Service, you receive the following message:
	
	  Link Service Error
	
	  This link service cannot be configured using the SNA Server Manager.
	  To configure this link service, run the External Link Services tool
	  from the Tools Menu.
	
	CAUSE
	=====
	
	The IBM DFT Link Service was not written so that it could be fully integrated
	into the SNA Server Manager program when SNA Server 3.0 was released.
	
	RESOLUTION
	==========
	
	To work around this problem, use the External Link Services tool to install the
	IBM DFT Link Service.
	
	The IBM DFT Link Service has been updated so that it is now fully integrated into
	SNA Server Manager so that it can be added using the Insert -> Link Service
	option with Manager. The updated files are:
	
	  <snaroot>\setup\server\snafile.stf
	  <snaroot>\setup\server\snafile.inf
	  <snaroot>\system\hwsetup\ibmdft\ibmdfcfg.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: coax 3278/79
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
