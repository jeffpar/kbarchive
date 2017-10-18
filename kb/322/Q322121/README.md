---
layout: page
title: "Q322121: Windows May Drop UDP Packets During a RAS Connection"
permalink: kb/322/Q322121/
---

## Q322121: Windows May Drop UDP Packets During a RAS Connection

	Article: Q322121
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400nospFix
	Last Modified: 08-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain situations, User Datagram Protocol (UDP) network packets may be
	discarded during a Remote Access Service (RAS) connection if the lower byte of
	the source port of the UDP package equals 137.
	
	CAUSE
	=====
	
	The component checks only the low byte of the source port to decide if a packet
	is a NetBIOS packet. This can cause a false positive test because the source
	port field is two bytes long.
	
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
	
	  Date         Time   Version        Size    File name
	  -----------------------------------------------------
	  15-May-2002  15:56  4.0.1381.7159  12,976  Rasarp.sys
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbWinNTSEnt400SP6a
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
