---
layout: page
title: "Q99097: HOWTO: Customize Common Dialog Box Parameter Blocks"
permalink: /kb/099/Q99097/
---

## Q99097: HOWTO: Customize Common Dialog Box Parameter Blocks

	Article: Q99097
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,7.0
	Operating System(s): 
	Keyword(s): kbCmnDlg kbDlg kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDS
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1, 4.2, 5.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Foundation Classes (MFC) Standard Dialog Classes provide
	convenient C++ wrappers for the Microsoft Windows Common Dialog Boxes
	dynamic-link library (DLL), COMMDLG.DLL. To customize one of these classes, you
	may need to modify some of the default parameter block members. The wrapper
	functions use the same parameter blocks as the corresponding common dialog
	functions because, ultimately, the code calls the Windows functions.
	
	  Microsoft
	  Foundation Classes   Windows Common Dialog   Parameter Block
	  -------------------------------------------------------------------
	  CFileDialog          GetOpenFileName and     OPENFILENAME
	                         GetSaveFileName
	  CFontDialog          ChooseFont              CHOOSEFONT
	  CColorDialog         ChooseColor             CHOOSECOLOR
	  CPrintDialog         PrintDlg                PRINTDLG
	  CFindReplaceDialog   FindText and            FINDREPLACE
	                         ReplaceText
	
	For Microsoft Foundation Classes version 1.0, distributed with Microsoft C/C++
	version 7.0, Technical Note #13 provides additional information about these
	classes and how to use them. Technical Note #13 is in the TN013.TXT file in the
	MFC\DOC directory (by default, C:\C700\MFC\DOC). For Microsoft Foundation
	Classes library versions 2.x, 3.x, and 4.x, each of these functions is listed in
	the online documentation and in the "Class Library Reference" manual by its
	class name.
	
	Even though the parameter block defaults that the Microsoft Foundation Classes
	library provides are generally adequate, there are times it may be necessary to
	customize a dialog box. For example, it may be helpful to specify the
	OFN_ALLOWMULTISELECT flag with the CFileDialog to allow the user to select more
	than one file in the GetOpenFileName dialog box.
	
	If you add a flag, however, you must be careful to provide any additional
	information as appropriate. For example, CFileDialog provides a default buffer
	m_szFileName that is _MAX_PATH characters in length. If you allow the user to
	select more than one file, this buffer capacity can be exhausted quickly.
	
	Even though the CFileDialog class was designed with a buffer to support only one
	file, it is an easy matter to provide your own buffer by setting the
	m_ofn.lpstrFile and m_ofn.nMax members of the OPENFILENAME parameter block
	yourself after constructing your CFileDialog, but before calling DoModal().
	
	The text below demonstrates this method of replacing the default CFileDialog
	buffer. However, similar techniques apply to any of the standard dialog box
	classes. In general, when you change any of the default flags, you should
	examine the Microsoft Foundation Classes library source code to determine the
	effects of the change, if any, and to take appropriate action.
	
	MORE INFORMATION
	================
	
	The following code fragment demonstrates using CFileDialog to select multiple
	files by adding the OFN_ALLOWMULTISELECT flag and using an application-supplied
	buffer:
	
	  #include <afxdlgs.h>
	
	  char bigBuff[2048] = "";  // maximum common dialog buffer size
	     char szFilter[] =
	        "All Files (*.*)|*.*|Text Files (*.txt)|*.txt||";
	     CFileDialog dlg(TRUE, NULL, NULL,
	        OFN_HIDEREADONLY | OFN_ALLOWMULTISELECT, szFilter);
	
	     // Modify OPENFILENAME members directly to point to bigBuff
	     dlg.m_ofn.lpstrFile = bigBuff;
	     dlg.m_ofn.nMaxFile = sizeof(bigBuff);
	
	     dlg.DoModal(); 
	
	There are a number of circumstances in which it is desirable to add a custom
	template and/or a hook function to the Windows common dialog boxes. To do so,
	modify fields in the appropriate common dialog box parameter block. When the
	application uses the Microsoft Foundation Classes library, modify these fields
	after creating the dialog object but before calling DoModal(), as illustrated
	above.
	
	For more information on using a custom template or a hook function with one of
	the common dialog boxes, please query in the Microsoft Knowledge Base on the
	following words:
	
	  steps add hook function
	
	  steps add custom template
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnDlg kbDlg kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,5.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
