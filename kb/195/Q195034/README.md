---
layout: page
title: "Q195034: HOWTO: OfnKing Demonstrates CFileDialog Customization"
permalink: /kb/195/Q195034/
---

## Q195034: HOWTO: OfnKing Demonstrates CFileDialog Customization

{% raw %}

	Article: Q195034
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbCmnDlg kbCmnDlgFileO kbCSHelp kbMFC kbVC400 kbVC410 kbVC420 kbVC500 k
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	OfnKing demonstrates how to use and customize the Explorer-style CFileDialog.
	This is the new type of Open File common dialog box supported on Windows 95,
	Windows 98, Windows Millennium Edition (Me), Windows NT 4.0, and Windows 2000.
	
	OfnKing provides a custom template with controls added to the standard set. It
	also shows how to hide and move the standard controls. In addition, OfnKing
	demonstrates DDX/DDV and context-sensitive help support with controls on the
	custom template.
	
	Programmers often like to use the common file dialog box to obtain a folder name
	or to include folder names with the list of retrieved selected files. OfnKing
	demonstrates a quick use of the new SHBrowseForFolder function, which is the
	recommended method for the former. As for the latter, as an advanced technique
	of customization, OfnKing shows how to access the listview control on the common
	dialog box and obtain a list of Display names of files as well as folders.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Ofnking.exe now
	  (http://download.microsoft.com/download/vc40pro/demo1/1/WIN98/EN-US/Ofnking.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Ofnkingvcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.12/win98mexp/en-us/Ofnkingvcnet.exe)
	
	Release Date: June 25, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	The primary functionality of this sample rests in the CCustomFileDialog class,
	defined in CustomFileDialog.cpp and CustomFileDialog.h. The custom file dialog
	box is executed by either clicking CfileDialog, then clicking Go, or by clicking
	Open on the File menu. Three options are available for choosing what customized
	file dialog box will be shown: whether it has the Explorer style, whether it has
	a Custom Template, and whether it allows the user to select multiple files.
	
	The Custom Template version provides a few controls that allow the user to store
	a list of file names and directories from several different directories. This
	list comes directly from the listview control on the dialog box, and therefore
	it is composed only of Display Names. Directory names should be accurate, but
	file names could potentially be stripped of their extensions (this is based on
	whether the user has chosen this option in the standard Explorer.)
	
	Below is a listing of the techniques that OfnKing demonstrates:
	
	Obtaining a List of Selected Files When Using Multi-Select
	----------------------------------------------------------
	
	At the end of CMainFrame::OnDoDialog is a for loop that uses the
	GetStartPosition() and GetNextPathName() functions to iterate through the
	multiple file selections and add the names to one of the list controls.
	Unfortunately, in versions of MFC prior to 4.2, the GetNextPathName() function
	made some incorrect assumptions. OfnKing provides a fixed version.
	
	Adding to the Recent File List
	------------------------------
	
	The loop mentioned above also adds the filenames to the recent file list. This is
	as easy as calling the CWinApp::AddToRecentFileList() function.
	
	Selecting a directory
	---------------------
	
	The CMainFrame::OnDirectorySelect() function demonstrates selecting a directory.
	It uses SHBrowseForFolder() to read in an initial directory for CFileDialog.
	This directory is added to one of the panes in the status bar.
	
	Providing a custom template for CFileDialog
	-------------------------------------------
	
	With the old-style common file dialog box (that is, non-Explorer), the template
	used was the WHOLE file dialog box, with all of the standard controls. Now, with
	Explorer dialog boxes, you provide only the controls you would like to add to
	the dialog box. Your template is repositioned and resized to fit the standard
	controls when the CFileDialog window is first created. Or, if you want precise
	positioning of the standard controls, you can place a static control with an ID
	of stc32 on your template to indicate where you want the standard controls to be
	placed. This is the technique OfnKing uses.
	
	Using DDX/DDV with Your Own Controls on CFileDialog
	---------------------------------------------------
	
	Unfortunately, the Class Wizard code is not complete when matching a custom
	template to a CFileDialog object. By adding the missing Class Wizard comments,
	Class Wizard lets you map control and value variables to your own controls and
	read values into them.
	
	See CCustomFileDialog::DoDataExchange().
	
	Context-Sensitive Help Support
	------------------------------
	
	CCustomFileDialog::OnHelp() is called when the user clicks the standard Help
	button on the common file dialog box.
	
	CCustomFileDialog::OnContextMenu() is called when the user right-clicks one of
	the custom controls, such as the select items button. This brings up a menu with
	the "What's This?" item.
	
	CCustomFileDialog::OnHelpInfo() is called when the WM_HELP message is generated
	by clicking the ? on the caption bar.
	
	All three of these options make quick use of the WinHelp command.
	
	MakeHelp.bat was modified to map IDC_ to help context IDs, and the standard MFC
	help support .rtf file was pared down to just a few entries.
	
	Reading Directory Names from listview
	-------------------------------------
	
	The common file dialog box does not support selection of folders. That is, It is
	not possible to retrieve the name of a selected folder nor will the common file
	dialog box return folder names in the OPENFILENAME structure on closing.
	However, in some cases, it might be handy to get selected folder names as well.
	One example: a file archival and compression utility might want to allow a user
	to package up all of the files in one directory by just selecting that
	directory.
	
	As a demonstration of customization techniques, OfnKing shows how to access the
	listview control on CfileDialog, and read through the list of Display names to
	obtain a "complete" list of all selected files and directories. The main
	functionality for this is in ReadListViewNames().
	
	Because the list obtained consists of display names, the file names obtained may
	not be complete. Currently, extensions are stripped for certain known file types
	based on system preferences. However, folder names will probably not be altered.
	The application of this information is left to the observer.
	
	NOTE: This technique may break with future versions of the common dialog boxes.
	However, because it just stops working, rather than crashing the program, if the
	dialog box implementation changes, this method is relatively safe.
	
	Additional Notes on the OfnKing Sample
	--------------------------------------
	
	The OfnKing sample was originally created using AppWizard, which generated a
	skeleton application with a set of basic files. Most of the code in this sample
	that represents a change to the original AppWizard code is marked with the
	comments "// CHANGE":
	
	The rest of the OfnKing sample contains a summary of what you will find in each
	of the files that make up your OfnKing application:
	
	CustomFileDialog.cpp
	CustomFileDialog.h
	
	  The implementation and header file for the CCustomFileDialog class, discussed
	  above.
	
	OfnKing.h
	
	  This is the main header file for the application. It includes other
	  Project-specific headers (including Resource.h) and declares the COfnKingApp
	  application class.
	
	OfnKing.cpp
	
	  This is the main application source file that contains the application class
	  COfnKingApp.
	
	OfnKing.rc
	
	  This is a listing of all of the Microsoft Windows resources that the program
	  uses; it includes the icons, bitmaps, and cursors that are stored in the RES
	  subdirectory. This file can be directly edited in Microsoft Developer Studio.
	
	res\OfnKing.ico
	
	  This is an icon file, which is used as the application's icon. This icon is
	  included by the main resource file OfnKing.rc.
	
	res\OfnKing.rc2
	
	  This file contains resources that are not edited by Microsoft Developer
	  Studio. You should place all resources not editable by the resource editor in
	  this file.
	
	OfnKing.clw
	
	  This file contains information used by ClassWizard to edit existing classes
	  or add new classes. ClassWizard also uses this file to store information
	  needed to create and edit message maps and dialog data maps and to create
	  prototype member functions.
	
	For the Main Frame Window
	-------------------------
	
	MainFrm.h, MainFrm.cpp
	
	  These files contain the frame class CMainFrame, which is derived from
	  CMDIFrameWnd and controls all MDI frame features.
	
	res\Toolbar.bmp
	
	  This bitmap file is used to create tiled images for the toolbar. The initial
	  toolbar and status bar are constructed in the CMainFrame class. Edit this
	  toolbar bitmap along with the array in MainFrm.cpp to add more toolbar
	  buttons.
	
	AppWizard Creates One Document Type and One View
	------------------------------------------------
	
	OfnKingDoc.h, OfnKingDoc.cpp - the document
	
	  These files contain your COfnKingDoc class. Edit these files to add your
	  special document data and to implement file saving and loading (via
	  COfnKingDoc::Serialize).
	
	OfnKingView.h, OfnKingView.cpp - the view of the document
	
	  These files contain your COfnKingView class. COfnKingView objects are used to
	  view COfnKingDoc objects.
	
	res\OfnKingDoc.ico
	
	  This is an icon file, which is used as the icon for MDI child windows for the
	  COfnKingDoc class. This icon is included by the main resource file
	  OfnKing.rc.
	
	Help Support
	------------
	
	MakeHelp.bat
	
	  Use this batch file to create your application's Help file, OfnKing.hLP.
	
	OfnKing.hpj
	
	  This file is the Help Project file used by the Help compiler to create your
	  application's Help file.
	
	hlp\OfnKing.rtf
	
	  This file contains the context-sensitive help topics for the dialog box.
	
	Other Standard Files
	--------------------
	
	StdAfx.h, StdAfx.cpp
	
	  These files are used to build a precompiled header (PCH) file named
	  OfnKing.pch and a precompiled types file named StdAfx.obj.
	
	Resource.h
	
	  This is the standard header file, which defines new resource IDs. Microsoft
	  Developer Studio reads and updates this file.
	
	Other Notes
	-----------
	
	If your application uses MFC in a shared DLL, and your application is in a
	language other than the operating system's current language, you need to copy
	the corresponding localized resources Mfc40xxx.dll from the Microsoft Visual C++
	CD-ROM onto the system or system32 directory, and rename it to be Mfcloc.dll
	("XXX" stands for the language abbreviation; for example, Mfc40deu.dll contains
	resources translated to German). If you don't do this, some of the UI elements
	of your application remain in the language of the operating system.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jason Strayer, Microsoft Corporation
	
	
	Additional query words: Ofnking Ofnkingvcnet
	
	======================================================================
	Keywords          : kbfile kbSample kbCmnDlg kbCmnDlgFileO kbCSHelp kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
