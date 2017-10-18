---
layout: page
title: "Q321589: Multiple Named Pipes May Become Slow"
permalink: kb/321/Q321589/
---

## Q321589: Multiple Named Pipes May Become Slow

	Article: Q321589
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400nospFix
	Last Modified: 14-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use multiple named pipes on a multiprocessor computer to connect to
	another server, performance may be reduced.
	
	CAUSE
	=====
	
	The redirector (Rdr.sys) creates worker threads if there are many requests.
	However, on multiprocessor servers, the worker threads may not be counted
	correctly.
	
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
	  -----------------------------------------------------
	  02-May-2002  06:02  4.0.1381.7153  266,160  Rdr.sys
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400sp6 kbWinNTS400search kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
