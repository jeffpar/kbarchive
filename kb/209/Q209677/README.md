---
layout: page
title: "Q209677: WD97: Shading Changes Opening a Word 2000 Document"
permalink: /kb/209/Q209677/
---

## Q209677: WD97: Shading Changes Opening a Word 2000 Document

{% raw %}

	Article: Q209677
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion wd2000 wordconvert
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, when you open a Microsoft Word 2000 document [or a Word
	2000 document saved in "Rich Text Format (*.rtf)"] that contains shading, the
	shading does not appear as it does in Word 2000.
	
	For example, if you have paragraphs shaded with 5 percent, 10 percent, or 12.5
	percent gray shading in Word 2000, they appear unshaded (white) when the file is
	opened in Word 97.
	
	
	CAUSE
	=====
	
	This behavior occurs because of the different ways that the two versions of Word
	handle color palettes. For example, Word 2000 supports 24-bit RGB color, but
	Word 97 supports 16-bit color and has a limit of 50 RGB colors.
	
	This means that colors that are similar to each other in Word 2000 are translated
	(converted) to a single color in Word 97.
	
	WORKAROUND
	==========
	
	If you are sharing your documents with others who use Microsoft Word 97 for
	Windows, try eliminating gradient fills and use solid background or fill colors.
	
	MORE INFORMATION
	================
	
	The following table shows how the pre-defined shading in a Word 2000
	document that was saved as either "Word Document (*.doc)" or "Rich
	Text Format (*.rtf)" converts when you open the document in Microsoft
	Word 97 for Windows.
	
	  Shading in Word 2000          Converts to this shading in Word 97
	  ---------------------------------------------------------------
	
	  White                         Retained as White
	  Gray - 5%                     Converts to White
	  Gray - 10%                    Converts to White
	  Gray - 12.5%                  Converts to White
	  Gray - 15%                    Converts to Gray - 25%
	  Gray - 20%                    Converts to Gray - 25%
	  Gray - 25%                    Retained as Gray - 25%
	  Gray - 30%                    Converts to Gray - 25%
	  Gray - 35%                    Converts to Gray - 25%
	  Gray - 37.5%                  Converts to Gray - 25%
	  Gray - 40%                    Converts to Gray - 50%
	  Gray - 45%                    Converts to Gray - 50%
	  Gray - 50%                    Retained as Gray - 50%
	  Gray - 55%                    Converts to Gray - 50%
	  Gray - 60%                    Converts to Gray - 50%
	  Gray - 62.5%                  Converts to Gray - 50%
	  Gray - 65%                    Converts to Gray - 50%
	  Gray - 70%                    Converts to Gray - 50%
	  Gray - 75%                    Converts to Gray - 50%
	  Gray - 80%                    Converts to Black
	  Gray - 85%                    Converts to Black
	  Gray - 87.5%                  Converts to Black
	  Gray - 90%                    Converts to Black
	  Gray - 95%                    Converts to Black
	  Black                         Retained as Black
	  Brown                         Converts to Dark Red
	  Olive Green                   Converts to Dark Yellow
	  Dark Green                    Converts to Green
	  Dark Teal                     Converts to Teal
	  Dark Blue                     Retained as Dark Blue
	  Indigo                        Converts to Gray - 50%
	  Dark Red                      Retained as Dark Red
	  Orange                        Converts to Red
	  Dark Yellow                   Retained as Dark Yellow
	  Green                         Retained as Green
	  Teal                          Retained as Teal
	  Blue                          Retained as Blue
	  Blue - Gray                   Converts to Gray - 50%
	  Red                           Retained as Red
	  Light Orange                  Converts to Yellow
	  Lime                          Converts to Yellow
	  Sea Green                     Converts to Bright Green
	  Aqua                          Converts to Turquoise
	  Light Blue                    Converts to Blue
	  Violet                        Retained as Violet
	  Pink                          Retained as Pink
	  Gold                          Converts to Yellow
	  Yellow                        Retained as Yellow
	  Bright Green                  Retained as Bright Green
	  Turquoise                     Retained as Turquoise
	  Sky Blue                      Converts to Turquoise
	  Plum                          Converts to Pink
	  Rose                          Converts to Pink
	  Tan                           Converts to Yellow
	  Light Yellow                  Converts to Yellow
	  Light Green                   Converts to Bright Green
	  Light Turquoise               Converts to Turquoise
	  Pale Blue                     Converts to Turquoise
	  Lavender                      Converts to Pink
	
	REFERENCES
	==========
	
	For additional information about how Word 2000 font colors appear in Word 97,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q209679 WD97: Font Colors Change Opening a Word 2000 Document
	
	Additional query words: white gray grey black shades grayscale greyscale 16-bit 16 bit 24 24-bit fill pattern shading
	
	======================================================================
	Keywords          : kbdta kbconversion wd2000 wordconvert 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
