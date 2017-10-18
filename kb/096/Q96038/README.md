---
layout: page
title: "Q96038: PROFS: System Abend 0C2-0000 Attempting to IPL MS-RSCS"
permalink: kb/096/Q96038/
---

## Q96038: PROFS: System Abend 0C2-0000 Attempting to IPL MS-RSCS

	Article: Q96038
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to PROFS, version 2.1b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After adding the Reroute statements to the MS-RSCS computer, an attempt to IPL
	(by logging off and back into the VM ID) fails and the computer generates the
	message:
	
	  Abend code = CSIABD230E Command
	  EXEC Failed - System Abend 0C2-0000.
	
	CAUSE
	=====
	
	When you create the secondary RSCS machine, you run the VM Host Access
	installation program and the MSADD program. MSADD prompts for the PROFS gateway
	node name and the corresponding network and postoffice names. The program
	generates simple Route and Reroute statements which you are prompted to add to
	the PROFILE GCS file on the RSCS and MS-RSCS machines.
	
	The error occurs because the GCS tables must refer to the newly created MS-RSCS
	machine.
	
	RESOLUTION
	==========
	
	Add the required references to the MS-GATE and/or MS-RSCS machine in the GCS
	assembler tables and recompile the GCS.
	
	
	Additional query words: 3.10 3.20 3.30
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS210b
	Version           : :2.1b
	
	=============================================================================
	
