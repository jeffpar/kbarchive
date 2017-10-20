---
layout: page
title: "Q237454: HOWTO: Associate File Extensions with a Custom Fox App"
permalink: /kb/237/Q237454/
---

## Q237454: HOWTO: Associate File Extensions with a Custom Fox App

{% raw %}

	Article: Q237454
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0,95,98,98 Second Edition; winnt:4.0
	Operating System(s): 
	Keyword(s): kbAPI kbOSWinNT kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbOSWin95 kbOSWin98 kbGr
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 98 Second Edition 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes, developers may want to associate certain file extensions with a
	custom Visual FoxPro application. It may be desirable to perform certain actions
	on certain file types. For instance, the developer may want to run .ZZ0 files
	and edit .ZZ1 files. The following example demonstrates how to do this from
	Visual FoxPro using API calls.
	
	
	MORE INFORMATION
	================
	
	NOTE: Developers will need Visual FoxPro 6.0 with Visual Studio 6.0 Service Pack
	3 (VFP6_SP3) in order to RUN the custom files using the method outlined here.
	This is because the ability to compile programs through custom Visual FoxPro
	applications was introduced in VFP6_SP3.
	
	Setting Up the Associations
	---------------------------
	
	1. Create a new text file on the Windows desktop with the following code inside.
	  Save the file as RUNTEST.TXT:
	
	  MESSAGEBOX("HELLO!",48,"Associated Via API")
	
	2. Change the extension of this file from .TXT to .ZZ0. Click Yes when warned
	  that the file may become unusable.
	
	3. Make a copy of RUNTEST.ZZ0 on the Windows desktop and name the copy
	  MODITEST.ZZ1.
	
	  NOTE: The icon for these files should change to the Windows flag and
	  double-clicking it should produce a dialog box titled "OPEN WITH." If this
	  occurs, these file extensions are not associated with any application on the
	  machine. If the dialog box titled OPEN WITH does not appear, there is an
	  application installed that is associated with these extensions. DO NOT RUN
	  THIS SAMPLE if this behavior occurs! Doing so may damage the file
	  associations on the machine.
	
	4. Open Visual FoxPro and copy the following code into a new program:
	
	  LOCAL nResult,nDisplay, cKeyName, cKeyValue, nKeyLen
	  #DEFINE SECURITY_ACCESS_MASK 983103     && SAM value KEY_ALL_ACCESS
	  #DEFINE SHCNE_ASSOCCHANGED   0x08000000
	  #DEFINE HKEY_CLASSES_ROOT    -2147483648
	  #DEFINE SHCNF_IDLIST         0x0000
	
	  DECLARE RegCreateKeyEx IN ADVAPI32.DLL;
	  	INTEGER,STRING,INTEGER,STRING,INTEGER,INTEGER,INTEGER,INTEGER @, INTEGER @
	
	  DECLARE RegSetValueEx IN ADVAPI32.DLL;
	  	INTEGER,STRING,INTEGER,INTEGER,STRING,INTEGER
	
	  DECLARE RegCloseKey IN ADVAPI32.DLL	INTEGER nHKey
	
	  DECLARE SHChangeNotify IN Shell32.DLL INTEGER, INTEGER, STRING, STRING
	
	  *~ This creates a Root entry called "aaApp."
	  nResult=0
	  nDisplay=0
	  cKeyName = "aaAPP"
	  cKeyValue = "My Application"
	  nKeyLen = LEN(cKeyValue)
	  RegCreateKeyEx(HKEY_CLASSES_ROOT,cKeyName ,0,"REG_SZ", ;
	  	0,SECURITY_ACCESS_MASK,0,@nResult,@nDisplay)
	  RegSetValueEx(nResult,"",0,1,cKeyValue ,nKeyLen)
	  RegCloseKey(@nResult)
	
	  *~ This creates a Root entry called .ZZ0 associated with "aaApp." 
	  nResult= 0
	  nDisplay = 0
	  cKeyName = ".ZZ0"
	  cKeyValue = "aaApp"
	  nKeyLen = LEN(cKeyValue)
	  RegCreateKeyEx(HKEY_CLASSES_ROOT,cKeyName,0,"REG_SZ",;
	  	0,SECURITY_ACCESS_MASK,0,@nResult,@nDisplay)
	  RegSetValueEx(nResult,"",0,1,cKeyValue,nKeyLen)
	  RegCloseKey(@nResult)
	
	  *~ This creates a Root entry called .ZZ1 associated with "aaApp." 
	  nResult= 0
	  nDisplay = 0
	  cKeyName = ".ZZ1"
	  cKeyValue = "aaApp"
	  nKeyLen = LEN(cKeyValue)
	  RegCreateKeyEx(HKEY_CLASSES_ROOT,cKeyName,0,"REG_SZ",;
	  	0,SECURITY_ACCESS_MASK,0,@nResult,@nDisplay)
	  RegSetValueEx(nResult,"",0,1,cKeyValue,nKeyLen)
	  RegCloseKey(@nResult)
	
	  *~ This sets the command line for files associated with "aaApp." 
	  *~ The path will need to be adjusted.
	  nResult= 0
	  nDisplay = 0
	  cKeyName = "aaApp\shell\open\command"
	  *~ ADJUST THIS PATH TO REFLECT YOUR DIRECTORY STRUCTURE.
	  *~
	  cKeyValue = "C:\WINDOWS\Desktop\testexe.exe %1"
	  *~
	  *~
	  nKeyLen = LEN(cKeyValue)
	  RegCreateKeyEx(HKEY_CLASSES_ROOT,cKeyName,0,"REG_SZ",;
	  	0,SECURITY_ACCESS_MASK,0,@nResult,@nDisplay)
	  RegSetValueEx(nResult,"",0,1,cKeyValue,nKeyLen)
	  RegCloseKey(@nResult)
	
	  *~ Code to refresh icons after association.
	  SHChangeNotify(SHCNE_ASSOCCHANGED, SHCNF_IDLIST, NULL, NULL)<BR/>
	  CLEAR DLLS
	
	5. Adjust the following line so the path reflects the DESKTOP directory on the
	  current machine (TESTEXE.EXE will be built later):
	
	  cKeyValue = "C:\WINDOWS\Desktop\testexe.exe %1"
	
	6. Save the program as "KB_ASSOC.PRG."
	
	Building the Test Executable
	----------------------------
	
	1. Open a new project in Visual FoxPro.
	
	2. Create a new program through the Code tab with the following code. Save the
	  program as Main.prg:
	
	  *~ Double-clicking the file passes its full path to the
	  *~ associated program (this .EXE).
	  LPARAMETER cFileName
	  #DEFINE MB_OK                   0       && OK button only
	  #DEFINE MB_ICONINFORMATION      64      && Information icon
	  SET SYSMENU OFF
	  _SCREEN.CAPTION = "Test Executable"
	
	  *~ Check extension of passed file name.
	  DO CASE
	  	CASE UPPER(RIGHT(cFileName,3)) = "ZZ0"
	  *~ This code checks for VFP 6 SP3.
	  *~ Exits if anything but.
	     IF !("06.00.8492.00" $ ALLT(VERS()))
	        MESSAGEBOX("Not using VFP6 SP3. Needed to 'COMPILE' in an .EXE.", ;
	           MB_ICONINFORMATION + MB_OK,"Exiting")
	        RETURN
	     ENDIF
	  * File extension is .ZZO and you are in VFP6 SP3. Compile and run.
	     COMPILE (cFileName)
	     DO (cFileName)
	     CASE UPPER(RIGHT(cFileName,3)) = "ZZ1"
	  *~ File is .ZZ1, so modify it. Not VFP6SP3 dependant.
	        MODI COMM (cFileName)
	     ENDCASE
	
	3. Associate a custom icon with the project and build the project into an
	  executable named TESTEXE.EXE. Save it to the Windows Desktop.
	
	Running the Test
	----------------
	
	1. Inside Visual FoxPro, run the "KB_ASSOC.PRG" program created earlier. Notice
	  that the MODITEST.ZZ0 and RUNTEST.ZZ1 files on the Windows desktop have
	  changed appearance: they now display the icon of the TESTEXE.EXE or a Visual
	  FoxPro icon.
	
	2. Go to the Windows desktop and double-click the RUNTEST.ZZ0. The TEXTESE.EXE
	  will start and the "HELLO" message box will appear.
	
	3. Now, double-click the MODITEST.ZZ1 file. The TESTEXE.EXE will start and the
	  file will be opened for modification. Close the edit window to exit.
	
	Cleaning Up
	-----------
	
	1. Back inside Visual FoxPro, copy the following code into a new program file.
	  Save the program as CLEANUP.PRG:
	
	  *!* After the demo has run, use this program to remove the registry keys it created.
	  #DEFINE SHCNE_ASSOCCHANGED   0x08000000
	  #DEFINE HKEY_CLASSES_ROOT    -2147483648
	  #DEFINE SHCNF_IDLIST         0x0000
	  FILE_KEY1 = ".ZZ0"
	  FILE_KEY2 = ".ZZ1"
	  EXE_KEY0 = "aaAPP\shell\open\command"
	  EXE_KEY1 = "aaAPP\shell\open"
	  EXE_KEY2 = "aaAPP\shell"
	  EXE_KEY3 = "aaAPP"
	
	  DECLARE RegDeleteKey IN ADVAPI32.DLL INTEGER, STRING
	  DECLARE SHChangeNotify IN Shell32.DLL INTEGER, INTEGER, STRING, STRING
	
	  RegDeleteKey(HKEY_CLASSES_ROOT,FILE_KEY1)
	  RegDeleteKey(HKEY_CLASSES_ROOT,FILE_KEY2)
	  RegDeleteKey(HKEY_CLASSES_ROOT,EXE_KEY0)
	  RegDeleteKey(HKEY_CLASSES_ROOT,EXE_KEY1)
	  RegDeleteKey(HKEY_CLASSES_ROOT,EXE_KEY2)
	  RegDeleteKey(HKEY_CLASSES_ROOT,EXE_KEY3)
	  SHChangeNotify(SHCNE_ASSOCCHANGED, SHCNF_IDLIST, NULL, NULL)
	
	  CLEAR DLLS
	
	2. Run CLEANUP.PRG to delete the registry entries created earlier. The icons of
	  the two desktop files should revert back to the Windows flag.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbOSWinNT kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbOSWin95 kbOSWin98 kbGrpDSFox kbDSupport 
	Technology        : kbOSWin98 kbOSWin95 kbVFPsearch kbAudDeveloper kbOSWin98SE kbOSWinSearch kbOSWinNT400 kbVFP500 kbVFP600 kbVFP500a kbOSWinNTSearch
	Version           : WINDOWS:5.0,5.0a,6.0,95,98,98 Second Edition; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
