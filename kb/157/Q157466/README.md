---
layout: page
title: "Q157466: WD: WordArt Object Missing, Changes After Conversion"
permalink: kb/157/Q157466/
---

## Q157466: WD: WordArt Object Missing, Changes After Conversion

	Article: Q157466
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:6.0,6.0a,6.0c,7.0,7.0a,97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word for Windows, versions 6.0, 6.0a, 6.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Word 97 document that contains WordArt text effects in Word 7.0,
	the WordArt is missing.
	
	When you open a Word 97 document that contains WordArt text effects in Word 6.0
	for Windows, the WordArt object appears as a pattern-filled drawing object.
	
	CAUSE
	=====
	
	WordArt 97 objects are special text effects that are not converted to Word 7.0
	or Word 6.x WordArt objects. An object may appear as colored, patterned color,
	or solid black box. This is a design limitation in the Word for Windows 6.0/7.0
	converter.
	
	
	WORKAROUND
	==========
	
	Use the Word 97 & 6.0/95 RTF converter instead of the Word 6.0/95 converter
	to preserve the WordArt when reopened in Word 97.
	
	Additional query words: 8.0 word8 word97 grey convert
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord700Search kbZNotKeyword2 kbWord600 kbWord600a kbWord600c kbWord700 kbWord700a
	Version           : WINDOWS:6.0,6.0a,6.0c,7.0,7.0a,97
	
	=============================================================================
	
