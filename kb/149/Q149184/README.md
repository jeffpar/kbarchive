---
layout: page
title: "Q149184: How to Convert a RGBCOMP() Value into Component Values"
permalink: /kb/149/Q149184/
---

## Q149184: How to Convert a RGBCOMP() Value into Component Values

{% raw %}

	Article: Q149184
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RGBCOMP() function is new to Foxtools.fll. It accepts an RGB composite value
	as an argument and converts it to the three component values for you. In effect,
	it is the counterpart to FoxPro's RGB() function.
	
	MORE INFORMATION
	================
	
	RGBComp() returns the Red, Green, and Blue components of a composite RGB color
	value. The syntax is:
	
	  RGBComp( nRGBColor, @nRedVal, @nGreenVal, @nBlueVal )
	
	Parameters:
	
	- nRGBColor is a composite RGB color value ranging from 0 to 16777215.
	
	- nRedVal, upon return, is the intensity of the red color component of
	  nRGBColor.
	
	- nGreenVal, upon return, is the intensity of the green color component of
	  nRGBColor.
	
	- nBlueVal, upon return, is the intensity of the blue color component of
	  nRGBColor.
	
	Sample Code
	-----------
	
	The following code gives an example implementation:
	
	  *-- Set up to use FoxTools.FLL
	       CLEAR
	       SET LIBRARY TO SYS(2004) + '\FOXTOOLS'
	
	  *-- Declare some variables to be used in the function calls
	       nRedVal = 0
	       nBlueVal = 0
	       nGreenVal = 0
	
	  *-- Display as we go.
	       ? RGBCOMP(65537, @nRedVal, @nGreenVal, @nBlueVal)
	       ? nRedVal, nGreenVal, nBlueVal
	
	       = RGBCOMP(65537 + 44 + 256 * 4, @nRedVal, @nGreenVal, @nBlueVal)
	       ? nRedVal, nGreenVal, nBlueVal
	
	       = RGBCOMP(65537 + 86 + 256 * 4, @nRedVal, @nGreenVal, @nBlueVal)
	       ? nRedVal, nGreenVal, nBlueVal
	
	  *-- Reset the current active library.
	       SET LIBRARY TO
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
