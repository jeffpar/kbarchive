---
layout: page
title: "Q286813: Users May Fail to Reconnect to Dynamically Defined Dependent LUs"
permalink: /kb/286/Q286813/
---

## Q286813: Users May Fail to Reconnect to Dynamically Defined Dependent LUs

	Article: Q286813
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kbhis2000 kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users who connect to a mainframe by using Dynamically Defined Dependent LUs
	(DDDLUs) may not be able to reconnect to the mainframe after they disconnect.
	SNA Manager displays the failing LUs with a status of Available, but the LUs are
	no longer defined on the mainframe because they were dynamically deleted when
	the user disconnected the session.
	
	CAUSE
	=====
	
	When you use DDDLUs, SNA Server and Host Integration Server (HIS) 2000 send a
	Network Management Vector Transport (NMVT) Power-Off Response Unit (RU) to the
	host when a session is closed (terminated). SNA Server and HIS 2000 then expect
	to receive a Deactivate LU (DACTLU) RU from the host. The problem described here
	occurs if the host does not send a DACTLU in response to the NMVT Power-Off RU.
	
	RESOLUTION
	==========
	
	SNA Server 4.0:
	
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
	| Snaservr.exe | 12/05/2000 | 12:00PM | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000:
	
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
	
	+-------------------------------------+
	| File name    | Date       | Time    | 
	+-------------------------------------+
	| Snaservr.exe | 12/05/2000 | 12:00PM | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	SP4 and Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	The following shows a typical sequence that occurs when a dynamically defined LU
	is closed (terminated):
	
	+------------------------------------------------------+
	| Client        | SNA Server/HIS 2000 | Host           | 
	+------------------------------------------------------+
	| Close SSCP -> |                     |                | 
	+------------------------------------------------------+
	|               | TRMSLF ->           |                | 
	+------------------------------------------------------+
	|               | NMVT(Power-Off) ->  |                | 
	+------------------------------------------------------+
	|               |                     | <- UNBIND      | 
	+------------------------------------------------------+
	|               | UNBIND +RSP ->      |                | 
	+------------------------------------------------------+
	|               |                     | <- TRMSLF +RSP | 
	+------------------------------------------------------+
	|               |                     | <- NMVT +RSP   | 
	+------------------------------------------------------+
	|               |                     | <- DACTLU      | 
	+------------------------------------------------------+
	|               | DACTLU +RSP ->      |                | 
	+------------------------------------------------------+
	
	In the failing case described in this article, the host does not send a DACTLU to
	the SNA Server or HIS 2000.
	
	After you apply the update, SNA Server and Host Integration Server will issue a
	new NMVT Power-On RU when they receive an OPEN SSCP Request (new session
	request) for a DDDLU, even if a DACTLU was never received when the LU was
	closed. The NMVT Power-On RU causes the mainframe to dynamically create the
	requested LU, so that it is available for use.
	
	For additional information on SNA Server, Host Integration Server, and DDDLUs,
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q161492 INFO: LU Session Activation Using Dynamically Defined Dependent
	
	  Q164592 Dynamically Defined Dependent LU Support for LUA LUs
	
	  Q276453 Dynamically Defined Dependent LU Support for Printer LUs
	
	  Q276481 SNA Server Does Not Send LU Name in NMVT for DDDLU
	
	  Q276196 NMVT Power Off Now Supported in SNA Server
	
	Additional query words: SDDLU blank screen
	
	======================================================================
	Keywords          : kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP4
	Version           : :4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
