---
layout: page
title: "Q288166: XCON: MTA Stops Delivering from Certain Queues After Event 2187"
permalink: /kb/288/Q288166/
---

## Q288166: XCON: MTA Stops Delivering from Certain Queues After Event 2187

	Article: Q288166
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange Server 5.5 message transfer agent (MTA) may stop transferring
	messages over some or all connectors that are accessed by the local MTA.
	
	The MTA generates 2187 events:
	
	  An MTA database server error was encountered while attempting to unlock an
	  object which is not locked. Called from MTA. Procedure 155. Object at fault:
	  08XXXXXX. [DB Server OPERATOR 20 58] (14)
	
	CAUSE
	=====
	
	The MTA is experiencing a problem with a gateway delivery thread. The problem is
	a result of the deletion of resources that are used internally by the MTA after
	a site is deleted.
	
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
	
	Component: MTA
	
	+----------------------------+
	| File name    | Version     | 
	+----------------------------+
	| Dbserver.sch | 5.5.2654.59 | 
	+----------------------------+
	| Dcprods.cat  | 5.5.2654.59 | 
	+----------------------------+
	| Emsmta.exe   | 5.5.2654.59 | 
	+----------------------------+
	| Ems_rid.dll  | 5.5.2654.59 | 
	+----------------------------+
	| Mtacheck.exe | 5.5.2654.59 | 
	+----------------------------+
	| Infoplog.cfg | 5.5.2654.59 | 
	+----------------------------+
	| Mtamsg.dll   | 5.5.2654.59 | 
	+----------------------------+
	| Mtaperf.dll  | 5.5.2654.59 | 
	+----------------------------+
	| P42.tpl      | 5.5.2654.59 | 
	+----------------------------+
	| P772.tpl     | 5.5.2654.59 | 
	+----------------------------+
	| P2.xv2       | 5.5.2654.59 | 
	+----------------------------+
	| X400om.dll   | 5.5.2654.59 | 
	+----------------------------+
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Exchange
	Server version 5.5 Service Pack 4.
	
	
	
	WORKAROUND
	==========
	
	To work around the problem, restart the MTA.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	MORE INFORMATION
	================
	
	The problem was only reproduced after multiple sites were deleted.
	
	Additional query words: stall backup queued
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP4
	Version           : :5.5 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
