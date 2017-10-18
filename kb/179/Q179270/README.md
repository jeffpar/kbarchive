---
layout: page
title: "Q179270: FIX: Warnings with RTTI and Automatic Precompiled Headers"
permalink: kb/179/Q179270/
---

## Q179270: FIX: Warnings with RTTI and Automatic Precompiled Headers

	Article: Q179270
	Product(s): Microsoft C Compiler
	Version(s): 2000,5.0,6.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbVC500bug kbVC600bug kbDSupport kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0, used with:
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows NT 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Run-Time Type Information (RTTI) is selected in the C/C++ project settings
	and if you have selected "Automatic use of precompiled headers" for all files,
	including Stdafx.cpp, you may get several warning messages such as the following
	example:
	
	  BSCMAKE: warning BK4503 : minor error in .SBR file '.\Debug\MainFrm.sbr'
	  ignored
	
	RESOLUTION
	==========
	
	You can use one of the following two resolutions:
	
	- Click Settings on the Project menu to view the Project Settings dialog box.
	  On the C/C++ tab, select C++ Language from the Category list. Clear "Enable
	  Run-Time Type Information (RTTI)" and select Rebuild All from the Build
	  menu.
	
	  -or-
	
	- From the left side of the Project Settings dialog box, expand the project
	  tree and select the Stdafx.cpp file. On the C/C++ tab, select Precompiled
	  Headers from the Category list box. Select "Create precompiled header
	  file(.pch)" for the Stdafx.cpp file and type stdafx.h in the box labeled
	  "Through header."
	
	  From the left side of the Project Settings dialog box, select the project. On
	  the C/C++ tab, select Precompiled Headers from the Category list box. Select
	  "Use precompiled header file(.pch)" for the Stdafx.cpp file, type stdafx.h in
	  the box labeled "Through header," and select Rebuild All from the Build menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a default Custom AppWizard .exe project.
	
	2. Select your project in the ClassView window and click Settings on the Project
	  menu. On the C/C++ tab, choose C++ Language from the Category list. Select
	  "Enable Run-Time Type Information (RTTI)."
	
	3. Select "Automatic use of precompiled headers" from the Precompiled Header
	  category of the C/C++ tab in the Project Settings dialog box for all the .cpp
	  files in the project, including the Stdafx.cpp file.
	
	4. Select "Generate browse info" from the General category of the C/C++ tab in
	  the Project Settings dialog box.
	
	5. Select "Build browse info file" on the Browse Info tab in the Project
	  Settings dialog box and rebuild the project to see the warning messages
	  described earlier.
	
	You may get the warning messages when performing a Build if the precompiled
	header was previously created without browse information. Performing a Rebuild
	All of the project resolves this warning; otherwise, follow the resolution
	provided.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbVC500bug kbVC600bug kbDSupport kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :2000,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
