---
layout: page
title: "Q162401: NWConv Cannot Migrate 2-Character NetWare Server"
permalink: /kb/162/Q162401/
---

## Q162401: NWConv Cannot Migrate 2-Character NetWare Server

{% raw %}

	Article: Q162401
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbWinNT400sp5fixkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the Migration Tool for NetWare (Nwconv.exe), select the NetWare
	and Windows NT Servers to do the migration, and then select File Options, the
	Source Files and Destination are blank.
	
	CAUSE
	=====
	
	The Migration Tool for NetWare cannot migrate a NetWare server with a 2-
	character name.
	
	RESOLUTION
	==========
	
	To work around this problem, rename the NetWare server to a name with three or
	more characters, perform the migration, and then change the name back if
	necessary. To resolve this problem, obtain the latest service pack for Windows
	NT 4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in Windows NT version 4.0 Service Pack 5. This problem
	occurs in Windows NT version 4.0 Service Pack 6a.
	
	Additional query words: convert sys volume
	
	======================================================================
	Keywords          : kbnetwork kbtool kbWinNT400sp5fix kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
