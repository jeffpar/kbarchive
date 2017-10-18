---
layout: page
title: "Q282752: DEACTIVATE_SESSION Verb May Cause Snaservr.exe Hang"
permalink: kb/282/Q282752/
---

## Q282752: DEACTIVATE_SESSION Verb May Cause Snaservr.exe Hang

	Article: Q282752
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp3 kbhis2000bug kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server service (Snaservr.exe) may exhibit one of the following symptoms
	when it receives a DEACTIVATE_SESSION verb from an Advanced Program-to-Program
	Communications (APPC) application:
	
	- High CPU (for example, 99% - 100%) use for the SNA Server (Snaservr.exe)
	  process.
	
	-or-
	
	- SNA Server service stops responding (hangs) when terminating the APPC
	  application that issued the DEACTIVATE_SESSION verb.
	
	CAUSE
	=====
	
	If the SNA Server service receives a DEACTIVATE_SESSION (All Sessions) verb at
	the same time as an UNBIND request for one of the sessions that is being
	deactivated, the SNA Server service may experience one of the two problems
	described in the "Symptoms" session.
	
	If the DEACTIVATE_SESSION verb is received just prior to the UNBIND request, the
	SNA Server service will stop responding (hang). If the UNBIND request is
	received just prior to the DEACTIVATE_SESSION verb, the SNA Server service will
	show 100% CPU use.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 or Host Integration Server 2000
	service pack that contains this fix.
	
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
	
	SNA Server 4.0
	
	+-------------------------------------+
	| File name    | Date       | Time    | 
	+-------------------------------------+
	| Snaservr.exe | 12/18/2000 | 09:00AM | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0 Service Pack 3 (SP3), 4.0 Service Pack 4 (SP4), and Host Integration Server
	(HIS) 2000.
	
	MORE INFORMATION
	================
	
	For more information on the DEACTIVATE_SESSION and ACTIVATE_SESSION verbs,
	please refer to the APPC Programmer's Guide in the SNA Server 4.0 SP3 (or later)
	and Host Integration Server 2000 SDK.
	
	For additional information about these two APPC verbs, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q195010 Activate_session/Deactivate_session Unavailable in SNA Server
	
	  Q263096 ACTIVATE_SESSION Event Not Signaled When the Session Ends
	
	  Q245966 Winmgt32.dll May Complete Same Verb Three Times
	
	  Q279879 Problems with Processing Of Asynchronous CNOS and DISPLAY Verbs
	
	  Q282461 DEACTIVATE_SESSION Returns Parameter_Check If No Sessions Are Active
	
	Additional query words: Snaservr sp3 sp4 service pack
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp3 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
