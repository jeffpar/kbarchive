---
layout: page
title: "Q320392: A &quot;Stop 0x0000000A&quot; Error Occurs in Tcpip.sys"
permalink: kb/320/Q320392/
---

## Q320392: A &quot;Stop 0x0000000A&quot; Error Occurs in Tcpip.sys

	Article: Q320392
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400nospFix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following stop code on a Windows NT 4.0-based computer:
	
	  Stop 0x0000000A (0x00000014, 0x00000002, 0x00000000, 0xf21b173d)
	
	Note that the first parameter (0x00000014) may vary.
	
	CAUSE
	=====
	
	This problem occurs because Tcpip.sys references a null pointer.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size     File name  Platform
	  ---------------------------------------------------------------
	  18-Jul-2002  03:44  4.0.1381.7179  309,008  Tcpip.sys  Alpha
	  18-Jul-2002  03:49  4.0.1381.7179  174,960  Tcpip.sys  x86
	
	
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
