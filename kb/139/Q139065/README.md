---
layout: page
title: "Q139065: Services For Macintosh on Windows NT 3.51 Service Pack 2 Hangs"
permalink: /kb/139/Q139065/
---

## Q139065: Services For Macintosh on Windows NT 3.51 Service Pack 2 Hangs

{% raw %}

	Article: Q139065
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
	
	When you use Services for Macintosh (SFM) after you install Windows NT Service
	Pack 2, the Windows NT Server 3.51 and Macintosh client computers on your
	network stop responding (hang). Then problem occurs when:
	
	- The Macintosh client is already connected to the Windows NT Server.
	
	- The Macintosh client attempts to connect to a Macintosh volume on the Windows
	  NT Server.
	
	CAUSE
	=====
	
	This problem occurs because Services for Macintosh assigns duplicate file
	identifiers (FIDs) to the same file.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 2. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt kb
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
