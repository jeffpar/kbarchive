---
layout: page
title: "Q103788: INFO: Creating a Modeless Dialog Box with MFC Libraries"
permalink: /kb/103/Q103788/
---

## Q103788: INFO: Creating a Modeless Dialog Box with MFC Libraries

{% raw %}

	Article: Q103788
	Product(s): Microsoft C Compiler
	Version(s): winnt:1.0,2.0,2.1,4.0
	Operating System(s): 
	Keyword(s): kbDlg kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	This article demonstrates how to create a modeless dialog box using a
	dialog-box template resource  using MFC.
	
	To build a CModeless dialog box, the following steps should be
	followed:
	
	1. Create a dialog class derived from CDialog and override the Create() member
	  function of CDialog. For example, you might have code that resembles the
	  following:
	
	        class CModeless: public CDialog
	             {
	               .
	               .
	               .
	               public:
	                   CModeless(){ }
	                   BOOL Create(UINT nID, CWnd * pWnd)
	                        { return CDialog::Create(nID,pWnd);}
	               .
	               .
	               .
	             };
	
	  NOTE: You could let ClassWizard generate the dialog class and then simply add
	  the Create() function.
	
	2. Write code to construct an object of the dialog class and create the dialog
	  box window. For example, if you have a menu item that should display the
	  dialog box, you might have code that resembles the following:
	
	        void CMainFrame::OnModeless()
	          {
	              pdlg = new CModeless;
	              pdlg->Create(IDD_DIALOG1,this);
	          }
	
	  where CMainFrame::pdlg is defined as:
	
	  CModeless * pdlg;
	
	  NOTE: It is important to allocate the object on the heap rather than the stack
	  if you want to prevent the modeless dialog box from being destroyed when the
	  function is exited.
	
	3. You must call CWnd::DestroyWindow() in OnCancel, or whenever the modeless
	  dialog box needs to be destroyed.
	
	        void CModeless::OnCancel()
	        {
	            DestroyWindow();
	        }
	
	4. Override CWnd::PostNcDestroy() in your dialog class to delete the dialog box
	  object:
	
	     virtual void CModeless::PostNcDestroy() {delete this;}
	
	  PostNcDestroy() is a virtual member function of the CWnd class that is called
	  by the OnNcDestroy() function.
	
	A modeless dialog class will typically override the OnOK() and
	OnCancel() member functions to call DestroyWindow() and should not
	call the base class CDialog::OnOK() and CDialog::OnCancel() functions.
	The CDialog::OnOK() and CDialog::OnCancel() functions call
	EndDialog(). EndDialog() should be called only when using modal dialog
	boxes.
	
	If you are using Dialog Data Exchange (DDX) and Dialog Data Validation
	(DDV), you're OnOK() handler for your dialog class might resemble the
	following:
	
	     void CModeless::OnOK()
	     {
	             if (!UpdateData(TRUE))
	               {
	                 TRACE0("UpdateData failed during dialog termination\n");
	                 // The UpdateData routine will set focus to correct item
	                 return;
	               }
	             DestroyWindow();
	     }
	
	SUMMARY
	=======
	
	
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbDlg kbMFC KbUIDesign kbVC100 kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:1.0,2.0,2.1,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
