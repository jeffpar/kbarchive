---
layout: page
title: "Q164645: SNACFG.EXE Cannot Add Dependent LU 6.2 on SNA 3.0"
permalink: kb/164/Q164645/
---

## Q164645: SNACFG.EXE Cannot Add Dependent LU 6.2 on SNA 3.0

	Article: Q164645
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
	
	When using a script to try to create dependent APPC LU 6.2 LUs on a computer
	running SNA Server 3.0, you will receive the following error:
	
	  This configuration contains un-partnered dependent Local LU(s). These LUs
	  have been discarded.
	
	CAUSE
	=====
	
	This functionality was not included in SNA Server 3.0.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below. With the hotfix, the
	APPCLLU command has the following new option:
	
	  /CONNECTION:connection name
	
	This option allows a connection to be specified on a dependent LU 6.2 using a
	script.
	
	The updated module is:
	
	  <snaroot>\System\Snacfg.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna sna30 snacfg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
