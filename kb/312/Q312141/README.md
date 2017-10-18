---
layout: page
title: "Q312141: WINS Owner Replicated When Owner's IP Is in PersonaNonGrata List"
permalink: kb/312/Q312141/
---

## Q312141: WINS Owner Replicated When Owner's IP Is in PersonaNonGrata List

	Article: Q312141
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PersonaNonGrata registry key for Windows Internet Name Service (WINS) may
	not restrict certain Internet protocol (IP) addresses during replication.
	
	CAUSE
	=====
	
	This problem may occur if a domain entry is replicated and there is a domain
	controller record in the domain entry whose owner is in the PersonaNonGrata
	list.
	
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
	
	  Date         Time      Size     File name     Platform
	  ------------------------------------------------------
	  02-JAN-2002  11:51     195,856  Wins.exe      Intel
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
