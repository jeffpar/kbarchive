---
layout: page
title: "Q309289: COMTI Perfmon Counters Not Available When Using Terminal Server"
permalink: kb/309/Q309289/
---

## Q309289: COMTI Perfmon Counters Not Available When Using Terminal Server

	Article: Q309289
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view COM Transaction Integrator (COMTI) Performance Monitor
	counters under a Terminal Server client connection, no data is collected and all
	counters show a value of 0. COMTI Performance Monitor counters are seen when
	they are accessed by all other means, such as remotely or by using the console.
	
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
	
	+-------------------------------------+
	| File name     | Date        | Time  | 
	+-------------------------------------+
	| Comtiperf.dll | May-21-2001 | 12:00 | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration
	Server 2000.
	
	Additional query words: comti perfmon HIS
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
