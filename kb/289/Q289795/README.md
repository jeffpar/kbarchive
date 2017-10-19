---
layout: page
title: "Q289795: XFOR: Notes Calendar Conn. Crashes on Multiprocessor Computers"
permalink: /kb/289/Q289795/
---

## Q289795: XFOR: Notes Calendar Conn. Crashes on Multiprocessor Computers

	Article: Q289795
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Notes Calendar Connector (Calcon) may stop
	responding on dual-processor computers. The crash dumps show different stack
	traces and indicate heap corruption.
	
	CAUSE
	=====
	
	The problem can occur if a reference count check causes two threads to delete
	the same object at the same time.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.5 service pack that contains this fix.
	
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
	
	Component: Notes Calendar Connector
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Calcon.exe   | 5.5.2654.66 | 
	+----------------------------+
	| Excalcon.exe | 5.5.2654.66 | 
	+----------------------------+
	| Gwrouter.exe | 5.5.2654.66 | 
	+----------------------------+
	| Adminsvc.dll | 5.5.2654.66 | 
	+----------------------------+
	| Calsync.dll  | 5.5.2654.66 | 
	+----------------------------+
	| Gwisecal.dll | 5.5.2654.66 | 
	+----------------------------+
	| Mapical.dll  | 5.5.2654.66 | 
	+----------------------------+
	| Notescal.dll | 5.5.2654.66 | 
	+----------------------------+
	| Profscal.dll | 5.5.2654.66 | 
	+----------------------------+
	| Rtdsmcal.dll | 5.5.2654.66 | 
	+----------------------------+
	
	NOTE: Due to file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem set the processor affinity on the calcon.exe process
	to use only one processor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words: crash
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
