---
layout: page
title: "Q271733: HOWTO: Write a REG_EXPAND_SZ to the Registry"
permalink: kb/271/Q271733/
---

## Q271733: HOWTO: Write a REG_EXPAND_SZ to the Registry

	Article: Q271733
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
	
	This article describes how to write a REG_EXPAND_SZ registry value. According to
	the Microsoft Developer's Network (MSDN), the REG_EXPAND_SZ registry value
	is...
	
	  "... a null-terminated string that contains unexpanded references to
	  environment variables (for example, "%PATH%"). It will be a Unicode or ANSI
	  string depending on whether you use the Unicode or ANSI functions."
	
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
	are running a Microsoft Windows 95-based, Microsoft Windows 98-based, or
	Microsoft Millennium-based computer, you need to use the Regedit.exe file
	instead of the Regedt32.exe file.
	
	NOTE: This article uses a registry key that is created just for testing purposes.
	This registry key should be deleted when you complete testing.
	
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
	  Value:      %Temp%
	
	6. Quit the Registry Editor.
	
	7. In Microsoft Visual FoxPro, create a program and enter the following code:
	
	  *Start of Code
	  #DEFINE HKEY_CLASSES_ROOT        -2147483648
	  #DEFINE HKEY_CURRENT_USER        -2147483647
	  #DEFINE HKEY_LOCAL_MACHINE       -2147483646
	  #DEFINE HKEY_USERS               -2147483645
	
	  LOCAL nKey, cSubKey, cValue, lSuccess, cExpandPart, cNonExpandPart
	  nKey = HKEY_LOCAL_MACHINE
	  cSubKey = "Software\VfpRegTest"
	  cValue = "TestREG_EXPAND_SZ"
	  cExpandPart = "WINDIR"
	  cNonExpandPart = "\System"
	
	  lSuccess = WriteREG_EXPAND_SZ(nKey, cSubKey, cValue, cExpandPart, cNonExpandPart)
	  IF (lSuccess) THEN
	     =MESSAGEBOX("Value was Written to the Registry.")
	  ELSE
	     =MESSAGEBOX("Value was not Written to the Registry.")
	  ENDIF
	
	  FUNCTION WriteREG_EXPAND_SZ
	  * This function writes a REG_EXPAND_SZ value to the registry. It will return
	  * True if successful and False if not.
	
	     PARAMETERS  nKey, cSubKey, cValue,  cExpandPart, cNonExpandPart
	     * nKey The root key to open. It can be any of the constants defined below
	     *  #DEFINE HKEY_CLASSES_ROOT      -2147483648
	     *  #DEFINE HKEY_CURRENT_USER      -2147483647
	     *  #DEFINE HKEY_LOCAL_MACHINE     -2147483646
	     *  #DEFINE HKEY_USERS             -2147483645
	     * cSubKey The SubKey to open.
	     * cValue The value that is going to be written.
	     * cExpandPart The expanded part of the string written the registry.
	     * cNonExpandPart The part of the string that isn't expanded.
	
	     * Constants that are needed for Registry functions
	     #DEFINE REG_EXPAND_SZ    2
	
	     * WIN 32 API functions that are used
	     DECLARE Integer RegOpenKey IN Win32API ;
	        Integer nHKey, String @cSubKey, Integer @nResult
	     DECLARE Integer RegSetValueEx IN Win32API ;
	        Integer hKey, String lpszValueName, Integer lpdwReserved,;
	        Integer lpdValueType, String lpbValue, Integer lpcbValueSize
	     DECLARE Integer RegCloseKey IN Win32API Integer nHKey
	        
	     * Local variables used
	     LOCAL nErrCode       && Error Code returned from Registry functions
	     LOCAL nKeyHandle     && Handle to Key that is opened in the Registry
	     LOCAL lpdwValueType  && Type of Value that we are writing
	     LOCAL lpbValue       && The data stored in the value
	     LOCAL lpcbValueSize  && Size of the variable
	     LOCAL lpdwReserved   && Reserved Must be 0
	     
	     * Initialize the variables
	     nKeyHandle = 0
	     lpdwReserved = 0           
	     lpdwValueType = REG_EXPAND_SZ
	
	     nErrCode = RegOpenKey(nKey, cSubKey, @nKeyHandle)
	     * If the error code isn't 0, then the key doesn't exist or can't be opened.
	     IF (nErrCode # 0) THEN
	        RETURN .F.
	     ENDIF
	
	     lpbValue = "%" + ALLTRIM(cExpandPart) + "%" + ALLTRIM(cNonExpandPart)
	     lpcbValueSize = LEN(lpbValue)
	    
	     nErrCode=RegSetValueEx(nKeyHandle, cValue, lpdwReserved, @lpdwValueType, @lpbValue, @lpcbValueSize)
	     
	     =RegCloseKey(nKeyHandle)
	     * Check to see if we were successful
	     IF (nErrCode # 0) THEN
	        RETURN .F.
	     ENDIF
	
	  RETURN .T.
	  * End of Code 
	
	8. Run the code that you created in step 7. A message box appears that displays
	  the status of the function. If the function is successful, the message box
	  text states:
	
	  Value was Written to the Registry.
	
	If the function is unsuccessful, the text states:
	
	  Value was not Written to the Registry.
	
	9. You can replace the nKey, cSubKey, cExpandPart, and cNonExpandPart with your
	  information.
	
	REFERENCES
	==========
	
	For additional information about obtaining values from the registry, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q244675 HOWTO:Use Windows Script Host to Read, Write, Delete Registry
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words: Regedt32 Regedit
	
	======================================================================
	Keywords          : kbAPI kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
