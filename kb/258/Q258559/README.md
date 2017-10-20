---
layout: page
title: "Q258559: HOWTO: Write a REG_SZ Value to the Registry"
permalink: /kb/258/Q258559/
---

## Q258559: HOWTO: Write a REG_SZ Value to the Registry

{% raw %}

	Article: Q258559
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
	
	This article shows how to write a REG_SZ value to the registry.
	
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
	
	This information about the Registry Editor in this article is for Microsoft
	Windows NT and Microsoft Windows 2000. If you are running Microsoft Windows 95
	or Microsoft Windows 98, you need to use the Regedit.exe file instead of the
	Regedt32.exe file.
	
	NOTE: This article uses a registry key that is created just for testing and
	should be deleted when you are finished.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software
	
	3. On the Edit menu, click Add Key, and then add the following registry key:
	
	  Key Name: VfpRegTest
	
	4. Click on the registry key added in step 3. On the Edit menu, click Add Value,
	  and then add the following value:
	
	  Value Name: TestREG_SZ Data Type: REG_SZ Value: None
	
	5. Quit Registry Editor.
	
	6. From Visual FoxPro, create a program and enter the following code:
	
	  *Start of Code
	  #DEFINE HKEY_LOCAL_MACHINE          -2147483646
	
	  LOCAL nKey, cSubKey, cValue, lSuccess, cValueToWrite
	  nKey = HKEY_LOCAL_MACHINE
	  cSubKey = "Software\VfpRegTest"
	  cValue = "TestREG_SZ"
	  cValueToWrite = "This is a String."
	
	  lSuccess = WriteREG_SZ(nKey, cSubKey, cValue, cValueToWrite)
	  IF (lSuccess) THEN
	     =MESSAGEBOX("Function Successful.")
	  ELSE
	     =MESSAGEBOX("Function Not Successful.")
	  ENDIF
	
	  FUNCTION WriteREG_SZ
	  * This function writes a REG_SZ value to the registry. If successful,
	  * its will return .T.. If not successful, it will return .F..
	     PARAMETERS  nKey, cSubKey, cValue, cValueToWrite
	     * nKey The root key to open. It can be any of the constants defined below
	     *#DEFINE HKEY_CLASSES_ROOT           -2147483648
	     *#DEFINE HKEY_CURRENT_USER           -2147483647
	     *#DEFINE HKEY_LOCAL_MACHINE          -2147483646
	     *#DEFINE HKEY_USERS                  -2147483645
	     * cSubKey The SubKey to open.
	     * cValueToWrite The value being written to the registry.
	
	     * Constants that are needed for Registry functions
	     #DEFINE REG_SZ   1
	
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
	      
	     * Initialize the variables
	     nKeyHandle = 0
	     lpdwReserved = 0           
	     lpdwValueType = REG_SZ
	     lpbValue = cValueToWrite
	     
	     nErrCode = RegOpenKey(nKey, cSubKey, @nKeyHandle)
	     * If the error code isn't 0, then the key doesn't exist or can't be opened.
	     IF (nErrCode # 0) THEN
	        RETURN .F.
	     ENDIF
	
	     lpcbValueSize = LEN(lpbValue)   && Store the length of the string
	     nErrCode=RegSetValueEx(nKeyHandle, cValue, lpdwReserved, lpdwValueType, lpbValue, lpcbValueSize)
	     
	     =RegCloseKey(nKeyHandle)
	     IF (nErrCode # 0) THEN
	        RETURN .F.
	     ENDIF
	  RETURN .T.
	  * End of Code     
	
	7. Run the program created in step 6. A message box appears indicating "Function
	  Successful."
	
	8. You can replace nKey, cSubKey, cValue, and cValueToWrite with your
	  information to be written to the registry.
	
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
	

{% endraw %}
