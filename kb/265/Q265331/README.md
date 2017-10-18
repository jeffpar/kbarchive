---
layout: page
title: "Q265331: HOWTO: Read a REG_EXPAND_SZ Value From the Registry"
permalink: kb/265/Q265331/
---

## Q265331: HOWTO: Read a REG_EXPAND_SZ Value From the Registry

	Article: Q265331
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
	
	This article describes how to read a REG_EXPAND_SZ registry value.
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The information about the registry editor in this article is for Microsoft
	Windows NT-based computers and Microsoft Windows 2000-based computers. If you
	are running a Microsoft Windows 9x-based computer, you need to use the
	Regedit.exe file instead of the Regedt32.exe file.
	
	NOTE: This article uses a registry key, which is created just for testing
	purposes, and the registry key should be deleted when you complete testing.
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software
	
	3. On the Edit menu, click Add Key, and then add the following registry Key:
	
	  VfpREGTest
	
	4. Expand the HKEY_LOCAL_MACHINE\Software value. Locate and then select the
	  VfpREGTest key that you added in step 3.
	
	5. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: TestREG_EXPAND_SZ
	  Data Type:  REG_EXPAND_SZ
	  Value:      %WINDIR%\System
	
	6. Quit the Registry Editor.
	
	7. In Microsoft Visual FoxPro, create a program and enter the following code:
	
	  *Start of Code
	  #DEFINE HKEY_CLASSES_ROOT           -2147483648
	  #DEFINE HKEY_CURRENT_USER           -2147483647
	  #DEFINE HKEY_LOCAL_MACHINE          -2147483646
	  #DEFINE HKEY_USERS                  -2147483645
	
	  LOCAL nKey, cSubKey, cValue, nSuccess, cValueRead
	  nKey = HKEY_LOCAL_MACHINE
	  cSubKey = "Software\VfpRegTest"
	  cValue = "TestREG_EXPAND_SZ"
	
	  nSuccess = ReadREG_EXPAND_SZ(nKey, cSubKey, cValue, @cValueRead)
	  IF (nSuccess > 0) THEN
	     =MESSAGEBOX("Function Successful.")
	        ? cValueRead
	  ELSE
	     =MESSAGEBOX("Function Not Successful.")
	  ENDIF
	
	  FUNCTION ReadREG_EXPAND_SZ
	  * This function reads a REG_EXPAND_SZ value from the registry. It will return
	  * the number of characters in cValueRead if successful and store the 
	  * expanded string in cValueRead. If not successful, it will return 0 and 
	  * cValueRead will be empty
	     PARAMETERS  nKey, cSubKey, cValue,  cValueRead
	     * nKey The root key to open. It can be any of the constants defined below
	     *  #DEFINE HKEY_CLASSES_ROOT           -2147483648
	     *  #DEFINE HKEY_CURRENT_USER           -2147483647
	     *  #DEFINE HKEY_LOCAL_MACHINE          -2147483646
	     *  #DEFINE HKEY_USERS                  -2147483645
	     * cSubKey The SubKey to open.
	     * cValue The value that is going to be read.
	     * cValueRead The expanded string read from the registry
	
	     * Constants that are needed for Registry functions
	     #DEFINE REG_EXPAND_SZ    2
	
	     * WIN 32 API functions that are used
	     DECLARE Integer RegOpenKey IN Win32API ;
	        Integer nHKey, String @cSubKey, Integer @nResult
	     DECLARE Integer RegQueryValueEx IN Win32API ;
	        Integer nHKey, String lpszValueName, Integer dwReserved,;
	        Integer @lpdwType, String @lpbData, Integer @lpcbData
	     DECLARE Integer RegCloseKey IN Win32API Integer nHKey
	     DECLARE Integer ExpandEnvironmentStrings IN WIN32API;
	        String @lpSrc, String @lpDst, Integer nSize
	        
	     * Local variables used
	     LOCAL nErrCode       && Error Code returned from Registry functions
	     LOCAL nKeyHandle     && Handle to Key that is opened in the Registry
	     LOCAL lpdwValueType  && Type of Value that we are looking for
	     LOCAL lpbValue       && The data stored in the value
	     LOCAL lpcbValueSize  && Size of the variable
	     LOCAL lpdwReserved   && Reserved Must be 0
	     LOCAL lpDst          && The string after it has been expanded
	     LOCAL nSize          && The size of the string to hold the expanded string
	     LOCAL nBufferSize    && Size needed to store the expanded string
	     
	     * Initialize the variables
	     nKeyHandle = 0
	     lpdwReserved = 0           
	     lpdwValueType = REG_EXPAND_SZ
	
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
	     
	     * Expand the Strings
	     * We need to get the size of the buffer needed
	     lpDst = ""
	     nSize = 1
	     nBufferSize = ExpandEnvironmentStrings(lpbValue, @lpDst, nSize)
	     
	     * Make the buffer big enough for the expanded string
	     lpDst = SPACE(nBufferSize)
	     nSize = nBufferSize
	     
	     nBufferSize = ExpandEnvironmentStrings(lpbValue, @lpDst, nSize)
	
	     * Check to see if we were successful
	     IF (nBufferSize = 0) THEN
	        RETURN 0
	     ELSE
	     	  * Strip off the null at the end of the string
	        cValueRead = LEFT(lpDst, nBufferSize - 1)
	     ENDIF
	  RETURN nBufferSize
	  * End of Code 
	
	8. Run the code created in step 7. A message box displays, which maintains
	  either the success or failure of the function. If the function is successful
	  the message box text states:
	
	  Function Successful
	
	If the function is unsuccessful the text states:
	
	  Function Not Successful
	
	9. You can replace the nKey, cSubKey, and cValue, with your information.
	
	REFERENCES
	==========
	
	For additional information about obtaining values from the registry, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q244675 HOWTO:Use Windows Script Host to Read, Write, Delete Registry
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
