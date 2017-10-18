---
layout: page
title: "Q263903: XADM: ArcServe 6.5 Does Not Work After Installing ESE Fix"
permalink: kb/263/Q263903/
---

## Q263903: XADM: ArcServe 6.5 Does Not Work After Installing ESE Fix

	Article: Q263903
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install the Extensible Storage Engine (ESE) fix that is described in
	the following Microsoft Knowledge Base article
	
	  Q254682 XADM: Exchange Server 5.5 Post-SP3 Database Engine Fixes
	
	Cheyenne ARCserve 6.5 may not work when you back up Exchange Server databases.
	
	CAUSE
	=====
	
	This problem can occur because a new Edbbcli.dll file (version 5.5.2652.31) is
	included in the ESE fix to resolve the issue that is described in the following
	Microsoft Knowledge Base article:
	
	  Q243601 XADM: Backups Time Out on Large Databases when Database Scrubbing Is
	  Enabled
	
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
	
	Component: ESE
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Edbbcli.dll | 5.5.2652.45 | 
	+---------------------------+
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, either remove the fix from the server that you want
	to back up or replace the Edbbcli.dll file with the Exchange Server 5.5 Service
	Pack 3 (version 5.5.2650.17) version of the Edbbcli.dll file until the fix that
	is described in this article is available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5 Service Pack
	3.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: backup; stalling; slow
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
