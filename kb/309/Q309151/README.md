---
layout: page
title: "Q309151: Incoming SDLC PU Passthrough Connection Fails"
permalink: kb/309/Q309151/
---

## Q309151: Incoming SDLC PU Passthrough Connection Fails

	Article: Q309151
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an incoming SDLC PU Passthrough connection uses a Format 1 XID, the
	passthrough connection fails to activate. This behavior occurs even though
	traces show that the XID is passed to the upstream system and a response is
	received. No Set Normal Response Mode (SNRM) command is sent from the Microsoft
	SNA Server 4.0 or Microsoft Host Integration Server 2000 system.
	
	CAUSE
	=====
	
	This behavior occurs because SNA Server 4.0 and Host Integration Server 2000
	incorrectly treat the incoming Format 1 XID as a Format 3 XID, which causes the
	server to assume the secondary link station role, even though it should take the
	primary link station role.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	+---------------------------------+
	| File name   | Date       | Time | 
	+---------------------------------+
	| Ibmsdlc.dll | 10/31/2001 | 9:22 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	No fix is available for this problem in Host Integration Server 2000 at this
	time.
	
	STATUS
	======
	
	SNA Server 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0.
	
	Host Integration Server 2000
	----------------------------
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	
	MORE INFORMATION
	================
	
	For more information about XID commands, please refer to Chapter 2 of the IBM
	SNA Formats Guide (IBM doc #GA27-3136).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
