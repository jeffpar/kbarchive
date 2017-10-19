---
layout: page
title: "Q181025: Print Server Doesn't Support Vertical Channel Select SCS Code"
permalink: /kb/181/Q181025/
---

## Q181025: Print Server Doesn't Support Vertical Channel Select SCS Code

	Article: Q181025
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Print Server does not support the Vertical Channel Select(VCS) SCS code (X'04
	xx'). When Print Server receives a VCS command in the datastream, it does an LF
	(Line Feed, X'25') instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2 and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the fix applied, the Ppd3270.dll file is changed so that it recognizes the
	VCS command and handles it appropriately.
	
	In one scenario, a Host was sending down the following SCS sequence:
	
	  2B C2 05 62 01 62 0B
	
	This is a Set Vertical Format command, with the following parameters:
	
	  05 - length of data
	  01 - top margin
	  62 - bottom margin
	       0B - set vertical tab stop to line 11
	
	The Host then sent down the following:
	
	  04 82
	
	This is a Vertical Channel Select command (04), selecting vertical channel 2
	(82). Vertical channel 1 is always the top margin and vertical channel 2 is the
	first vertical tab stop as defined in the Set Vertical Format command above
	(that is, line 11). Print Server processes this command by issuing 1 line feed,
	but it should issue 10 line feeds (to get to line 11.
	
	This can be clearly seen with extended job tracing turned on:
	
	  s3pr1dat.c(313)     byte: 04 ->  LF/VCS
	  s3prdscs.c(61)      ******* FLUSH DATA **********
	  winvprtj.c(4725)    LF - MOVE PAGE POSITION DOWN A LINE LINE
	  s3prdscs.c(42)      ******* PARSE DATA **********
	  s3pr1dat.c(2182)    byte: 82 ->  second byte of VCS - ignore
	
	Printserver is ignoring the '82.'
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
