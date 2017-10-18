---
layout: page
title: "Q177791: INFO: DBCS Enabled/Localized FoxPro Products in Far East Region"
permalink: kb/177/Q177791/
---

## Q177791: INFO: DBCS Enabled/Localized FoxPro Products in Far East Region

	Article: Q177791
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbvfp260
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists Double-Byte Character Set (DBCS) Enabled/Localized FoxPro
	versions for the Far East Region.
	
	MORE INFORMATION
	================
	
	DBCS-enabled means the version of FoxPro is capable of handling double-byte
	characters. Localized means the version of FoxPro is a DBCS version and it
	displays localized languages on menus, controls, error messages, and Help
	files.
	
	The Double-Byte Character Set (DBCS) is a character encoding mechanism that
	accommodates ideographic characters used in Far Eastern languages.
	
	Characters in DBCS can be addressed using a 16-bit notation using two bytes, or
	double-byte, unlike Single-Byte Character Sets (SBCS), which can only represent
	at most 256 characters in one byte. With 16-bit notation, you can represent
	65,536 (2^16) characters.
	
	DBCS code pages contain both single and double-byte characters. The DBCS
	single-byte characters conform to the 8-bit national standards for each country
	and correspond closely to the American Standard Code for Information Interchange
	(ASCII) character set.
	
	In a double-byte character set, certain ranges of code-points are designated as
	leading bytes. A leading byte, together with the following byte, represents a
	single character. This second byte is called the trailing byte or trail-byte.
	Each DBCS has a different set of lead-byte ranges and trail-byte ranges. Unlike
	leading bytes, trail-bytes in some DBCS' can overlap with the 7-bit ASCII
	character set.
	
	
	For example, the Shift Japan Industry Standard (JIS) character set has a
	trail-byte range of 0x40H-0xFEH. That means a byte holding the value of 0x7DH
	can represent the second half of a Kanji character, not necessarily a close
	brace character(}).
	
	                           Korean   Japanese    Simplify  Traditional
	                                                Chinese    Chinese
	
	  ------------------------------------------------------------------------
	  Foxpro 2.5
	  Foxpro 2.5a
	  Foxpro 2.5b                D          D          D          D
	  Foxpro 2.6
	  Foxpro 2.6a
	  Visual FoxPro 3.0
	  Visual FoxPro 3.0a         D          D          D          D
	  Visual FoxPro 3.0b         DL         DL         DL         DL
	  Visual FoxPro 5.0          D          D          D          D
	  Visual FoxPro 5.0a         DL         D          DL         DL
	  Visual FoxPro 6.0                                DL         DL
	
	  D: "DBCS Enabled"
	  L: "Localized"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbvfp260 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,2.5a,2.5b,2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
