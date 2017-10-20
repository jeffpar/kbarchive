---
layout: page
title: "Q296078: Application Exception in Snaservr.exe After Event 102 X'0BC6'"
permalink: /kb/296/Q296078/
---

## Q296078: Application Exception in Snaservr.exe After Event 102 X'0BC6'

{% raw %}

	Article: Q296078
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server service (Snaservr.exe) may terminate unexpectedly on an SNA
	Server or Host Integration Server (HIS) 2000 system when providing LU 6.2
	sessions to APPC (Advanced Program-to-Program Communciations) applications that
	call the APPC ACTIVATE_SESSION verb.
	
	If Drwtsn32.exe is configured as the system's default debugger, the Drwtsn32.log
	will be updated with information that resembles the following:
	
	  Application exception occurred:
	  App: exe\snaservr.DBG (pid=<process id>
	  When: <date> @ <time>
	  Exception number: 80000003 (hardcoded breakpoint)
	
	The SNA or HIS 2000 server will log the following event just prior to the
	application exception:
	
	  Event ID: 102
	  Source: SNA Server
	  Description: (0BC6) Internal Error
	  Subcode Information: X'0BC6' Free active pool is empty.
	
	CAUSE
	=====
	
	The SNA Server service fails to release an internal control block that is used
	for CNOS (Change Number of Sessions) negotiations for each client APPC
	application that issues an ACTIVATE_SESSION verb. SNA Server and HIS 2000
	support a fixed number of these special control blocks; therefore, over time
	this type of control block leak leads to a situation in which there are no
	available control blocks. When this occurs, the SNA Server service logs the
	Event 102 Subcode X'0BC6' and terminates abnormally.
	
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
	| snaservr.exe | 05/23/2001 | 07:43AM | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 that contains this fix.
	
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
	| snaservr.exe | xx/xx/xx | xx:xx | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0 SP2, 4.0 SP3, 4.0 SP4 and Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	A single control block is leaked for each client connection to the SNA Server
	service over which an APPC application issues an ACTIVATE_SESSION verb. A
	control block is not leaked for each ACTIVATE_SESSION verb that is issued by the
	application after the client connection is established.
	
	ACTIVATE_SESSION and DEACTIVATE_SESSION support was added in SNA Server 4.0 SP2.
	For additional information on these APPC verbs, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q195010 Activate_session/Deactivate_session Unavailable in SNA Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
