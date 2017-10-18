---
layout: page
title: "Q287542: SLI Application Fails With LUA_REQUIRED_FIELD_MISSING Error"
permalink: kb/287/Q287542/
---

## Q287542: SLI Application Fails With LUA_REQUIRED_FIELD_MISSING Error

	Article: Q287542
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running a SLI (Session Level Interface) application on the SNA
	Server/Host Integration Server 2000 versions listed at the beginning of this
	article, the SLI application may fail unexpectedly when an outstanding SLI_SEND
	verb completes with the following return code:
	
	  Primary_rc = LUA_PARAMETER_CHECK (0x0001)
	  Secondary_rc = LUA_REQUIRED_FIELD_MISSING (0x00000019)
	
	This problem does not occur on SNA Server versions prior to 4.0 Service Pack 2.
	
	CAUSE
	=====
	
	The SLI library is not saving the lua_data_length value specified in an SLI_SEND
	when sending non-function management data ( FMD) messages.
	
	
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
	| Winsli32.dll | 02/07/2001 | 11:30AM | 
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
	
	+-------------------------------------+
	| File name    | Date       | Time    | 
	+-------------------------------------+
	| Winsli32.dll | 02/07/2001 | 11:02AM | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	4.0 SP2, 4.0 SP3, and 4.0 SP4 and Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	The following annotated SNA Server logical unit application (LUA) API trace
	(CLIAPIx.ATF) statements show an example of the problem described in this
	article.
	
	NOTE: Please refer to the LUA Programmer's Guide in the SNA Server or Host
	Integration Server 2000 SDK for details on the format of the following SLI and
	Request Unit Interface (RUI) verbs.
	
	SLI   SLI_SEND request
	SLI   ---- Verb Parameter Block at address 02C69E7E ----
	SLI   52004600 00000000 00000000 04000000     <R.F.............>
	SLI   0A15C302 00000000 00000000 00000000     <..C.............>
	SLI   D042DF0F 00000400 317D6201 70040000     <.B......1}b.p...>
	                  ^^^^
	SLI   00000000 0001CF90 00010200 00000000     <................>
	                  **** **
	SLI   00000000 0000                           <......          >
	SLI   ---- Data at address 01627D31 ----
	SLI   08130000                                <....            >
	RUI   --------------------------------------------------------------------------------
	RUI   RUI_WRITE request
	RUI   ---- Verb Parameter Block at address 0FDF471C ----
	RUI   52004400 00000000 00000000 04800000     <R.D.............>
	RUI   02000000 44575430 33593243 00000000     <....DWT03Y2C....>
	RUI   50052A00 00000000 317D6201 70323064     <P.*.....1}b.p20d>
	                  ^^^^
	RUI   00000000 0001CF90 00010000 00000000     <................>
	                  **** **
	RUI   00000000                                <....            >
	RUI   --------------------------------------------------------------------------------
	RUI   RUI_WRITE response
	RUI   PARAMETER_CHECK - REQUIRED_FIELD_MISSING
	RUI   ---- Verb Parameter Block at address 0FDF471C ----
	RUI   52004400 00010000 00000019 04800000     <R.D.............>
	RUI   02000000 44575430 33593243 00000000     <....DWT03Y2C....>
	RUI   50052A00 00000000 317D6201 70323064     <P.*.....1}b.p20d>
	RUI   2C000000 0001CF90 00010001 00000000     <,...............>
	                  **** **
	RUI   00000000                                <....            >
	
	The SLI_SEND has correctly set the lua_data_length (denoted by ^^^^ in the trace
	above) to 4 bytes (0400) for the IBM Sense Code of 08130000 that the application
	is trying to send to the host. However, the subsequent RUI_WRITE has a
	lua_data_length of 0 (also denoted by ^^^^).
	
	The message being sent by the application is a negative response (-RSP) and is a
	data flow control (DFC) message, which is determined by the response header (RH)
	(denoted by ****) set by the application. Since this is a -RSP, the
	lua_data_length in the RUI_WRITE should be at least 4 bytes. Because it is 0
	(zero) in this case, the LUA_REQUIRED_FIELD_MISSING error is returned to the
	application.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
