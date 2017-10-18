---
layout: page
title: "Q164592: Dynamically Defined Dependent LU Support for LUA LUs"
permalink: kb/164/Q164592/
---

## Q164592: Dynamically Defined Dependent LU Support for LUA LUs

	Article: Q164592
	Product(s): Microsoft SNA Server
	Version(s): 2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft SNA Server versions 2.11 and later provide support for Dynamically
	Defined Dependent LUs (DDDLU) for 3270 LUs. However, DDDLU support for LUA LUs
	is not provided in SNA Server.
	
	For additional information on support for DDDLUs in Microsoft SNA Server, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q161492 INFO: LU Session Activation Using Dynamically Defined Dependent LUs
	
	CAUSE
	=====
	
	When DDDLU support was originally added to SNA Server, DDDLU support was only
	implemented for 3270 LUs.
	
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available. It provides DDDLU support for LUA LUs.
	By default, DDDLU support for LUA LUs is disabled. To enable this support, the
	following registry entry must be set to specify the Model Number to be requested
	by SNA Server when an LUA LU is dynamically activated.
	
	  HKEY_LOCAL_MACHINE
	     \SYSTEM
	        \CurrentControlSet
	           \Services
	              \SnaServr
	                 \Parameters
	                    \LUADDDLUModel:REGDWORD: <Model Number>
	
	Model Number can be 1 through 5 to correspond to supported 3270 Model Numbers.
	
	The following files were updated to add this support:
	
	  <snaroot>\system\snaservr.exe
	  <snaroot>\system\trcservr.exe (used for debugging purposes only)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.11, 2.11
	SP1, and 3.0. This problem was corrected in the latest Microsoft SNA Server 3.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: lugroup luseed
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1
	Version           : :2.11,2.11 SP1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
