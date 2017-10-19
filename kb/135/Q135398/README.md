---
layout: page
title: "Q135398: HOWTO: Write to the Windows Registry Using API Calls"
permalink: /kb/135/Q135398/
---

## Q135398: HOWTO: Write to the Windows Registry Using API Calls

	Article: Q135398
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can write information directly to the Windows 95, Windows NT, or Win32
	Registry. The Windows Registry is the suggested place for 32-bit applications to
	store application information. Previous versions of Windows used .INI files for
	this purpose. This article gives a brief description of the Windows Registry and
	the steps necessary to write information to it programatically.
	
	MORE INFORMATION
	================
	
	The following information comes from Chapter 10 of the Windows NT Resource Kit:
	
	  The Registry is analogous to the .INI files used under Windows 3.1, with each
	  key in the Registry similar to a bracketed heading in an .INI file, and
	  entries under the heading similar to values in the Registry. However,
	  Registry keys can contain subkeys, while .INI files do not support nested
	  headings. Registry values can also consist of executable code, rather than
	  the simple strings representing values in .INI files. And individual
	  preferences for multiple users of the same computer can be stored in the
	  Registry, which is not possible with .INI files.
	
	Windows NT Registry
	-------------------
	
	The Registry is a database of keys and values. The Windows NT Registry contains
	four primary keys:
	
	HKEY_CLASSES_ROOT   - File associations and DDE/OLE actions.
	
	HKEY_LOCAL_MACHINE  - Global information on the state of the local
	                     computer.
	
	HKEY_USERS          - Configuration information about each individual user
	                     of the computer and the DEFAULT entry.
	
	HKEY_CURRENT_USER   - specific key within HKEY_USERS that stores
	                     information for the currently active user.
	
	Windows 95 Registry
	-------------------
	
	Windows 95 adds a couple more primary keys:
	
	HKEY_CURRENT_CONFIG - Hardware configuration for devices currently attached
	                     and installed on the computer.
	
	HKEY_DYN_DATA       - System Monitor data for performance settings and
	                     statistics.
	
	It is good idea for applications to store version specific information in the
	HKEY_LOCAL_MACHINE\SOFTWARE branch in this format:
	
	  SOFTWARE\Vendor\product\version
	
	The example code in this article shows one way to register an application name
	and version.
	
	Win32s Registry
	---------------
	
	The Win32s Registry is limited to only one hive, HKEY_CLASSES_ROOT, and all keys
	are children of that hive. Any information placed in the Win32s Registry should
	be placed in a child key of HKEY_CLASSES_ROOT instead of HKEY_CLASSES_ROOT (used
	in Windows 95 and Windows NT).
	
	Sample Code
	-----------
	
	The following code illustrate the ability to create a new registry key by using
	the Windows API RegCreateKeyEx() and to assign a value to that key by using
	RegSetValueEx. These 32bit functions are first prototyped using the DECLARE
	command; then they are available to be called directly. For more information,
	please search for DECLARE - DLL in the Help menu.
	
	NOTE: Some constants are declared with definitions taken from the appropriate
	Microsoft Visual C++ header files.
	
	  * REGISTRY.PRG
	  * This code writes information to the HKEY_LOCAL_MACHINE\SOFTWARE key.
	  * It creates a key called MYAPPS, and a value name called AppName that
	  * contains the value "SuperApp 1.0"
	
	  PUBLIC RESULT,DISPLAY
	  RESULT=0
	  DISPLAY=0
	  #DEFINE HKEY_LOCAL_MACHINE 2147483650   && (HKEY) 0x80000002
	  #DEFINE SECURITY_ACCESS_MASK 983103     && SAM value KEY_ALL_ACCESS
	
	  DECLARE RegCreateKeyEx IN ADVAPI32.DLL;
	  INTEGER,STRING,INTEGER,STRING,INTEGER,INTEGER,INTEGER,INTEGER @, INTEGER @
	  DECLARE RegSetValueEx IN ADVAPI32.DLL;
	  INTEGER,STRING,INTEGER,INTEGER,STRING,INTEGER
	
	  ?RegCreateKeyEx(HKEY_LOCAL_MACHINE,"SOFTWARE\MYAPPS",0,"REG_SZ",;
	  0,SECURITY_ACCESS_MASK,0,@RESULT,@DISPLAY)  && Returns .T. if successful
	  ?RESULT                                     && Returns the key handle
	  ?DISPLAY                                    && Returns one of 2 values:
	                                              && REG_CREATE_NEW_KEY = 1
	                                              && REG_OPENED_EXISTING_KEY = 2
	  ?RegSetValueEx(RESULT,"AppName",0,1,"SuperApp 1.0",13)
	
	Notes
	-----
	
	You can run the Registry Editor to see the registry interface and check that your
	key was created successfully in the HKEY_LOCAL_MACHINE\SOFTWARE section. In
	Windows NT, you can find it in the Winnt\System32\regedt32.exe directory. In
	Windows 95, you can find it in the Win95\Regedit.exe directory.
	
	For more information, please see the Win32API Help file shipped with Visual
	FoxPro. Search for RegCreateKeyEx() and RegSetValueEx() as well as the Reg.h and
	Winnt.h header files to find some of the constant definitions used in the code.
	To remove these values, you can use the RegDeleteKey() and RegDeleteValue()
	functions.
	
	Additional query words: Declare DLL API
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
