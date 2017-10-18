---
layout: page
title: "Q258556: HOWTO: Read a REG_SZ Value From the Registry"
permalink: kb/258/Q258556/
---

## Q258556: HOWTO: Read a REG_SZ Value From the Registry

	Article: Q258556
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
	
	This article shows how to read a REG_SZ value from the registry.
	
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
	
	This information about the registry editor in this article is for Microsoft
	Windows NT and Microsoft Windows 2000. If you are running Windows 9X, you have
	to use Regedit.exe instead of Regedt32.exe.
	
	NOTE: This article uses a registry key that is created just for testing and
	should be deleted when you are finished.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software
	
	3. On the Edit menu, click Add Key, and then add the following registry Key:
	
	  Key Name:   VfpRegTest
	
	4. Click on the Key added in step 3. On the Edit menu, click Add Value, and then
	  add the following value:
	
	  Value Name: TestREG_SZ
	  Data Type:  REG_SZ
	  Value:      This is a Test. 
	
	5. Quit Registry Editor.
	
	6. From Visual FoxPro, create a program and enter the following code:
	
	  *Start of Code
	  #DEFINE HKEY_LOCAL_MACHINE          -2147483646
	
	  LOCAL nKey, cSubKey, cValue,  cValueRead
	  nKey = HKEY_LOCAL_MACHINE
	  cSubKey = "Software\VfpRegTest"
	  cValue = "TestREG_SZ"
	
	  cValueRead = ReadREG_SZ(nKey, cSubKey, cValue)
	  IF (EMPTY(cValueRead)) THEN
	     =MESSAGEBOX("Function Not Successful.")
	  ELSE
	     ? cValueRead
	     =MESSAGEBOX("Function Successful.")
	  ENDIF
	
	  FUNCTION ReadREG_SZ
	  * This function reads a REG_SZ value from the registry. If successful,
	  * it will return the value read. If not successful, it will return an empty string.
	     PARAMETERS  nKey, cSubKey, cValue
	     * nKey The root key to open. It can be any of the constants defined below.
	     *  #DEFINE HKEY_CLASSES_ROOT           -2147483648
	     *  #DEFINE HKEY_CURRENT_USER           -2147483647
	     *  #DEFINE HKEY_LOCAL_MACHINE          -2147483646
	     *  #DEFINE HKEY_USERS                  -2147483645
	     * cSubKey The SubKey to open.
	     * cValue The value that is going to be read.
	
	     * Constants that are needed for Registry functions
	     #DEFINE REG_SZ   1
	
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
	      
	     * Initialize the variables
	     nKeyHandle = 0
	     lpdwReserved = 0           
	     lpdwValueType = REG_SZ
	     lpbValue = ""
	     
	     nErrCode = RegOpenKey(nKey, cSubKey, @nKeyHandle)
	     * If the error code isn't 0, then the key doesn't exist or can't be opened.
	     IF (nErrCode # 0) THEN
	        RETURN ""
	     ENDIF
	
	     lpcbValueSize = 1 
	     * Get the size of the data in the value
	     nErrCode=RegQueryValueEx(nKeyHandle, cValue, lpdwReserved, @lpdwValueType, @lpbValue, @lpcbValueSize)
	
	     * Make the buffer big enough
	     lpbValue = SPACE(lpcbValueSize)   
	     nErrCode=RegQueryValueEx(nKeyHandle, cValue, lpdwReserved, @lpdwValueType, @lpbValue, @lpcbValueSize)
	     
	     =RegCloseKey(nKeyHandle)
	     IF (nErrCode # 0) THEN
	        RETURN ""
	     ENDIF
	
	     lpbValue = LEFT(lpbValue, lpcbValueSize - 1)
	  RETURN lpbValue
	  * End of Code
	
	7. Run the program created in step 6. A message box appears reading "Function
	  Successful" and the value appears on the screen.
	
	8. You can replace nKey, cSubKey, and cValue with your information to be read
	  from the registry.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information obtaining values from the registry, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q244675 HOWTO: Use Windows Script Host to Read, Write, Delete Registry
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
