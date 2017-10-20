---
layout: page
title: "Q258528: HOWTO: Read a REG_MULTI_SZ From the Registry"
permalink: /kb/258/Q258528/
---

## Q258528: HOWTO: Read a REG_MULTI_SZ From the Registry

{% raw %}

	Article: Q258528
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippe
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to read a REG_MULTI_SZ value from the registry.
	
	MORE INFORMATION
	================
	
	NOTE: This article requires regedt32.exe, which is only available on Microsoft
	Windows NT and Microsoft Windows 2000, to add the test key and value. The code
	included runs on Windows 9X with an existing REG_MULTI_SZ value.
	
	IMPORTANT: This article contains information about modifying the registry. Before
	you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: This article uses a registry key that is created just for testing and
	should be deleted when you are finished.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software
	
	3. On the Edit menu, click Add Key, and then add the following registry Key:
	
	  Key Name:   VfpRegTest
	
	4. Click on the Key added in step 3. On the Edit menu, click Add Value, and then
	  add the following value:
	
	  Value Name: TestREG_MULTI_SZ
	  Data Type:  REG_MULTI_SZ
	  Value:      Line1
	              Line2
	              Line3
	              Line4   
	
	  Be sure to press the Enter key after each line.
	
	5. Quit Registry Editor.
	
	6. From Visual FoxPro, create a program and enter the following code:
	
	  *Start of Code
	  #DEFINE HKEY_LOCAL_MACHINE   -2147483646
	
	  LOCAL nKey, cSubKey, cValue, nStrings, acValueRead, nLoopVar
	  nKey = HKEY_LOCAL_MACHINE
	  cSubKey = "Software\VfpRegTest"
	  cValue = "TestREG_MULTI_SZ"
	
	  nStrings = ReadREG_MULTI_SZ(nKey, cSubKey, cValue, @acValueRead)
	  IF (nStrings > 0) THEN
	     =MESSAGEBOX("Function Successful.")
	     FOR nLoopVar = 1 TO nStrings
	        ? acValueRead(nLoopVar)
	     ENDFOR	
	  ELSE
	     =MESSAGEBOX("Function Not Successful.")
	  ENDIF
	
	  FUNCTION ReadREG_MULTI_SZ
	  * This function reads a REG_MULTI_SZ value from the registry. It will return
	  * the number of Elements in acValueRead if successful and store the 
	  * strings in acValueRead. If not successful, it will return 0 and 
	  * acValueRead will contain 0 elements
	     PARAMETERS  nKey, cSubKey, cValue,  acValueRead
	     * nKey The root key to open. It can be any of the constants defined below
	     *  #DEFINE HKEY_CLASSES_ROOT           -2147483648
	     *  #DEFINE HKEY_CURRENT_USER           -2147483647
	     *  #DEFINE HKEY_LOCAL_MACHINE          -2147483646
	     *  #DEFINE HKEY_USERS                  -2147483645
	     * cSubKey The SubKey to open.
	     * cValue The value that is going to be read.
	     * acValueRead Array of strings read from the registry.
	
	     * Constants that are needed for Registry functions
	     #DEFINE REG_MULTI_SZ                 7
	
	     * WIN 32 API functions that are used
	     DECLARE Integer RegOpenKey IN Win32API ;
	        Integer nHKey, String @cSubKey, Integer @nResult
	     DECLARE Integer RegQueryValueEx IN Win32API ;
	        Integer nHKey, String lpszValueName, Integer dwReserved,;
	        Integer @lpdwType, String @lpbData, Integer @lpcbData
	     DECLARE Integer RegCloseKey IN Win32API Integer nHKey
	
	     * Local variables used
	     LOCAL nErrCode      && Error Code returned from Registry functions
	     LOCAL nKeyHandle    && Handle to Key that is opened in the Registry
	     LOCAL lpdwValueType && Type of Value that we are looking for
	     LOCAL lpbValue      && The data stored in the value
	     LOCAL lpcbValueSize && Size of the variable
	     LOCAL lpdwReserved  && Reserved Must be 0
	     LOCAL lNotDone      && Used to Exit Loop
	     LOCAL nOccurance    && The occurrence of CHR(0) in the string
	     LOCAL nPrevPos      && Previous element in Array 
	     LOCAL nCurrPos      && Current element in Array being processed
	     LOCAL nElements     && Number of Elements in the Array
	     
	     * Initialize the variables
	     nKeyHandle = 0
	     lpdwReserved = 0           
	     lpdwValueType = REG_MULTI_SZ
	     lNotDone = .T.
	     nOccurance = 1
	     nPrevPos = 1
	     nElements = 0
	
	     nErrCode = RegOpenKey(nKey, cSubKey, @nKeyHandle)
	     * If the error code isn't 0, then the key doesn't exist or can't be opened.
	     IF (nErrCode # 0) THEN
	        RETURN 0
	     ENDIF
	
	     lpbValue = ""
	     lpcbValueSize = 1 
	     * Get the size of the data in the value
	     nErrCode=RegQueryValueEx(nKeyHandle, cValue, lpdwReserved, @lpdwValueType, @lpbValue, @lpcbValueSize)
	
	     * Make the buffer big enough
	     lpbValue = SPACE(lpcbValueSize)   
	     nErrCode=RegQueryValueEx(nKeyHandle, cValue, lpdwReserved, @lpdwValueType, @lpbValue, @lpcbValueSize)
	     
	     =RegCloseKey(nKeyHandle)
	     IF (nErrCode # 0) THEN
	        RETURN 0
	     ENDIF
	
	     * This loop fills an array with the strings stored in the registry
	     DO WHILE lNotDone
	        nCurrPos = AT(CHR(0), lpbValue, nOccurance)  && CHR(0) is used to separate lines in the registry
	        IF ((nCurrPos > 0) AND (nCurrPos < lpcbValueSize)) THEN
	           nElements = nElements + 1
	           DIMENSION acValueRead(nElements)
	           acValueRead(nElements) = SUBSTR(lpbValue, nPrevPos, nCurrPos - nPrevPos)
	           nPrevPos = nCurrPos + 1
	           nOccurance = nOccurance + 1
	        ELSE
	           lNotDone = .F.
	        ENDIF
	     ENDDO
	  RETURN nElements
	  * End of Code
	
	7. Run the program created in step 6. A message box appears saying "Function
	  Successful" and the values appear on the desktop.
	
	8. You can replace nKey, cSubKey, and cValue with your information to be read
	  from the registry.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information obtaining values from the registry, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q244675 HOWTO:Use Windows Script Host to Read, Write, Delete Registry
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
