---
layout: page
title: "Q139898: APPC/5250 Hot Backup Fails if Configured for &quot;On Demand&quot;"
permalink: /kb/139/Q139898/
---

## Q139898: APPC/5250 Hot Backup Fails if Configured for &quot;On Demand&quot;

	Article: Q139898
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A 5250 emulator that loses the AS/400 session due to a connection outage on a
	SNA Server gets the following error when you try to reestablish a session with
	the AS/400:
	
	  The connection to the AS/400 cannot be activated.
	
	  Primary Return Code = 0003
	  Secondary Return Code = 00000004
	
	CAUSE
	=====
	
	When SNA Server is configured to use a default Local APPC LU, the hot backup
	function for APPC/5250 does not give a Remote LU on a disabled connection a
	lower priority than a Remote LU on an Inactive connection which causes hot
	backup to fail. If only one of the connections is "Active" and it fails, the
	other "On Demand" connections still have a lower priority than the previously
	Active connection that has since failed. Since this failed connection still has
	the higher priority, none of the On Demand connections are activated. Therefore,
	hot backup fails and the 5250 emulator reports the error above.
	
	
	RESOLUTION
	==========
	
	Microsoft has updated the following files to correct this problem:
	
	Source files affected:
	
	  \DCL\S1SRC\SLPRCHLU.C
	
	Binaries affected:
	
	  <snaroot>\SYSTEM\SNASERVR.EXE
	  <snaroot>\SYSTEM\TRCSERVR.EXE
	
	To work around this problem, SNA Servers that provide hot backup for APPC/5250
	sessions can have their AS/400 connections configured for "On Server Startup"
	activation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	If there are two or more SNA Servers in a domain that are configured to provide
	Hot Backup for APPC/5250 sessions and those SNA Servers have connections to an
	AS/400 that have a status of On Demand when viewed in SNA Server Admin, the
	first 5250 emulator to request a session with the AS/400 forces one of these On
	Demand connections to become Active.
	
	Subsequent 5250 sessions now use this Active connection to gain access to the
	AS/400. If this Active connection fails, 5250 users that attempt to reconnect to
	the AS/400 fail with the error described in the symptom section.
	
	If more than one of the SNA Servers in the domain have an Active connection to
	the AS/400, 5250 users are able to reconnect to the AS/400 even if the
	connection on the SNA Server that they were originally communicating through
	fails.
	
	For additional information on how to configure SNA Servers for hot backup and
	load balancing, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q128244 SNA Server Load Balancing and Hot Backup
	
	Additional query words: prodsna 2.00 2.10 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
