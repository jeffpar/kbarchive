---
layout: page
title: "Q185694: Thread Deadlock When Windows NT Backup Is Stopped"
permalink: /kb/185/Q185694/
---

## Q185694: Thread Deadlock When Windows NT Backup Is Stopped

	Article: Q185694
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbExchange500preSP3fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are running a backup using the Windows NT Backup program against a
	Microsoft Exchange Server computer, if the backup is stopped before the backup
	completes, Windows NT Backup stops responding (hangs).
	
	CAUSE
	=====
	
	When a backup is stopped, the closing procedure blocks infinitely, waiting on a
	thread's handle to close. The thread handle is never closed, so Windows NT
	Backup stops responding.
	
	RESOLUTION
	==========
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Microsoft Exchange
	Server version 5.5. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	Exchange Server 5.0
	-------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server 5.0 service pack that contains this fix.
	
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
	
	Component: Exchange Database Engine
	
	+---------------------------+
	| File name   | Version     | 
	+---------------------------+
	| Edbbcli.dll | 5.0.1461.31 | 
	+---------------------------+
	
	
	
	Exchange Server 4.0
	-------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Exchange Database Engine
	
	+-------------------------+
	| File name   | Version   | 
	+-------------------------+
	| Edbbcli.dll | 4.0.997.1 | 
	+-------------------------+
	
	
	
	STATUS
	======
	
	Exchange Server 5.5
	-------------------
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem was first corrected in Microsoft Exchange Server Service Pack
	1.
	
	Exchange Server 5.0
	-------------------
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0.
	
	Exchange Server 4.0
	-------------------
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	4.0.
	
	Additional query words: hang abort
	
	======================================================================
	Keywords          : kbExchange500preSP3fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
