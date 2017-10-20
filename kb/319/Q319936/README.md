---
layout: page
title: "Q319936: XCON: The MTA Generates an Event ID 4283 Message"
permalink: /kb/319/Q319936/
---

## Q319936: XCON: The MTA Generates an Event ID 4283 Message

{% raw %}

	Article: Q319936
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If an incoming connection times out before the Exchange Server 5.5 message
	transfer agent (MTA) receives the OK response, the MTA may generate an event ID
	4283 error message.
	
	The MTA generates at least the following two events:
	
	  
	
	  message NMI4258: Interface Event, severity 8
	
	         (POP4 POP4 UP(7) Proc 228) 02-26-02 02:43:50pm
	         Message received at NSI:
	           cb 12
	           LPI 1-15-12
	           Message type Close Request
	
	  later
	  message NMI4283: Interface Event, severity 14
	
	         (POP4 POP4 UP(7) Proc 228) 02-26-02 02:43:50pm
	         Bad LPIs in message
	         Bad LPI 1-15-12
	         Error code = 8464
	
	CAUSE
	=====
	
	The problem may occur if the system cannot respond to incoming connections
	before the connection times out at the Winsock layer.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	Component: MTA
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table.
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Emsmta.exe   | 6.0.2656.20 | 
	+----------------------------+
	| Dbserver.sch | 6.0.2656.20 | 
	+----------------------------+
	| Dcprods.cat  | 6.0.2656.20 | 
	+----------------------------+
	| Ems_rid.dll  | 6.0.2656.20 | 
	+----------------------------+
	| Infoplog.cfg | 6.0.2656.20 | 
	+----------------------------+
	| Mtacheck.exe | 6.0.2656.20 | 
	+----------------------------+
	| Mtamsg.dll   | 6.0.2656.20 | 
	+----------------------------+
	| Mtaperf.dll  | 6.0.2656.20 | 
	+----------------------------+
	| P2.xv2       | 6.0.2656.20 | 
	+----------------------------+
	| P42.tpl      | 6.0.2656.20 | 
	+----------------------------+
	| P772.tpl     | 6.0.2656.20 | 
	+----------------------------+
	| X400om.dll   | 6.0.2656.20 | 
	+----------------------------+
	
	NOTE: Because of file dependencies, this fix requires Microsoft Exchange Server
	version 5.5 Service Pack 4.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
