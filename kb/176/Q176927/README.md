---
layout: page
title: "Q176927: FP98: Newest to Oldest Order Doesn't Work in Discussion Web"
permalink: /kb/176/Q176927/
---

## Q176927: FP98: Newest to Oldest Order Doesn't Work in Discussion Web

{% raw %}

	Article: Q176927
	Product(s): Word Front Page
	Version(s): MACINTOSH:1.0; WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q197624.
	
	SYMPTOMS
	========
	
	When you attempt to list a table of contents in newest to oldest order in the
	Discussion Web Wizard after you have installed the FrontPage 98 Server
	Extensions, the articles are posted in oldest to newest order instead.
	
	For example, if you post three articles before you upgrade the FrontPage Server
	Extensions, they will be listed in newest to oldest order in the Tocproto.htm
	file. After you upgrade the FrontPage Server Extensions, the original articles
	retain their order, but new articles are posted in oldest to newest order, as
	shown in the following table.
	
	  Articles Posted Before                  Order of Articles After
	  Upgrading Server Extensions             Upgrading Server Extensions
	                                          and Three More Articles Posted
	  ----------------------------------------------------------------------
	
	               3                                        4
	               2                                        5
	               1                                        6
	                                                        3
	                                                        2
	                                                        1
	
	RESOLUTION
	==========
	
	To prevent this behavior you must install the updated version of the FrontPage
	Server Extensions. Upgrading the extensions will not fix the existing posts, but
	will correct the order on posts published after the upgrade. For more
	information about obtaining and installing the FrontPage Server Extensions,
	please see the following Microsoft Web site:
	
	  http://msdn.microsoft.com/workshop/languages/fp/default.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft FrontPage Server Extensions, version
	3.0.2.1330.
	
	MORE INFORMATION
	================
	
	The Tocproto.htm file determines the order of articles posted in your discussion
	Web. When you select newest to oldest order, the article is added to the top of
	the Tocproto.htm file. When you select oldest to newest, the article is added to
	the bottom of the file. The Tocproto.htm file is located in the following
	folders:
	
	  Windows 95: Webshare/wwwroot/name of Web/_disc
	  Windows NT: Inetpub/wwwroot/name of Web/_disc
	
	Additional query words: TOC Discussion Newest to Oldest front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 _IKkbZNotKeyword4 kbZNotKeyword kbFrontPage98Search kbFrontPageMac kbZNotKeyword3
	Version           : MACINTOSH:1.0; WINDOWS:
	Hardware          : MAC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
