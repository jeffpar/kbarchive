---
layout: page
title: "Q307361: AS/400 Data Queues: ALLOCATE Verb Fails With AP_BAD_SECURITY"
permalink: /kb/307/Q307361/
---

## Q307361: AS/400 Data Queues: ALLOCATE Verb Fails With AP_BAD_SECURITY

	Article: Q307361
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000 kbhis2000bug
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application that uses the AS/400 Data Queue ActiveX Control may experience
	Advanced Program-to-Program Communications (APPC) ALLOCATE verb errors after it
	successfully connects to a number of data queues on an AS/400 computer.
	
	The ALLOCATE verbs fail with the following return codes:
	
	  primary return_code = 0001 (PARAMETER_CHECK)
	  secondary return_code = 00000013 (AP_BAD_SECURITY)
	
	In the reported instance of this problem, the ALLOCATE failure occurred while the
	application is attempting to connect to a fifth data queue. The first four data
	queue connections did not experience any problems due to the failures of
	subsequent connection attempts.
	
	CAUSE
	=====
	
	The AS/400 Data Queue ActiveX Control routine that is responsible for generating
	the APPC ALLOCATE verb was incorrectly causing the ALLOCATE's security parameter
	to be overwritten with invalid values under certain circumstances.
	
	RESOLUTION
	==========
	
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
	| File name   | Date       | Time    | 
	+------------------------------------+
	| MSEIGDQ.dll | 09/12/2001 | 1:56 PM | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	MORE INFORMATION
	================
	
	The following is an example of a failing ALLOCATE:
	
	  APPC  ALLOCATE request
	  APPC  
	  APPC  Type:Sync                                  VerbID:00014011
	  APPC  
	  APPC  ---- Verb Parameter Block at address 0012EF1C ----
	  APPC  01000000 00000000 00000000 06000000     <................>
	  APPC  48E45003 40E55003 00000000 00000000     <HUP.@VP.........>
	  APPC  00000000 00000000 53313041 39323938     <........S10A9298>
	  APPC  D8D7C3E2 E4D7D740 30F0F6F0 40404040     <QPCSUPP@0060@@@@>
	  APPC  40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	  APPC  40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	  APPC  40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	  APPC  40404040 40404040 06000000 00000000     <@@@@@@@@........><BR/>
	                          ^^-- Invalid security parameter value
	  APPC  00000000 C5D7C1F9 F0F9F140 4040C5D7     <....EPA9091@@@EP>
	  APPC  C1C3C540 40404040 00000000 00000000     <ACE@@@@@........>
	  APPC  00000000 00000000 00000000 00000000     <................>
	  APPC  00000000 00000000 00000000              <............    >
	  APPC  --------------------------------------------------------------------------------
	  APPC  ALLOCATE response, result = PARAMETER_CHECK
	  APPC  
	  APPC  Type:Sync                                  VerbID:00014011
	  APPC  
	  APPC  ---- Verb Parameter Block at address 0012EF1C ----
	  APPC  01000000 00010000 00000013 06000000     <................><BR/>
	                 ^^^^     ^^^^^^^^ 
	  APPC  48E45003 40E55003 00000000 00000000     <HUP.@VP.........>
	  APPC  00000000 00000000 53313041 39323938     <........S10A9298>
	  APPC  D8D7C3E2 E4D7D740 30F0F6F0 40404040     <QPCSUPP@0060@@@@>
	  APPC  40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	  APPC  40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	  APPC  40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	  APPC  40404040 40404040 06000000 00000000     <@@@@@@@@........>
	  APPC  00000000 C5D7C1F9 F0F9F140 4040C5D7     <....EPA9091@@@EP>
	  APPC  C1C3C540 40404040 00000000 00000000     <ACE@@@@@........>
	  APPC  00000000 00000000 00000000 00000000     <................>
	  APPC  00000000 00000000 00000000              <............    >
	
	The primary and secondary return codes are highlighted (^^^) in the ALLOCATE
	response above.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 kbhis2000bug 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
