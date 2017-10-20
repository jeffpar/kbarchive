---
layout: page
title: "Q160189: CSNW Cannot See More Than 32 Volumes Per Server"
permalink: /kb/160/Q160189/
---

## Q160189: CSNW Cannot See More Than 32 Volumes Per Server

{% raw %}

	Article: Q160189
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When browsing for volumes on a server running Novell NetWare or Microsoft File
	and Print Services for NetWare (FPNW), Windows NT File Manager or Explorer
	displays a maximum of 32 volumes--even if the server being browsed has more than
	32 volumes.
	
	CAUSE
	=====
	
	The dynamic-link library, Nwwks.dll, has a hard-coded limit of 32 volumes that
	it is able to display.
	
	WORKAROUND
	==========
	
	File Manager and Explorer are able to connect to volumes if the volume name is
	known. Otherwise, either keep the number of volumes for each server below 32 or
	obtain the hotfix mentioned below for Windows NT version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51.
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt Novell
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
