---
layout: page
title: "Q181944: HOWTO: Use API Functions to Retrieve System Font Information"
permalink: /kb/181/Q181944/
---

## Q181944: HOWTO: Use API Functions to Retrieve System Font Information

	Article: Q181944
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the SystemParametersInfo() with the SPI_GETNONCLIENTMETRICS option
	to obtain System font information. This is useful for getting information such
	as the status bar, menu font, button caption name and size, the width of screen
	borders and the scroll bar.
	
	MORE INFORMATION
	================
	
	Copy the code given below into a program file and run the program. Running the
	program produces a text file, NCMtest.txt, that contains the various font and
	System information.
	
	Here is the code:
	
	     * Example of calling SystemParametersInfo() with the
	     * SPI_GETNONCLIENTMETRICS option to retrieve System font information.
	     *
	     * This option requires a NONCLIENTMETRICS structure, defined as
	     * follows:
	     *
	     *cbSize
	     * Specifies the size of the structure, in bytes.
	     *
	     *iBorderWidth
	     *Specifies the thickness, in pixels, of the sizing border.
	     *
	     *iScrollWidth
	     *Specifies the width, in pixels, of a standard vertical scroll bar.
	     *
	     *iScrollHeight
	     *Specifies the height, in pixels, of a standard horizontal scroll bar.
	     *
	     *iCaptionWidth
	     *Specifies the width, in pixels, of caption buttons.
	     *
	     *iCaptionHeight
	     *Specifies the height, in pixels, of caption buttons.
	     *
	     *lfCaptionFont
	     *Contains information about the caption font.
	     *
	     *iSmCaptionWidth
	     *Specifies the width, in pixels, of small caption buttons.
	     *
	     *iSmCaptionHeight
	     *Specifies the height, in pixels, of small captions.
	     *
	     *iMenuWidth
	     *Specifies the width, in pixels, of menu bar buttons.
	     *
	     *iMenuHeight
	     *Specifies the height, in pixels, of a menu bar.
	     *
	     *lfMenuFont
	     *
	     *Contains information about the font used in menu bars.
	     *
	     *lfStatusFont
	     *Contains information about the font used in status bars.
	     *
	     *lfMessageFont
	     *Contains information about the font used in message boxes.
	     *
	     *
	     * Each of the 'lf' members requires a LOGFONT structure, which
	     * is defined as follows:
	     *
	     *lfHeight
	     *Specifies the height, in logical units, of the font's character cell or
	     *character. The character height value (also known as the em height) is
	     *the character cell height value minus the internal-leading value. The
	     *font mapper interprets the value specified in lfHeight in the following
	     *manner:
	     *
	     *Value    Meaning:
	     *> 0      The font mapper transforms this value into device units and
	     *         matches it against the cell height of the available fonts.
	     *0        The font mapper uses a default height value when it searches
	     *         for a match.
	     *< 0      The font mapper transforms this value into device units and
	     *         matches its absolute value against the character height of the
	     *         available fonts.
	     *
	     *For all height comparisons, the font mapper looks for the largest font
	     *that does not exceed the requested size.
	     *This mapping occurs when the font is used for the first time.
	     *
	     *
	     *lfWidth
	     *Specifies the average width, in logical units, of characters in the
	     *font. If lfWidth is zero, the aspect ratio of the device is matched
	     *against the digitization aspect ratio of the available fonts to find
	     *the closest match, determined by the absolute value of the difference.
	     *
	     *lfEscapement
	     *Specifies the angle, in tenths of degrees, between the escapement
	     *vector and the x-axis of the device. The escapement vector is parallel
	     *to the base line of a row of text.
	     *
	     *lfOrientation
	     *Specifies the angle, in tenths of degrees, between each character's
	     *base line and the x-axis of the device.
	     *
	     *lfWeight Specifies the weight of the font in the range 0 through 1000.
	     *For example, 400 is normal and 700 is bold. If this value is zero, a
	     *default weight is used.
	     *The following values are defined for convenience:
	     *
	     *Value           Weight
	     *FW_DONTCARE     0
	     *FW_THIN         100
	     *FW_EXTRALIGHT   200
	     *FW_ULTRALIGHT   200
	     *FW_LIGHT        300
	     *FW_NORMAL       400
	     *FW_REGULAR      400
	     *FW_MEDIUM       500
	     *FW_SEMIBOLD     600
	     *FW_DEMIBOLD     600
	     *FW_BOLD         700
	     *FW_EXTRABOLD    800
	     *FW_ULTRABOLD    800
	     *FW_HEAVY        900
	     *FW_BLACK        900
	     *
	     *lfItalic
	     *Specifies an italic font if set to TRUE.
	     *
	     *lfUnderline
	     *Specifies an underlined font if set to TRUE.
	     *
	     *lfStrikeOut
	     *Specifies a strikeout font if set to TRUE.
	     *
	     *lfCharSet
	     *Specifies the character set.
	
	     nHdl=FCREATE('NCMtest.txt')
	     CLEAR DLLS
	     DECLARE INTEGER SystemParametersInfo IN Win32API ;
	     INTEGER, INTEGER, STRING @, INTEGER
	     DECLARE INTEGER GetLastError IN Win32API
	
	     NCM = SPACE(340)   && length of NonClientMetrics structure
	     NCMData = Long2Str(LEN(NCM)) + REPLICATE(CHR(0),336)
	     RetCode = SystemParametersInfo(41,340,@NCMData,0)
	     IF RetCode = 0
	        =MESSAGEBOX( "SystemParametersInfo call failed.  Last error was: " ;
	        + STR(GetLastError()))
	     ELSE
	        cbSize = str2long(SUBSTR(NCMData, 1, 4))
	        iBorderWidth = str2long(SUBSTR(NCMData, 5, 4))
	        iScrollWidth = str2long(SUBSTR(NCMData, 9, 4))
	        iScrollHeight = str2long(SUBSTR(NCMData, 13, 4))
	        iCaptionWidth = str2long(SUBSTR(NCMData, 17, 4))
	        iCaptionHeight = str2long(SUBSTR(NCMData, 21, 4))
	
	        =FPUTS(nHdl,"cbSize = " + STR(cbSize))
	        =FPUTS(nHdl,"iBorderWidth = " + STR(iBorderWidth))
	        =FPUTS(nHdl,"iScrollWidth = " + STR(iScrollWidth))
	        =FPUTS(nHdl,"iScrollHeight = " + STR(iScrollHeight))
	        =FPUTS(nHdl,"iCaptionWidth = " + STR(iCaptionWidth))
	        =FPUTS(nHdl,"iCaptionHeight = " + STR(iCaptionHeight))
	
	        CFlfHeight = str2long(SUBSTR(NCMData, 25, 4))
	        * Visual Foxpro does not understand signed long datatypes -
	        * adjust if > 7FFFFFFF
	           IF CFlfHeight >= (2^31)
	              CFlfHeight = CFlfHeight - 2^ 32
	           ENDIF
	
	        CFlfWidth = str2long(SUBSTR(NCMData, 29, 4))
	        CFlfEscapement = str2long(SUBSTR(NCMData, 33, 4))
	        CFlfOrientation = str2long(SUBSTR(NCMData, 37, 4))
	        CFlfWeight = str2long(SUBSTR(NCMData, 41, 4))
	        CFlfItalic = ASC(SUBSTR(NCMData,45,1))
	        CFlfUnderLine = ASC(SUBSTR(NCMData,46,1))
	        CFlfStrikeOut = ASC(SUBSTR(NCMData,47,1))
	        CFlfCharset = ASC(SUBSTR(NCMData,48,1))
	        CFlfOutPrecision = ASC(SUBSTR(NCMData,49,1))
	        CFlfClipPrecision = ASC(SUBSTR(NCMData,50,1))
	        CFlfQuality = ASC(SUBSTR(NCMData,51,1))
	        CFlfPitchandFamily = ASC(SUBSTR(NCMData,52,1))
	        CFlfFaceName = SUBSTR(NCMData, 53,32)
	        CFlfFaceName = LEFT(CFlfFaceName,AT(CHR(0),CFlfFaceName)-1)
	        =FPUTS(nHdl,"CFlfHeight= " + STR(CFlfHeight))
	        =FPUTS(nHdl,"CFlfWidth= " + STR(CFlfWidth))
	        =FPUTS(nHdl,"CFlfEscapement= " + STR(CFlfEscapement))
	        =FPUTS(nHdl,"CFlfOrientation= " + STR(CFlfOrientation))
	        =FPUTS(nHdl,"CFlfWeight= " + STR(CFlfWeight))
	        =FPUTS(nHdl,"CFlfItalic= " + STR(CFlfItalic))
	        =FPUTS(nHdl,"CFlfUnderLine= " + STR(CFlfUnderLine))
	        =FPUTS(nHdl,"CFlfStrikeOut= " + STR(CFlfStrikeOut))
	        =FPUTS(nHdl,"CFlfCharset= " + STR(CFlfCharset))
	        =FPUTS(nHdl,"CFlfOutPrecision= " + STR(CFlfOutPrecision))
	        =FPUTS(nHdl,"CFlfClipPrecision= " + STR(CFlfClipPrecision))
	        =FPUTS(nHdl,"CFlfQuality= " + STR(CFlfQuality))
	        =FPUTS(nHdl,"CFlfPitchandFamily= " + STR(CFlfPitchandFamily))
	        =FPUTS(nHdl,"CFlfFaceName= " + CFlfFaceName)
	
	        iSMCaptionWidth = str2long(SUBSTR(NCMData, 85, 4))
	        iSMCaptionHeight = str2long(SUBSTR(NCMData, 89, 4))
	        =FPUTS(nHdl,"iSMCaptionWidth = " + STR(iSMCaptionWidth))
	        =FPUTS(nHdl,"iSMCaptionHeight = " + STR(iSMCaptionHeight))
	
	        SMCFlfHeight = str2long(SUBSTR(NCMData, 93, 4))
	
	     * Visual Foxpro does not understand signed long datatypes -
	     * adjust if > 7FFFFFFF
	        IF SMCFlfHeight >= 2^31
	           SMCFlfHeight = SMCFlfHeight - 2^ 32
	        ENDIF
	
	     SMCFlfWidth = str2long(SUBSTR(NCMData, 97, 4))
	     SMCFlfEscapement = str2long(SUBSTR(NCMData, 101, 4))
	     SMCFlfOrientation = str2long(SUBSTR(NCMData, 105, 4))
	     SMCFlfWeight = str2long(SUBSTR(NCMData, 109, 4))
	     SMCFlfItalic = ASC(SUBSTR(NCMData,113,1))
	     SMCFlfUnderLine = ASC(SUBSTR(NCMData,114,1))
	     SMCFlfStrikeOut = ASC(SUBSTR(NCMData,115,1))
	     SMCFlfCharset = ASC(SUBSTR(NCMData,116,1))
	     SMCFlfOutPrecision = ASC(SUBSTR(NCMData,117,1))
	     SMCFlfClipPrecision = ASC(SUBSTR(NCMData,118,1))
	     SMCFlfQuality = ASC(SUBSTR(NCMData,119,1))
	     SMCFlfPitchandFamily = ASC(SUBSTR(NCMData,120,1))
	     SMCFlfFaceName = SUBSTR(NCMData, 121, 32)
	     SMCFlfFaceName = LEFT(SMCFlfFaceName,AT(CHR(0),SMCFlfFaceName)-1)
	
	     =FPUTS(nHdl,"SMCFlfHeight= " + STR(SMCFlfHeight))
	     =FPUTS(nHdl,"SMCFlfWidth= " + STR(SMCFlfWidth))
	     =FPUTS(nHdl,"SMCFlfEscapement= " + STR(SMCFlfEscapement))
	     =FPUTS(nHdl,"SMCFlfOrientation= " + STR(SMCFlfOrientation))
	     =FPUTS(nHdl,"SMCFlfWeight= " + STR(SMCFlfWeight))
	     =FPUTS(nHdl,"SMCFlfItalic= " + STR(SMCFlfItalic))
	     =FPUTS(nHdl,"SMCFlfUnderLine= " + STR(SMCFlfUnderLine))
	     =FPUTS(nHdl,"SMCFlfStrikeOut= " + STR(SMCFlfStrikeOut))
	     =FPUTS(nHdl,"SMCFlfCharset= " + STR(SMCFlfCharset))
	     =FPUTS(nHdl,"SMCFlfOutPrecision= " + STR(SMCFlfOutPrecision))
	     =FPUTS(nHdl,"SMCFlfClipPrecision= " + STR(SMCFlfClipPrecision))
	     =FPUTS(nHdl,"SMCFlfQuality= " + STR(SMCFlfQuality))
	     =FPUTS(nHdl,"SMCFlfPitchandFamily= " + STR(SMCFlfPitchandFamily))
	     =FPUTS(nHdl,"SMCFlfFaceName= " + SMCFlfFaceName)
	
	     iMenuWidth = str2long(SUBSTR(NCMData, 153, 4))
	     iMenuHeight = str2long(SUBSTR(NCMData, 157, 4))
	     =FPUTS(nHdl,"iMenuWidth = " + STR(iMenuWidth))
	     =FPUTS(nHdl,"iMenuHeight = " + STR(iMenuHeight))
	
	     MenulfHeight = str2long(SUBSTR(NCMData, 161, 4))
	     * Visual Foxpro does not understand signed long datatypes -
	     * adjust if > 7FFFFFFF
	     IF MenulfHeight >= 2^31
	        MenulfHeight = MenulfHeight - 2^ 32
	     ENDIF
	
	     MenulfWidth = str2long(SUBSTR(NCMData, 165, 4))
	     MenulfEscapement = str2long(SUBSTR(NCMData, 169, 4))
	     MenulfOrientation = str2long(SUBSTR(NCMData, 173, 4))
	     MenulfWeight = str2long(SUBSTR(NCMData, 177, 4))
	     MenulfItalic = ASC(SUBSTR(NCMData,181,1))
	     MenulfUnderLine = ASC(SUBSTR(NCMData,182,1))
	     MenulfStrikeOut = ASC(SUBSTR(NCMData,183,1))
	     MenulfCharset = ASC(SUBSTR(NCMData,184,1))
	     MenulfOutPrecision = ASC(SUBSTR(NCMData,185,1))
	     MenulfClipPrecision = ASC(SUBSTR(NCMData,186,1))
	     MenulfQuality = ASC(SUBSTR(NCMData,187,1))
	     MenulfPitchandFamily = ASC(SUBSTR(NCMData,188,1))
	     MenulfFaceName = SUBSTR(NCMData, 189, 32)
	     MenulfFaceName = LEFT(MenulfFaceName,AT(CHR(0),MenulfFaceName)-1)
	
	     =FPUTS(nHdl,"MenulfHeight= " + STR(MenulfHeight))
	     =FPUTS(nHdl,"MenulfWidth= " + STR(MenulfWidth))
	     =FPUTS(nHdl,"MenulfEscapement= " + STR(MenulfEscapement))
	     =FPUTS(nHdl,"MenulfOrientation= " + STR(MenulfOrientation))
	     =FPUTS(nHdl,"MenulfWeight= " + STR(MenulfWeight))
	     =FPUTS(nHdl,"MenulfItalic= " + STR(MenulfItalic))
	     =FPUTS(nHdl,"MenulfUnderLine= " + STR(MenulfUnderLine))
	     =FPUTS(nHdl,"MenulfStrikeOut= " + STR(MenulfStrikeOut))
	     =FPUTS(nHdl,"MenulfCharset= " + STR(MenulfCharset))
	     =FPUTS(nHdl,"MenulfOutPrecision= " + STR(MenulfOutPrecision))
	     =FPUTS(nHdl,"MenulfClipPrecision= " + STR(MenulfClipPrecision))
	     =FPUTS(nHdl,"MenulfQuality= " + STR(MenulfQuality))
	     =FPUTS(nHdl,"MenulfPitchandFamily= " + STR(MenulfPitchandFamily))
	     =FPUTS(nHdl,"MenulfFaceName= " + MenulfFaceName)
	
	     SFlfHeight = str2long(SUBSTR(NCMData, 221, 4))
	     * Visual Foxpro does not understand signed long datatypes -
	     * adjust if > 7FFFFFFF
	     IF SFlfHeight >= 2^31
	        SFlfHeight = SFlfHeight - 2^ 32
	     ENDIF
	
	     SFlfWidth = str2long(SUBSTR(NCMData, 225, 4))
	     SFlfEscapement = str2long(SUBSTR(NCMData, 229, 4))
	     SFlfOrientation = str2long(SUBSTR(NCMData, 233, 4))
	     SFlfWeight = str2long(SUBSTR(NCMData, 237, 4))
	     SFlfItalic = ASC(SUBSTR(NCMData,241,1))
	     SFlfUnderLine = ASC(SUBSTR(NCMData,242,1))
	     SFlfStrikeOut = ASC(SUBSTR(NCMData,243,1))
	     SFlfCharset = ASC(SUBSTR(NCMData,244,1))
	     SFlfOutPrecision = ASC(SUBSTR(NCMData,245,1))
	     SFlfClipPrecision = ASC(SUBSTR(NCMData,246,1))
	     SFlfQuality = ASC(SUBSTR(NCMData,247,1))
	     SFlfPitchandFamily = ASC(SUBSTR(NCMData,248,1))
	     SFlfFaceName = SUBSTR(NCMData, 249, 32)
	     SFlfFaceName = LEFT(SFlfFaceName,AT(CHR(0),SFlfFaceName)-1)
	     =FPUTS(nHdl,"SFlfHeight= " + STR(SFlfHeight))
	     =FPUTS(nHdl,"SFlfWidth= " + STR(SFlfWidth))
	     =FPUTS(nHdl,"SFlfEscapement= " + STR(SFlfEscapement))
	     =FPUTS(nHdl,"SFlfOrientation= " + STR(SFlfOrientation))
	     =FPUTS(nHdl,"SFlfWeight= " + STR(SFlfWeight))
	     =FPUTS(nHdl,"SFlfItalic= " + STR(SFlfItalic))
	     =FPUTS(nHdl,"SFlfUnderLine= " + STR(SFlfUnderLine))
	     =FPUTS(nHdl,"SFlfStrikeOut= " + STR(SFlfStrikeOut))
	     =FPUTS(nHdl,"SFlfCharset= " + STR(SFlfCharset))
	     =FPUTS(nHdl,"SFlfOutPrecision= " + STR(SFlfOutPrecision))
	     =FPUTS(nHdl,"SFlfClipPrecision= " + STR(SFlfClipPrecision))
	     =FPUTS(nHdl,"SFlfQuality= " + STR(SFlfQuality))
	     =FPUTS(nHdl,"SFlfPitchandFamily= " + STR(SFlfPitchandFamily))
	     =FPUTS(nHdl,"SFlfFaceName= " + SFlfFaceName)
	
	     MGlfHeight = str2long(SUBSTR(NCMData, 281, 4))
	     * Visual Foxpro does not understand signed long datatypes -
	     * adjust if > 7FFFFFFF
	     IF MGlfHeight >= 2^31
	        MGlfHeight = MGlfHeight - 2^ 32
	     ENDIF
	
	     MGlfWidth = str2long(SUBSTR(NCMData, 285, 4))
	     MGlfEscapement = str2long(SUBSTR(NCMData, 289, 4))
	     MGlfOrientation = str2long(SUBSTR(NCMData, 293, 4))
	     MGlfWeight = str2long(SUBSTR(NCMData, 297, 4))
	     MGlfItalic = ASC(SUBSTR(NCMData,301,1))
	     MGlfUnderLine = ASC(SUBSTR(NCMData,302,1))
	     MGlfStrikeOut = ASC(SUBSTR(NCMData,303,1))
	     MGlfCharset = ASC(SUBSTR(NCMData,304,1))
	     MGlfOutPrecision = ASC(SUBSTR(NCMData,305,1))
	     MGlfClipPrecision = ASC(SUBSTR(NCMData,306,1))
	     MGlfQuality = ASC(SUBSTR(NCMData,307,1))
	     MGlfPitchandFamily = ASC(SUBSTR(NCMData,308,1))
	     MGlfFaceName = SUBSTR(NCMData, 309, 32)
	     MGlfFaceName = LEFT(MGlfFaceName,AT(CHR(0),MGlfFaceName)-1)
	     =FPUTS(nHdl,"MGlfHeight= " + STR(MGlfHeight))
	     =FPUTS(nHdl,"MGlfWidth= " + STR(MGlfWidth))
	     =FPUTS(nHdl,"MGlfEscapement= " + STR(MGlfEscapement))
	     =FPUTS(nHdl,"MGlfOrientation= " + STR(MGlfOrientation))
	     =FPUTS(nHdl,"MGlfWeight= " + STR(MGlfWeight))
	     =FPUTS(nHdl,"MGlfItalic= " + STR(MGlfItalic))
	     =FPUTS(nHdl,"MGlfUnderLine= " + STR(MGlfUnderLine))
	     =FPUTS(nHdl,"MGlfStrikeOut= " + STR(MGlfStrikeOut))
	     =FPUTS(nHdl,"MGlfCharset= " + STR(MGlfCharset))
	     =FPUTS(nHdl,"MGlfOutPrecision= " + STR(MGlfOutPrecision))
	     =FPUTS(nHdl,"MGlfClipPrecision= " + STR(MGlfClipPrecision))
	     =FPUTS(nHdl,"MGlfQuality= " + STR(MGlfQuality))
	     =FPUTS(nHdl,"MGlfPitchandFamily= " + STR(MGlfPitchandFamily))
	     =FPUTS(nHdl,"MGlfFaceName= " + MGlfFaceName)
	     ENDIF
	     =FFLUSH(nHdl)
	     =FCLOSE(nHdl)
	     MODI FILE NCMtest.txt
	
	     *********************************************************
	      FUNCTION Long2Str
	     *********************************************************
	     * Accepts long integer, translates it to low-high format in
	     * a character string variable.
	     PARAMETERS m.longval
	
	     PRIVATE i, m.retstr
	     m.retstr = ""
	     FOR i = 24 TO 0 STEP -8
	        m.retstr = CHR(INT(m.longval/(2^i))) + m.retstr
	        m.longval = MOD(m.longval, (2^i))
	     NEXT
	
	     RETURN m.retstr
	
	     *********************************************************
	     FUNCTION str2long
	     *********************************************************
	     * Accepts character string representation of long integer,
	     * returns that long integer.
	     PARAMETERS m.longstr
	
	     PRIVATE i, m.retval
	
	     m.retval = 0
	     FOR i = 0 TO 24 STEP 8
	        m.retval = m.retval + (ASC(m.longstr) * (2^i))
	        m.longstr = RIGHT(m.longstr, LEN(m.longstr) - 1)
	     NEXT
	     RETURN m.retval
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
