---
layout: page
title: "Q142226: PRB: CButton SetIcon and SetBitmap Work Only Under Windows 95"
permalink: /kb/142/Q142226/
---

## Q142226: PRB: CButton SetIcon and SetBitmap Work Only Under Windows 95

	Article: Q142226
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbcode kbBitmap kbButton kbIcon kbMFC KbUIDesign kbVC400 kbOSWin95 kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a button is displayed on Windows NT, which uses these functions and styles,
	the button will not appear. If you click in the area that the button should be,
	you will get an outline of a check-box button.
	
	CAUSE
	=====
	
	Windows NT does not support the BS_ICON and BS_BITMAP styles.
	
	RESOLUTION
	==========
	
	Only use these features of CButton when the Windows version is greater than or
	equal to 4.
	
	Remove the BS_ICON or BS_BITMAP style from the dialog template. Then use
	GetVersion to determine the Windows version. If the version is greater than or
	equal to 4, use ModifyStyle to add the BS_ICON or BS_BITMAP style and call
	SetIcon or SetBitmap. See the "Sample Code" section of this article.
	
	Using this method, under Windows NT the user will see the text caption version of
	the button, but under Windows 95 the desired icon or bitmap will be seen.
	
	MORE INFORMATION
	================
	
	In the following code, m_ok is a CButton member variable, m_hIcon is a HICON
	member variable, and IDI_ICON1 is the ID of some icon that will be displayed
	under Windows 95.
	
	Sample Code
	-----------
	
	  /* compile options needed: default
	  */ 
	
	  BOOL CAboutDlg::OnInitDialog()
	  {
	      CDialog::OnInitDialog();
	
	      if ( (BYTE)GetVersion() >=4 )
	      {
	          m_hIcon = AfxGetApp()->LoadIcon(IDI_ICON1);
	          if (NULL != m_hIcon)
	          {
	              m_ok.ModifyStyle(0, BS_ICON);
	              m_ok.SetIcon(m_hIcon);
	          }
	      }
	      else
	          m_hIcon = NULL;
	
	      return TRUE;  // return TRUE unless you set the focus to a control
	                    // EXCEPTION: OCX Property Pages should return FALSE
	  }
	
	  void CAboutDlg::OnDestroy()
	  {
	      CDialog::OnDestroy();
	
	      // destroy the icon if it was loaded
	      if (NULL != m_hIcon)
	          DestroyIcon(m_hIcon);
	  }
	
	REFERENCES
	==========
	
	Win32 SDK BM_SETIMAGE documentation
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbcode kbBitmap kbButton kbIcon kbMFC KbUIDesign kbVC400 kbOSWin95 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
