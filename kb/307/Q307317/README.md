---
layout: page
title: "Q307317: System ACLs Cannot Be Read on Clients in an MSMQ MQIS Domain"
permalink: kb/307/Q307317/
---

## Q307317: System ACLs Cannot Be Read on Clients in an MSMQ MQIS Domain

	Article: Q307317
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4,4.0 SP5,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Message Queuing (MSMQ) Message Queue Information Service
	(MQIS) servers that run Windows NT 4.0, clients that run Microsoft Windows XP or
	Microsoft Windows 2000 Service Pack 2 cannot read system access control lists
	(ACLs) and cannot update their own properties when they are connected with an
	MQIS server.
	
	NOTE: Windows XP clients can use MQIS servers that run Windows NT 4.0 only in a
	Windows NT 4.0-based domain.
	
	RESOLUTION
	==========
	
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
	
	  Date         Time   Version        Size     File name
	  ------------------------------------------------------
	  06-Sep-2001  13:52  4.0.1381.7097  343,824  Rpcrt4.dll
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : :4.0 SP4,4.0 SP5,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
