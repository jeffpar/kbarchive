---
layout: page
title: "Q311306: HOWTO: Use Visual FoxPro to Download a Web Page"
permalink: /kb/311/Q311306/
---

## Q311306: HOWTO: Use Visual FoxPro to Download a Web Page

	Article: Q311306
	Product(s): Microsoft FoxPro
	Version(s): 6.0,7.0
	Operating System(s): 
	Keyword(s): kbAPI kbAutomation kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 kbHOWTOmaster
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides sample code that shows how to download the contents of a
	Web page from the Internet without user interaction or automation of Microsoft
	Internet Explorer. One sample uses a function from the dynamic-link library
	Urlmon.dll, and another sample uses the Msinet.ocx ActiveX control.
	
	MORE INFORMATION
	================
	
	Urlmon.dll ships with many Microsoft Products and operating systems:
	
	- Microsoft Internet Explorer 5.0 and later
	- Microsoft Windows 98 and Microsoft Windows 98 SE
	- Microsoft Windows Millennium Edition (Me)
	- Microsoft Windows 2000 Professional and Microsoft Windows 2000 Server
	- Microsoft Office 2000
	
	Msinet.ocx ships with Microsoft Visual Studio 97 and Microsoft Visual Studio 6.0.
	Msinet.ocx also ships with the stand-alone versions of the following products:
	
	- Microsoft Visual Basic 5.0 and Visual Basic 6.0
	- Microsoft Visual FoxPro 6.0 and Visual FoxPro 7.0
	- Microsoft Interdev 6.0
	- Microsoft C++ 5.0 and C++ 6.0
	
	If you are a licensed user of one of these development languages, you are
	permitted to redistribute the Msinet.ocx control.
	
	How to Use the Sample Code
	--------------------------
	
	To use these code samples, follow these steps:
	
	1. Paste each code sample in a new program in Visual FoxPro version 6.0 or 7.0.
	
	2. Save the programs, and then run the programs. As you run each program, a form
	  appears that requests a stock symbol.
	
	3. Type any valid stock symbol in the text box, and then click Get Quote to
	  receive a quote.
	
	Review the comments in the source code for cmdGetQuote.click to understand how
	the quote was acquired.
	
	NOTE: The Web page that these code samples download may change at any time. As a
	result, the code that parses the Web page to extract the stock quote may no
	longer work. However, the concept used to download the page still will apply.
	
	Using Urlmon.dll
	----------------
	
	  *-----------------------------------
	  * AUTHOR: Trevor Hancock (TREVORH@MICROSOFT.COM)
	  * CREATED: 10/24/01 03:07:28 PM for Microsoft Knowledge Base article Q311306
	  * ABSTRACT: Downloads a Web page and then parses the Web page to extract a stock quote.
	  *
	  * DETAILS: This code uses the function URLDownloadToFile(), located in
	  *          Urlmon.dll. This function downloads a Web page from
	  *          HTTP://Money.cnn.com. Specifically, the function calls
	  *          "HTTP://qs.money.cnn.com/apps/stockquote?symbols=",
	  *		 passing to the Web page a stock symbol that the user types into THISFORM.txtSYMBOL.
	  *          The Web site returns an entire page of information about the
	  *          stock, which this code then parses to extract the current quote.
	  *-----------------------------------
	
	  PUBLIC ofrmURLMON
	
	  ofrmURLMON = NEWOBJECT("frmURLMON")
	  ofrmURLMON.SHOW
	  RETURN
	
	  **************************
	  DEFINE CLASS frmURLMON AS FORM
	  	HEIGHT = 83
	  	WIDTH = 317
	  	AUTOCENTER = .T.
	  	BORDERSTYLE = 2
	  	CAPTION = "Stock Quote via URLMON.DLL"
	  	MAXBUTTON = .F.
	  	MINBUTTON = .F.
	  	NAME = "frmURLMON"
	
	  	ADD OBJECT txtsymbol AS TEXTBOX WITH ;
	  		FONTNAME = "Verdana", ;
	  		VALUE = "MSFT", ;
	  		FORMAT = "!", ;
	  		HEIGHT = 26, ;
	  		LEFT = 94, ;
	  		TABINDEX = 1, ;
	  		TOP = 7, ;
	  		WIDTH = 100, ;
	  		NAME = "txtSymbol"
	
	  	ADD OBJECT cmdGetQuote AS COMMANDBUTTON WITH ;
	  		TOP = 7, ;
	  		LEFT = 206, ;
	  		HEIGHT = 27, ;
	  		WIDTH = 94, ;
	  		FONTNAME = "Verdana", ;
	  		CAPTION = "Get Quote", ;
	  		TABINDEX = 2, ;
	  		NAME = "cmdGetQuote"
	
	  	ADD OBJECT lblSymbol AS LABEL WITH ;
	  		AUTOSIZE = .T., ;
	  		FONTNAME = "Verdana", ;
	  		CAPTION = "Stock Symbol:", ;
	  		HEIGHT = 16, ;
	  		LEFT = 3, ;
	  		TOP = 12, ;
	  		WIDTH = 90, ;
	  		TABINDEX = 5, ;
	  		NAME = "lblSymbol"
	
	  	ADD OBJECT txtQuote AS TEXTBOX WITH ;
	  		FONTNAME = "Verdana", ;
	  		HEIGHT = 23, ;
	  		LEFT = 94, ;
	  		READONLY = .T., ;
	  		TOP = 39, ;
	  		WIDTH = 100, ;
	  		NAME = "txtQuote"
	
	  	ADD OBJECT lblQuote AS LABEL WITH ;
	  		AUTOSIZE = .T., ;
	  		FONTNAME = "Verdana", ;
	  		CAPTION = "Quote:", ;
	  		HEIGHT = 16, ;
	  		LEFT = 47, ;
	  		TOP = 42, ;
	  		WIDTH = 46, ;
	  		TABINDEX = 5, ;
	  		NAME = "lbQuote"
	
	  	PROCEDURE cmdGetQuote.CLICK
	  		LOCAL lcQuote AS STRING, ;
	  			lcTempTxtFile AS STRING, ;
	  			lnGetResults AS INTEGER, ;
	  			lcURL AS STRING
	
	  		lcQuote = ""
	  		*-- Set up a variable referring to a temp .TXT file.
	  		*-- Uses the current VFP TEMP DIR [SYS(2023)]
	  		*-- and a random file name [SYS(2015)]
	  		lcTempTxtFile = FORCEEXT(ADDBS(SYS(2023)) + SYS(2015), "TXT")
	  		lnGetResults = 0
	  		lcGetURl = "HTTP://qs.money.cnn.com/apps/stockquote?symbols=" + ;
	  			ALLT(THISFORM.txtsymbol.VALUE)
	
	  		DECLARE LONG URLDownloadToFile IN URLMON.DLL ;
	  			LONG, STRING, STRING, LONG, LONG
	
	  		WITH THISFORM
	  			*-- Get the quote using the Urlmon.dll and store it
	  			*-- to a temp .TXT file.
	  			*-- This function returns non-zero if it fails.
	  			lnGetResults = URLDownloadToFile(0, lcGetURl, lcTempTxtFile, 0, 0)
	  			IF lnGetResults # 0
	  				MESSAGEBOX("Download Failed",0,"")
	  				RETURN .F.
	  			ENDIF
	
	  			*-- Read the Web page into a variable, and then erase it.
	  			lcQuote = FILETOSTR(lcTempTxtFile)
	  			ERASE (lcTempTxtFile)
	
	  			*-- Grab the quote from the Web page. If in VFP 7.0, we use the new
	  			*-- STREXTRACT() function to grab the data between two delimiters.
	  			*-- In VFP 6.0, use SUBSTR() to get the data, and then trim off any
	  			*-- trailing HTML with the TRANSFORM() AND VAL() functions.
	  			IF VERSION(5) = 700
	  				lcQuote  = STREXTRACT(lcQuote, [stockheader">], [<])
	  			ELSE
	  				*-- Extract the quote from the HTML
	  				lcQuote = SUBSTR(lcQuote, ATC(["stockheader"], lcQuote) + 14, 8)
	  				*-- Trim off the trailing HTML. VAL() will only return the numbers,
	  				*-- which we then change to a string with TRANSFORM()
	  				lcQuote = TRANSFORM(VAL(lcQuote))
	  			ENDIF
	
	  			*-- Put the quote in the text box.
	  			.txtQuote.VALUE = "$" + lcQuote
	  		ENDWITH
	  	ENDPROC
	  ENDDEFINE
	  **************************
	
	Using Msinet.ocx
	----------------
	
	  *-----------------------------------
	  * AUTHOR: Trevor Hancock  (TREVORH@MICROSOFT.COM)
	  * CREATED: 10/24/01 03:07:28 PM for Microsoft Knowledge Base article Q311306
	  * ABSTRACT: Downloads a Web page and then parses it to extract a stock quote.
	  *
	  * DETAILS: This code uses the Msinet.ocx ActiveX control to
	  *          download a Web page from HTTP://Money.cnn.com.
	  *          Specifically, it calls "HTTP://qs.money.cnn.com/apps/stockquote?symbols=",
	  *          passing to the Web page a stock symbol that the user types into THISFORM.txtSYBMOL.
	  *          The Web site returns an entire page of information about the
	  *          stock, which this code then parses to extract the current quote.
	  *-----------------------------------
	
	  PUBLIC ofrmMSINET
	
	  ofrmMSINET = NEWOBJECT("frmMSINET")
	  ofrmMSINET.SHOW
	  RETURN
	
	  **************************
	  DEFINE CLASS ocxMSINET AS OLECONTROL
	  	OLECLASS = "InetCtls.Inet.1"
	  ENDDEFINE
	
	  **************************
	  DEFINE CLASS frmMSINET AS FORM
	  	HEIGHT = 70
	  	WIDTH = 304
	  	AUTOCENTER = .T.
	  	BORDERSTYLE = 3
	  	CAPTION = "Stock Quote via MSINET.OCX"
	  	MAXBUTTON = .F.
	  	MINBUTTON = .F.
	  	NAME = "frmMSINET"
	
	  	ADD OBJECT MSINET AS ocxMSINET WITH ;
	  		TOP = 37, ;
	  		LEFT = 234, ;
	  		HEIGHT = 100, ;
	  		WIDTH = 100, ;
	  		NAME = "MSINET"
	
	  	ADD OBJECT txtsymbol AS TEXTBOX WITH ;
	  		FONTNAME = "Verdana", ;
	  		VALUE = "MSFT", ;
	  		FORMAT = "!", ;
	  		HEIGHT = 26, ;
	  		LEFT = 94, ;
	  		TABINDEX = 1, ;
	  		TOP = 7, ;
	  		WIDTH = 100, ;
	  		NAME = "txtSymbol"
	
	  	ADD OBJECT cmdGetQuote AS COMMANDBUTTON WITH ;
	  		TOP = 7, ;
	  		LEFT = 206, ;
	  		HEIGHT = 27, ;
	  		WIDTH = 94, ;
	  		FONTNAME = "Verdana", ;
	  		CAPTION = "Get Quote", ;
	  		TABINDEX = 2, ;
	  		NAME = "cmdGetQuote"
	
	  	ADD OBJECT lblSymbol AS LABEL WITH ;
	  		AUTOSIZE = .T., ;
	  		FONTNAME = "Verdana", ;
	  		CAPTION = "Stock Symbol:", ;
	  		HEIGHT = 16, ;
	  		LEFT = 3, ;
	  		TOP = 12, ;
	  		WIDTH = 90, ;
	  		TABINDEX = 5, ;
	  		NAME = "lblSymbol"
	
	  	ADD OBJECT txtQuote AS TEXTBOX WITH ;
	  		FONTNAME = "Verdana", ;
	  		HEIGHT = 23, ;
	  		LEFT = 94, ;
	  		READONLY = .T., ;
	  		TOP = 39, ;
	  		WIDTH = 100, ;
	  		NAME = "txtQuote"
	
	  	ADD OBJECT lblQuote AS LABEL WITH ;
	  		AUTOSIZE = .T., ;
	  		FONTNAME = "Verdana", ;
	  		CAPTION = "Quote:", ;
	  		HEIGHT = 16, ;
	  		LEFT = 47, ;
	  		TOP = 42, ;
	  		WIDTH = 46, ;
	  		TABINDEX = 5, ;
	  		NAME = "lbQuote"
	
	  	PROCEDURE cmdGetQuote.CLICK
	  		LOCAL lcQuote AS STRING, ;
	  			lcURL AS STRING
	
	  		lcQuote = ""
	  		lcGetURl = "HTTP://qs.money.cnn.com/apps/stockquote?symbols=" + ;
	  			ALLT(THISFORM.txtsymbol.VALUE)
	
	  		WITH THISFORM
	  			*-- Get the quote using the Msinet.ocx ActiveX control.
	  			*--  The quote will load it directly into a variable.
	  			lcQuote = .MSINET.OpenURL(lcGetURl)
	  			IF EMPTY(lcQuote)
	  				MESSAGEBOX("Download Failed.",0,"")
	  				RETURN .F.
	  			ENDIF
	
	  			*-- Grab the quote from the Web page. If in VFP 7.0, we use the new
	  			*-- STREXTRACT() function to grab the data between two delimiters.
	  			*-- In VFP 6.0, use SUBSTR() to get the data, and then trim off any
	  			*-- trailing HTML with the TRANSFORM() AND VAL() functions.
	  			IF VERSION(5) = 700
	  				lcQuote  = STREXTRACT(lcQuote, [stockheader">], [<])
	  			ELSE
	  				*-- Extract the quote from the HTML
	  				lcQuote = SUBSTR(lcQuote, ATC(["stockheader"], lcQuote) + 14, 8)
	  				*-- Trim off the trailing HTML. VAL() will only return the numbers,
	  				*-- which we then change to a string with TRANSFORM()
	  				lcQuote = TRANSFORM(VAL(lcQuote))
	  			ENDIF
	
	  			*-- Put the quote in the text box.
	  			.txtQuote.VALUE = "$" + lcQuote
	  		ENDWITH
	  	ENDPROC
	  ENDDEFINE
	  **************************
	
	REFERENCES
	==========
	
	  Q191222 INFO: ActiveX Controls Supported by Visual FoxPro 6.0
	
	  Q307550 INFO: ActiveX Controls Supported by Visual FoxPro 7.0
	
	Additional query words: WEB DOWNLOAD PAGE SAVE LOCAL INTERNET
	
	======================================================================
	Keywords          : kbAPI kbAutomation kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 kbHOWTOmaster 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600 kbVFP700
	Version           : :6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
