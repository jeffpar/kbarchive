---
layout: page
title: "Q87975: DOC: EnumFontFamProc Documentation Incorrect"
permalink: /kb/087/Q87975/
---

## Q87975: DOC: EnumFontFamProc Documentation Incorrect

	Article: Q87975
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.10
	WINDOWS
	kbtoolkbtoolg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On page 266 of the Microsoft Windows Software Development Kit (SDK)
	"Programmer's Reference, Volume 2: Functions" manual, the documentation for the
	EnumFontFamProc callback function incorrectly defines the NEWLOGFONT data
	structure, which is not listed in the WINDOWS.H header file. An application
	should use the ENUMLOGFONT data structure, which is listed in the WINDOWS.H
	header file, with the EnumFontFamProc function.
	
	MORE INFORMATION
	================
	
	The EnumFontFamProc function is an application-defined callback function
	specified when the application calls the EnumFontFamilies function. The function
	prototype for EnumFontFamProc is as follows:
	
	     int CALLBACK EnumFontFamProc(
	         LOGFONT FAR* lpnlf,    // structure contains logical-font data
	         TEXTMETRIC FAR* lpntm, // structure contains physical-font data
	         int FontType,          // type of font
	         LPARAM lParam);        // address of application-defined data
	
	The EnumFontFamProc documentation defines a NEWLOGFONT data structure that
	contains information that is specific to TrueType fonts. As stated earlier, the
	NEWLOGFONT data structure does not appear in the WINDOWS.H header file.
	
	Windows calls the EnumFontFamProc function with a pointer to the ENUMLOGFONT data
	structure, which is defined in the WINDOWS.H header file as follows:
	
	     #define LF_FULLFACESIZE (LF_FACESIZE * 2)
	
	     typedef struct tagENUMLOGFONT
	     {
	
	        LOGFONT elfLogFont;
	        char    elfFullName[LF_FULLFACESIZE];
	        char    elfStyle[LF_FACESIZE];
	
	     } ENUMLOGFONT, FAR* LPENUMLOGFONT;
	
	An application can ease its access to the elfFullName and elfStyle members in an
	EnumFontFamily enumeration by defining its EnumFontFamProc callback function as
	follows:
	
	     int CALLBACK EnumFontFamProc(
	         LPENUMLOGFONT lpelf,   // structure contains logical-font data
	         TEXTMETRIC FAR* lpntm, // structure contains physical-font data
	         int FontType,          // type of font
	         LPARAM lParam);        // address of application-defined data
	
	In the EnumFontFamProc function, if the TRUETYPE_FONTTYPE bit in the FontType
	parameter is true, the function can access these members using
	lpelf->elfFullName and lpelf->elfStyle.
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
