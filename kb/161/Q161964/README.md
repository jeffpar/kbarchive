---
layout: page
title: "Q161964: FP: Permissions Not Retained When Web Is Renamed"
permalink: /kb/161/Q161964/
---

## Q161964: FP: Permissions Not Retained When Web Is Renamed

	Article: Q161964
	Product(s): Word Front Page
	Version(s): windows:1.1,97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194595.
	
	SYMPTOMS
	========
	
	Unique permissions on a subweb are set to the same permissions as the root Web
	when you rename the subWeb.
	
	CAUSE
	=====
	
	When you rename the subWeb, the old directory is deleted and a new directory is
	created.
	
	This problem occurs when you are running Microsoft Internet Information Server,
	Microsoft Peer Web Services for Windows NT 4.0, and Microsoft Personal Web
	Server. This symptom does not appear on other supported Web servers.
	
	RESOLUTION
	==========
	
	To correct this problem, reassign the permissions after you rename the subWeb.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	New directories under Windows NT inherit the access permissions of the parent
	folder on NTFS partitions. On Windows 95, when you run Microsoft Personal Web
	Server, new directories are listed as new Web shares. The Web shares inherit the
	access level of the parent directory.
	
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : windows:1.1,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
