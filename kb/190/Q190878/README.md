---
layout: page
title: "Q190878: HOWTO: Get Visual FoxPro Options Registry Settings"
permalink: kb/190/Q190878/
---

## Q190878: HOWTO: Get Visual FoxPro Options Registry Settings

	Article: Q190878
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbRegistry kbvfp500 kbvfp500a kbvfp600 kbDSupport
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Knowledge Base article Q130578, "How to Customize the Visual
	FoxPro Environment" describes how to echo the Visual FoxPro environment settings
	by opening the Options dialog box from the Tools menu, holding the SHIFT key and
	clicking OK. However, this method does not show all of the Options settings,
	such as the setting for Asynchronous execution under the Remote Data tab. This
	article shows how to get all of the settings for Visual FoxPro that are listed
	in the registry.
	
	MORE INFORMATION
	================
	
	1. In order for values to display, you must first save the settings to the
	  registry. This task can be accomplished by selecting Options from the Tools
	  menu. Click the Set as Default button, and then click OK to close the dialog
	  box.
	
	2. Save the following code and run it with the syntax DO <program name>
	  WITH <file name in which to save settings>. For example, if the program
	  file were saved to Readsettings.prg, run the program by typing the following
	  in the Command window to save the settings to a text file called
	  MySettings.Txt: DO READSETTINGS.PRG WITH "MySettings.Txt". After the program
	  runs, it displays an edit window that shows the current settings:
	
	        *-- Code begins here.
	        PARAMETER lsOutput
	
	        *-- Defines from Winreg.h
	
	        #define KEY_QUERY_VALUE      0x0001
	        #define HKEY_CURRENT_USER    0x80000001
	
	        lnKeyHandle = 0
	        liValue = 0
	        lpszValue = SPACE(255)
	        lpcchValue = 255
	        lpdwType = SPACE(255)
	        lpbData=SPACE(255)
	        lpcbData=255
	
	        DECLARE RegOpenKeyEx IN WIN32API INTEGER, STRING, INTEGER, ;
	          INTEGER, INTEGER @nKeyHandle
	
	        DECLARE RegEnumValue IN WIN32API INTEGER lnKeyHandle, INTEGER ;
	         liValue;
	         STRING @lpszValue, INTEGER @lpcchValue, INTEGER, STRING @lpdwType, ;
	         STRING @lpbData, INTEGER @lpcbData
	
	        *-- Get a handle for the Visual FoxPro Options key.
	        lnResult=RegOpenKeyEx(;
	          HKEY_CURRENT_USER, "Software\Microsoft\VisualFoxPro\6.0\Options", ;
	          0, KEY_QUERY_VALUE, @LnKeyHandle)
	
	        *-- Get a file handle for output file.
	        IF FILE(lsOutput)
	           ERASE(lsOutput)
	        ENDIF
	        lhFile = FCREATE(lsOutput)
	        lnReturn = .T.
	
	        DO WHILE lnReturn = .T.
	
	           *-- Clear the buffers through each loop.
	           lpszValue  = SPACE(255)
	           lpcchValue = 255
	           lpdwType   = SPACE(255)
	           lpbData    = SPACE(255)
	           lpcbData   = 255
	
	           *-- Walk through the values for the key.
	        lnReturn=RegEnumValue(lnKeyHandle,liValue,@lpszValue,@lpcchValue,0,;
	          @lpdwType,@lpbData,@lpcbData)
	
	          *-- Quit when we start getting empty strings.
	          IF LEN(ALLTRIM(lpbData)) = 0 AND LEN(ALLTRIM(lpszValue)) = 0
	             lnReturn = .F.
	             LOOP
	          ENDIF
	
	          *-- Strip anything after the first null character.
	          lpszValue = SUBSTR(lpszValue, 1, AT(CHR(0),lpszValue) - 1)
	          lpbData = SUBSTR(lpbData, 1, AT(CHR(0),lpbData) - 1)
	
	          *-- Write it out to the file.
	          lFresult=FPUTS(lhFile,ALLTRIM(lpszValue) + " " + ALLTRIM(lpbData))
	
	          *-- Increment the value index to move to the next value.
	          liValue = liValue + 1
	        ENDDO
	
	        *-- Close our file handle and open an edit window.
	        FCLOSE(lhFile)
	        MODIFY FILE (lsOutput)
	        *-- Code ends here.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q130578 HOWTO: Customize the Visual FoxPro Environment
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mike Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbRegistry kbvfp500 kbvfp500a kbvfp600 kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
