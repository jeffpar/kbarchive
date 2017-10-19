---
layout: page
title: "Q170975: FP: Deleted Pages from Web Show up in Search Results List"
permalink: /kb/170/Q170975/
---

## Q170975: FP: Deleted Pages from Web Show up in Search Results List

	Article: Q170975
	Product(s): Word Front Page
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194263.
	
	SYMPTOMS
	========
	
	When you perform a search, your results list contains one or more pages that you
	deleted using FrontPage Explorer. If you attempt to load a deleted page, you
	receive a message indicating that the page cannot be found.
	
	CAUSE
	=====
	
	This behavior occurs because FrontPage maintains pointers to your Web
	content--even the content you deleted. These pointers remain intact until you
	recalculate links.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use either of the following methods.
	
	NOTE: You should try Method 1 first. If Method 1 does not resolve this behavior,
	use Method 2.
	
	Method 1: Recalculate Links
	---------------------------
	
	1. Open your Web in FrontPage Explorer.
	
	2. On the Tools menu, click Recalculate Hyperlinks.
	
	3. Rerun your search in a Web browser.
	
	  NOTE: You may need to refresh or reload the page in the Web browser.
	
	Method 2: Reset the Dependency Databases
	----------------------------------------
	
	To reset the dependency databases used by the FrontPage Search component, follow
	these steps:
	
	1. In Windows Explorer, open the folder that contains your Web content. To
	  determine where you content is stored, use the following table as a guide
	
	     Web Server               Folder
	     -----------------------------------------------------------------
	
	     FrontPage Personal Web Server      \FrontPage Webs\Content
	     Microsoft Personal Web Server      \Webshare\wwwroot
	     Microsoft Internet Information Server  \InetPub\wwwroot
	
	2. Open the folder that contained the deleted page.
	
	3. Open the \_vti_pvt folder and delete the following two files:
	
	     Deptodoc.btr
	     Doctodep.btr
	
	4. Open the \_vti_txt\default.wti folder. Delete the following files:
	
	     All.cat
	     All.dct
	     All.doc
	     All.fmt
	     All.fn
	     All.hl
	     All.idx
	     All.inv
	     All.src
	
	5. Switch to FrontPage Explorer.
	
	6. On the Tools menu, click Recalculate Hyperlinks.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97 kbZNotKeyword kbZNotKeyword2 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : :1.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
