---
layout: page
title: "Q75469: HOWTO: Accurately Showing on the Screen What Will Print"
permalink: /kb/075/Q75469/
---

## Q75469: HOWTO: Accurately Showing on the Screen What Will Print

	Article: Q75469
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWin95 kbDSupport kbSDKWin16
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many applications have an option where the screen display is set to closely
	correspond to the printed output. This article discusses some of the issues
	involved in implementing this feature.
	
	MORE INFORMATION
	================
	
	If a screen font is available that exactly matches (or at least very closely
	corresponds to) the chosen printer font, then the process is very
	straightforward and consists of seven steps:
	
	1. Retrieve a Device Context (DC) or an Information Context (IC) for the
	  printer.
	
	2. Call EnumFontFamilies() to obtain a LOGFONT structure for the selected
	  printer font. The nFontType parameter to the EnumFontFamilies() callback
	  function specifies if a given font is a device font.
	
	3. Get a DC for the screen.
	
	4. Convert the lfHeight and lfWidth members of the LOGFONT structure from
	  printer resolution units to screen resolution units. If a mapping mode other
	  than MM_TEXT is used, round-off error may occur.
	
	5. Call CreateFontIndirect() with the LOGFONT structure.
	
	6. Call SelectObject(). GDI will select the appropriate screen font to match the
	  printer font.
	
	7. Release the printer device context or information context and the screen
	  device context.
	
	If a screen font that corresponds to the selected printer font is not available,
	the process is more difficult. It is possible to modify the character placement
	on the screen to match the printer font to show justification, line breaks, and
	page layout. However, visual similarity between the printer fonts and screen
	fonts depends on a number of factors, including the number and variety of screen
	fonts available, the selected printer font, and how the printer driver describes
	the font. For example, if the printer has a serifed Roman- style font, one of
	the GDI serifed Roman-style fonts will appear to be very similar to the printer
	font. However, if the printer has a decorative Old English-style font, no
	corresponding screen font will typically be available. The closest available
	match would not be very similar.
	
	To have a screen font that matches the character placement of a printer font, do
	the following:
	
	1. Perform the preceding seven steps to retrieve an appropriate screen font.
	
	2. Get the character width from the TEXTMETRIC structure returned by the
	  EnumFonts function in step 2 above. Use this information to calculate the
	  page position of each character to be printed in the printer font.
	
	3. Allocate a block of memory and specify the spacing between characters. Make
	  sure that this information is in screen resolution units.
	
	4. Specify the address of the memory block as the lpDx parameter to
	  ExtTextOut(). GDI will space the characters as listed in the array.
	
	Additional query words: 3.00 3.10 3.50 4.00 WYSIWYG win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWin95 kbDSupport kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51
	Issue type        : kbhowto
	
	=============================================================================
	
