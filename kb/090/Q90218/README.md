---
layout: page
title: "Q90218: ClipBook Page from Write Loses Formatting and Fonts"
permalink: /kb/090/Q90218/
---

## Q90218: ClipBook Page from Write Loses Formatting and Fonts

{% raw %}

	Article: Q90218
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you copy information from the Windows for Workgroups Write application to
	the Clipboard and create a ClipBook page out of that information, the appearance
	of the information changes and loses special formatting and fonts. This article
	explains why.
	
	MORE INFORMATION
	================
	
	When you copy information from an application to the Clipboard, the information
	is copied in one or more formats. Most clipboard viewers, including the
	Microsoft Windows operating system version 3.1 Clipboard viewer and Windows for
	Workgroups ClipBook Viewer, are able to display Clipboard data in a limited
	number of formats such as text, picture, bitmap, and palette. Write documents
	are complicated because they contain a mixture of different fonts, colors, and
	special formatting information. Windows provides a separate format, called
	OwnerDraw, that allows the Clipboard viewer to display such complex renderings
	without knowing everything about the way Write displays its information. When
	using this format, the Clipboard viewer communicates with the owner of the
	information, such as Windows Write, and that application does all the work and
	actually draws within the Clipboard viewer window. The Clipboard viewer simply
	notifies Write if the window has been scrolled or needs to be redrawn.
	
	This scheme only works while Write is running. Once you close Write, the
	OwnerDraw format is no longer available, and the Clipboard viewer displays the
	Write information in the next best format, usually a text format.
	
	When you create a ClipBook page, only information that can be saved is used. The
	OwnerDraw format cannot be saved, so application-specific formatting and font
	information is lost.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
