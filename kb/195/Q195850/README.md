---
layout: page
title: "Q195850: HOWTO: Determine the Windows Messaging Subsystem Default"
permalink: kb/195/Q195850/
---

## Q195850: HOWTO: Determine the Windows Messaging Subsystem Default

	Article: Q195850
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbMAPI kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Occasionally, when you are working on MAPI-enabled FoxPro applications you might
	need to determine what the default Windows Messaging profile is on a target
	computer. This article demonstrates how to accomplish this using the Windows
	API.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedures
	-----------------------
	
	1. In Visual FoxPro, open a new program window by typing the following in the
	  Command window:
	
	        MODIFY COMMAND
	
	2. Copy the following code into a program file:
	
	     #DEFINE HKey_CURRENT_USER 2147483649
	     DECLARE INTEGER RegCloseKey IN Win32API ;
	        INTEGER nHKey
	     DECLARE INTEGER RegOpenKey IN Win32API ;
	        INTEGER nHKey, STRING @cSubKey, INTEGER @nResult
	     DECLARE RegEnumValue IN ADVAPI32 INTEGER nKeyHandle, INTEGER iValue, ;
	        STRING @cValueName, INTEGER @iValueLen, INTEGER, STRING @cTypeCode, ;
	        STRING @cDataValue, INTEGER @iDataLen
	
	     nSubKey = 0
	     nErrCode = 0
	     nKeyHandle = 0
	     iValue = 0
	     cValueName = SPACE(255)
	     iValueLen = 255
	     cTypeCode = SPACE(255)
	     cDataValue = SPACE(255)
	     iDataLen = 255
	
	     *!* Determine what operating system you are on: Windows NT or
	     *!* Windows 9x.
	     IF "NT" $ OS(1)
	        ckey = "Software\Microsoft\Windows NT\CurrentVersion\" + ;
	           "Windows Messaging Subsystem\Profiles"
	     ELSE
	        ckey = "Software\Microsoft\Windows Messaging Subsystem\Profiles"
	     ENDIF
	
	     nErrCode = RegOpenKey(HKey_CURRENT_USER,ckey,@nKeyHandle)
	     *!* If nErrCode <> 0, Windows messaging is probably not installed.
	     IF nErrCode # 0
	        WAIT WINDOW "Windows Messaging Key Not Present"
	        RETURN nErrCode
	     ENDIF
	
	     RegEnumValue(nKeyHandle,0,@cValueName,@iValueLen,0,;
	        @cTypeCode, @cDataValue, @iDataLen)
	     *!* If cDataValue is blank, no profiles have been set up.
	     IF EMPTY(cDataValue)
	        WAIT WINDOW "No Windows Messaging Profiles Set"
	        RETURN
	     ELSE
	        ? LEFT(cDataValue, iDataLen-1)
	     ENDIF
	     RegCloseKey(nKeyHandle)
	
	3. Save and run this program.
	
	RESULT: You should see text echoed in the main FoxPro window. This is the default
	Windows Message profile for this computer.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMAPI kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
