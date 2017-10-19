---
layout: page
title: "Q256158: FIX: Text May Be Truncated in Apps for Japanese Windows 2000"
permalink: /kb/256/Q256158/
---

## Q256158: FIX: Text May Be Truncated in Apps for Japanese Windows 2000

	Article: Q256158
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:; winnt:6.0
	Operating System(s): 
	Keyword(s): kbDlg kbGDI kbMFC kbVC600fix kbDSupport kbGrpDSMFCATL kbVS600sp4fix kbVS600sp5fixkbfixl
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- The Microsoft Foundation Classes (MFC) 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you display a property page that is built with the Microsoft Foundation
	Classes (MFC) on Windows 2000, the text may appear truncated. This problem is
	specific to MFC applications that are localized for Japanese Windows 2000.
	
	CAUSE
	=====
	
	This problem is caused by a bug in the MFC framework. The font for an MFC
	property page is set to the font of the associated property sheet. The font for
	the property sheet is retrieved by the AfxGetPropSheetFont function, which is an
	internal MFC function that can be found in the \Mfc\Src\Ccdata.cpp file. The
	font lookup code in this function makes an incorrect assumption about the font
	from the property sheet resource that is located in the Comctl32.dll file.
	
	RESOLUTION
	==========
	
	The internal AfxGetPropSheetFont function now contains code to select the
	correct property page font. This fix is already included in the Mfc42.dll and
	Mfc42u.dll files that are shipped with Windows 2000. Only applications that are
	statically linked to the MFC libraries and localized for Japanese platforms are
	affected.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	Additional query words: sp4 wizard localization japan
	
	======================================================================
	Keywords          : kbDlg kbGDI kbMFC kbVC600fix kbDSupport kbGrpDSMFCATL kbVS600sp4fix kbVS600sp5fix kbfixlist
	Technology        : kbVCsearch kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbAudDeveloper kbMFC kbWinAdvServSearch kbVC600 kbVC32bitSearch
	Version           : WINDOWS:; winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
