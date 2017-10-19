---
layout: page
title: "Q157739: Winbm2fv.exe Does Not Work in Windows NT"
permalink: /kb/157/Q157739/
---

## Q157739: Winbm2fv.exe Does Not Work in Windows NT

	Article: Q157739
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the Windows Bookmarks to Favorites utility
	(Winbm2fv.exe) inside Windows NT 4.0 to convert Netscape Navigator bookmarks to
	Internet Explorer Favorites, the conversion program returns the following
	message and fails:
	
	  Internet Explorer Not Found
	
	CAUSE
	=====
	
	The WINBM2FV utility is provided on the Microsoft BBS and ftp site, and does not
	come with a readme file. The utility was designed to run with Windows 95. When
	run from within Windows NT, the utility is unable to locate the Favorites folder
	in the Winnt\Profiles\<USER> directory; therefore, it fails. There is no
	browse capability in the utility to locate the Favorites folder.
	
	WORKAROUND
	==========
	
	To work around this issue, perform one of the following steps:
	
	- Use Internet Explorer 3.0 to open the Bookmark.htm file created in Netscape
	  Navigator, which contains the Navigator bookmarks. In Internet Explorer, on
	  the Favorites menu, click Add to Favorites. This will make all of the
	  Navigator bookmarks easily accessible on one HTM page.
	
	  -or-
	
	- Manually add the bookmarks to the favorites list.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q152681
	  TITLE : How to Use Netscape Navigator Bookmarks in Internet Explorer
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kb3rdparty kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
