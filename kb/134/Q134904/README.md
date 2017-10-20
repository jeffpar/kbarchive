---
layout: page
title: "Q134904: STOP Msg: 0x0000001e on Server with Services for Macintosh"
permalink: /kb/134/Q134904/
---

## Q134904: STOP Msg: 0x0000001e on Server with Services for Macintosh

{% raw %}

	Article: Q134904
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform a file find from a Macintosh client to a Windows NT 3.51 server
	running Services for Macintosh, the following STOP message appears on the
	server:
	
	  Stop 0x0000001E 0xc0000005 0xfbadd487 0x00000000 0x00000064
	
	CAUSE
	=====
	
	This problem occurs when allocation for paged pool fails.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, install the fix mentioned below.
	
	The file, SFMSRV.SYS, has been modified to correct this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest U.S. Service Pack for Windows NT Server
	version 3.51. For information on obtaining this update, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
