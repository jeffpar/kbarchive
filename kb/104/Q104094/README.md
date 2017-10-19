---
layout: page
title: "Q104094: INFO: Console Applications Can Call the Windows 32-Bit API"
permalink: /kb/104/Q104094/
---

## Q104094: INFO: Console Applications Can Call the Windows 32-Bit API

	Article: Q104094
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGenInfo kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbArtTypeINF
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With a Win32-based console application, you can call the functions in the Win32
	application programming interface (API).
	
	MORE INFORMATION
	================
	
	Because GRAPHICS.LIB and PGCHART.LIB do not ship with Visual C++, 32-bit
	Edition, the API functions can be used for graphical output or screen
	manipulation.
	
	The following console sample illustrates how to use the API to change the
	background color of output to the screen. For further examples of console
	applications included with Visual C++ version 4.0, 5.0, and 6.0, see the CONGUI
	and CONSOLE sample programs in the \MSDEV\SAMPLES\SDK\WIN32 directory, or online
	help in versions 5.0 and 6.0. For examples of console applications included with
	Visual C++ versions 1.0 and 2.x, see the CONGUI, CONSOLE, CONSOLEC, and INHERIT
	sample programs in the \MSVCNT\SAMPLES directory.
	
	Sample Code
	-----------
	
	  /* Compile options needed:  None
	  */ 
	
	  #include <windows.h>
	  #include <stdio.h>
	
	  int main( void )
	  {
	    HANDLE  hConsole;
	    WORD    ForeColor = 0;
	    WORD    BackColor;
	    WORD    wAttributesOld;
	    CONSOLE_SCREEN_BUFFER_INFO csbi;
	
	    // **  Open the current console input buffer.
	    if( ( hConsole = CreateFile(
	                       "CONOUT$", GENERIC_WRITE | GENERIC_READ,
	                       FILE_SHARE_READ | FILE_SHARE_WRITE,
	                       0L, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, 0L) )
	                   == (HANDLE) -1 ) {
	        printf("\nError: Unable to open console.\n");
	        return( -1 );
	    }
	    printf("\n");
	
	    // **  Get and Save information on the console screen buffer.
	    GetConsoleScreenBufferInfo( hConsole, &csbi );
	    wAttributesOld = csbi.wAttributes;
	
	    // **  Display different backgrounds.
	    for( BackColor = 0; BackColor < 8 ; BackColor++ ) {
	        SetConsoleTextAttribute( hConsole, (WORD) ( (BackColor << 4) |
	                                 ForeColor) );
	        printf(" XxXxXx ");
	    }
	
	    // **  Restore the foreground and background color attribute.
	    SetConsoleTextAttribute( hConsole, wAttributesOld );
	    return 1;
	  }
	
	Additional query words: 8.00 9.00
	
	======================================================================
	Keywords          : kbGenInfo kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
