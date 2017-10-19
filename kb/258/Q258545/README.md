---
layout: page
title: "Q258545: HOWTO: Write a REG_MULTI_SZ Value to the Registry"
permalink: /kb/258/Q258545/
---

## Q258545: HOWTO: Write a REG_MULTI_SZ Value to the Registry

	Article: Q258545
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbRegistry kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport k
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how to write a REG_MULTI_SZ value to the registry.
	
	MORE INFORMATION
	================
	
	NOTE: This article requires the regedt32.exe file to add the test key and value;
	this is only available on Microsoft Windows NT and Microsoft Windows 2000. The
	code runs on Microsoft Windows 9X with an existing REG_MULTI_SZ value.
	
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
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software
	
	3. On the Edit menu, click Add Key, and then add the following registry key:
	
	  Key Name:   VfpRegTest
	
	4. Click on the VfpRegTest key that you added in step 3. On the Edit menu, click
	  Add Value, and then add the following value:
	
	  Value Name: TestREG_MULTI_SZ
	  Data Type:  REG_MULTI_SZ
	  Value:      None
	
	5. Quit the Registry Editor.
	
	6. From Visual FoxPro, create a program and enter the following code:
	
	  *Start of Code
	  #DEFINE HKEY_LOCAL_MACHINE  -2147483646
	
	  LOCAL nKey, cSubKey, cValue, lSuccess
	  DIMENSION acValueToWrite(5)
	
	  acValueToWrite(1) = "Line1"
	  acValueToWrite(2) = "Line2"
	  acValueToWrite(3) = "Line3"
	  acValueToWrite(4) = "Line4"
	  acValueToWrite(5) = "Line5"
	  nKey = HKEY_LOCAL_MACHINE
	  cSubKey = "Software\VfpRegTest"
	  cValue = "TestREG_MULTI_SZ"
	
	  lSuccess = WriteREG_MULTI_SZ(nKey, cSubKey, cValue, @acValueToWrite)
	  IF (lSuccess) THEN
	     =MESSAGEBOX("Function Successful.")
	  ELSE
	     =MESSAGEBOX("Function Not Successful.")
	  ENDIF
	
	  FUNCTION WriteREG_MULTI_SZ
	  * This function writes a REG_MULTI_SZ value to the registry. It will return
	  * .T. if successful and .F. if not successful.
	     PARAMETERS  nKey, cSubKey, cValue,  acValueToWrite
	     * nKey The root key to open. It can be any of the constants defined below
	     *  #DEFINE HKEY_CLASSES_ROOT           -2147483648
	     *  #DEFINE HKEY_CURRENT_USER           -2147483647
	     *  #DEFINE HKEY_LOCAL_MACHINE          -2147483646
	     *  #DEFINE HKEY_USERS                  -2147483645
	     * cSubKey The SubKey to open.
	     * cValue The value that is going to be read.
	     * acValueToWrite Array of strings to write to the registry.
	
	     * Constants that are needed for Registry functions
	     #DEFINE REG_MULTI_SZ    7
	
	     * WIN 32 API functions that are used
	     DECLARE Integer RegOpenKey IN Win32API ;
	        Integer nHKey, String @cSubKey, Integer @nResult
	     DECLARE Integer RegSetValueEx IN Win32API ;
	        Integer hKey, String lpszValueName, Integer dwReserved,;
	        Integer fdwType, String lpbData, Integer cbData
	     DECLARE Integer RegCloseKey IN Win32API Integer nHKey
	
	     * Local variables used
	     LOCAL nErrCode      && Error Code returned from Registry functions
	     LOCAL nKeyHandle    && Handle to Key that is opened in the Registry
	     LOCAL lpdwValueType && Type of Value that we are looking for
	     LOCAL lpbValue      && The data stored in the value
	     LOCAL lpcbValueSize && Size of the variable
	     LOCAL lpdwReserved  && Reserved Must be 0
	     LOCAL nLoopVar      && Loop Control Variable
	     
	     * Initialize the variables
	     nKeyHandle = 0
	     lpdwReserved = 0           
	     lpdwValueType = REG_MULTI_SZ
	     lpbValue = ""
	
	     nErrCode = RegOpenKey(nKey, cSubKey, @nKeyHandle)
	     * If the error code isn't 0, then the key doesn't exist or can't be opened.
	     IF (nErrCode # 0) THEN
	        RETURN .F.
	     ENDIF
	
	      * This loop takes the array elements and puts them into a string
	     FOR nLoopVar = 1 TO ALEN(acValueToWrite)
	        lpbValue = lpbValue + acValueToWrite(nLoopVar) + CHR(0)
	     ENDFOR
	
	     lpcbValueSize = LEN(lpbValue)   && Store the length of the string
	     nErrCode=RegSetValueEx(nKeyHandle, cValue, lpdwReserved, lpdwValueType, lpbValue, lpcbValueSize)
	     
	     =RegCloseKey(nKeyHandle)
	     IF (nErrCode # 0) THEN
	        RETURN .F.
	     ENDIF
	  RETURN .T.
	  * End of Code 
	
	7. Run the program that you created in step 6. A message box appears with the
	  message "Function Successful."
	
	8. You can replace nKey, cSubKey, cValue, or acValueToWrite in the preceding
	  code with the information you need to write to the registry.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information obtaining values from the registry, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q244675 HOWTO:Use Windows Script Host to Read, Write, Delete Registry
	
	  Q155267 Registry Editors Installed by Windows NT 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbRegistry kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
