---
layout: page
title: "Q139457: PRB: Error Converting Visual C++ OLE Controls from 2.x to 4.0"
permalink: kb/139/Q139457/
---

## Q139457: PRB: Error Converting Visual C++ OLE Controls from 2.x to 4.0

	Article: Q139457
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0; :
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbCtrlCreate kbMFC kbVC200 kbVC400 kbGrpDSMFCATL kbNoUpdate
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0 
	- Microsoft OLE Control Developer's Kit (CDK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the following procedure to convert a project built with the CDK
	that shipped with Visual C++ 2.x to Visual C++ 4.0, the following error
	appears:
	
	  Linking...
	  LINK : fatal error LNK1104: cannot open file "ocs30d.lib"
	  Error executing link.exe.
	  circ1.ocx - 1 error(s), 0 warning(s)
	
	Conversion Procedure
	--------------------
	
	1. On the File menu, click Open Workspace.
	
	2. Browse to the project directory.
	
	3. List files of type *.mak.
	
	4. Select the 32-bit project file.
	
	5. Click Rebuild All. After it tries to link, the following error message will
	  appear:
	
	  Linking...
	  LINK : fatal error LNK1104: cannot open file "ocs30d.lib"
	  Error executing link.exe.
	  circ1.ocx - 1 error(s), 0 warning(s)
	
	  The actual .lib file that is displayed will be one of four variants of the
	  Ocs30*.lib file depending on how the project is being built.
	
	CAUSE
	=====
	
	The reason that the specified file cannot be found is that it no longer exists
	in Visual C++ version 4.0. Because the Ocs30* libraries were variants of the MFC
	libraries, the functionality was merged with the Mfc40*.dll. This had several
	advantages, including better code reuse as one MFC .dll file can be used for
	both the OLE Control container and the OLE control. The problem is that the
	ocs30*.lib file is included within the Settings, Link page thereby giving the
	error Ocs30*.lib cannot be found.
	
	RESOLUTION
	==========
	
	Change the settings so that Visual C++ version 4.0 is no longer trying to link
	in the Ocs30*.lib file. This can be done by following these steps:
	
	1. On the Build menu, click Settings, and then click the Link tab.
	
	2. Click the first of the four project build options under Settings For.
	
	3. Delete Ocs30d.lib from the edit field under Object/Library Modules.
	
	4. Click each of the other three project build options and repeat step 3.
	
	Now when you build your project it will use the Mfc40*.dll as designed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed:
	     */ 
	
	Try one of the Circ samples that ship with the 2.x CDK.
	
	Additional query words: visualc ocx ole control ocs30d ocs30 lib dll
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbCtrlCreate kbMFC kbVC200 kbVC400 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbOLESearch kbVC220 kbVC200 kbVC210
	Version           : winnt:2.0,2.1,2.2,4.0; :
	Issue type        : kbprb
	
	=============================================================================
	
