---
layout: page
title: "Q241391: HOWTO: Use the Win32 API FormatMessage Function with VFP"
permalink: /kb/241/Q241391/
---

## Q241391: HOWTO: Use the Win32 API FormatMessage Function with VFP

	Article: Q241391
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro developers often incorporate calls to Win32 API functions in order
	to extend their applications. Sometimes, these calls fail. Using a combination
	of the Win32 API functions GetLastError and FormatMessage, developers can
	display both a numeric and text message detailing why the call failed. This
	article demonstrates how.
	
	MORE INFORMATION
	================
	
	To run this sample, copy the following code into a new Visual FoxPro program,
	save and run it. You can adjust the value of the lnApiToCall variable (top of
	program) to call one of three different Win32 API functions and get different
	errors from FormatMessage:
	
	  *!* The following code makes calls to one of three different Win32 API functions.
	  *!* The calls will fail. The function that is called is determined
	  *!* by the value of "lnAPIToCall". Change the value of "lnAPIToCall"
	  *!* to see different error messages:
	  *!*	lnAPIToCall = 1: GetSysColor is called.
	  *!*	lnAPIToCall = 2: GetUserName is called.
	  *!*	lnAPIToCall = 3: FindWindow is called.
	  LOCAL lnAPIToCall
	  lnAPIToCall = 1
	
	  *!* #DEFINES from HOME()+"FOXPRO.h"
	  #DEFINE MB_ICONINFORMATION      64      && Information message
	  #DEFINE MB_OK                   0       && OK button only
	
	  #DEFINE CR						CHR(13) && Carriage Return
	  #DEFINE ERROR_SUCCESS           0		&& Success error code from WINERROR.H
	  #DEFINE FORMAT_MESSAGE_FROM_SYSTEM     0x00001000 && Value for use with FormatMessage API. From WINBASE.H
	
	  *!* Declare function to return system error code if an API call fails.
	  DECLARE INTEGER GetLastError IN win32api
	
	  *!* Declare function to return text message from system error code.
	  DECLARE INTEGER FormatMessage IN kernel32.DLL ;
	  	INTEGER dwFlags, ;
	  	STRING @lpSource, ;
	  	INTEGER dwMessageId, ;
	  	INTEGER dwLanguageId, ;
	  	STRING @lpBuffer, ;
	  	INTEGER nSize, ;
	  	INTEGER Arguments
	
	  *!* Now declare three Win32 API functions:
	  *!* GetSysColor, GetUserName and GetWindow.
	  *!* Later, you will make calls to these functions that will fail
	  *!* and use GetLastError and FormatMessage to display why.
	  *!* For more information on the use of these functions in FoxPro,
	  *!* see the References section at the bottom of this article
	
	  *!* The GetSysColor function retrieves the current color
	  *!* of the specified display element. Display elements are
	  *!* the parts of a window and the display that appear
	  *!* on the system display screen.
	  DECLARE INTEGER GetSysColor IN User32.DLL INTEGER
	
	  *!* The GetUserName function retrieves the user
	  *!* name of the current thread. This is the name
	  *!* of the user currently logged onto the system.
	  DECLARE INTEGER GetUserName IN Win32API ;
	  	STRING  @lpBuffer, ;
	  	INTEGER @nSize
	
	  *!* The GetWindow function retrieves a handle to a
	  *!* window that has the specified relationship
	  *!* (Z order or owner) to the specified window.
	  DECLARE INTEGER GetWindow ;
	  	IN win32api ;
	  	INTEGER HWND, ;
	  	INTEGER uCmd
	
	  *!*  ~~~~~~~~~ END OF DECLARES ~~~~~~~~~
	
	  *!* Set up the return value variable for the API calls (lnSuccess)
	  LOCAL lnSuccess
	  lnSuccess = 0
	
	  DO CASE
	  	CASE lnAPIToCall = 1
	  *!*	    This call will fail because 99 is in invalid parameter. For a list of valid
	  *!*	    parameters to use with GetSysColor, see Q139291.
	  		lnSuccess = GetSysColor(99)
	  	CASE lnAPIToCall = 2
	  		LOCAL  lpBuffer,nBufferSize
	  		lpBuffer = SPACE(25) && Return buffer for user ID string
	  		nSize = 1            && Size of user ID return buffer
	  *!*	    This call will fail because you misreport the size of the buffer (nSize). Should be 25.
	  		lnSuccess = GetUserName(@lpBuffer,@nSize)
	  	CASE lnAPIToCall = 3
	  *!*	    This call will fail because you pass an invalid window handle (first parameter).
	  		lnSuccess = GetWindow(99,2)
	  	OTHERWISE
	  		=MESSAGEBOX("There is no API call associated with that value",MB_ICONINFORMATION+MB_OK,"ERROR")
	  		RETURN .F.
	  ENDCASE
	
	  *!*	     The API call failed. So, you put up a messagebox saying so
	  *!*	     and display the system error code from WINERROR.H. You extend this
	  *!*	     by using FormatMessage API to display a character error message.
	  *!*
	  *!*      One thing to note here is that the error codes for the three calls
	  *!*      used above are stored in WINERROR.H. As such, that header file name
	  *!*      is hard-coded into the FormatMessage call. This may need to be
	  *!*      adjusted depending on the APIs used.
	  IF !(lnSuccess > ERROR_SUCCESS)
	  	lpBuffer  = SPACE(128)
	  	lnError = GetLastError()
	  	=FormatMessage(FORMAT_MESSAGE_FROM_SYSTEM, ;
	  		'WINERROR.H', lnError, 0, @lpBuffer, 128 , 0)
	
	  	=MESSAGEBOX("System error has occurred." + CR + ;
	  		"System Error code: " + ALLTRIM(STR(lnError)) + CR + ;
	  		"System Error message: "+ALLT(lpBuffer),MB_ICONINFORMATION+MB_OK,"ERROR")
	  ENDIF
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information about working with GetSysColor, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q139291 HOWTO: Change the BackColor of a ToolBar When It's Docked
	
	For additional information about working with GetUserName, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q139625 HOWTO: Use and Call the GetUserName API
	
	For additional information about working with GetWindow, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q188404 HOWTO: Use API Calls to Detect Other Running Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
