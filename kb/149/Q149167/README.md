---
layout: page
title: "Q149167: Unable to Allocate Resources from the NDIS Wrapper"
permalink: /kb/149/Q149167/
---

## Q149167: Unable to Allocate Resources from the NDIS Wrapper

{% raw %}

	Article: Q149167
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When AppleTalk Event ID: 46 errors start, Macintosh clients that are attempting
	to communicate with the server stop responding. The NT machine will report:
	
	  Event ID: 46
	  description: Unable to allocate resources from the NDIS Wrapper.
	
	Once this error begins, more Macintosh clients will hang and they will eventually
	hang the Windows NT Server.
	
	CAUSE
	=====
	
	In SFMATALK.SYS, the packet descriptors are allocated ahead of time from the
	NDIS Wrapper. With several hundred Macintosh clients accessing the server, it is
	possible that Windows NT will not have a packet descriptor ready when one is
	needed.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.51. This problem
	was corrected in the latest Windows NT 3.51 U.S. Service Pack. For information
	on obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
