---
layout: page
title: "Q125367: HOWTO: Connecting a CRecordset to a CDialog"
permalink: /kb/125/Q125367/
---

## Q125367: HOWTO: Connecting a CRecordset to a CDialog

{% raw %}

	Article: Q125367
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC60
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual C++ ENROLL tutorial documentation describes how to connect controls
	of a CRecordView to the field variables of a CRecordset. With a little more
	work, you can also connect field variables to controls of a CDialog. This
	article explains the steps involved.
	
	MORE INFORMATION
	================
	
	You can connect a CRecordset to a CDialog in much the same way you connect a
	CRecordset to a CRecordView. Once you have your CRecordset and CDialog created,
	follow these steps:
	
	1. Using the ClassWizard, specify the CRecordset class as a 'foreign class' for
	  the CDialog. Here's an example of how to do this with the CAboutDlg dialog in
	  the ENROLL sample:
	
	  1. Load the ENROLL step 1 project from the \MSVC\MFC\SAMPLES\ENROLL\STEP1
	     directory for Visual C++ 2.x, and from
	     \MSDEV\SAMPLES\MFC\TUTORIAL\ENROLL\STEP1 for Visual C++ 4.0.
	
	  2. Start ClassWizard (CTRL+W).
	
	  3. Select the 'CAboutDlg' class in the 'Class Name' list box.
	
	  4. In ClassWizard, select the 'Class Info' tab.
	
	  5. In the 'Foreign Class' list box, select 'CSectionSet'. CSectionSet is the
	     CRecordset class that you need to associate with the dialog.
	
	  6. In the 'Foreign Variable' edit control, type m_pSet (an arbitrary name).
	
	  This creates a member variable m_pSet for the CAboutDlg class. The variable
	  m_pSet will be a pointer to a CSectionSet object.
	
	2. In Visual C++ 4.0, use the Resource View, within the Project Workspace, to
	  add controls to the CDialog. In earlier versions of Visual C++, use AppStudio
	  to add the controls.
	
	3. Add code to the CDialog to assign, open, and close the recordset. For
	  example:
	
	        BOOL CAboutDlg::OnInitDialog()
	        {
	             CEnrollDoc * pDoc=(CEnrollDoc *) (GetParentFrame()->
	                      GetActiveDocument());
	             m_pSet= &(pDoc->m_SomeRecordset);
	            m_pSet->Open();
	
	             CDialog::OnInitDialog();
	
	            return TRUE;
	        }
	
	  Before using this code, make sure the CSectionSet object (derived from
	  CRecordset) is defined as the public member variable of the CEnrollDoc class
	  (derived from CDocument). Note, in the code above, this member variable is
	  named 'm_SomeRecordset You can add additional code to check for CDBExceptions
	  and to allow the user to move through the records.
	
	  NOTE: this code does not close the CRecordset object. This could be done in
	  OnOK and OnCancel in your CDialog's destructor, or you could just let it
	  happen when the CRecordset object is itself destroyed.
	
	REFERENCES
	==========
	
	To get more information about the 'Foreign Class' and 'Foreign Variable'
	features of ClassWizard, go to the 'Class Info' tab in ClassWizard and click
	Help.
	
	Additional query words: kbvc150 kbvc151 kbvc152 kbvc200 kbvc210 kbvc400 kbvc410 kbvc420 kbvc500 kbvc600
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.5,1.51,1.52,2.0,2.1,4.0,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
