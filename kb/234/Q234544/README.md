---
layout: page
title: "Q234544: Cluster Bottleneck Occurs When a Large Number of Disks Are Invol"
permalink: /kb/234/Q234544/
---

## Q234544: Cluster Bottleneck Occurs When a Large Number of Disks Are Invol

	Article: Q234544
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	"High-end" computer systems (especially large FibreChannel installations) that
	have a large number of hard disks may experience slow response times.
	
	CAUSE
	=====
	
	This is because of the number of times the bus is reset. Each reset process can
	stop the entire bus for seconds at a time. When a large number of hard disks are
	involved, this time can grow to minutes.
	
	RESOLUTION
	==========
	
	This problem was fixed by reducing the number of bus resets performed, while
	maintaining the requirement of finding the correct disk device when needed.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	The latest service pack is also available at the following Internet location:
	
	  http://www.microsoft.com/windows/servicepacks/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
