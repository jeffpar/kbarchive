---
layout: page
title: "Q255744: HOWTO: Obtain a Device Context Handle for a Print Device"
permalink: /kb/255/Q255744/
---

## Q255744: HOWTO: Obtain a Device Context Handle for a Print Device

{% raw %}

	Article: Q255744
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbprint kbAPI kbPrinting kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDS
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When attempting to send output directly to a print device using the StartDoc API
	function, it is necessary to obtain a device context handle for the print
	device. This article explains how to obtain a device context handle for a print
	device.
	
	MORE INFORMATION
	================
	
	An application requires a display device context handle (hdc) before it can
	begin drawing in the client area of a window. Similarly, a print device requires
	a special printer hdc before it can begin sending output to a printer. A printer
	hdc is an internal data structure that defines a set of graphic objects and
	their associated attributes, and specifies the graphic modes that affect output.
	The graphic objects include a pen (for line drawing), a brush (for painting and
	filling), and a font (for text output).
	
	For a display device, the GetDC, GetDCEx, and GetWindowDC functions can be used
	to return an hdc, because those device contexts are owned by the windows
	management component. Unlike a display device context, printer device contexts
	are not owned by the windows management component, and cannot be obtained by
	calls to the GetDC, GetDCEx, or GetWindowDC functions. Instead, to obtain a
	handle to a printer device context, an application must call either the CreateDC
	or the PrintDlg function.
	
	The CreateDC function accepts the following parameters:
	
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Parameter Name | Data Passed with Parameter                                                                                                                                                                                                                                                                                                                                                                 | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| lpszDriver     | Windows NT: Pointer to a null-terminated character string that specifies either DISPLAY for a display driver, or the name of a printer driver, which is usually WINSPOOL.
	
	Windows 95 and Windows 98: This parameter is ignored and should be NULL,
	unless the device is specified as the null-terminated string DISPLAY.
	If this parameter is DISPLAY, all other parameters must be NULL. | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| lpszDevice     | Pointer to a null-terminated character string that specifies the name of the specific output device being used, as shown by the Print Manager. The lpszDevice parameter must be used.                                                                                                                                                                                                      | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| lpszOutput     | This parameter is ignored for Win32-based applications and should be set to NULL.                                                                                                                                                                                                                                                                                                          | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| lpInitData     | The lpInitData parameter must be NULL if the 
	device driver is to use the default initialization (if any) specified by the user.                                                                                                                                                                                                                                                           | 
	+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	The following code illustrates creating a device context handle for a print
	device.
	
	Please note that this code is somewhat complex, and engineers may require some
	time to familiarize themselves with the contents of the example.
	
	  * Start of Code
	  *!* Declare the CreateDC function
	  DECLARE LONG CreateDC IN gdi32.DLL ;
	     STRING @cDriver, STRING @cDevice, STRING cOutput, ;
	     STRING cInitData
	  *!* Declare the DeleteDC function
	  DECLARE LONG DeleteDC IN gdi32.DLL ;
	     LONG nDC
	  *!* Declare the TextOut function
	  DECLARE INTEGER TextOut IN gdi32.DLL INTEGER hDC, INTEGER xStart, INTEGER yStart, ;
	     STRING @PrintString, INTEGER cbString
	  *!* Declare the StartDoc function
	  DECLARE INTEGER StartDoc IN gdi32.DLL INTEGER hDC, STRING @DocInfo
	  *!* Declare the StartPage function
	  DECLARE INTEGER StartPage IN gdi32.DLL INTEGER hDC
	  *!* Declare the EndPage function
	  DECLARE INTEGER EndPage IN gdi32.DLL INTEGER hDC
	  *!* Declare the EndDoc function
	  DECLARE INTEGER EndDoc IN gdi32.DLL INTEGER hDC
	  *!* Declare the GetLastError function
	  DECLARE INTEGER GetLastError IN kernel32.DLL
	  *!* Allocate a buffer
	  lcBuffer = SPACE(255)
	  IF "5.0"$OS()
	     *!* If the OS is 5.0, the driver is either DISPLAY or WINSPOOL
	     lcDriver="WINSPOOL"
	  ELSE
	     *!* If the OS is Windows 9x, the driver is NULL
	     lcDriver=NULL
	  ENDIF
	  *!* Get the name of the printer for which we want an HDC
	  lcPrinter=GETPRINTER()
	  hDC = CreateDC(lcDriver, lcPrinter, NULL, NULL)
	  IF hDC = 0
	     MESSAGEBOX("Unable to create device context" + CHR(13) + ;
	        "Error Code : " + ALLTRIM(STR(GetLastError())),48)
	     RETURN
	  ENDIF
	  *!* Create a DOCINFO structure to pass to StartDoc
	  lcDocInfo = Long2Str(20) + REPLICATE(CHR(0), 16)
	  *!* Call StartDoc()
	  retCode = StartDoc(hDC, @lcDocInfo)
	  IF retCode <= 0
	     MESSAGEBOX("Error calling StartDoc" + CHR(13) + ;
	        " Error code : " + ALLTRIM(STR(GetLastError())),48)
	     RETURN
	  ENDIF
	  *!* Call StartPage()
	  retCode = StartPage(hDC)
	  IF retCode <= 0
	     MESSAGEBOX("Error calling StartPage" + CHR(13) + ;
	        " Error code : " + ALLTRIM(STR(GetLastError())),48)
	     RETURN
	  ENDIF
	  *!* Define a string to send to the print device
	  myString = "Using API functions for printing"
	  myLength = LEN(myString)
	  *!* Call TextOut, first parameter is the device context handle
	  *!* second parameter is x coordinate
	  *!* third parameter is y coordinate
	  *!* fourth parameter is the string, which is passed by reference
	  *!* fifth parameter is the length of the string being passed
	  retCode = TextOut(hDC, 10, 10, @myString, myLength)
	  IF retCode <= 0
	     MESSAGEBOX("Error calling TextOut" + CHR(13) + ;
	        " Error code : " + ALLTRIM(STR(GetLastError())),48)
	     RETURN
	  ENDIF
	  *!* Done printing a page, so call EndPage()
	  retCode = EndPage(hDC)
	  IF retCode <= 0
	     MESSAGEBOX("Error calling EndPage" + CHR(13) + ;
	        " Error code : " + ALLTRIM(STR(GetLastError())),48)
	     RETURN
	  ENDIF
	  *!* Done printing a document, so call EndDoc()
	  retCode = EndDoc(hDC)
	  IF retCode <= 0
	     MESSAGEBOX("Error calling EndDoc" + CHR(13) + ;
	        " Error code : " + ALLTRIM(STR(GetLastError())),48)
	     RETURN
	  ENDIF
	  *!* Clear the DLLs from memory
	  CLEAR DLLS
	
	  FUNCTION Long2Str
	     PARAMETERS m.longval
	     PRIVATE i, m.retstr
	     m.retstr = ""
	     FOR i = 24 TO 0 STEP -8
	        m.retstr = CHR(INT(m.longval/(2^i))) + m.retstr
	        m.longval = MOD(m.longval, (2^i))
	     NEXT
	     RETURN m.retstr
	  * End of Code
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	MSDN Help, *Platform SDK, Graphics and Multimedia Services, Topics CreateDC,
	DeleteDC, TextOut, StartDoc, EndDoc, StartPage, EndPage
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprint kbAPI kbPrinting kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
