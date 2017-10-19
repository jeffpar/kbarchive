---
layout: page
title: "Q231179: FP98SE: Heap Corruption, Memory Leak Occurs Performing Queries"
permalink: /kb/231/Q231179/
---

## Q231179: FP98SE: Heap Corruption, Memory Leak Occurs Performing Queries

	Article: Q231179
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you perform certain queries by using the FrontPage Search component on an
	Internet Information Server (IIS) where either Index Server is not installed or
	the NoIndexServer=1 parameter is set in the Frontpg.ini file, heap corruption
	and a memory leak may occur.
	
	RESOLUTION
	==========
	
	Upgrade to the latest version of the FrontPage Server Extensions. To obtain the
	latest version of the FrontPage Server Extensions, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/workshop/languages/fp/default.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This problem was corrected in Microsoft
	FrontPage 2000 Server Extensions.
	
	MORE INFORMATION
	================
	
	Whenever possible, upgrade to the latest version of the FrontPage Server
	Extensions. This will ensure that you have the most up-to-date functionality on
	your server.
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch kbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
