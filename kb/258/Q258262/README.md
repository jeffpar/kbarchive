---
layout: page
title: "Q258262: HOWTO: Write a DWORD to the Registry"
permalink: /kb/258/Q258262/
---

## Q258262: HOWTO: Write a DWORD to the Registry

{% raw %}

	Article: Q258262
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
	
	Sometimes it is necessary to write information to the registry. This article
	shows how to write REG_DWORD values to a key created in the registry for this
	article. If the value you are writing does not already exist, you need to add
	it.
	
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
	Windows NT and Microsoft Windows 2000. If you are running Microsoft Windows 9X,
	you need to use Regedit.exe instead of Regedt32.exe.
	
	NOTE: This article uses a registry key that is created just for testing purposes
	and should be deleted when you are done testing.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software
	
	3. On the Edit menu, click Add Key, and then add the following registry Key:
	
	  VfpREGTest
	
	4. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: MyDWORD
	  Data Type:  REG_DWORD
	  Value:      0
	
	5. Quit the Registry Editor.
	
	6. From Visual FoxPro, create a program and enter the following code:
	
	  #DEFINE HKEY_CLASSES_ROOT           -2147483648
	  #DEFINE HKEY_CURRENT_USER           -2147483647
	  #DEFINE HKEY_LOCAL_MACHINE          -2147483646
	  #DEFINE HKEY_USERS                  -2147483645
	
	  LOCAL nKey, cSubKey, cValue, nValueToWrite, lSuccess
	  nKey = HKEY_LOCAL_MACHINE
	  nValueToWrite = 1
	  cSubKey = "Software\VfpREGTest"
	  cValue = "MyDWORD"
	
	  lSuccess = WriteRegDWORD(nKey, cSubKey, cValue, nValueToWrite)
	
	  IF (lSuccess) THEN
	     =MESSAGEBOX("Function Successful.")
	  ELSE
	     =MESSAGEBOX("Function Not Successful.")
	  ENDIF
	
	  FUNCTION WriteRegDWORD
	     * This function writes a REG_DWORD to the registry. It will return .T.
	     * if successful and .F. if it isn't successful.
	     PARAMETERS  nKey, cSubKey, cValue,  nValueToWrite
	     * nKey The root key to open. It can be any of the constants defined below.
	     *#DEFINE HKEY_CLASSES_ROOT           -2147483648
	     *#DEFINE HKEY_CURRENT_USER           -2147483647
	     *#DEFINE HKEY_LOCAL_MACHINE          -2147483646
	     *#DEFINE HKEY_USERS                  -2147483645
	     *cSubKey The SubKey to open.
	     *cValue The value that is going to be written.
	     *nValueToWrite The value to write to the registry
	
	     * Constants that are needed for Registry functions
	     #DEFINE REG_DWORD   4
	
	     * WIN 32 API functions that are used
	     DECLARE Integer RegOpenKey IN Win32API ;
	        Integer nHKey, String @cSubKey, Integer @nResult
	     DECLARE Integer RegSetValueEx IN Win32API ;
	        Integer hKey, String lpszValueName, Integer dwReserved,;
	        Integer fdwType, String lpbData, Integer cbData
	     DECLARE Integer RegCloseKey IN Win32API Integer nHKey
	
	     * Local variables used
	     LOCAL nErrCode          && Error Code returned from Registry functions
	     LOCAL nKeyHandle        && Handle to Key that is opened in the Registry
	     LOCAL lpdwValueType     && Type of Value that we are looking for.
	     LOCAL lpbValue          && The data stored in the value
	     LOCAL lpcbValueSize     && Size of the variable
	     LOCAL lpdwReserved      && Reserved Must be 0
	
	     * Initialize the variables
	     nKeyHandle = 0
	     lpdwReserved = 0           
	     lpdwValueType = REG_DWORD
	     lpcbValueSize = 4     && DWORD is 4 bytes
	
	     lpbValue = LongToStr(nValueToWrite)
	
	     nErrCode = RegOpenKey(nKey, cSubKey, @nKeyHandle)
	     * If the error code isn't 0, then the key doesn't exist or can't be opened.
	     IF (nErrCode # 0) THEN
	        RETURN .F.
	     ENDIF
	
	     nErrCode=RegSetValueEx(nKeyHandle, cValue, lpdwReserved, lpdwValueType, lpbValue, lpcbValueSize)
	     =RegCloseKey(nKeyHandle)
	     IF (nErrCode # 0) THEN
	        RETURN .F.
	     ENDIF
	  RETURN .T.
	
	  FUNCTION LongToStr
	  * This function converts a long to a string
	     PARAMETERS nLongVal
	     LOCAL nLoopVar, strReturn
	
	     strReturn = ""
	     FOR nLoopVar = 24 TO 0 STEP -8
	        strReturn = CHR(INT(nLongVal/(2^nLoopVar))) + strReturn
	        nLongVal = MOD(nLongVal, (2^nLoopVar))
	     NEXT
	  RETURN strReturn
	  * End of Code
	
	7. Run the code created in step 1. A message box appears announcing the success
	  or failure of the function. You can use regedt32.exe to verify that the value
	  was written to the registry.
	
	8. You can replace nKey, cSubKey, cValue, and nValueToWrite with your
	  information to be written to the registry.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information obtaining values from the registry, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q244675 HOWTO:Use Windows Script Host to Read, Write, Delete Registry
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbRegistry kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
