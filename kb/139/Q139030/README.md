---
layout: page
title: "Q139030: HOWTO: Edit Resources in Executables with Visual C++"
permalink: /kb/139/Q139030/
---

## Q139030: HOWTO: Edit Resources in Executables with Visual C++

	Article: Q139030
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): _IK920 kbVC kbVC400 kbVC500 kbVC600 kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT and Windows 2000 provide APIs that allow you to modify resources in
	an executable or DLL. When the resource is opened, Developer Studio checks to
	ensure that it can write to the file. If not, you will be warned.
	
	Windows 95, Windows 98, and Windows Millennium Edition (Me) do not support the
	APIs necessary to do this. When the resource is loaded, the following warning
	appears:
	
	  Microsoft Developer Studio cannot save the modified resources back to this
	  executable. The executable may be in use, or this version of Windows may not
	  support updating resources in executables.
	
	In Visual C++, version 4.0, the executable can not be modified. Beginning with
	Visual C++, version 5.0, the resources within the executable can be modified and
	saved. To modify resources within Visual C++, version 5.0 or later, use the
	following steps:
	
	1. On the File menu, click Open.
	
	2. Locate an executable or Dll containing resources.
	
	3. In the Open dialog, select Resources in the Open As list.
	
	4. Click OK.
	
	5. The resources for the selected binary file should appear.
	
	At this point, the resources can be modified as they would from the ResourceView
	in a Visual C++ project. Saving the binary file makes those changes permanent.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK920 kbVC kbVC400 kbVC500 kbVC600 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
