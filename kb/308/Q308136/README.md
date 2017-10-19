---
layout: page
title: "Q308136: FP: How to Create Alternate Text for Different Hot Spots"
permalink: /kb/308/Q308136/
---

## Q308136: FP: How to Create Alternate Text for Different Hot Spots

	Article: Q308136
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to add alternate text to different hot spots on the
	same image map.
	
	A hot spot is an area on a Web-page object that contains a hyperlink. A picture
	or other graphic object that contains a hot spot is called an image map.
	
	MORE INFORMATION
	================
	
	To add alternate text for different hot spots on the same image map, follow
	these steps:
	
	1. With the hot spots already created on your image map, click HTML to view the
	  source code.
	
	2. Locate the tag that contains the following text
	
	  area href
	
	  for the image map that you want to edit.
	
	3. After the shape tag for each hotspot, type the following:
	
	  alt="<text>"
	
	  For example:
	
	  <area href="page.htm" shape="rect" alt="alternate text" coords="39,53,170,137">
	
	4. Repeat steps 2 and 3 for each hot spot that you have created.
	
	NOTE: The "alt" portion of the area href tag actually designates a ScreenTip, not
	alternate text, but the effect is that of alternate text.
	
	Additional query words: front page inf
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
