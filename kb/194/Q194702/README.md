---
layout: page
title: "Q194702: HOWTO: Locate Windows Special Folder Locations"
permalink: kb/194/Q194702/
---

## Q194702: HOWTO: Locate Windows Special Folder Locations

	Article: Q194702
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 9x and Windows NT make use of many operating system special folders.
	These folders represent specific locations for application data, users settings,
	etc. It is possible to programmatically locate these folder locations using the
	SHGetSpecialFolderPath API function.
	
	The following program displays the full special folder path to the Windows
	desktop. You can alter the program to show the full path of any of the special
	folders by passing the appropriate special folder constant to the
	SHGetSpecialFolderPath API call.
	
	This program will only run on Windows 98 or Windows 95 and Windows NT systems
	that are configured with the Windows Desktop Update. The Windows Desktop Update
	can be installed from:
	
	  http://www.microsoft.com/ie
	
	MORE INFORMATION
	================
	
	Save the following code as a program and run it to display the full path of the
	Windows Desktop special folder:
	
	  
	
	     *** Define Special Folder Constants
	     #define CSIDL_PROGRAMS                 2   &&Program Groups Folder
	     #define CSIDL_PERSONAL                 5   &&Personal Documents Folder
	     #define CSIDL_FAVORITES                6   &&Favorites Folder
	     #define CSIDL_STARTUP                  7   &&Startup Group Folder
	     #define CSIDL_RECENT                   8   &&Recently Used Documents
	                                                &&Folder
	     #define CSIDL_SENDTO                   9   &&Send To Folder
	     #define CSIDL_STARTMENU                11  &&Start Menu Folder
	     #define CSIDL_DESKTOPDIRECTORY         16  &&Desktop Folder
	     #define CSIDL_NETHOOD                  19  &&Network Neighborhood Folder
	     #define CSIDL_TEMPLATES                21  &&Document Templates Folder
	     #define CSIDL_COMMON_STARTMENU         22  &&Common Start Menu Folder
	     #define CSIDL_COMMON_PROGRAMS          23  &&Common Program Groups
	                                                &&Folder
	     #define CSIDL_COMMON_STARTUP           24  &&Common Startup Group Folder
	     #define CSIDL_COMMON_DESKTOPDIRECTORY  25  &&Common Desktop Folder
	     #define CSIDL_APPDATA                  26  &&Application Data Folder
	     #define CSIDL_PRINTHOOD                27  &&Printers Folder
	     #define CSIDL_COMMON_FAVORITES         31  &&Common Favorites Folder
	     #define CSIDL_INTERNET_CACHE           32  &&Temp. Internet Files Folder
	     #define CSIDL_COOKIES                  33  &&Cookies Folder
	     #define CSIDL_HISTORY                  34  &&History Folder
	
	     *** Initialize variables
	     cSpecialFolderPath = space(255)
	
	     *** Declare API's
	     DECLARE SHGetSpecialFolderPath IN SHELL32.DLL ;
	        LONG hwndOwner, ;
	        STRING @cSpecialFolderPath, ;
	        LONG  nWhichFolder
	
	     *** Get Special Folder Path
	     SHGetSpecialFolderPath(0, @cSpecialFolderPath, CSIDL_DESKTOPDIRECTORY)
	
	     *** Format Special Folder Path
	     cSpecialFolderPath=SubStr(RTrim(cSpecialFolderPath),1, ;
	                        Len(RTrim(cSpecialFolderPath))-1)
	
	     *** Display Special Folder Path
	     WAIT WINDOW cSpecialFolderPath
	
	Additional query words: kbVFP500 kbvfp300b kbvfp500a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
