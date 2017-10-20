---
layout: page
title: "Q177146: HOWTO: Read and Change the System Date with API Functions"
permalink: /kb/177/Q177146/
---

## Q177146: HOWTO: Read and Change the System Date with API Functions

{% raw %}

	Article: Q177146
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article presents a step-by-step demonstration on programmatically calling
	Windows application program interface (API) functions from Visual FoxPro to read
	and set the system date. The code example shows how to obtain the date in a
	short date format. The system date can be set manually in the Date tab through
	the Regional Settings applet in the Windows Control Panel.
	
	MORE INFORMATION
	================
	
	The values passed to the GetLocaleInfo API are obtained from the file Winnls.h
	that ships with Visual C. The Winnls.h contains constants and declarations used
	for National Language Support for Windows applications. Below are a few values
	from the Winnls.h file that may be useful in a Visual FoxPro for Windows
	application.
	
	  Hexadecimal Value               Description
	  -------------------------------------------------------
	  0x00000014            * Local monetary symbol.         *
	  0x00000015            * International monetary symbol. *
	  0x00000016            * Monetary decimal separator.    *
	  0x00000017            * Monetary thousand separator.   *
	  0x0000001D            * Date separator.                *
	  0x0000001E            * Time separator.                *
	  0x0000001F            * Short date format string.      *
	  0x00000020            * Long date format string.       *
	  0x0000002A            * Long name for Monday.          *
	  0x0000002B            * Long name for Tuesday.         *
	  0x0000002C            * Long name for Wednesday.       *
	  0x0000002D            * Long name for Thursday.        *
	  0x0000002E            * Long name for Friday.          *
	  0x0000002F            * Long name for Saturday.        *
	  0x00000030            * Long name for Sunday.          *
	  0x00000031            * Abbreviated name for Monday.   *
	  0x00000032            * Abbreviated name for Tuesday.  *
	  0x00000033            * Abbreviated name for Wednesday.*
	  0x00000034            * Abbreviated name for Thursday. *
	  0x00000035            * Abbreviated name for Friday.   *
	  0x00000036            * Abbreviated name for Saturday. *
	  0x00000037            * Abbreviated name for Sunday.   *
	
	The values above along with others in the Winnls.h can be used in the code below
	to return and set the properties in Control Panel. Notice the values are
	hexadecimal. Visual FoxPro for Windows 5.x can use either a hexadecimal or
	decimal value for the GetLocaleInfo and SetLocaleInfo functions. Visual FoxPro
	for Windows 3.x, however, must use decimal values for the variables and API
	function calls.
	
	Windows stores two types of date formats, long and short. The program below
	demonstrates how to read and set the short date format. Create a program and add
	the following code:
	
	  
	
	     * Begin code to read system short date format *
	     *
	     * Setup declaration and parameters
	     Declare INTEGER GetLocaleInfo in Win32API LONG Locale, ;
	        LONG LCType, STRING @LpLCData, INTEGER cchData
	
	     * GetSystemDefaultLCID retrieves the system default locale identifier
	     Declare LONG GetSystemDefaultLCID in Win32API
	
	     Declare SetLocaleInfo in Win32API LONG Locale, LONG LCType, ;
	        STRING @LpLCData
	     dwLCID = GetSystemDefaultLCID()
	
	     Locale = 2048              && For English language.
	     LpLCData = space(255)      && Address of buffer information.
	     cchData = LEN(LpLCData)    && Size of buffer, LpLCData.
	
	     nretval = 0                && Number returned from API call.
	     cShortdate= ""             && Hold original short date format.
	
	     * Get version, VFP 5 uses Hexadecimal & decimal, VFP 3 only uses decimal
	     IF "3.00"$VERSION()
	        LCType = 31    && Type of information. Decimal 31 for short date.
	     ELSE
	        LCType = 0x1f  && Type of information. Hex 1f for short date.
	     ENDIF
	
	     * Obtain short date format
	     nretval = GetLocaleInfo(Locale, LCType, @LpLCData, cchData)
	     If nretval = 0 Then
	        =MessageBox ("Could not get information.")
	     Else
	        =MessageBox (LpLCData, 32, "Short Date Format")
	        cShortdate = LpLCData   && Store original date format.
	     EndIf
	
	     * Variable for new short date format
	     cNewshortdate = "MM/dd/yy" && Short date style copied from
	                                && Control Panel.
	
	     setdate = SetLocaleInfo(dwLCID, LCType, cNewshortdate)
	
	     * Reread the system short date to see change
	     nretval = GetLocaleInfo(Locale, LCType, @LpLCData, cchData)
	     =MessageBox (LpLCData, 32, "Updated short Date Format")
	
	     * Now reset date to previous format
	     cNewshortdate = cShortdate
	
	     setdate = SetLocaleInfo(dwLCID, LCType, cNewshortdate)
	
	     * Verify date is in original format
	     nretval = GetLocaleInfo(Locale, LCType, @LpLCData, cchData)
	     =MessageBox (LpLCData, 32, "Original short Date Format")
	
	     * End of code
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	Visual C++ Help, version 5.0; search on: "GetLocaleInfo," "SetLocaleInfo"
	
	Additional query words: date windows api
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
