---
layout: page
title: "Q240762: Password Synch Fails after Promoting Backup SNAPMP Service"
permalink: /kb/240/Q240762/
---

## Q240762: Password Synch Fails after Promoting Backup SNAPMP Service

	Article: Q240762
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing a Windows NT password in an accounts domain (for example a Windows NT
	domain that contains user accounts) that is configured to replicate (or
	synchronize) password changes with a host (for example a mainframe or AS/400)
	using the SNA Server's Host Security Integration feature may fail. The PDC in
	the accounts domain logs the following event in the Windows NT application event
	log for each password change that cannot be replicated:
	
	  Event ID: 671
	  Source: SNA Host Security
	  Description: Password Change DLL was unable to send the RPC message. Error:
	  STI - RpcSendConnection could not find an alternate server resource to send
	  the rpc message to.
	
	When this occurs, the user's Windows NT password is successfully changed;
	however, the new password is not propagated to the host system. The user
	receives an error indicating an invalid user name or password the next time they
	try to log on to the host system using the SNA Server Single Sign-On (SSO)
	feature.
	
	Note: This only occurs when a Master or Multiple Master Domain model is used with
	the SNA Server Host Security components. In these environments, the PDCs of the
	accounts domains have the SNA Windows NT Account Synchronization (SNAPMP)
	service installed in a secondary (or backup) role.
	
	CAUSE
	=====
	
	The Password Change DLL (Snapwchg.dll) does not attempt to locate a new master
	(or primary) SNAPMP service in the Windows NT domain that contains the Host
	Security Domain if the original master SNAPMP service is no longer available.
	This only occurs if the master SNAPMP service is running in a Windows NT domain
	other than the one where the Password Change DLL exists.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	Restarting the PDCs in the accounts domains re-initializes the Password Change
	DLL, which allows it to locate the new master SNAPMP service in the Host
	Security Domain.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	In a master (or multiple master) domain topology that uses the SNA Server Host
	Security components, the typical configuration includes a resource domain that
	contains the SNA Server computers and the Host Security Domain that is defined
	to handle the user ID/password mapping and/or replication to the host system.
	
	In this environment, the master SNAPMP service is installed on the PDC of the
	resource domain as is the SNA Host Account Cache (snadatabase) service.
	Secondary (or backup) instances of these services are typically installed on one
	or more BDCs in the resource domain. The SNAPMP service will only start on a
	PDC, so the secondary SNAPMP services do not actually start on the BDCs.
	
	The SNAPMP service also needs to be installed in a secondary role on the PDCs of
	the accounts domains that will be participating in the Host Security Domain. The
	SNAPMP service does not start on these PDCs as it is configured in a secondary
	role. However, the Password Change DLL is initialized on these PDCs to detect
	any Windows NT password changes for users that are members of the Host Security
	Domain. The Password Change DLL intercepts the password change requests and then
	attempts to forward them to the master SNAPMP service so that they can be
	replicated to the host system, if the user is configured for password
	replication.
	
	If the PDC with the master SNAPMP service becomes unavailable for any reason, a
	BDC can be promoted to PDC and then the SNAPMP service on this newly promoted
	PDC can be started as the "new" master SNAPMP for the Host Security Domain.
	
	The problem described here occurs when a BDC in the resource domain is promoted
	to PDC and the SNAPMP service is started as the new master. The Password Change
	DLL in the accounts domain does not attempt to locate the new master SNAPMP once
	it fails to connect to the original master SNAPMP service.
	
	Note: This does not occur if the user accounts exist in the same Windows NT
	domain as the master SNAPMP service, because the Password Change DLL is able to
	locate a new master SNAPMP service when all of the components are running in the
	same Windows NT domain.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
