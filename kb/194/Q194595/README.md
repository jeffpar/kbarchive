---
layout: page
title: "Q194595: FP98: Permissions Not Retained When Web Is Renamed"
permalink: kb/194/Q194595/
---

## Q194595: FP98: Permissions Not Retained When Web Is Renamed

	Article: Q194595
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 97 and earlier version of this article, see Q161964.
	
	SYMPTOMS
	========
	
	Unique permissions on a subWeb are set to the same permissions as the root Web
	when you rename the subweb.
	
	CAUSE
	=====
	
	When you rename the subWeb, the old directory is deleted and a new directory is
	created.
	
	This problem occurs when you are running the Microsoft Internet Information
	Server, Microsoft Peer Web Services for Windows NT 4.0, and the Microsoft
	Personal Web Server. This symptom does not appear on other supported Web
	servers.
	
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
	folder on NTFS partitions. Under Windows 95, when you run the Microsoft Personal
	Web Server, new directories are listed as new Web shares. The Web shares inherit
	the access level of the parent directory.
	
	
	Additional query words: 98
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
