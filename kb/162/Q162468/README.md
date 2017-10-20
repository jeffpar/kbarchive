---
layout: page
title: "Q162468: Volume Creation Date Is Not Reported Correctly from WinNT Server"
permalink: /kb/162/Q162468/
---

## Q162468: Volume Creation Date Is Not Reported Correctly from WinNT Server

{% raw %}

	Article: Q162468
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing a shared CD-ROM drive on a computer running Windows NT Server
	from a Macintosh client, the volume creation dates are not reported correctly.
	You may notice this problem when you do a "Get Info" on the CD from the
	Macintosh Finder.
	
	CAUSE
	=====
	
	To see shared Macintosh CDs on a computer running Windows NT Server, you need a
	third-party product called AHFS from Logicraft. Microsoft distributes this
	product as a part of the Tools For Schools CD.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain and apply the Windows NT Server 4.0 Service Pack
	2 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt Mac Getinfo date hfs
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : MAC
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
