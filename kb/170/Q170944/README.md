---
layout: page
title: "Q170944: WD97: Page Border Art Has a White Background"
permalink: /kb/170/Q170944/
---

## Q170944: WD97: Page Border Art Has a White Background

{% raw %}

	Article: Q170944
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbusage kbdta winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some page borders are displayed with a white background. This behavior occurs
	(and may present a problem) if you have the "Blue background, white text" option
	selected. (On the Tools menu, click Options, and click the General tab.)
	
	CAUSE
	=====
	
	Some border art has a white background, and other art has a transparent
	background.
	
	WORKAROUND
	==========
	
	There is no way to modify or edit the page border art. To change the background
	color back to the standard white background with black text, do the following
	steps:
	
	1. On the Tools menu, click Options.
	
	2. Click the General tab.
	
	3. Click to clear the "Blue background, white text" check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The transparency or non-transparency of the border art has to do with the way
	the border art was created. Some border art has a white background (in the
	actual metafile) instead of a transparent one. Not all of the borders have a
	white background. Border art images with non-white backgrounds include the
	following:
	
	  Balloons (bunch of balloons not the hot air balloon)
	  Pine trees (non stylistic)
	  Heart (big red one)
	  Sun
	  Red cube
	  The bio-hazard circle (yellow and black)
	
	To insert page border art, follow these steps:
	
	1. On the Format menu, click Borders and Shading.
	
	2. Click the Page Border tab, and click to select the art you want in the Art
	  drop-down list.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  
	
	  Q157098 WD97: General Information About Page Borders in Word 97
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbgraphic kbusage kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
