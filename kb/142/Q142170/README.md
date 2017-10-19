---
layout: page
title: "Q142170: PRPFONT - How to Set CPropertySheet Fonts"
permalink: /kb/142/Q142170/
---

## Q142170: PRPFONT - How to Set CPropertySheet Fonts

	Article: Q142170
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbProgramming kbSample kbFont kbGDI kbMFC kbPropSheet KbUIDesign kbVC400 kbVC500
	Last Modified: 27-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	PRPFONT shows how to set the desired font for your CPropertyPages in the
	Resource Editor, and at run-time, set the sheet's font to be the same and size
	everything correctly. All of this is done in a class called CMySheet. A function
	called ChangeDialogFont() does the work of setting the font and resizing
	windows. CPropertySheet::BuildPropPageArray() was overridden so that the fonts
	in the pages are not reset.
	
	MORE INFORMATION
	================
	
	In versions of Visual C++ earlier than 4.0, MFC had its own implementation of
	CPropertySheet. You could set the font for your CPropertySheet by setting the
	font of your first CPropertyPage dialog box resource in the Resource Editor. At
	run time, the sheet would use the font that you set and size everything
	according to the font. Starting with Visual C++ 4.0, MFC uses the Windows 95
	PropertySheet control. This control will always use the system font for the
	sheet. This is by design. MFC will also force the pages to use the same font as
	the sheet. This is done in a function called BuildPropPageArray(). Because this
	is an undocumented function, it may change or be deleted in future versions of
	MFC.
	
	CMySheet will use the font of the first active CPropertyPage to set the font and
	size of the CPropertySheet and its child windows. The CPropertyPages will appear
	with the font specified in the resource editor.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Prpfont.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words: 4.10 4.20 prpfont propfont runtime run-time
	
	======================================================================
	Keywords          : kbfile kbProgramming kbSample kbFont kbGDI kbMFC kbPropSheet KbUIDesign kbVC400 kbVC500 kbVC600 kbFAQ kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	
	=============================================================================
	
