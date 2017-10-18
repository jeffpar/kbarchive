---
layout: page
title: "Q279717: Memory Leak in Db2serv.exe"
permalink: kb/279/Q279717/
---

## Q279717: Memory Leak in Db2serv.exe

	Article: Q279717
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna400sp3 kbhis2000kbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A memory leak in the Db2serv.exe file may be observed, as monitored by
	Performance Monitor (PerfMon) or Task Manager, when you run a simple Visual
	Basic application that does the following:
	
	1. Opens a connection (leaves it open).
	
	2. Opens a command object.
	
	3. Runs 1000 iterations that consist of calling a Stored Procedure (SP) by using
	  the DB2OLEDB driver.
	
	4. Closes the command object.
	
	5. When all iterations are done, it closes the connection object.
	
	CAUSE
	=====
	
	Memory that was being allocated by the agent for the output parameter is not
	being released correctly.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server Version 4.0 or Host Integration Server (HIS)
	2000 service pack that contains this fix.
	
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
	later for both SNA Server 4.0 and Host Integration Server 2000:
	
	+--------------------------------+
	| File name   | Date     | Time  | 
	+--------------------------------+
	| Db2serv.exe | 11/16/00 | 12:00 | 
	+--------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	and Host Integration Server 2000.
	
	Additional query words: db2serv memory leak oledb HIS
	
	======================================================================
	Keywords          : kbDSupport kbsna400sp3 kbhis2000 kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP3
	Version           : :4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
