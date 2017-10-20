---
layout: page
title: "Q94350: FoxPro FONTMETRIC() Function Returns Font Attributes"
permalink: /kb/094/Q94350/
---

## Q94350: FoxPro FONTMETRIC() Function Returns Font Attributes

{% raw %}

	Article: Q94350
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FONTMETRIC() function returns the attributes of a font installed in the
	Microsoft Windows environment. Font attributes include the character height,
	character ascent, leading space between lines, and font weight. The syntax of
	the FONTMETRIC() function is as follows:
	
	  FONTMETRIC(<expN1>[,<expC1>,<expN2>[,<expC2>]])
	
	The <expN1> parameter specifies the desired font attribute. If the
	<expC1> and <expN2> parameters are omitted, FONTMETRIC() returns the
	specified attribute of the current font in the active output window. The
	following table lists the <expN1> values and their corresponding font
	attributes.
	
	  <expN1> value   Attribute
	  --------------------------------------------------------------------
	
	   1              Character height in pixels
	   2              Character ascent (units above baseline) in pixels
	   3              Character descent (units below baseline) in pixels
	   4              Leading (space between lines) in pixels
	   5              Extra leading in pixels
	   6              Average character width in pixels
	   7              Maximum character width in pixels
	   8              Font weight
	   9              Italic (zero = no, nonzero = yes)
	  10              Underlined (zero = no, nonzero = yes)
	  11              Strikeout (zero = no, nonzero = yes)
	  12              First character defined in font
	  13              Last character defined in font
	  14              Default character (substituted for
	                     characters not in font)
	  15              Word break character
	  16              Pitch and family
	  17              Character set
	  18              Overhang (extra added width)
	  19              Horizontal aspect for font device
	  20              Vertical aspect for font device
	
	The <expC1> parameter specifies a font name and returns the desired
	attribute for a specific installed font.
	
	The <expN2> parameter specifies the point size for a font specified in the
	<expC1> parameter.
	
	The <expC2> parameter specifies a font style code. When an application
	specifies <expC2>, FoxPro returns the desired attribute for a font with
	the specified font style. If <expC2> is omitted, FoxPro returns the
	specified information regarding a font with normal style. The <expC2>
	parameter can contain one or more characters from the following font style
	table.
	
	  Character       Font style
	  ---------------------------
	
	      -           Strikeout
	      B           Bold
	      I           Italic
	      N           Normal
	      O           Outline
	      Q           Opaque
	      S           Shadow
	      T           Transparent
	      U           Underline
	
	Additional query words: VFoxWin FoxWin 2.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:2.5,2.5a,3.0,5.0,6.0
	
	=============================================================================
	

{% endraw %}
