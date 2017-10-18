---
layout: page
title: "Q246988: Default Gateway Is Ignored When IRDP Is Enabled"
permalink: kb/246/Q246988/
---

## Q246988: Default Gateway Is Ignored When IRDP Is Enabled

	Article: Q246988
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A host computer may lose the connection to one of its gateways.
	
	CAUSE
	=====
	
	If a computer that is configured to use Internet Router Discovery Protocol
	(IRDP) temporarily stops receiving router advertisements from a gateway
	interface and the default gateway detection routine discovers that the interface
	is invalid, the route to that gateway interface is deleted from the route table
	on the computer. If the gateway becomes valid again and starts sending IRDP
	updates to the computer, the route is not added again.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time      Size      File name   Platform
	  ---------------------------------------------------
	  11/22/99   11:23am   171,664   Tcpip.sys   i386
	  11/22/99   11:21am   305,680   Tcpip.sys   Alpha
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, restart your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about IRDP, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q223756 IRDP Client Support Added to Windows NT 4.0
	
	For additional information about default gateway detection, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q128978 Dead Gateway Detection in TCP/IP for Windows NT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
