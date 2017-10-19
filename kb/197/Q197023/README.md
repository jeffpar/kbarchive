---
layout: page
title: "Q197023: WD97: Rotated or Flipped Text in Macpict Graphic Seems Distorted"
permalink: /kb/197/Q197023/
---

## Q197023: WD97: Rotated or Flipped Text in Macpict Graphic Seems Distorted

	Article: Q197023
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Word for Windows, if you edit a Macpict graphic that contains rotated or
	flipped text, or if the graphic itself is rotated, the rotated or flipped text
	or graphic may appear distorted or coarse.
	
	NOTE: To create a Macpict graphic, use the Word for the Macintosh picture editor.
	
	CAUSE
	=====
	
	The Word for Windows picture editor does not support rotated or flipped text. If
	you edit a Macpict graphic, Word transforms the rotated text into two
	superimposed components, namely an unrotated text image and a bitmap image of
	the rotated text. The superimposed images appear distorted.
	
	This distortion may worsen if you scale the graphic more than 5 percent of its
	original size.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: 6.0 bitmap raster garbage display winword word6 macword garbled word95 word7 7.0 word8 word97 8.0
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
