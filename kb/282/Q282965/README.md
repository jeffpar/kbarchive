---
layout: page
title: "Q282965: Event ID 26 May Be Logged When a Resource Fails"
permalink: kb/282/Q282965/
---

## Q282965: Event ID 26 May Be Logged When a Resource Fails

	Article: Q282965
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400nospFix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a resource fails, Failover Manager may not release resources in a timely
	manner and may allow the second node to take control over the pending resources
	too soon. This might cause event ID 26 ("Lost Delayed Write data") to be
	logged.
	
	
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
	
	  Date       Time   Size    File name     Platform
	  ------------------------------------------------
	  31-Jan-01  15:34  43,280  Resrcmon.exe  Intel
	  31-Jan-01  15:31  66,320  Resrcmon.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
