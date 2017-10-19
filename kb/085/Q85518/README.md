---
layout: page
title: "Q85518: INFO: Correct Use of the SetFont() Function in MFC"
permalink: /kb/085/Q85518/
---

## Q85518: INFO: Correct Use of the SetFont() Function in MFC

	Article: Q85518
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SetFont() member function of the CWnd class changes the font in a specified
	control. For this function to work correctly in a Windows- based application,
	you must ensure that the CFont object specified in the SetFont() call is not
	destroyed until after the specified control has been destroyed.
	
	MORE INFORMATION
	================
	
	The SetFont() accepts a CFont object as a parameter; the control uses the
	specified font to display its text. The SetFont() function is implemented to
	send a WM_SETFONT message to the control with the font handle that corresponds
	to the CFont object.
	
	An application can delete the font specified in a WM_SETFONT message only under
	certain circumstances; these same restrictions apply to the CFont object
	specified in a SetFont() call.
	
	Specifically, do not destroy the specified CFont object until after the CWnd
	control has been destroyed. Windows does not copy the font specified in a
	SetFont() call. If the font is destroyed before the control is destroyed,
	unpredictable results can occur.
	
	For example, when an application uses SetFont() to change the font a dialog box
	uses, the application should not destroy the CFont object until after it has
	destroyed the dialog box. Make the CFont object a member variable of the derived
	dialog box class instead of making the font a local variable in one of the
	functions in the class. This is the best method to ensure that the CFont object
	exists for the lifetime of the dialog box. When the application destroys the
	dialog box, the dialog box class destructor automatically calls the CFont
	destructor to delete the font handle.
	
	The best time to specify the font for any controls in the dialog box is in the
	OnInitDialog() member function.
	
	The code below demonstrates deriving a dialog box class from CModalDialog and
	using the SetFont() member function:
	
	Sample Code
	-----------
	
	  /*
	   * Compiler options needed: None
	   */ 
	
	  class CMyAboutBox : public CDialog
	  {
	     CFont m_font;
	
	     public:
	        // Constructor -- This code assumes a dialog box
	        // template named "ABOUTDLG" in the application's .RC file.
	
	        CMyAboutBox(CWnd* pParentWnd = NULL) :
	           CModalDialog("ABOUTDLG", pParentWnd) {};
	
	        BOOL OnInitDialog();
	  };
	
	  // OnInitDialog() function -- Called after Windows creates
	  // the dialog box but before it is painted on the screen.
	
	  BOOL CMyAboutBox::OnInitDialog()
	  {
	     LOGFONT lf;                        // Used to create the CFont.
	
	     CDialog::OnInitDialog();           // Call default ::OnInitDialog
	
	     memset(&lf, 0, sizeof(LOGFONT));   // Clear out structure.
	     lf.lfHeight = 20;                  // Request a 20-pixel-high font
	     strcpy(lf.lfFaceName, "Arial");    //    with face name "Arial".
	     m_font.CreateFontIndirect(&lf);    // Create the font.
	
	     // Use the font to paint a control. This code assumes
	     // a control named IDC_TEXT1 in the dialog box.
	     GetDlgItem(IDC_TEXT1)->SetFont(&m_font);
	
	     return TRUE;
	  }
	
	Additional query words: kbinf 7.00 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00 destructor
	
	======================================================================
	Keywords          : kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
