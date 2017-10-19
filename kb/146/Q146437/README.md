---
layout: page
title: "Q146437: Horizontal Scrolling List Box in an MFC Class"
permalink: /kb/146/Q146437/
---

## Q146437: Horizontal Scrolling List Box in an MFC Class

	Article: Q146437
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbCtrl kbListBox kbMFC kbScrollBar KbUIDesign kbVC400 kbVC500 kbVC600 k
	Last Modified: 14-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The HLISTBOX sample contained in HLISTBOX.EXE illustrates how to implement
	horizontal scrolling in a CListBox-derived class.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  Hlistbox.exe
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Hlistboxvcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/other/1.32/win98mexp/en-us/Hlistboxvcnet.exe)
	
	Release Date: August 14, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	NOTE: Use the -d option when running HLISTBOX.EXE to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	HLISTBOX implements a new class called CHorzListBox that is derived from
	CListBox. This new class automatically updates the horizontal extent of a list
	box to that of the longest string included in the list box. It works well with
	list boxes that have or don't have the LBS_USETABSTOPS style. An ordinary
	Windows list box does not attempt to implement horizontal scrolling of this
	nature.
	
	Basically, the CHorzListBox intercepts all messages that would affect the
	horizontal extent based on the string lengths. It tracks the extent of all
	strings in the list box through an array. Examine the source code for details.
	
	Sample Files    Descriptions
	------------------------------------------------------------------------
	
	HLB.CPP         Implementation of the CHorzListBox class.
	
	HLISTBOX.CPP    Application, mostly AppWizard generated dialog-based
	               application.
	
	HLISTDLG.CPP    Implementation of the test dialog. Also the
	               application's main window.
	
	NOTE: The "Lock/Unlock" button on the main dialog locks and unlocks the automatic
	updating of horizontal extent for the list box.
	
	Additional query words: 4.00 scroll bar scrollbar listbox
	
	======================================================================
	Keywords          : kbfile kbSample kbCtrl kbListBox kbMFC kbScrollBar KbUIDesign kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	
	=============================================================================
	
