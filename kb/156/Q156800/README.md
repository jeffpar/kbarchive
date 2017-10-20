---
layout: page
title: "Q156800: SFM Primary Group Show"
permalink: /kb/156/Q156800/
---

## Q156800: SFM Primary Group Show

{% raw %}

	Article: Q156800
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view Services For Macintosh (SFM) Volume and Directory Permissions, the
	primary group account is listed as <Account Unknown>. Macintosh clients
	may report being unable to connect to Windows NT volumes, or unable to access
	some directories within the volume.
	
	
	CAUSE
	=====
	
	The Windows NT Server computer is set up as a stand-alone server, and has been
	moved from a domain to a workgroup. By default, when a SFM volume is created,
	the primary group is set to the domain users group. When the server is moved to
	a workgroup, the domain accounts are no longer available, and the primary group
	will not choose another group without administrator intervention.
	
	RESOLUTION
	==========
	
	An administrator will have to modify the Volume and Directory permissions for
	the Macintosh volume to set the primary group to an existing group.
	
	Additional query words: sfm blank empty
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51
	
	=============================================================================
	

{% endraw %}
