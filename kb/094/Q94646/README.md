---
layout: page
title: "Q94646: INFO: Using GetCharABCWidths() to Calculate Text Extents"
permalink: /kb/094/Q94646/
---

## Q94646: INFO: Using GetCharABCWidths() to Calculate Text Extents

	Article: Q94646
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.1 of the Microsoft Windows graphical environment introduces a set of
	functions to manipulate TrueType fonts. An application can use the
	GetCharABCWidths() function to accurately determine the advance width, overhang,
	and underhang of a character. Because GetCharABCWidths() was designed for use
	only with TrueType fonts, it is less useful when it calculates the width of
	characters in a font in which the TrueType rasterizer simulates the bold
	attribute. This article describes a method to work around this limitation and
	also demonstrates a useful technique to calculate the bounding rectangle for a
	string of text that provides accurate results regardless of the font technology
	involved.
	
	MORE INFORMATION
	================
	
	The TrueType rasterizer generates ABC character spacing to enable an application
	to position characters exactly. The "A" spacing is the distance added to the
	final position of the previous character (or to the beginning of the line)
	before placing the glyph. The "B" spacing is the width of the black part of the
	glyph. The "C" spacing is the distance to add to the current position to account
	for the white space to the right of the glyph. The total advance width for the
	glyph if given by A + B + C. Using the advance width of one character, an
	application can determine where to position the following character.
	
	The GetCharABCWidths() function retrieves the widths, in logical units, of
	consecutive characters in a specified range from the current TrueType font. When
	the GetCharABCWidths() function returns a negative value for the "A" or "C"
	width for a character, that character includes underhang or overhang,
	respectively. The GetCharABCWidths function works only for TrueType fonts.
	
	An application can use the GetCharWidth() function to determine the advance width
	of a character in any font. However, because GetCharWidth() has no mechanism to
	provide a negative "A" or "C" width, it cannot be used to place text exactly.
	
	Under Windows 3.1, if the TrueType rasterizer simulates the bold attribute, the
	information returned by the GetCharABCWidths() function is less accurate. (For
	example, the standard fonts provided with Windows 3.1 include the WingDings font
	in standard weight only. If an application requests a bold version of WingDings,
	the TrueType rasterizer simulates the bold attribute by manipulating the
	original, normal-weight font.) When an application uses the GetCharABCWidths()
	function to determine the advance width of a manipulated TrueType font, the
	difference between the returned ABC width and the true ABC width is one for each
	character.
	
	To work around this limitation, the application can add one to the ABC width of
	each character. However, to use this method, the application must determine that
	the rasterizer has simulated the bold attribute. The following function
	demonstrates determining that a TrueType font has bold enabled. Select a
	TrueType font into the Display Context (DC) before calling this function.
	
	NOTE: If you are not using the MM_TEXT mapping mode, you will need to convert the
	value one from device coordinates to logical coordinates before adding the value
	to the character width.
	
	     #include "windows.h"
	     #include "windowsx.h"
	
	     BOOL NEAR PASCAL IsBoldSimulated( HDC hDC )
	     {
	
	       TEXTMETRIC                 tm ;
	       OUTLINETEXTMETRIC          otm ;
	
	       GetTextMetrics( hDC, &tm ) ;
	
	       if (tm.tmWeight <= FW_NORMAL)
	          return FALSE ;
	
	       otm.otmSize = sizeof( OUTLINETEXTMETRIC ) ;
	
	       /* Call GOTM() with the pointer to the buffer.  It will
	        * fill in the buffer.
	        */ 
	       if (!GetOutlineTextMetrics( hDC, otm.otmSize, &otm ))
	          return FALSE ;  // Probably not a TrueType font
	
	       /* See the documentation on OUTLINETEXTMETRIC for a
	        * description of the otmfsSelection member.
	        */ 
	       if (!(otm.otmfsSelection & 0x0020)) // bit 5 means bold
	             return TRUE ;
	
	     } /* IsBoldSimulated()  */ 
	
	Note that this limitation occurs only in Windows 3.1 (the gde.EXE file dated
	March 10, 1992). Any application that uses the methods described in this article
	to work around this limitation must version-bind its code.
	
	The following function demonstrates how to use the GetCharABCWidths() function to
	determine the bounding rectangle for a string of text. Although this function is
	very similar to the GetTextExtent() and GetTextExtentPoint() functions in
	Windows, it correctly accounts for overhang and underhang caused by negative "A"
	and "C" widths. This function also demonstrates how to version-bind the code
	that works around the limitation in Windows 3.1.
	
	     /****************************************************************
	     *  UINT WINAPI GetTextExtentABCPoint( HDC hDC, LPSTR lpsz,
	     *                                     int cb, LPSIZE lpSize )
	     *
	     *    Just like GetTextExtentPoint() but only works on TT fonts
	     *    and uses GetCharABCWidths().
	     *
	     *    Unlike GetTextExtent() and GetTextExtentPoint() which
	     *    return a BOOL, this function returns the absolute value
	     *    for the "A" value of the first character if it is
	     *    negative otherwise it returns 0.
	     *
	     ****************************************************************/ 
	
	     UINT WINAPI GetTextExtentABCPoint( HDC hDC, LPSTR lpsz,
	
	                                       int cb, LPSIZE lpSize )
	
	     {
	
	       int          A, C ;
	       UINT         nRet = 0 ;
	       static LPABC lpABC ;
	
	       GetTextExtentPoint( hDC, lpsz, cb, lpSize );
	
	       if (lpABC ||
	       (lpABC = (LPABC)GlobalAllocPtr( GHND, 256*sizeof(ABC) )))
	       {
	          if (GetCharABCWidths( hDC, 0, 255, lpABC ))
	          {
	             int         n ;
	
	             /* We now have an array of ABC structures
	              */ 
	             for ( lpSize->cx = 0, n = 0 ; n < cb ; n++ )
	             {
	                lpSize->cx += (
	                               lpABC[(int)lpsz[n]].abcA +
	                               lpABC[(int)lpsz[n]].abcB +
	                               lpABC[(int)lpsz[n]].abcC ) ;
	             }
	
	             if( cb )
	             {
	                A = lpABC[(int)lpsz[0]].abcA;
	
	                if( A > 0 )
	                {
	                   nRet = -A ;
	                   lpSize->cx -= A;
	                }
	
	                C = lpABC[(int)lpsz[cb-1]].abcC ;
	
	                if ( C < 0 )
	                   lpSize->cx -= C ;    // two minus' make a plus
	             }
	
	             /* Bug in Windows 3.1.  If the tt font is embolded then
	              * add one to the width for each char.
	              */ 
	             if ((BOOL)LOWORD( GetVersion() ) == 0x0A03 &&
	                 IsBoldSimulated( hDC ))
	                lpSize->cx += cb ;
	          }
	          else
	             GetTextExtentPoint( hDC, lpsz, cb, lpSize ) ;
	
	          return nRet  ;
	       }
	       return nRet ;
	
	    } /* GetTextExtentABCPoint()  */ 
	
	Additional query words: 3.10 GetCharABCWidths GetTextExtent TrueType
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
