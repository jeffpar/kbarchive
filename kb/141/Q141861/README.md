---
layout: page
title: "Q141861: Asian Characters Are Lost in Translation"
permalink: kb/141/Q141861/
---

## Q141861: Asian Characters Are Lost in Translation

	Article: Q141861
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,7.0; :4.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows, version 4.0 
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft Japanese PowerPoint for Japanese Windows, version 4.0 
	- Microsoft Japanese PowerPoint for Japanese Windows 95, version 7.0 
	- Microsoft Chinese PowerPoint for Chinese Windows, version 4.0 
	- Microsoft Chinese PowerPoint for Chinese Windows 95, version 7.0 
	- Microsoft Korean PowerPoint for Korean Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a presentation created in a Japanese, Chinese, or Korean version
	of PowerPoint (hereinafter referred to as Asian PowerPoint), all the Asian
	characters are changed to special characters or symbols. Also, you may receive
	the following error message in PowerPoint 7.0 when opening an Asian PowerPoint
	presentation:
	
	  This presentation may contain non-displayable text and formats from the Far
	  East.
	
	
	CAUSE
	=====
	
	The Asian versions of PowerPoint use a double-byte font set that cannot be used
	in the non-Asian versions of PowerPoint. When a non-Asian version of PowerPoint
	opens an Asian file, these fonts are translated into symbols, because there is
	no matching font set.
	
	Additional query words: lost gone missing symbol junk garbage jumbled oriental kanji eastern far east kbconvert ppt97 8.0
	
	======================================================================
	Keywords          :  
	Technology        : kbHLangKorean kbHLangJapanese kbHLangChinesePan kbHLangChineseSimp kbHLangChineseTrad kbPowerPtSearch kbPTProdChange kbPowerPt700 kbZNotKeyword2 kbZNotKeyword3 kbPowerPt700Search kbPowerPt400
	Version           : WINDOWS:4.0,7.0; :4.0,7.0
	Hardware          : x86
	
	=============================================================================
	
