---
layout: page
title: "Q183047: FP: Form Results Not Secure in _Private Folder on IIS Server"
permalink: kb/183/Q183047/
---

## Q183047: FP: Form Results Not Secure in _Private Folder on IIS Server

	Article: Q183047
	Product(s): Word Front Page
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194239.
	
	SYMPTOMS
	========
	
	By default, FrontPage stores results of the Save Results Form Handler in the
	_private folder. If you are using Microsoft Internet Information Server (IIS),
	the contents of this folder are available for anyone to view. In other words,
	anyone can access the results in this folder by opening a page from this folder
	in a Web browser.
	
	CAUSE
	=====
	
	When FrontPage creates the _private folder, it limits browse access to FrontPage
	authors and administrators only. It grants write access to the files in this
	folder so that the FrontPage Server Extensions can create and update the results
	file. However, IIS servers are unable to grant write access to a file without
	also granting read access.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. Open your Web in FrontPage Explorer.
	
	2. Right-click the _private folder and click Properties on the menu that
	  appears.
	
	3. In the _private Properties dialog box, click to clear each check box.
	
	4. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior is specific to IIS servers only. This behavior does not occur on
	the UNIX platform or with other Web servers running on Windows NT. When you
	remove browse access on a folder, the server no longer allows access to the
	folder via HTTP. It does not alter the NTFS permissions of the folder.
	
	The FrontPage Server Extensions still have full access to the folder and the
	files in it. And, you will still be able to view and edit files in the _private
	folder using FrontPage.
	
	
	Additional query words: security 97 iis save results
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97Search kbZNotKeyword3
	Version           : WINDOWS:97
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
