---
layout: page
title: "Q254943: XCON: Message Transfer Agent Stops Unexpectedly w. Event ID 9405"
permalink: /kb/254/Q254943/
---

## Q254943: XCON: Message Transfer Agent Stops Unexpectedly w. Event ID 9405

	Article: Q254943
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5 kbExchange500preSP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server message transfer agent (MTA) stops unexpectedly
	and an event similar to the following is logged in the application event log:
	
	  Event Id: 9405
	  Source: MSExchangeMTA
	  Type: Error
	  Category: Field Engineering
	  Description: An unexpected error has occurred which may cause the MTA to
	  terminate.
	  Error: Out of Semaphores
	
	When this problem occurs, no User.dmp file is created, even though the registry
	keys that force the MTA to stop (raise exception on fatal error and handle
	exceptions) are enabled.
	
	CAUSE
	=====
	
	This problem can occur because static variables are used to hold the semaphores,
	rather than dynamic variables.
	
	The Calls.out file shows that the MTA terminates every time with the following
	
	  Thread 52 (01.091) owns semaphore 6601, created by (01.091).
	
	where 6601 is the maximum count of semaphore.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.0 service pack that contains
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
	
	Component: MTA
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Emsmta.exe   | 5.0.1462.10 | 
	+----------------------------+
	| Address.dll  | 5.0.1462.10 | 
	+----------------------------+
	| Emsrid.dll   | 5.0.1462.10 | 
	+----------------------------+
	| Mmiext.dll   | 5.0.1462.10 | 
	+----------------------------+
	| Mtacheck.exe | 5.0.1462.10 | 
	+----------------------------+
	| Mtamsg.dll   | 5.0.1462.10 | 
	+----------------------------+
	| X400om.dll   | 5.0.1462.10 | 
	+----------------------------+
	| X400omv1.dll | 5.0.1462.10 | 
	+----------------------------+
	| Dbserver.sch | N/A         | 
	+----------------------------+
	| Dcprods.cat  | N/A         | 
	+----------------------------+
	| Infoplog.cfg | N/A         | 
	+----------------------------+
	| Infotlog.cfg | N/A         | 
	+----------------------------+
	| Infoxlog.cfg | N/A         | 
	+----------------------------+
	| P2.xv2       | N/A         | 
	+----------------------------+
	| P3.tpl       | N/A         | 
	+----------------------------+
	| P772.tpl     | N/A         | 
	+----------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	
	Additional query words: semaphores 9405
	
	======================================================================
	Keywords          : exc5 kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
