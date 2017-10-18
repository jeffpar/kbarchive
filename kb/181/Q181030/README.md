---
layout: page
title: "Q181030: SNAPRINT Ignores SCS Codes, Print Job Ignores SCS Formatting"
permalink: kb/181/Q181030/
---

## Q181030: SNAPRINT Ignores SCS Codes, Print Job Ignores SCS Formatting

	Article: Q181030
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print Server may not honor SCS codes if you have selected the No Line Formatting
	option for 3270 print sessions. The SCS code(s) are ignored by the print
	service, and this causes the print job to ignore SCS formatting and command
	execution.
	
	In one reported case, Carriage Returns (0x0D) were ignored when they were
	followed by certain combinations of other control codes and 3270 print sessions
	were configured for No Line Formatting.
	
	CAUSE
	=====
	
	The Print service was written to ignore SCS codes if No Line Formatting is
	selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP2 and
	4.0. This problem was corrected in the latest SNA Server versions 3.0 and 4.0
	U.S. Service Packs. For information on obtaining these Service Packs, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
