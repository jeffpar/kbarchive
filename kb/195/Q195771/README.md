---
layout: page
title: "Q195771: Print Server Uses 100% CPU If No Line Formatting Option Enabled"
permalink: kb/195/Q195771/
---

## Q195771: Print Server Uses 100% CPU If No Line Formatting Option Enabled

	Article: Q195771
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	CPU utilization for SNA Server's Host Print service (Snaprint.exe) may reach 100
	percent when 3270 print sessions are configured to use the "No Line Formatting"
	option. When this problem occurs, all host print jobs appear to stop printing or
	print very slowly.
	
	CAUSE
	=====
	
	Print server fails to properly handle some print formatting data that it
	receives when the data is split across two RUs (Request Units) when the "No Line
	Formatting" option is configured on the 3270 print session receiving the data.
	
	This does not occur if the "No Line Formatting" option is not enabled.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 Service
	Pack 2, 3.0 Service Pack 3, 4.0, and 4.0 Service Pack 1. This problem was first
	corrected in SNA Server 3.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	The "No Line Formatting" option was added in SNA Server 3.0 Service Pack 2. The
	SNA Server 4.0 Online Help file describes this option as follows:
	
	No Line Formatting:
	
	Prevents the SNA Print Service from inserting its own Carriage Return/Line Feed
	(CR/LF) according to the dimensions specified in the Default Page Width field
	(also on this property page). As No Line Formatting is a special case, this box
	is usually not checked. It is a useful option when using physical printers that
	do their own wrapping or are told to do their own wrapping with an Esc sequence.
	The Esc sequence that causes a printer to do its own End-of-line wrap on PCL
	printers is <Esc>&s0C.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
