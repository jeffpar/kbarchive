---
layout: page
title: "Q313684: GET_TP_PROPERTIES Fails with INVALID_VERB Response Code"
permalink: /kb/313/Q313684/
---

## Q313684: GET_TP_PROPERTIES Fails with INVALID_VERB Response Code

	Article: Q313684
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport Kbhostintegserv2000
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an invokable Advanced Program-to-Program Communications (APPC) transaction
	program calls GET_TP_PROPERTIES, the program may receive an INVALID_VERB
	(0xFFFF) response code.
	
	CAUSE
	=====
	
	When an invokable APPC transaction program issues a RECEIVE_ALLOCATE command,
	the program waits for a partner APPC transaction program to start an APPC
	conversation. The partner application triggers an FMH-5 Attach message to start
	the APPC conversation with the invokable APPC transaction program. This FMH-5
	Attach command may contain a logical unit of work identifier (LUWID) for the
	APPC conversation. In some cases, Host Integration Server 2000 (HIS 2000) does
	not properly recognize this LUWID. An LUWID must be established before the APPC
	program calls GET_TP_PROPERTIES. If HIS 2000 does not recognize the LUWID that
	the partner system sent, the call returns the INVALID_VERB response code.
	
	RESOLUTION
	==========
	
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
	
	+--------------------------------------------+
	| File name   | Date        | Time           | 
	+--------------------------------------------+
	| Wappc32.dll | 12-Dec-2001 | 12:00 midnight | 
	+--------------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	NOTE: If this product was already installed on your computer when you purchased
	it from the Original Equipment Manufacturer (OEM) and you need this fix, please
	call the Pay Per Incident number listed on the above Web site. If you contact
	Microsoft to obtain this fix, and if it is determined that you only require the
	fix you requested, no fee will be charged. However, if you request additional
	technical support, and if your no-charge technical support period has expired,
	or if you are not eligible for standard no-charge technical support, you may be
	charged a non-refundable fee.
	
	For more information about eligibility for no-charge technical support, see the
	following article in the Microsoft Knowledge Base:
	
	  Q154871 Determining If You Are Eligible for No-Charge Technical Support
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	The following sample excerpt from an SNA application APPC API trace shows the
	call to GET_TP_PROPERTIES and the response:
	
	APPC  ----------------------------------------------- 17:14:40.0875
	APPC  GET_TP_PROPERTIES request
	APPC
	APPC  Type:Sync                                  VerbID:00018000
	APPC
	APPC  ---- Verb Parameter Block at address 0E21F824 ----
	APPC  17000000 00000000 00000000 00000000     <................>
	APPC  50659901 00000000 00000000 00000000     <Per.............>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 000000                <...........     >
	APPC  ----------------------------------------------- 17:14:40.0875
	APPC  GET_TP_PROPERTIES response, result = INVALID_VERB
	APPC
	APPC  Type:Sync                                  VerbID:00018000
	APPC
	APPC  ---- Verb Parameter Block at address 0E21F824 ----
	APPC  17000000 FFFF0000 00000000 00000000     <................>
	APPC  50659901 00000000 00000000 00000000     <Per.............>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 00000000 00000000     <................>
	APPC  00000000 00000000 000000                <...........     >
	
	A concurrent SNA application internal trace shows the following:
	
	17:14:40.0875 appc_c.c(2596)     INVBC ERROR: Cannot GET_TP_PROPERTIES before obtaining LUWID
	
	The FMH-5 Attach command is captured in the SNA Server Data Link Control message
	trace. If you examine the FMH-5 Attach command that was sent from the host, you
	will see that a valid LUWID was sent.
	
	For more information on the structure of an FMH-5 Attach command, see the IBM SNA
	Formats guide (IBM document GA27-3136-12).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport Kbhostintegserv2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
