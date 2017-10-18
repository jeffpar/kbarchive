---
layout: page
title: "Q103719: INFO: Migrating Visual C++ for Windows to Windows NT"
permalink: kb/103/Q103719/
---

## Q103719: INFO: Migrating Visual C++ for Windows to Windows NT

	Article: Q103719
	Product(s): Microsoft C Compiler
	Version(s): WINNT:1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbGenInfo kbVC kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When porting a simple application built by AppWizard from Visual C++ for Windows
	to Visual C++ 32-bit Edition, a few changes are needed. Here are some helpful
	hints:
	
	- The .MAK files are not compatible, so a new one must be created.
	
	- The <PROJECT>.RC2 file includes VER.H, which has been changed to
	  WINVER.H for Windows NT, so this must be modified.
	
	MORE INFORMATION
	================
	
	In the Visual C++ version 5.0 Books Online, the Porting and Upgrading section of
	the Visual C++ Programmer's guide discusses some of the common issues concerning
	porting applications from Visual C++ for Windows (16-bit) to Visual C++ for
	Windows NT (32-bit). In the Visual C++ version 4.0, this information was in
	Books Online, the "Porting" chapter of the "Key Visual C++ Topics". In previous
	versions of Visual C++ 32-bit Edition, this information is covered in the help
	file MIGRATING.HLP which is accessible through the "Moving to Visual C++" help
	icon in the Visual C++ for Windows NT program group.
	
	With version 5.0 the steps for porting a Microsoft Foundation Class (MFC)
	application are discussed in the Changes in MFC Versions in the Details section
	of the Porting and Upgrading topic. With 4.0 they are in the "Between MFC
	Versions" topic of the "Porting" chapter in the Visual C++ version Books Online.
	To find this information, search on "porting MFC applications." These steps are
	also addressed in the MFC.HLP file included with Visual C++ 32-bit edition
	versions 1.0 and 2.x. To access this information, select "MFC Help" and choose
	"Steps for Porting Framework Apps to 32-Bits."
	
	With slight variation, the steps for porting a MFC application are:
	
	1. Import your application files into a new project.
	
	2. Remove VBX controls.
	
	3. Remove Windows for Pen Computing extensions.
	
	4. Remove AFXDLL.
	
	5. Change VER.H to WINVER.H.
	
	6. Replace difficult-to-port code, such as assembly language functions and
	  MS-DOS calls, with stubs.
	
	7. Build your 16-bit application with Visual C++ for Windows NT and note any
	  32-bit related problems.
	
	8. Use the information in the Porting and Upgrading sections to correct any
	  problems.
	
	9. Implement each stubbed function with portable code until the entire
	  application runs correctly.
	
	Further details on each step are provided in the online documentation or help
	files mentioned above.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGenInfo kbVC kbVC100 kbVC200 kbVC210 kbVC400 kbVC500 kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc100 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : WINNT:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
