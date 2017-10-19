---
layout: page
title: "Q171622: CMINIT Returns Error 24 if Symbolic Name Not Space-Padded"
permalink: /kb/171/Q171622/
---

## Q171622: CMINIT Returns Error 24 if Symbolic Name Not Space-Padded

	Article: Q171622
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Calling CPIC Initialize_Conversation() (or CMINIT) may fail with error 24, or
	CM_PROGRAM_PARAMETER_CHECK.
	
	CAUSE
	=====
	
	The CPIC application must supply a sym_dest_name parameter to CMINIT. If the
	sym_dest_name is less than eight characters long, the CPIC interface requires
	the application to pad the name with spaces, or CPIC fails to match the name
	against the CPIC symbolic names configured in the SNA Server configuration file,
	causing CPIC to return CM_PROGRAM_PARAMETER_CHECK.
	
	The CPIC Programmer's Guide does not document the requirement of providing a
	space-padded sym_dest_name.
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	- Space-pad the sym_dest_name passed to CMINIT, if the name is less than eight
	  characters long.
	
	An updated CPIC DLL is also available which automatically space-pads the name to
	eight characters, if the application did not supply the sym_dest_name in this
	format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 2.0, 2.1,
	2.11, 2.11 Service Pack 1 (SP1), 2.11 SP2, and 3.0 SP1.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix is now available for systems running SNA Server 2.11 SP2, but has
	not been fully regression-tested and should be applied only to systems
	experiencing this specific problem. Unless you are severely impacted by this
	specific problem, Microsoft recommends that you wait for the next Service Pack
	that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200 kbSNAServ211 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
