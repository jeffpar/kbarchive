---
layout: page
title: "Q170978: PRB: MFC Browser Library (MFC.BSC) Can't Find MFC Source Files"
permalink: /kb/170/Q170978/
---

## Q170978: PRB: MFC Browser Library (MFC.BSC) Can't Find MFC Source Files

{% raw %}

	Article: Q170978
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC500 kbVC600 kbVS97 kbVS600 kbGrpDSMFCATL
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MFC browser library (MFC.BSC) that ships with Visual C++ has problems
	finding the target source code files, requiring you to enter the directory
	path.
	
	Visual C++ may also load the wrong version of source files, depending on where
	different versions of Visual C++ are loaded. For example, if the Visual C++ 4.0
	source files are loaded on E: drive, they will be found instead of the Visual
	C++ 5.0 files.
	
	CAUSE
	=====
	
	These problems are caused by different directory paths embedded in the MFC.BSC
	file and the actual location of these files on your hard disk. For the browser
	to work properly, these directory paths must be the same.
	
	The directory path that the MFC browse library was created on (E:\msdev\mfc\src)
	is different from the default installation path for the MFC source code
	(C:\Program Files\DevStudio\Vc\mfc\src). The browser can find the files if the
	drive letter is different. However, it fails to find the target files and
	consequently prompts for the target directory if the paths are different.
	
	RESOLUTION
	==========
	
	You can work around this by rebuilding the MFC browser library (MFC.BSC).
	
	Steps to Rebuild the MFC Browser Library
	----------------------------------------
	
	1. Verify that you have around 400 megabytes for Visual C++ 5.0 or 500 megabytes
	  for Visual C++ 6.0 of free disk space on the drive where Visual C++ is
	  installed. This much space is required to build the browse information. 358
	  megabytes for Visual C++ 5.0 or 459 megabytes for Visual C++ 6.0 that are
	  used by .SBR files can be freed once the browser database has been built.
	  Temporary files require the additional space. Temporary files are
	  automatically deleted.
	
	2. From a Command Prompt, run the Vcvars32.Bat, which should be in the
	  <drive>:<DevStudio directory path>\vc\bin, to set the proper
	  environment variables. Change to the <drive>:<Devstudio directory
	  path>\Vc\Mfc\Src directory, and build the browse information by running
	  the nmake on the makefile:
	
	        nmake browseonly=1 no_pch=1 no_pdb=1 dll=2
	
	  This creates NafxeWD.bsc file and a subdirectory called $DLLD.W with .SBR
	  files.
	
	3. Provided you do not plan to rebuild the browse database frequently, remove
	  all files in the $DLLD.W directory, and then remove the directory itself. The
	  intermediate .SBR files occupy roughly 358 megabytes for Visual C++ 5.0 or
	  459 megabytes for Visual C++ 6.0 of disk space and are not required to use
	  the browser.
	
	4. If you want to, you can change the new browse file from NafxeWD.BSC to
	  MFC.BSC.
	
	To use the browser file, start Visual C++. On the File menu, click Open, and
	choose the .BSC file that you just created. On the Tools menu, click Source
	Browser. The Browser window appears, and then you can look up any of the MFC
	functions or data variables.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information regarding the building of the MFC.BSC library, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q98656INFO: Creating a Browser Library for the Foundation Classes
	
	  Q138326 HOWTO: Create a Browser Library for the Common Control Classes
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Mike
	Francis, Microsoft Corporation
	
	
	Additional query words: mfc browser mfc.bsc
	
	======================================================================
	Keywords          : kbMFC kbVC500 kbVC600 kbVS97 kbVS600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
