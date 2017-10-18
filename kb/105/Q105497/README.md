---
layout: page
title: "Q105497: Directory Picker Sample Using Modified CFileDialog"
permalink: kb/105/Q105497/
---

## Q105497: Directory Picker Sample Using Modified CFileDialog

	Article: Q105497
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1
	Operating System(s): 
	Keyword(s): kbfile kbSample kbCmnDlgFileO kbFileIO kbMFC kbVC100 kbVC150 kbVC200 kbDSupport kbGrpDS
	Last Modified: 24-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	The default implementation of CFileDialog allows the user to select a specific
	file from any drive/directory on the computer. It is possible to derive a class
	from CFileDialog, creating a new class that allows the user to select only a
	directory. In addition to deriving a new class, this approach also requires that
	a custom template be used in conjunction with the new dialog box. The Directory
	Picker (DIRPK) sample implements this functionality.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Dirpk.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	DIRPK.EXE was archived as a self-extracting file using the PKware
	file-compression utility. The archived file contains subdirectories, and
	therefore, the -d switch needs to be used when decompressing the file to disk.
	
	MORE INFORMATION
	================
	
	NOTE: The DIRPK sample was designed using the old style of common file dialogs
	and will work as intended only on Windows NT 3.51. On Windows 95 and future
	versions of Windows NT version 4.0, if you want to use the old style of common
	file dialogs, insure that:
	
	  m_ofn.Flags &= ~OFN_EXPLORER;
	
	before calling DoModal() on the CFileDialog object. It is likely, however, that
	this behavior will change under future versions of Windows and the old style of
	common file dialogs will go away. The best way to search for a folder instead of
	a specific file is to use the new ::SHBrowseForFolder() SDK function.
	
	The following steps use the DIRPK sample to derive a class from CFileDialog which
	allows the user to select only a directory:
	
	1. Derive a class from CFileDialog. See the DIRPK sample for the specific
	  implementation.
	
	2. Modify the default CFileDialog dialog box template to suit the needs of your
	  dialog box. When modifying a default template, be sure to leave all existing
	  controls there so you can move them around, but they must exist. (COMMDLG.DLL
	  expects certain controls to exist in the template.) Of course, you can add
	  new controls if desired. The default dialog box templates can be found in the
	  \MSVC\SAMPLES\COMMDLG directory in Visual C++ for Windows. In Visual C++
	  32-bit edition, the templates are found in \MSVC\INCLUDE. Each template has a
	  .DLG file extension.
	
	3. Include the modified template in your application's .RC file. Note that the
	  default dialog box templates contain constant identifiers such as cmb1, lst1,
	  stc1, and so forth. These constants are defined in the DLGS.H file, located
	  in the \\MSVC\INCLUDE directory. You must include this file in your
	  application's .RC file as well. Using App Studio, choose Set Includes from
	  the File menu and enter #include "dlgs.h" in the Read-Only Symbol Directives
	  edit control.
	
	4. Add any necessary member functions. See the DIRPK sample for implementation
	  details.
	
	5. Create an object of your new class and call the DoModal function to bring up
	  the dialog box. Code similar to the following should be used:
	
	Sample Code
	-----------
	
	     CMyFileDlg  cfdlg(FALSE, NULL, NULL, OFN_SHOWHELP | OFN_HIDEREADONLY |
	                       OFN_OVERWRITEPROMPT | OFN_ENABLETEMPLATE, NULL,
	                       m_pMainWnd);
	     cfdlg.m_ofn.hInstance = AfxGetInstanceHandle();
	     cfdlg.m_ofn.lpTemplateName = MAKEINTRESOURCE(FILEOPENORD);
	     if (IDOK==cfdlg.DoModal())
	         ...OK processing...
	     else
	         ...Error processing...
	
	Additional query words: getopenfilename Dirpk commdlg dirpkr dirpick dirpicker dirpik
	
	======================================================================
	Keywords          : kbfile kbSample kbCmnDlgFileO kbFileIO kbMFC kbVC100 kbVC150 kbVC200 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1
	Issue type        : kbhowto
	
	=============================================================================
	
