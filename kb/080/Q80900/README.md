---
layout: page
title: "Q80900: Windows 3.1 Application Compatibility (part 5 of 7)"
permalink: /kb/080/Q80900/
---

## Q80900: Windows 3.1 Application Compatibility (part 5 of 7)

	Article: Q80900
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Application Compatibility Document for Windows 3.1:
	
	Due to the amount of information in this document, it has been broken into seven
	pieces. To find all seven pieces of this document and the Windows 3.1
	Compatibility Test checklist, query this knowledge base on the words:
	
	  prod(winsdk) and 31compattest
	
	      TrueType
	--------
	
	Although Windows version 3.1 includes support that seamlessly integrates TrueType
	fonts into existing applications, problems with fonts can occur for Windows
	version 3.0 applications that assume bitmap fonts are always available, that
	Helv and Tms Rmn are always available, and that font sizes are limited. Be sure
	to thoroughly check fonts in your application, including files and dialogs.
	Also, because TrueType provides more fonts at more sizes and in more styles,
	Windows version 3.1 may consume both printer and global memory faster than
	Windows version 3.0 did. Check your applications with systems and printers that
	have limited memory.
	
	HELV AND TMS RMN FONTS:
	
	MS Sans Serif replaces Helv, and MS Serif replaces Tms Rmn. To support Windows
	version 3.0 applications that use the Helv and Tms Rmn fonts, the
	[FontSubstitutes] section in the WIN.INI file maps Helv to MS Sans Serif and Tms
	Rmn to MS Serif by default. It also maps Times to Times New Roman and Helvetica
	to Arial.
	
	Potential Problem:
	
	Applications that hard code a search for Helv or Tms Rmn may encounter
	difficulties after not finding these fonts.
	
	Test:
	
	Examine your application code and be sure there are no dependencies on the font
	names Helv and Tms Rmn.
	
	FONT ENUMERATION:
	
	Applications should test to ensure that TrueType fonts are enumerated correctly
	and that they encounter no unexpected font mapping, such as might occur when a
	TrueType font substitutes for another font and line spacing changes and/or the
	position of text in documents is recalculated.
	
	Windows continues to support and is fully backward compatible with ATM, Facelift,
	and Intellifont for Windows. Applications using these other font technologies
	should encounter no problems.
	
	TRUETYPE ONLY CHECKED:
	
	Windows version 3.0 applications may behave unexpectedly if the user has set the
	"Show Only TrueType Fonts in Applications" check box using the Control Panel.
	
	Potential Problem:
	
	An application may fail to locate any fonts if only TrueType fonts are present.
	
	Test:
	
	In the Control Panel, choose Fonts, select TrueType, and enable "Show Only
	TrueType Fonts in Applications."
	
	- Check the font dialog boxes in your application. It should list all the
	  TrueType fonts and should not list non-TrueType fonts.
	
	FONT SIZES:
	
	TrueType supports a wide variety of sizes for all TrueType fonts. In Windows
	version 3.1, an application usually gets the requested size if it requests a
	very small or very large font.
	
	Potential Problem:
	
	An application that checks for the smallest or largest font by setting the
	nHeight parameter in CreateFont to an extreme value will not get the expected
	results.
	
	Test:
	
	Check fonts in dialog boxes, tool bars, and sample files for your application. Be
	sure they are all readable.
	
	FONTSUBSTITUTES:
	
	The [FontSubstitutes] section may cause the GetTextFace function to return a face
	name that the EnumFonts function does not enumerate. This is done so that an
	application that asks for Helv (and expects Helv) gets a font named Helv.
	
	Potential Problem:
	
	An application that expects matching face names from the EnumFonts and
	GetTextFace functions may encounter mismatches.
	
	Test:
	
	Check the application code and be sure there are no dependencies on GetTextFace
	and EnumFonts matching.
	
	ABC-SPACED FONTS:
	
	Potential Problem:
	
	ABC-spaced fonts can lead to misplaced cursors, highlights that do not encompass
	all the text on a line, "pieces" of characters left behind after screen updates,
	and unexpected clipping of fonts on printers (when a character goes outside the
	printable area).
	
	Tests:
	
	1. Create a document in your application that contains characters close to the
	  edge of the screen and the printable margins. Scroll the document, checking
	  for characters (or pieces of characters) left behind.
	
	2. Highlight text. Be sure the highlight encompasses all characters and that no
	  part of any character (especially the first and last characters) is left out.
	
	3. Print the document. Be sure that no characters are clipped at the edges of
	  the printable region.
	
	THIRD-PARTY TYPE MANAGER PROBLEMS:
	
	Potential Problem:
	
	Be sure to try your application with ATM, Facelift, or Intellifont for Windows
	fonts installed. Do not install more that one of these font managers at a time.
	Skip this test if your application does not work with these font managers under
	Windows version 3.0a.
	
	Tests:
	
	1. Create a document under Windows version 3.0a using a type manager (such as
	  ATM), bitmap, and device fonts. Look at the document under Windows version
	  3.1, and be sure the screen appears the same.
	
	2. Print the document with Windows versions 3.0a and 3.1, and be sure the output
	  is identical.
	
	FONT ENUMERATION:
	
	Windows version 3.0 applications sometimes create multiple instances of a single
	font or font family. In particular, some applications handle fonts that a
	nonraster printer enumerates as different from fonts enumerated for the display,
	even if the names are the same. TrueType fonts with the same name are identical
	regardless of the output device. Some Windows version 3.0 applications assume
	that scalable fonts cannot be available on nonscaling devices. In such cases,
	the applications intentionally enumerate a single size for every TrueType font
	even though other sizes are available. Furthermore, some applications assume
	that bold, italic, and bold italic are always simulated from regular fonts. This
	is not true with TrueType fonts.
	
	Potential Problem:
	
	An application may create multiple instances of the same font.
	
	Tests:
	
	1. If your application assumes that scalable fonts could not print on
	  nonscalable devices, such as a PCL printer, it will have problems enumerating
	  fonts. Check the font dialog boxes and sizes listed for TrueType fonts. Many
	  sizes for each TrueType font should be listed.
	
	2. TrueType fonts are shipped in regular, bold, italic, and bold italic. This
	  can cause problems for applications that assume styles were always simulated.
	  Check the font dialog boxes to be sure that each font is listed only once.
	
	3. TrueType fonts appear for both printer and screen. This causes problems for
	  applications that assume printer and screen fonts are always different.
	  Select a nonraster printer (for example, PCL) and check the font dialog boxes
	  to be sure each font is listed only once.
	
	MIXING DEVICE, BITMAP, AND TRUETYPE FONTS:
	
	In Windows version 3.1, some fonts, such as the Symbol font, may be supported by
	a TrueType font, a GDI bitmap font, and a device-specific font. Applications can
	get unexpected results when printing waterfalls. For example, a Symbol waterfall
	to a dot matrix printer intermixes the Symbol bitmap with TrueType Symbol.
	Because no Symbol font is designed for dot matrix resolution, the results can be
	spectacularly unattractive.
	
	Potential Problem:
	
	Printing may mix device, bitmap, and TrueType fonts causing unacceptable output.
	
	Test:
	
	Create a document with a nonscalable printer installed, using a device font and a
	TrueType font. Both fonts must have the same name. Print.
	
	DESKTOP PUBLISHING AND INTERNATIONAL CHARACTERS:
	
	Windows version 3.1 includes 22 new international and desktop publishing
	characters. Unfortunately, these new characters appear only in TrueType fonts;
	the bitmap fonts do not have them.
	
	Potential Problem:
	
	Changing to a bitmap font causes the new characters to appear as "blots." Some
	applications may remap the character code range (128 to 159).
	
	Tests:
	
	1. Use a TrueType font to create a document using the desktop publishing and
	  international characters. Be sure the characters appear correctly on the
	  screen.
	
	2. Select a bitmap font, and then change to a TrueType font. Be sure the
	  characters still appear correctly.
	
	3. Print the document. Be sure the printout is correct.
	
	4. Using the Char Map application in the Accessories group of Program Manager,
	  use a TrueType font to copy the desktop publishing characters to the
	  clipboard and paste them into your application. Be sure the characters appear
	  correctly.
	
	NOTE: The desktop publishing characters will not be available to dialog boxes
	that use bitmap fonts exclusively (such as the Find and Replace dialog boxes).
	
	TEXT ROTATION:
	
	Although Windows version 3.0 can rotate vector and device fonts, under certain
	mapping modes it rotates these fonts differently. For compatibility, Windows
	version 3.1 also rotates fonts differently. However, an application can override
	this default behavior and direct Windows version 3.1 to rotate all fonts the
	same by setting the CLIP_LH_ANGLES bit in the lfClipPrecision member of the
	LOGFONT structure. When this bit is set, Windows version 3.1 rotates all fonts
	using the same left-hand rule as Windows version 3.0 uses to rotate device
	fonts.
	
	OTHER CONSIDERATIONS:
	
	- Some applications do not request point sizes correctly. For bitmap fonts, the
	  results are acceptable because only these fonts have a limited range of sizes
	  available. For TrueType fonts, output can be unacceptable because any size
	  requested is available.
	
	- Applications sometimes set the tmCharWidth to request specific fonts, but
	  Windows now stretches or compresses a TrueType font to match the requested
	  width. Some applications make assumptions that work for bitmaps in many cases
	  but that lead to squashed or clipped lines with TrueType fonts.
	
	- Windows version 3.1 adds 13 or more fonts to the default list. Some
	  applications may break when more fonts of more types in more styles are
	  enumerated. They do not have test cases that can account for the additional
	  fonts.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
