---
layout: page
title: "Q172809: SNA Server Connection to AS/400 Remains in Pending State"
permalink: kb/172/Q172809/
---

## Q172809: SNA Server Connection to AS/400 Remains in Pending State

	Article: Q172809
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you activate an SNA Server 802.2 DLC connection to an AS/400 (over Token
	Ring or over Ethernet), the SNA Server connection status remains Pending. This
	can occur if the AS/400 line description is in an RCYPND (Recovery Pending)
	status. To check for this condition, issue the following AS/400 command:
	
	  " WRKCFGSTS *lin <line name> or WRKLIND <line name> then option 8
	  to work
	  with configuration status" (without the quotation marks)
	
	NOTE: There also may be an Application event log error similar to the following:
	
	  Event ID: 230
	  Description: Remote station not responding to XID commands
	
	WORKAROUND
	==========
	
	If the AS/400 line status is RCYPND, do the following:
	
	1. Stop the SNA Server connection from the SNA Server Admin or Manager.
	
	2. From the AS/400 WRKCFGSTS screen, choose option 2 to vary off the line
	  status. Wait for the line to show a status of Varied Off. (Press F5 to
	  refresh the screen.)
	
	3. Choose option 1 to Vary On the line description. Press F4 for the Vary
	  Configuration dialog box. The last option in this box is Reset, which is No
	  by default. Change to Yes. This will reset the Ethernet Card in the AS/400.
	  Status should then change on the AS/400 to Vary On Pending.
	
	4. Restart the SNA Server service. The connection should become active.
	
	If the AS/400 line description is not in Recovery Pending status, then check for
	these other possible causes:
	
	- Determine whether the APPC controller status is Recovery Pending also.
	
	- Check for one of the conditions described in the following Microsoft
	  Knowledge Base article:
	
	  Q126393 SNA Server Configurations That Produce XID Rejections
	
	- If you are connecting to an AS/400 across a Cisco router, check the following
	  Knowledge Base article:
	
	  Q159462 SNA Server 802.2 Connection Stays in Pending State
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
