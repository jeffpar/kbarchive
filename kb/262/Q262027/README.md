---
layout: page
title: "Q262027: Enabling SyncPoint May Cause SNA Server Event 60, 730"
permalink: kb/262/Q262027/
---

## Q262027: Enabling SyncPoint May Cause SNA Server Event 60, 730

	Article: Q262027
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): _IK sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3
	Last Modified: 29-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following events are logged in the Windows NT Application Event Log on the
	SNA Server:
	
	Event ID: 60
	Source: SNA Server
	Description: Failed to invoke APPC TP 06F2 (), local LU = <Local APPC LU>, Sense Data = 84c0000
	
	Event ID: 730
	Source: SNA Server
	Description:  The SNA Server was unable to locate an invokable TP UN2, APPC LU Alias <Local APPC LU>, Workstation name: <SNA Server Name>.
	
	NOTE: If Event 60 is occurring for an advanced program-to-program communications
	(APPC) transaction program (TP) name other than 06F2 (UN2), then this article
	does not apply to the problem.
	
	CAUSE
	=====
	
	If an SNA Server local APPC Logical Unit (LU) SyncPoint Support checkbox is
	selected, SNA Server indicates support for SyncPoint in its BIND request when it
	establishes an LU6.2 session with the host subsystem. The subsystem (such as the
	Customer Information Control System [CICS]) may detect this support and initiate
	an attach request to start a conversation with the SNA Server Resynchronization
	transaction program (TP) in order to perform an Exchange Log Names request,
	which is required for SyncPoint-enabled LUs. However, if the COM Transaction
	Integrator (COMTI) has not been installed with SNA Server, this TP will not
	exist and the host request will be rejected.
	
	RESOLUTION
	==========
	
	Install COMTI to provide SyncPoint support, or if SyncPoint support has been
	enabled in error, then disable SyncPoint support on the local APPC LUs.
	
	To disable SyncPoint support, open Properties for the local LU specified in the
	events, and go to the Advanced tab. Under SyncPoint Support, clear Enable, save
	the configuration, and then stop and restart the SNA Server Service.
	
	MORE INFORMATION
	================
	
	The SyncPoint function allows all TPs that are processing a distributed
	transaction to coordinate error recovery and maintain consistency among
	distributed resources, such as databases.
	
	The SyncPoint function affects protected resources. These include conversation
	resources and implementation or installation-designated resources, such as
	databases. Any changes to a protected resource are logged so that they can be
	either backed out (reversed) if the transaction detects an error, or committed
	(made permanent) if the transaction is successful.
	
	In order for a protected conversation to be allocated, both LUs must support the
	IBM Sync Level 2 protocol. The two LUs exchange their synchronization support
	levels in byte 24 of the BIND. The negotiation of support is handled by the
	Exchange Log Name (X'1211') General Data Stream (GDS) variable. The resync
	service implements the "Exchange Log Names" function of an SNA transaction
	manager.
	
	COMTI provides a resynchronization service (SNA LU 6.2 Resync TP). This Windows
	NT service is configured to be the auto-started invokable service for the
	SNA-defined Resync TP (0x06F2).
	
	All of COMTI's resync and 2PC flows are implemented in conformance with the SNA
	Sync Point Services Architecture Reference (IBM SC31-8134-00).
	
	
	REFERENCES
	==========
	
	SNA SyncPoint Services Architecture Reference (IBM SC31-8134-00), SNA Formats
	(GA27-3136-14)
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
