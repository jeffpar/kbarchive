---
layout: page
title: "Q288566: SLI App. May Hang If Asynchronous Verb Returns Synchronously"
permalink: /kb/288/Q288566/
---

## Q288566: SLI App. May Hang If Asynchronous Verb Returns Synchronously

	Article: Q288566
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running a session-level interface (SLI) application designed for
	using asynchronous verb completion against the SNA Server/Host Integration
	Server 2000 versions listed at the beginning of this article, the SLI
	application may "hang" indefinitely.
	
	CAUSE
	=====
	
	The SLI Library incorrectly sets the parameter lua_flag2.async, indicating that
	the logical units for applications (LUA) interface verb completed
	asynchronously, even if in fact it completed synchronously.
	
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
	
	+------------------------------------+
	| File name    | Date     | Time     | 
	+------------------------------------+
	| Winsli32.dll | 02/02/01 | 02:05 pm | 
	+------------------------------------+
	
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
	
	+------------------------------------+
	| File name    | Date     | Time     | 
	+------------------------------------+
	| Winsli32.dll | 02/02/01 | 02:05 pm | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, and 4.0 SP4 and Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	The following annotated SNA Server LUA API trace (CLIAPIx.ATF) statement shows
	an example of the problem described in this article.
	
	NOTE: See the LUA Programmer's Guide in the SNA Server or Host Integration Server
	2000 SDK for details on the format of the following SLI verb.
	
	  
	
	  SLI_BID response
	  OK - OK
	  ---- Verb Parameter Block at address 004884C0 ----
	52005000 00000000 00000000 06000000     <R.P.............>
	         ****
	00000000 00000000 00000000 00000000     <................>
	40426D00 00000C00 00000000 2D000000     <@Bm.........-...>
	2C000901 022C0231 001F0141 00000000     <,....,.1...A....>
	                        ^^
	00000000 40404040 40404040 40404040     <....@@@@@@@@@@@@>
	
	The SLI_BID response incorrectly set the lua_flag2.async value (denoted by ^^ in
	the trace) to 0x'41', indicating asynchronous verb completion. However, this
	particular verb completed synchronously, causing the primary return code to be
	set to 0000, OK (denoted by ****), rather then 0030, IN_PROGRESS. Therefore, the
	application waits indefinitely for final completion and never submits a
	subsequent SLI_RECEIVE command to read the data.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
