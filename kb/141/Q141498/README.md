---
layout: page
title: "Q141498: Filling List Box Using MFC's DDX Facility"
permalink: /kb/141/Q141498/
---

## Q141498: Filling List Box Using MFC's DDX Facility

{% raw %}

	Article: Q141498
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbCtrl kbListBox kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbGrpD
	Last Modified: 02-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	This is the 32-bit version of this sample.
	
	SUMMARY
	=======
	
	The Lstddx32 sample illustrates a technique for filling both an ordinary list
	box control and the list box portion of a combo box control with data, and using
	the Microsoft Foundation Class (MFC) Dialog Data Exchange (DDX) facility to
	return the selection.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  Lstddx32.exe
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Lstddx32vcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.18/win98mexp/en-us/Lstddx32vcnet.exe)
	
	Release Date: June 26, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	NOTE: Use the -d option when running LSTDDX32.EXE to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	A common misconception with regard to DDX is that assigning a value to a DDX
	variable will cause that data to be loaded into a control. This does in fact
	happen for edit controls, but not for list box controls. In order to add items
	to a list box the dialog class must use the CListBox::AddString() or
	CComboBox::AddString() functions. Doing this involves several steps which are
	illustrated by this sample.
	
	The sample itself was initially created as an MDI application using AppWizard
	from Visual C++ version 1.0. AppStudio was then used to create a dialog which
	contains OK and Cancel button plus an edit control (IDC_EDIT1), a combo control
	(IDC_COMBO1), and a list box control (IDC_LIST1). The Class Wizard was used to
	create a class CDialog1 based on CDialog. The files dialog1.h and dialog1.cpp
	contain the code for this class. Class Wizard was also used to add DDX member
	variables m_edit1, m_combo1, and m_list1 to dialog1.h. A menu item was added to
	the view menu (IDR_LIST_DTYPE) using AppStudio, and a message handler added
	which will call the dialog when the menu item was selected.
	
	The Readme.txt file included with the sample explains in more detail how the list
	boxes are initialized and how data is passed between the calling routine and the
	dialog procedure.
	
	Additional query words: lstddx listbox lstddx32 lstddx32vcnet
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbCtrl kbListBox kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
