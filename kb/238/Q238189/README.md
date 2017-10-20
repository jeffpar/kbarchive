---
layout: page
title: "Q238189: XCON: Duplicate Messages Delivered After MTA Restart"
permalink: /kb/238/Q238189/
---

## Q238189: XCON: Duplicate Messages Delivered After MTA Restart

{% raw %}

	Article: Q238189
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the message transfer agent (MTA) is under heavy stress, Db*.dat files are
	sometimes not cleaned up properly. In some cases, these files are also not
	marked as "used." When the MTA is restarted, the queues are rebuilt based on all
	of the Db*.dat files that are "not used" in the Mtadata folder. Because these
	files have not been cleaned up or marked as delivered, restarting the MTA in
	this state produces duplicate mail to the local store.
	
	In addition, when the MTA is in this state it cannot be shut down cleanly.
	Consequently, either killing the MTA or hard-booting the server are the only
	options to bring it down.
	
	CAUSE
	=====
	
	Viewing the Performance Monitor counter MSExchangeMTA, with the instance Work
	Queue Length, reveals a steady increase but no message backlog in any other
	queue. This is a result of the Db*.dat files not being marked as "used."
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
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
	
	Component: Message Transfer Agent
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Dbserver.sch | N/A        | 
	+---------------------------+
	| Dcprods.cat  | N/A        | 
	+---------------------------+
	| Ems_rid.dll  | 5.5.2621.0 | 
	+---------------------------+
	| Emsmta.exe   | 5.5.2621.0 | 
	+---------------------------+
	| Info4log.cfg | N/A        | 
	+---------------------------+
	| Infoblog.cfg | N/A        | 
	+---------------------------+
	| Infodlog.cfg | N/A        | 
	+---------------------------+
	| Infollog.cfg | N/A        | 
	+---------------------------+
	| Infoplog.cfg | N/A        | 
	+---------------------------+
	| Infotlog.cfg | N/A        | 
	+---------------------------+
	| Mtacheck.exe | 5.5.2621.0 | 
	+---------------------------+
	| Mtamsg.dll   | 5.5.2621.0 | 
	+---------------------------+
	| P2.xv2       | N/A        | 
	+---------------------------+
	| X400om.dll   | 5.5.2621.0 | 
	+---------------------------+
	| X400omv1.dll | 5.5.2621.0 | 
	+---------------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
