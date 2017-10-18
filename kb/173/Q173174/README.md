---
layout: page
title: "Q173174: Activating SNA DLC 802.2 Local SAP 0xC4 Fails with Error #0235"
permalink: kb/173/Q173174/
---

## Q173174: Activating SNA DLC 802.2 Local SAP 0xC4 Fails with Error #0235

	Article: Q173174
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the SNA Server service, the service starts but the following
	error message appears:
	
	  SNA Server - ERROR #0235
	  All SAP's failed to open, no connection is usable
	
	Also the following events are logged in the Windows NT application event log:
	
	  Event ID: 234
	  Source: SNA DLC Link Service
	  Type: Warning
	  Description: Failed to open SAP 196, error (43)
	  Some connections may now be unavailable
	
	  EXPLANATION
	  The DLC (802.2) link service failed to open a service access point (SAP)
	  during initialization. If error code 43 is displayed, the SAP has already
	  been opened by another link process.
	
	Followed by:
	
	  Event ID: 235
	  Source: SNA DLC Link Service
	  Type: Error
	  Description: All SAP's failed to open, no connection is usable
	
	This problem occurs if an SNA Server 802.2 DLC link service is configured to use
	a local SAP address of 0xC4. This DLC SAP address is always opened by the
	Windows NT Hpmon.dll file (a component of the Hewlett Packard DLC- attached
	Network Print support), regardless of whether a network attached printer is
	being used.
	
	CAUSE
	=====
	
	When you configure a large number of SNA Server DLC 802.2 connections to the
	same IBM host address, a unique SNA DLC 802.2 link service must be used for each
	connection, where the local SAP address is incremented by 4 for each link
	service. For example, the first link/connection uses a local SAP address of
	0x04, the second uses 0x08, the third uses 0x0C, and so on. If up to 49 802.2
	DLC link services are being used, the local SNA SAP address for the 49th
	link/connection uses SAP address 0xC4.
	
	However, SAP address 0xC4 is automatically opened by Hpmon.dll when the Windows
	NT print subsystem initializes, and it cannot be changed. This causes a conflict
	with the 49th SNA Server 802.2 link service/connection, leading to the above
	error messages.
	
	
	WORKAROUND
	==========
	
	There are two possible workarounds for this problem:
	
	- Skip local SAP address 0xC4. Instead of using 0xC4, use the next SAP or 0xC8.
	
	- Disable HPMON, if it is not being used.
	
	The Hpmon.dll file can be renamed so that it is not loaded, assuming the Windows
	NT Server computer is not supporting DLC-attached HP network printers. Note that
	TCP/IP attached HP printers are not affected by this module, only DLC attached
	printers. To disable the Hpmon.dll file, perform the following procedure:
	
	1. Rename <ntroot>\system32\HPMON.DLL to HPMON.OLD.
	
	2. Shut down and restart the Windows NT Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.11 (all SP),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
