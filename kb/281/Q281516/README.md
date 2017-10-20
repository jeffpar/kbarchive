---
layout: page
title: "Q281516: APPC/CPI-C Applications Cannot Get APPC Sessions"
permalink: /kb/281/Q281516/
---

## Q281516: APPC/CPI-C Applications Cannot Get APPC Sessions

{% raw %}

	Article: Q281516
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNA Server and Host Integration Server (HIS) 2000 may stop allocating new LU 6.2
	(APPC) sessions after some period of continuous uptime. Currently active LU 6.2
	sessions are unaffected and continue to function properly.
	
	If you are running an APPC or CPI-C application, you may see various symptoms
	depending on the design of the application you are using. Because most APPC and
	CPI-C applications are designed to wait for an available LU 6.2 session, the
	most common symptom is that the application stops responding (hangs) while it
	waits for a session.
	
	If the application is designed to time out if an LU 6.2 session is not available,
	the underlying [MC_]ALLOCATE fails. In this case, the [MC_]ALLOCATE may fail
	with the following error message:
	
	  primary_rc = 0x0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 0x00000005 (AP_ALLOCATION_FAILURE_RETRY)
	
	A CPI-C application that times out may return the following error message:
	
	  rc = 20 (CM_PRODUCT_SPECIFIC_ERROR)
	
	In addition, the SNA Server may log the following event message repeatedly in the
	Application Event Log when it stops allocating LU 6.2 sessions:
	
	  Event ID: 11
	  Source: SNA Server
	  Description: (1178) Initialization Failure
	
	  EXPLANATION
	  This is an internal logic error in SNA Server, related to the configuration.
	
	  SUBCODE INFORMATION
	  X'1177' Operator queues are full--messages have been lost.
	  X'1178' Insufficient resources for automatic session limit negotiation.
	
	CAUSE
	=====
	
	SNA Server is not releasing an internal control block that is used for Change
	Number of Sessions (CNOS) processing once CNOS is completed under very specific
	circumstances. SNA Server supports a fixed number of these special control
	blocks, and therefore, over time this type of control block "leak" leads to a
	situation where there are no available control blocks. Once the control blocks
	are exhausted, SNA Server cannot initiate CNOS processing over any APPC triplets
	(Local APPC LU/Remote APPC LU/Mode) that require CNOS. In addition, the SNA
	Server starts logging Event 11 messages, as described earlier.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 service pack that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+-------------------------------------+
	| File name    | Date       | Time    | 
	+-------------------------------------+
	| Snaservr.exe | 01/02/2001 | 10:06AM | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+---------------------------------+
	| File name    | Date     | Time  | 
	+---------------------------------+
	| Snaservr.exe | 01/02/01 | 09:06 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0 (all Service Packs), 4.0, 4.0 Service Pack 1 (SP1), 4.0 SP2, 4.0 SP3, 4.0
	SP4, and Host Integration Server 2000.
	
	Additional query words: Snaservr sp1 sp2 sp3 sp4 1 2 3 4 service pack
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
