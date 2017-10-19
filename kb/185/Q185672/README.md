---
layout: page
title: "Q185672: HOWTO: How to Initialize Child Controls in a Derived CDialogBar"
permalink: /kb/185/Q185672/
---

## Q185672: HOWTO: How to Initialize Child Controls in a Derived CDialogBar

	Article: Q185672
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbMFC KbUIDesign kbVC500 kbVC600 kbGrpDSMFCATL kbMFCCtrlBar
	Last Modified: 21-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating a simple CDialogBar, such as one with only CButtons similar to
	MFC's print preview, it is not necessary to derive from CDialogBar because the
	parent of CControlBar receives the notification messages from any child
	controls.
	
	However, in the case of a more complex CDialogBar, which might have a drop- down
	combo box, a treeview, or ActiveX control, it might be useful to derive from
	CDialogBar to provide initialization for the child controls.
	
	Because ClassWizard does not support deriving a class from CDialogBar, this
	article shows the steps necessary to create a class from CDialog and then
	"convert" the class to CDialogBar.
	
	MORE INFORMATION
	================
	
	To start out, create a CDialog class with the child controls you want to use.
	You can transform the CDialog class into a CDialogBar class using the following
	nine steps:
	
	1. Change the base class from CDialog to CDialogBar in the class declaration.
	  Don't forget to also change the base class in BEGIN_MESSAGE_MAP in the .cpp
	  file.
	
	2. Change the constructor in both the .h and the .cpp files. Also make the
	  change to the DoDataExchange(). Below are three items to change.
	
	  Change the following from
	
	        CMyDlgBar (CWnd* pParent = NULL);   // standard constructor
	
	        CMyDlgBar:: CMyDlgBar (CWnd* pParent /*=NULL*/)
	           : CDialog(CMyDlgBar::IDD, pParent)
	        {
	           ...
	
	        void CMyDlgBar::DoDataExchange(CDataExchange* pDX)
	        {
	           CDialog::DoDataExchange(pDX);
	           ...
	
	to the following:
	
	        CMyDlgBar ();   // standard constructor
	
	        CMyDlgBar:: CMyDlgBar ()
	        {
	           ...
	
	        void CMyDlgBar::DoDataExchange(CDataExchange* pDX)
	        {
	           CDialogBar::DoDataExchange(pDX);
	           ...
	
	The key to the transformation is the conversion of the virtual OnInitDialog()
	member function to the WM_INITDIALOG message mapped method by changing the
	OnInitDialog method and by adding the ON_MESSAGE() handler. You may not have an
	override of OnInitDialog(). If not, add one before proceeding.
	3. Remove "virtual BOOL OnInitDialog();" from the class header and add "afx_msg
	  LONG OnInitDialog ( UINT, LONG );" in its place. For example:
	
	        class CMyDlgBar : public CDialogBar
	        {
	           ...
	        // Implementation
	        protected:
	
	           // Generated message map functions
	           //{ {AFX_MSG(CMyDlgBar)
	           virtual BOOL OnInitDialog();                // <-Remove this line.
	           //} }AFX_MSG
	
	           afx_msg LONG OnInitDialog ( UINT, LONG );   // <-Add this line.
	           DECLARE_MESSAGE_MAP()
	        };
	
	  Now, in the class implementation section, make the corresponding changes.
	
	4. Add "ON_MESSAGE(WM_INITDIALOG, OnInitDialog );" to the message map in the
	  .CPP implementation file. For example:
	
	        BEGIN_MESSAGE_MAP(CMyDlgBar, CDialogBar)
	
	           //{ {AFX_MSG_MAP(CMyDlgBar)
	           ...
	           //} }AFX_MSG_MAP
	           ON_MESSAGE(WM_INITDIALOG, OnInitDialog )    // <-- Add this line.
	        END_MESSAGE_MAP()
	
	  Now, convert the virtual OnInitDialog() to the message-mapped OnInitDialog().
	
	5. Make the OnInitDialog() conversion as follows:
	
	     Change the following:
	
	        BOOL CMyDlgBar::OnInitDialog()
	        {
	           CDialog::OnInitDialog();   // <-- Replace this line:
	              ...
	
	  to the following:
	
	  LONG CMyDlgBar::OnInitDialog ( UINT wParam, LONG lParam)
	           {
	                            // <-- with these lines. -->
	
	              BOOL bRet = HandleInitDialog(wParam, lParam);
	
	              if (!UpdateData(FALSE))
	              {
	                 TRACE0("Warning: UpdateData failed during dialog init.\n");
	              }
	              ...
	
	              return bRet;
	
	  The CDialogBar class doesn't have a virtual OnInitDialog(), and therefore
	  calling one does not work. UpdateData is called to subclass or initialize any
	  child controls.
	
	6. Make sure the dialog box resource styles to the following:
	
	  Style: Child
	  Boarder: None
	  Visible: Unchecked
	
	  At this point, everything has been reconnected to make the transformation from
	  a CDialog class to a CDialogBar class work correctly. Now, create and use it.
	
	7. Add an instance of the derived CDialogBar to the CframeWnd-derived class
	  (normally called CMainFrame). For example:
	
	        class CMainFrame : public CFrameWnd
	        {
	            ...
	            CMyDlgBar m_myDlgBar;
	            ...
	        };
	
	8. Call the create method for the m_myDlgBar variable in the
	  CFrameWnd::OnCreate() method similar to the following:
	
	        int CMainFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
	        {
	           ...
	           if (!m_myDlgBar.Create(this, IDD_DLGBAR1, CBRS_LEFT,
	              IDD_DLGBAR1))
	           {
	              TRACE0("Failed to create dialog bar\n");
	              return -1;      // fail to create
	           }
	           ...
	        }
	
	9. Finally, if you want to support dynamic docking and resizing of the
	  CDialogBar, add the following lines to the end of CMainFrame::OnCreate():
	
	        int CMainFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
	        {
	           ...
	           m_myDlgBar.SetBarStyle(m_wndToolBar.GetBarStyle() |
	              CBRS_TOOLTIPS | CBRS_FLYBY | CBRS_SIZE_DYNAMIC);
	           m_myDlgBar.EnableDocking(CBRS_ALIGN_ANY);
	           DockControlBar(&m_myDlgBar);
	
	           return 0;
	        }
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q99161 HOWTO: Derive From Classes not Listed in ClassWizard
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbMFC KbUIDesign kbVC500 kbVC600 kbGrpDSMFCATL kbMFCCtrlBar 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
