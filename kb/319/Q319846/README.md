---
layout: page
title: "Q319846: XCON: MTA Logs Event ID 2050 or 2051 Err Messages on DMS Server"
permalink: kb/319/Q319846/
---

## Q319846: XCON: MTA Logs Event ID 2050 or 2051 Err Messages on DMS Server

	Article: Q319846
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbExchange550preSP5fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the MTA is processing a message, the following error messages may be logged
	in the Application event log:
	
	  Event Type: Error
	  Event Source: MSExchangeMTA
	  Event Category: Internal Processing
	  Event ID: 2050
	  Date: 11/9/2001
	  Time: 8:51:03 AM
	  User: N/A
	  Computer: <server_name>
	  Description:
	  A fatal internal MTA error occurred. Contact Microsoft Technical Support. An
	  illegal PUT to element 7020B601 occurred at offset 89. [BASE DISP:ROUTER 10
	  69] (16)
	
	  Event Type: Error
	  Event Source: MSExchangeMTA
	  Event Category: Internal Processing
	  Event ID: 2051
	  Date: 11/9/2001
	  Time: 8:51:03 AM
	  User: N/A
	  Computer: <server_name>
	  Description:
	  A fatal internal MTA error occurred. Contact Microsoft Technical Support. An
	  illegal GET from element 7020B601 occurred at offset 1. [BASE DISP:ROUTER 10
	  70]
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft Exchange Server 5.5 service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: MTA
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Dcprods.cat  | N/A         | 
	+----------------------------+
	| Dbserver.sch | N/A         | 
	+----------------------------+
	| Ems_rid.dll  | 5.5.2656.22 | 
	+----------------------------+
	| Emsmta.exe   | 5.5.2656.22 | 
	+----------------------------+
	| Infoplog.cfg | N/A         | 
	+----------------------------+
	| Mtacheck.exe | 5.5.2656.22 | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.2656.22 | 
	+----------------------------+
	| P2.xv2       | N/A         | 
	+----------------------------+
	| P42.tpl      | N/A         | 
	+----------------------------+
	| P772.tpl     | N/A         | 
	+----------------------------+
	| X400om.dll   | 5.5.2656.22 | 
	+----------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words: 2050 2051 illegal dms
	
	======================================================================
	Keywords          : kberrmsg kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
