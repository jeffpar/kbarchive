---
layout: page
title: "Q141860: PPT: Can't Open Files Created in Foreign Language Version"
permalink: /kb/141/Q141860/
---

## Q141860: PPT: Can't Open Files Created in Foreign Language Version

{% raw %}

	Article: Q141860
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,7.0; :4.0,7.0
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbconversion
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, version 4.0 
	- Microsoft Japanese PowerPoint for Japanese Windows 95, version 7.0 
	- Microsoft Japanese PowerPoint for Japanese Windows, version 4.0 
	- Microsoft Chinese PowerPoint for Chinese Windows 95, version 7.0 
	- Microsoft Chinese PowerPoint for Chinese Windows, version 4.0 
	- Microsoft Korean PowerPoint for Korean Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a presentation created in a Chinese, Japanese, or
	Korean (Far East) version of PowerPoint, you may receive one of the following
	messages:
	
	  Sorry, the file cannot be opened with this version of PowerPoint.
	
	  -or-
	
	  Sorry, this type of file cannot be opened by PowerPoint.
	
	This error occurs when you are using a non-Far East version of PowerPoint 4.0 or
	7.0 to open a presentation created and saved in Far East PowerPoint format.
	
	CAUSE
	=====
	
	The Far East languages use a different character set than non-Far East
	languages. Because Far East languages have many, many characters, Far East
	PowerPoint files must be stored in a double-byte format. The non-Far East
	versions of PowerPoint save their files in a single-byte format.
	
	The non-Far East versions of PowerPoint 7.0 can open the double-byte format, but
	the non-Far East versions of PowerPoint 4.0 cannot.
	
	RESOLUTION
	==========
	
	To open a Far East PowerPoint version 4.0 presentation in non-Far East versions
	of PowerPoint listed at the beginning of this article, you must first save the
	Far East presentation as a non-Far East PowerPoint version 4.0 file.
	
	Non-Far East PowerPoint version 7.0 can open a file saved in Far East PowerPoint
	version 4.0 or 7.0 format; however, you cannot read most of the content.
	
	Additional query words: 4.00 7.00 convert translate corrupt kbconversion oriental kanji eastern far east Asian
	
	======================================================================
	Keywords          : kbinterop kbdta kbconversion 
	Technology        : kbHLangKorean kbHLangJapanese kbHLangChinesePan kbHLangChineseSimp kbHLangChineseTrad kbPowerPtSearch kbPTProdChange kbPowerPt700 kbZNotKeyword2 kbZNotKeyword3 kbPowerPt700Search kbPowerPt400
	Version           : WINDOWS:4.0,7.0; :4.0,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
