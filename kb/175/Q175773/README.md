---
layout: page
title: "Q175773: SNACFG Does Not Add an LUA Pool to a TN3270 Server"
permalink: kb/175/Q175773/
---

## Q175773: SNACFG Does Not Add an LUA Pool to a TN3270 Server

	Article: Q175773
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SNACFG utility to add an LUA pool to a TN3270 server, SNACFG
	indicates that the update was successfully written, however, SNA Server Manager
	does not show the pool assigned to the TN3270 service.
	
	STATUS
	======
	
	The SNACFG utility has been updated to correct this problem.
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0 Service
	Pack 2 (SP2).
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The commands and options listed below are available for configuring TN3270
	session information when using the SNACFG utility.
	
	NOTE: SNACFG does not support any TN3270 configuration options prior to SNA
	Server 3.0 Service Pack 2.
	
	  SNACFG TN3SESSION /LIST
	  SNACFG TN3SESSION tn3sessionname
	  SNACFG TN3SESSION tn3sessionname /PRINT
	  SNACFG TN3SESSION tn3sessionname /ADD [options]
	  SNACFG TN3SESSION tn3sessionname [options]
	  SNACFG TN3SESSION tn3sessionname /DELETE
	
	Available options are:
	
	  /TN3SERVER:text
	  /ASSOCNAME:text
	  /MAXSESSIONS:value
	  /POOLTYPE:{ GenericDisplay | SpecificDisplay | GenericPrinter |
	     SpecificPrinter | AssocPrinter }
	  /MODELTYPES:model[,model,...]
	  /PORTNUMBER:value
	
	Values for TN3270 model types are:
	
	 Model2 | Model3 | Model4 | Model5 |
	 3275_2 | 3276_2 | 3277_2 | 3278_2 | 3278_2_E | 3279_2 | 3279_2_E |
	 3276_3 | 3278_3 | 3278_3_E | 3279_3 | 3279_3_E |
	 3276_4 | 3278_4 | 3278_4_E | 3279_4 | 3279_4_E |
	 3278_5 | 3278_5_E | 3279_5 | 3279_5_E |
	 Dynamic | 3287_1
	
	An administrator can use the following syntax to add an LUA pool named LUAPOOL1
	to a TN3270 server called SRV-01-GJS:
	
	  SNACFG TN3SESSION LUAPOOL1 /ADD TN3SERVER:SRV-01-GJS /MAXSESSIONS:30000
	  /POOLTYPE:GenericDisplay /MODELTYPES:Model2
	
	Additional query words: snacfg lua pool tn3270
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
