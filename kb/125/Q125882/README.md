---
layout: page
title: "Q125882: INFO: SNA Server Connection Stays Inactive"
permalink: /kb/125/Q125882/
---

## Q125882: INFO: SNA Server Connection Stays Inactive

	Article: Q125882
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An SNA Server connection may remain inactive. You cannot reactivate the
	connection using SNA Administrator. Here are some possible causes and
	resolutions:
	
	The SNA Server Service Owning the Connection Is Inactive
	--------------------------------------------------------
	
	Start the SNA Server service using SNA Server Admin (SNA Server 2.x) or SNA
	Server Manager (SNA Server 3.0). In order for the SNA Server service to start,
	all SNA Server link services installed by SNA Setup must also start
	successfully.
	
	SNA Server Shows [Out of Date]
	------------------------------
	
	If a new connection is defined in SNA Server Admin or SNA Server Manager when SNA
	Server is running, the server status appears as "Active [Out of Date]." This
	indicates that the SNA Server service must be restarted to enable the
	configuration changes. When a new connection is created, the SNA Server service
	must be stopped and restarted to enable the change.
	
	The SNA Server Backup Server Had an Old Configuration File
	----------------------------------------------------------
	
	The SNABase service running on the SNA Server primary and backup configuration
	servers automatically handles the replication of the SNA Server configuration
	file. However, if security is enabled on the COMCFG share point, or NTFS file
	permissions restrict access to the configuration file,
	<SNAROOT>\SYSTEM\CONFIG\COM.CFG, the configuration file on the backup
	configuration server may be out of date. To test this, copy the configuration
	file from the primary to the backup server:
	
	  "copy \\<primary>\comcfg\com.cfg \\<backup>\comcfg\com.cfg"
	  (without the quotation marks)
	
	where <primary> is the SNA Server primary configuration server and
	<backup> is the SNA Server backup server. After you copy the configuration
	file, you'll need to restart the SNA Server service on any backup servers.
	
	By default, the SNABase service runs under the Windows NT Local System context in
	SNA Server versions prior to 3.0. SNA Server services including SNABase normally
	run under a user account specified during SNA Server Setup for SNA Server
	versions 3.0 and later. If the Everyone group does not have Read access to the
	COMCFG share point on the primary server, or Full Control access on the backup
	server, the replication to the backup server will fail.
	
	See Chapter 12, "Setting Up Security with SNA Server," in the SNA Server
	Administrator's Guide for a full discussion on limiting user access to the SNA
	Server configuration file. In addition, Article Q140556 (Securing SNA Server to
	Not Require Everyone: Read Access) explains how to tighten the secuity on the
	SNA Server configuration file.
	
	Additional query words: prodsna inactive connection snafaq
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna211sp2 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,4.0,4.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
