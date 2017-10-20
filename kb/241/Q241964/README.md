---
layout: page
title: "Q241964: HOWTO: Localize a Windows 2000 Migration DLL"
permalink: /kb/241/Q241964/
---

## Q241964: HOWTO: Localize a Windows 2000 Migration DLL

{% raw %}

	Article: Q241964
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbsetup kbmigrate kbOSWin2000 kbSDKWin32 kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDSupp
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Win32 Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes two methods for localizing a Windows 2000 migration DLL
	file. It also describes using Microsoft Visual C++ to localize string tables in
	the Resource Editor.
	
	MORE INFORMATION
	================
	
	If there are many differences between multiple language versions of an
	application, a separate migration DLL file can be created to migrate each
	language version. In the QueryVersion() function, the migration DLL file should
	check whether that specific language version of the application is installed on
	the system. It should only return ERROR_SUCCESS if the targeted application is
	installed.
	
	The second method involves one migration DLL that detects and migrates multiple
	language versions of an application. It is important to consider the use of the
	CodePageArray parameter in the QueryVersion function. The CodePageArray
	parameter points to an array that contains all of the code pages supported by
	the migration DLL. The following example specifies that the migration DLL only
	supports languages that fall into the US (ANSI) code page 1252:
	
	  INT g_CodePageArray[] = {1252,-1};
	
	  LONG CALLBACK QueryVersion(LPCSTR *ProductID, LPUINT DllVersion,
	     LPINT *CodePageArray, LPCSTR *ExeNamesBuf, PVENDORINFO *VendorInfo)
	  {
	     ...
	     *CodePageArray  = g_CodePageArray;
	     ...
	  }
	
	When using the CodePageArray parameter, consider whether your application might
	be installed on a system with a different-language operating system. For
	example, is it likely that the English version of the application could be
	installed on a computer running Russian Windows 95 or 98? If so, using the
	CodePageArray parameter as shown above might prevent this valid English
	installation from being migrated, since the Cyrillic code page has not been
	specified.
	
	An alternative is to return NULL for CodePageArray. This causes Windows 2000
	Setup to call your migration DLL regardless of the user's language setting. It
	is then the responsibility of the migration DLL to determine at run time whether
	any of the targeted language versions of the application are installed.
	
	Using Visual C++ and Multiple Language Resource Scripts
	-------------------------------------------------------
	
	String tables are an excellent way to store localized strings. The Resource
	Editor in Visual C++ versions 5.0 and 6.0 allows you to maintain multiple
	language copies of the same string table. You can then let the operating system
	select a string that matches the current regional settings by using the
	LoadString API. Or you can choose to use the following low-level APIs:
	FindResourceEx, LoadResource, and LockResource.
	
	To localize a string table in Visual C++ 5.0 or 6.0, use the following steps:
	
	1. Open the resource script (.RC) containing the string tables that you want to
	  localize.
	
	2. Select the string table in the resource tree.
	
	3. On the Insert menu, click Resource Copy.
	
	4. In the Insert Resource Copy dialog box, select the desired language.
	
	5. Localize the strings for this new string table.
	
	REFERENCES
	==========
	
	For more information on Migration DLLs, see following in the MSDN Online Library
	(http://msdn.microsoft.com/library/default.htm):
	
	  Platform SDK; Management Services; Setup; Migration-Extension Interface
	
	For a list of code page identifiers, see following in the MSDN Online Library
	(http://msdn.microsoft.com/library/default.htm):
	
	  Platform SDK; Base Services; International Features; Unicode and Character
	  Sets; Unicode and Character Set Reference; Unicode and Character Set
	  Constants; Code-Page Identifiers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbmigrate kbOSWin2000 kbSDKWin32 kbMigWin9xtoWin2k kbMigrationDLL kbFAQ kbDSupport kbGrpDSTools kbMigrationDLLFAQ 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin32SDKSearch kbAudDeveloper kbSDKSearch kbWinAdvServSearch kbWin32sSearch
	Version           : WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
