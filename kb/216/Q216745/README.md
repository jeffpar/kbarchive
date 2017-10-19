---
layout: page
title: "Q216745: How to Improve Performance of a FrontPage 98 Discussion Web"
permalink: /kb/216/Q216745/
---

## Q216745: How to Improve Performance of a FrontPage 98 Discussion Web

	Article: Q216745
	Product(s): Word Front Page
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to improve the performance of a Discussion Web. By
	implementing one of the following methods, you can reduce the time it takes to
	make a new post to the Discussion Web.
	
	MORE INFORMATION
	================
	
	FrontPage 98 Discussion Webs can exhibit slow performance as the size of the Web
	increases and the number of posts increase. The performance degradation most
	notably occurs linearly as new posts are made. To increase performance, you can
	make a configuration change to the FrontPage 98 Discussion Web. To do this, use
	the steps listed below.
	
	Each time a post is made to the Discussion Web, several parses occur from the
	Server Extensions. To reduce the number of parses, complete the following steps,
	which will prevent the Toc.htm from being created, and delete the existing one.
	
	1. Open the Discussion Web in FrontPage.
	
	2. Open the Disc#_post.htm file in the FrontPage Editor.
	
	3. Select the HTML view.
	
	4. Find the HTML code "b-make-toc="True".
	
	5. Modify this code to "b-make-toc="False". When you do this, FrontPage will not
	  create the Toc.htm page, which reduces the amount of parses and increases
	  performance.
	
	6. Save the page and close the FrontPage Editor.
	
	7. In FrontPage Explorer, select Tools, select Web Settings, and then click the
	  Advanced tab.
	
	8. Select the "Show documents in hidden directories" check box, and then click
	  Apply.
	
	9. Click Yes to refresh the Web, and the click OK.
	
	10. In the Folder View, view the contents of the _disc# folder.
	
	11. Locate the Toc.htm file and delete it.
	
	12. Select Tools, and choose Recalculate Hyperlinks.
	
	With these changes made, you should begin to see increased performance when
	making new posts.
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	
