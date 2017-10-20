---
layout: page
title: "Q161644: STOP 0x0000000A Sfmsrv.sys When Copying File to Mac Volume"
permalink: /kb/161/Q161644/
---

## Q161644: STOP 0x0000000A Sfmsrv.sys When Copying File to Mac Volume

{% raw %}

	Article: Q161644
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After Service Pack 5 for Windows NT 3.51 or Service Pack 2 for Windows NT 4.0 is
	installed on a Windows NT 3.51 or 4.0 Server, and after a file is copied from a
	Macintosh computer to a Mac volume on that server, the following STOP error
	message appears on the Windows NT Server:
	
	  STOP 0x0000000A (0xfe372026,0x00000002,0x00000001,0xfe372026)
	
	NOTE: The first and fourth parameters will always have the same value, but that
	value depends on where Sfmsrv.sys loads on the system.
	
	CAUSE
	=====
	
	A function in Services for Macintosh may be paged out of memory at the time it
	is called during an interrupt. Since the code cannot be paged back into memory
	during an interrupt, a fault occurs.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Windows NT 3.51
	---------------
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT351/hotfixes-postSP5/sfmsrv-fix
	
	Windows NT 4.0
	--------------
	
	This hotfix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP2/sfmsrv-fix
	
	
	MORE INFORMATION
	================
	
	An example of a situation that could cause this problem is a Windows NT Server
	that is hosting many Windows 95 clients and a small number of Macintosh clients.
	If the situation arises where the Windows 95 clients are actively using the
	Windows NT Server and the Macintosh clients are not, the pageable code for
	Services for Macintosh could be paged to disk.
	
	Additional query words: prodnt 0xa sfm copy blue screen
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
