---
layout: page
title: "Q80281: PRB: Combining Multiple Compiled Resource Files Fails"
permalink: /kb/080/Q80281/
---

## Q80281: PRB: Combining Multiple Compiled Resource Files Fails

{% raw %}

	Article: Q80281
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application is unable to load some of its resources, while other resources
	load properly.
	
	CAUSE
	=====
	
	Several small compiled resource (RES) files have been combined using the MS-DOS
	command "COPY /b".
	
	RESOLUTION
	==========
	
	Use the #include directive to combine the files at the source level.
	
	MORE INFORMATION
	================
	
	The Resource Compiler that was shipped with the Microsoft Windows Software
	Development Kit (SDK) versions 2.x ca not handle large resource files because of
	inherent memory limitations. To work around these limitations, it is recommended
	that programmers compile the resources into small RES files, and combine these
	files using the MS-DOS COPY /b command.
	
	The Resource Compiler shipped with version 3.x of the Windows SDK has been
	enhanced to handle resource files much larger than its Windows 2.x counterpart.
	The format of the compiled resource files in Windows 3.x does not support
	concatenation of RES files.
	
	If an application has a large number of resources, even the version 3.x Resource
	Compiler can run out of memory. If this occurs, modify the design of the
	application to use a resource-only dynamic-link library (DLL). The following
	three steps outline the required process to perform this type of functionality:
	
	1. Use the Resource Compiler to create a resource-only DLL that contains some of
	  the application's resources. See the note below regarding resource-only DLLs
	  under Windows 3.x.
	
	2. In the application, load the resource library using the LoadLibrary function.
	
	3. Use the LoadBitmap, LoadMenu, and so forth, functions to load resources from
	  the DLL as required.
	
	Under Windows 3.x, resource-only DLLs require a Windows exit procedure (WEP). The
	WEP must be exported in the DEF file and the export must have the RESIDENTNAME
	attribute. Place the code for the WEP into a FIXED code segment. The source code
	for a WEP follows:
	
	     int far pascal WEP(int NotUsed)
	        {
	        return 1;
	        }
	
	The "far" and "pascal" declarators are in lowercase to avoid having to include
	the WINDOWS.H header file.
	
	Additional query words: 3.00 3.10 dialog icon menu bitmap cursor font rcdata stringtable
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
