---
layout: page
title: "Q140170: HOWTO: Read from the Windows Registry"
permalink: kb/140/Q140170/
---

## Q140170: HOWTO: Read from the Windows Registry

	Article: Q140170
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Windows API functions RegEnumValue() and RegOpenKey() to read
	values into a Visual FoxPro application from a multiple-valued key in the
	Windows registry. For single-valued registry keys (not covered in this article)
	use the RegQueryValue() API.
	
	More information about API functions in general can be found in the Win32api.hlp
	help file that comes with the Professional version of Visual FoxPro. Also, for
	information on how to write to the Windows registry, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q135398 How To Write to the Windows Registry Using API Calls
	
	NOTE: Reading from the Windows registry applies to the Windows NT and Windows 95
	operating systems. Use GetProfileString and WriteProfileString to read and write
	to the appropriate .ini files in the Windows for Workgroups and Windows 3.1
	operating systems.
	
	MORE INFORMATION
	================
	
	General Procedure for Reading Values from the Registry
	------------------------------------------------------
	
	1. Declare and initialize the variables required for the API function.
	
	2. Declare the API functions using the DECLARE DLL Visual FoxPro function.
	
	3. Call the RegOpenKey() API to open the registry key.
	
	4. Call the RegEnumValue() from a loop, looping until the correct value string
	  is found for the item you want.
	
	5. Reference the variables filled by the API function.
	
	Sample Code
	-----------
	
	NOTE: In some cases the Registry will not have all the settings for Visual
	FoxPro. Before running this code example, run REGEDIT for Windows 95 and make
	sure that the TMPFILES entry is there. If it is not there, this code example
	will go into an endless loop. On the Tools menu, click Options, and then click
	Set as Default. This will force the entries into the registry.
	
	The following code reads the setting for the TMPFILES value from the
	Software\Microsoft\VisualFoxPro\3.0\Options\TMPFILES key in the Windows
	registry.
	
	  ***
	  ***BEGIN PROGRAM CODE
	  ***
	  nKeyHandle=0  && Holds the handle to the key opened by RegOpenKey
	
	  iValue=0  && Index of value to query
	  lpszValue=space(255)  && Receives the name of the value
	
	  * In this example, you are looking for TMPFILES.
	  lpcchValue=255
	  * This buffer tells the API the size of the lpszValue buffer.
	  * If buffer is not large enough, the lpszValue buffer will be blank.
	  lpdwType=space(255) && Receives the type code for the value entry
	  lpbData=space(255) && Receives the data for the value entry
	
	  * In this example, it will contain the path to the TMPFILES.
	
	  lpcbData=255  && This buffer tells the API the size of the lpbData buffer
	
	  * If lpbData is not large enough, the buffer will be blank.
	
	  Declare RegOpenKey in ADVAPI32.DLL INTEGER, STRING, INTEGER @nKeyHandle
	
	  Declare RegEnumValue in ADVAPI32.DLL INTEGER nKeyHandle, INTEGER iValue,;
	     STRING @lpszValue, INTEGER @lpcchValue, INTEGER, STRING @lpdwType, ;
	     STRING @lpbData, INTEGER @lpcbData
	
	  ** The number for the HKey_Current_User (the first parameter in RegOpenKey)
	  ** is found in the Winreg.h header file included with Microsoft Visual C++
	
	  =RegOpenKey(2147483649,"Software\Microsoft\VisualFoxPro\3.0\Options",;
	  @nKeyHandle)
	
	  do while alltrim(lpszValue)!="TMPFILES"  &&loops through the key looking
	
	  * for TMPFILES
	       lpszValue=space(255) &&need to reset the buffers
	       lpcchValue=255
	       lpdwType=space(255)
	       lpbData=space(255)
	       lpcbData=255
	       =RegEnumValue(nKeyHandle,iValue,@lpszValue,@lpcchValue,0,;
	  @lpdwType,@lpbData,@lpcbData)
	       ?alltrim(lpbData)+ ' '+alltrim(lpszValue)
	       iValue=iValue+1
	  enddo
	
	  ** END PROGRAM CODE **
	
	Additional query words: Foxuser temp resource spellchk
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500
	
	=============================================================================
	
