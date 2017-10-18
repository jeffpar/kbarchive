---
layout: page
title: "Q297133: PRB: UPPER Function Operates on High-ASCII Characters"
permalink: kb/297/Q297133/
---

## Q297133: PRB: UPPER Function Operates on High-ASCII Characters

	Article: Q297133
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp500bug kbvfp500fix kbvfp600 kbXBase kb
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the UPPER function on strings that include high-ASCII characters,
	you may see unexpected changes.
	
	CAUSE
	=====
	
	Visual FoxPro makes characters uppercase that are considered alphabetic by the
	ISALPHA function. ISALPHA is not font-dependent, so fonts that include symbol
	characters appear to behave incorrectly when strings that are displayed in them
	are run through the UPPER function.
	
	RESOLUTION
	==========
	
	If you must use symbol characters in your uppercase strings, test each character
	and make it uppercase individually.
	
	  lcOldFontName = _SCREEN.FontName
	  lnOldFontSize = _SCREEN.FontSize
	  _SCREEN.FontName = "FoxFont"
	  _SCREEN.FontSize = 9
	
	  *!* 241 is the plus/minus character.
	  lcMixedString = "Value is 500" + CHR(241) + "0.05%"
	  ? lcMixedString
	  ? UPPER(lcMixedString)  && Displays box character
	
	  lcUpperString = ""
	  FOR i = 1 TO LEN(lcMixedString)
	     lcCurrChar = SUBSTR(lcMixedString, i, 1)
	     IF BETWEEN(lcCurrChar, "a", "z")
	        lcCurrChar = UPPER(lcCurrChar)
	     ENDif
	     
	     lcUpperString = lcUpperString + lcCurrChar
	  ENDfor
	
	  ? lcUpperString
	
	  _SCREEN.FontName = lcOldFontName
	  _SCREEN.FontSize = lnOldFontSize
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To see all characters that are affected by UPPER, run the following code:
	
	  _SCREEN.FontName = "Lucida Sans Unicode"
	  CLEAR
	
	  FOR i = 1 TO 255
	     IF CHR(i) != UPPER(CHR(i))
	        ? i, CHR(i), UPPER(CHR(i))
	     ENDif
	  ENDfor
	
	NOTE: Change the FontName property to "FoxFont" to see the problem that is
	described in the "Symptoms" section.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2001, All Rights Reserved.
	Contributions by Garrett Fitzgerald, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp500bug kbvfp500fix kbvfp600 kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
