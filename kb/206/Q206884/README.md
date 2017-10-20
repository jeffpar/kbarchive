---
layout: page
title: "Q206884: HOWTO: Simulate Expanded and Condensed Fonts"
permalink: /kb/206/Q206884/
---

## Q206884: HOWTO: Simulate Expanded and Condensed Fonts

{% raw %}

	Article: Q206884
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0,2.1,2.11,3.0 Professional Edition,3.11,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbFont kbGDI kbSDKPlatform kbTTFonts
	Last Modified: 24-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows CE versions 2.0, 2.1, 2.11, 3.0 Professional Edition for the Handheld PC 
	- Microsoft Windows XP 64-Bit Edition 
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows TrueType fonts can be scaled arbitrarily to produce relatively narrower
	or wider glyphs. This feature is useful to create simulations of condensed and
	expanded type.
	
	MORE INFORMATION
	================
	
	Condensed or expanded (sometimes called extended) type is an expression of type
	design. By this definition, true condensed or expanded versions of type are
	created by a typographer in a separate font file.
	
	Windows applications can simulate the appearance of a condensed or expanded font
	variation by changing the relative width of the font's logical description.
	TrueType fonts have variable width glyphs, so the "width" of a font in Windows
	is referred to as the average character width. The tmAveCharWidth member of the
	TEXTMETRIC structure gives the average character width for a realized font. This
	structure is returned by the GetTextMetrics() function.
	
	The width of a TrueType font is controlled by the font's average character width.
	When creating a font, the lfWidth member of the LOGFONT structure expresses the
	average character width.
	
	To create a relatively condensed or expanded simulation of a particular font, one
	should modify the average character width of a previously realized font by a
	desired condensation or expansion factor. This will ensure that the simulated
	version of the font looks proportionally correct to the normal version of the
	typeface's original glyphs.
	
	Use the following steps to create an expanded or condensed simulation of a
	TrueType font:
	
	1. Create a normal version of a font by specifying the lfHeight of the LOGFONT
	  structure and setting the lfWidth to zero. This creates a font that has the
	  typographer's intended aspect ratio.
	
	2. Next the application retrieves the realized font's average character width
	  from the tmAveCharWidth member of the TEXTMETRIC structure.
	
	3. Create the expanded or condensed font by setting the lfWidth member of the
	  LOGFONT structure to tmAveCharWidth multiplied by some condensation or
	  expansion ratio.
	
	The following sample code implements this technique. The function is a Windows
	procedure paint function which can be called from the WM_PAINT case of a simple
	application between the BeginPaint() and EndPaint() functions.
	
	     BOOL OnPaint( HDC hdc, LPLOGFONT plf )
	     {
	         int         x=0, y=0;           // Output coordinates
	         DWORD       AverageWidth;       // Font Width
	         HFONT       hFont, hOldFont;    // Font handles
	         char        Buffer[200];        // Output strings
	         LOGFONT     lf;                 // Logical Font desc.
	         TEXTMETRIC  tm;                 // Actual Font metrics
	
	         /* Make a copy of the Logical Description so we can 
	            make modifications */ 
	         lf = *plf;
	
	         /* 
	          * Create a Normal font for comparison 
	          */ 
	
	         hFont = CreateFontIndirect( &lf );
	         hOldFont = SelectObject( hdc, hFont );
	         GetTextMetrics( hdc, &tm );
	
	         /* Save off the "width" of the font to use later */ 
	         AverageWidth = tm.tmAveCharWidth;
	
	         /* properly output the text */ 
	         y += tm.tmExternalLeading;
	         wsprintf( Buffer, 
	             "This is Normal text for %s.", 
	             lf.lfFaceName );
	         TextOut( hdc, x, y, Buffer, lstrlen( Buffer ) );
	
	         /* advance for next line and cleanup */ 
	         y += tm.tmHeight;
	         SelectObject( hdc, hOldFont );
	         DeleteObject( hFont );
	
	         /* 
	          * Create a condensed font for output 
	          */ 
	
	         /* Define our condensed font as half the original */ 
	         lf.lfWidth = AverageWidth/2;    
	
	         hFont = CreateFontIndirect( &lf );
	         hOldFont = SelectObject( hdc, hFont );
	         GetTextMetrics( hdc, &tm );
	
	         /* properly output the text */ 
	         y += tm.tmExternalLeading;
	         wsprintf( Buffer, 
	             "This is Condensed text for %s.", 
	             lf.lfFaceName );
	         TextOut( hdc, x, y, Buffer, lstrlen( Buffer ) );
	
	         /* advance for next line and cleanup */ 
	         y += tm.tmHeight;
	         SelectObject( hdc, hOldFont );
	         DeleteObject( hFont );
	
	         /* 
	          * Create an expanded font for output 
	          */ 
	
	         /* Define our expanded font as twice the original */ 
	         lf.lfWidth = AverageWidth*2;    
	
	         hFont = CreateFontIndirect( &lf );
	         hOldFont = SelectObject( hdc, hFont );
	         GetTextMetrics( hdc, &tm );
	
	         /* properly output the text */ 
	         y += tm.tmExternalLeading;
	         wsprintf( Buffer, 
	             "This is Expanded text for %s.", 
	             lf.lfFaceName );
	         TextOut( hdc, x, y, Buffer, lstrlen( Buffer ) );
	
	         /* cleanup */ 
	         SelectObject( hdc, hOldFont );
	         DeleteObject( hFont );
	
	         return TRUE;
	     }
	
	REFERENCES
	==========
	
	Definitions
	-----------
	
	- Typeface: The design of a set of visually related symbols.
	
	- Condensed Type: Usually a variation of an existing typeface that is
	  relatively narrower than the original.
	
	- Expanded Type: A variation of an existing typeface that is relatively wider
	  than the original typeface and is also know as extended type.
	
	- Typographer: A person who designs and creates a Typeface. A type designer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFont kbGDI kbSDKPlatform kbTTFonts 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin3xSearch kbWin95search kbWin98search kbWinCESearch kbZNotKeyword3 kbWin311 kbWinCE200HPC kbWinCE210HPC kbWinCE211HPC kbWinCEPro300HPC kbWin98
	Version           : :2.0,2.1,2.11,3.0 Professional Edition,3.11,3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
