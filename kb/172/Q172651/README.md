---
layout: page
title: "Q172651: SNA Workstation Traps When an APPC Application Calls DISPLAY()"
permalink: /kb/172/Q172651/
---

## Q172651: SNA Workstation Traps When an APPC Application Calls DISPLAY()

	Article: Q172651
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1; winnt:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	- Microsoft SNA Workstation, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an APPC application running on SNA Workstation makes a DISPLAY() call with
	disp.mode_def_info=AP_YES, SNA Workstation traps and generates a Drwatson32.log
	file.
	
	CAUSE
	=====
	
	The SNA Server Service incorrectly parses the configuration file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Workstation versions 3.0 and
	3.0 Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, a change to Snaservr.exe is implemented on both SNA Server
	and SNA Workstation so that the trap in s1pnsdmd does not occur when the
	DISPLAY() call is made. Although you only see this problem with SNA Workstation,
	the fix changes Snaserver.exe in both SNA Server and SNA Workstation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAW300SP1 kbSNAW300 kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1; winnt:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
