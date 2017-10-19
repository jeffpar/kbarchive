---
layout: page
title: "Q91717: PPT: Text Shadow Color Not Affected by Color Scheme"
permalink: /kb/091/Q91717/
---

## Q91717: PPT: Text Shadow Color Not Affected by Color Scheme

	Article: Q91717
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The text shadow color in PowerPoint is not affected by the shadow color in the
	slide color scheme.
	
	If the slide background or text box fill color is other than white, and the text
	color is anything but black, the text shadow color is black. If the text color
	is black, the text shadow color is white.
	
	CAUSE
	=====
	
	The color of a text shadow in PowerPoint is limited and dependent on the color
	of the text and the Background color of the slide.
	
	WORKAROUND
	==========
	
	PowerPoint 4.0 and 7.0
	----------------------
	
	Rather than using the text shadow effect from the Format Font dialog box or the
	Text Shadow toolbar button, use the Shadow option on the Format menu.
	
	1. Select the entire text object.
	
	2. On the Format menu, click Shadow.
	
	3. Select the desired shadow color in the Color box.
	
	4. Set the offset variables to 3 points.
	
	Using the Shadow option from the Format menu offers flexibility in the direction
	of the shadow as well as the color. The Text Shadow option allows only a shadow
	down and to the right.
	
	PowerPoint 3.0
	--------------
	
	The color of a text shadow can be varied by changing the third position in the
	Color Scheme, (available by clicking Color Scheme on the Slide menu) with the
	following exceptions:
	
	  Text                Background  Shadow
	  --------------------------------------
	
	  Black               Not white   White
	  White               Not white   Black
	  Any color           Not white   Black
	  (other than
	  black & white)
	
	Object shadows are not affected by these conditions, and always follow the third
	position of the Color Scheme for the slide to which the object shadow is
	applied.
	
	Additional query words: 3.00 4.00 4.00a 4.00c win31 3rd ppt30 ppt95 winppt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
