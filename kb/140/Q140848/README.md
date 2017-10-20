---
layout: page
title: "Q140848: How to Convert Object Color Values to RGB Equivalents"
permalink: /kb/140/Q140848/
---

## Q140848: How to Convert Object Color Values to RGB Equivalents

{% raw %}

	Article: Q140848
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists a function (Dec2RGB) that you can use to determine which
	color values have been chosen in an application that allows custom color
	settings.
	
	MORE INFORMATION
	================
	
	When colors are assigned through the Property Sheet, they are displayed in the
	sheet as individual red, green, and blue (RGB) values -- separated by commas.
	However, the actual value assigned to the object internally is the decimal
	equivalent of a hexadecimal number that has the individual red, green, and blue
	values encoded positionally.
	
	Evaluating a color property does not display the RGB values; instead it displays
	the decimal number. An example of this number can be seen by typing the
	following statement in the Command window:
	
	     ? _SCREEN.BACKCOLOR
	
	Each color can be set within a range of 0 to 255, so it is difficult to determine
	from a single decimal value the color the user chose. With the exception of
	black (0), it is hard to distinguish all the potential colors ranging up to
	white (16777215). The individual colors can be parsed to compare with other
	color settings to avoid potential problems due to extremes in contrast, and
	reset other colors in the interface to accommodate the custom settings.
	
	The function in this article converts the number to hexadecimal, extracts the
	individual RGB values, then converts the results for each value to decimal and
	returns the result as a string in the expected RGB format.
	
	The value that FoxPro assigns to an object's color property consists of a double
	word in hexadecimal notation. The first byte of the first word is ignored. The
	remaining three bytes indicate the individual red, green, and blue values in the
	following format:
	
	     [XX][BB][GG][RR]
	
	Note that the blue and red values are reversed when encoded, and must be
	manipulated to be presented in the expected RGB format.
	
	The first section of the function converts the decimal value to hexadecimal by
	factoring the next highest exponent of 2 contained within the decimal value, and
	so on until the remaining factor is 1.
	
	Once converted, the resulting string is parsed and the first and third bytes are
	swapped so that they are in Red-Green-Blue order.
	
	The final section reverts the hexadecimal value of each pair back to a decimal
	value between 0 and 255, representing the intensity of the color that it
	indicates. The colors values are then concatenated and returned to the calling
	program in the RGB format.
	
	The code may be used as a method within a class or form, or as a function within
	a .prg or procedure file.
	
	Dec2RGB Function Code
	---------------------
	
	  ***********************************************************************
	  *
	  * Dec2RGB function: returns separate RGB values from object color value
	  *
	  * Usage:
	  *         RGB = Dec2RGB(<Decimal Color>) && such as _SCREEN.BACKCOLOR
	  *          ? RGB = "192, 192, 192"       && color is light gray if true
	  *
	  * FUNCTION dec2rgb
	  LPARAMETERS tnDec
	  IF tnDec < 0
	       WAIT WINDOW 'Must be a positive value'
	       RETURN ""
	  ENDIF
	  lTalk=IIF(SET('TALK')='ON',.T.,.F.)
	  SET TALK OFF
	
	  * Determine the hexadecimal equivalent of the decimal parameter passed
	  lcHex = ""
	  lnFactor = 24          && set up factor value one exponent greater than
	  used
	
	  FOR lnPos = 6 TO 1 STEP -1
	       lnFactor = lnFactor - 4     && decrement factorial
	       lnExp = 2 ^ lnFactor        && extrapolate next least power of two
	       FOR lnOrd = 15 TO 1 STEP -1
	            IF tnDec < lnExp            && no value greater than current one,
	                 lcHex = lcHex + "0"    && so store a zero in this position
	                 EXIT                   && go back for the next value
	            ENDIF
	            IF tnDec >= lnExp * lnOrd  && is value greater than or equal to?
	                 * find the matching hex value from its ordinal position
	                 lcHex = lcHex + SUBSTR('123456789ABCDEF', lnOrd, 1)
	                 EXIT
	            ENDIF
	       ENDFOR
	       tnDec = tnDec % lnExp     && leave remainder of exponential division
	  ENDFOR
	
	  * reverse the order of the individual color indicators
	  lcHex = RIGHT(lcHex, 2) + SUBSTR(lcHex, 3, 2) + LEFT(lcHex, 2)
	
	  * convert the pairs into decimal values
	  lnPick = 2          && offset to determine which pair to convert
	  lcRGB = ["]     && start of string delineator
	
	  * parse each color indicator and convert to decimal
	  FOR lnColor = 1 TO 3
	       lcHue = SUBSTR(lcHex, (lnPick * lnColor) - 1, 2) && pull out color
	       lnMSB = ASC(LEFT(lcHue, 1))     && "Most Significant Bit"
	       lnLSB = ASC(RIGHT(lcHue, 1))     && "Least Significant Bit"
	
	       * subtract appropriate value from each to get decimal equivalent
	       lnMSB = lnMSB - IIF(lnMSB > 57, 55, 48)
	       lnLSB = lnLSB - IIF(lnLSB > 57, 55, 48)
	
	       * then add decimals together
	       lcRGB = lcRGB + TRANSFORM( lnMSB * 16 + lnLSB, '999') + ", "
	  ENDFOR
	  lcRGB = LEFT(lcRGB, LEN(lcRGB) - 2) + ["]  && replace last comma with quote
	  RETURN lcRGB
	
	Additional query words: HLS HBS vfp hex VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
