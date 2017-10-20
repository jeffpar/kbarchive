---
layout: page
title: "Q126979: Group Does Not Migrate from NetWare Server to Windows NT"
permalink: /kb/126/Q126979/
---

## Q126979: Group Does Not Migrate from NetWare Server to Windows NT

{% raw %}

	Article: Q126979
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Migration Tool for NetWare (Nwconv.exe) to migrate users and
	groups from a Novell NetWare server to Windows NT, the Migration Tool for
	NetWare may fail to migrate some groups. The Error.log file reports the
	following error:
	
	  [Adding Users to Groups]
	  Could not enumerate users for Group: <Group_Name>
	
	CAUSE
	=====
	
	This problem can occur if the group account referenced by the error in the
	Error.log file has the same name as a user account on the NetWare server.
	
	RESOLUTION
	==========
	
	To work around this problem, rename the group account or the user account on the
	NetWare server, and then try the group migration again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5, 3.51,
	and 4.0.
	
	Additional query words: nwconv migrate convert
	======================================================================
	Keywords          : kbnetwork kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
