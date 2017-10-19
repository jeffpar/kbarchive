---
layout: page
title: "Q164138: Files in Macintosh Volume Disappear from Macintosh Clients"
permalink: /kb/164/Q164138/
---

## Q164138: Files in Macintosh Volume Disappear from Macintosh Clients

	Article: Q164138
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using File Services for the Macintosh, Macintosh users may report that
	files that should be available are missing or have disappeared. When viewed by
	the server or PC clients, these files may found to reside on the server.
	
	CAUSE
	=====
	
	In certain instances, some directories were not enumerated at the file level by
	Macintosh File Services. Because of this problem, the MacFile index was not kept
	in sync with the NTFS file system.
	
	RESOLUTION
	==========
	
	A hotfixed version of Sfmsrv.sys is available to resolve this issue. To fully
	recover and resolve this issue once it has occurred, affected Macintosh volumes
	should be rebuilt after the hotfix is applied. For additional information
	performing the rebuild, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q147909
	  TITLE : Troubleshooting MacVolume Creation Errors
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: sfm post-sp5 resource fork duplicate duplicates disappearing disappears
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
