---
layout: page
title: "Q141834: HOWTO: Change Icon or Bitmap of CListCtrl Item When Selected"
permalink: /kb/141/Q141834/
---

## Q141834: HOWTO: Change Icon or Bitmap of CListCtrl Item When Selected

	Article: Q141834
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCmnCtrls kbDocView kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 01-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	This article shows how to change the icon or bitmap of a CListCtrl item when it
	is selected.
	
	MORE INFORMATION
	================
	
	When you initialize the CListCtrl by calling CListCtrl::InsertItem(), you can
	pass in a value of I_IMAGECALLBACK for the index of the image. This means that
	the system expects you to fill in the image index when you get an
	LVN_GETDISPINFO notification. Inside of the handler for LVN_GETDISPINFO, you can
	check if the item is selected and set the appropriate image index.
	
	Sample Code
	-----------
	
	     BEGIN_MESSAGE_MAP(CTestView, CView)
	        //{ {AFX_MSG_MAP(CTestView)
	        ON_WM_CREATE()
	        //} }AFX_MSG_MAP
	        ON_NOTIFY (LVN_GETDISPINFO, IDI_LIST, OnGetDispInfo)
	     END_MESSAGE_MAP()
	
	     int CTestView::OnCreate(LPCREATESTRUCT lpCreateStruct)
	     {
	        if (CView::OnCreate(lpCreateStruct) == -1)
	           return -1;
	
	        // m_pImage is a CTestView's member variable of type CImageList*
	        // create the CImageList with 16x15 images
	        m_pImage = new CImageList();
	        VERIFY (m_pImage->Create (16, 15, TRUE, 0, 1));
	        CBitmap bm;
	        // IDR_MAINFRAME is the toolbar bitmap in a default AppWizard
	        // project.
	        bm.LoadBitmap (IDR_MAINFRAME);
	        // This will automatically parse the bitmap into nine images.
	        m_pImage->Add (&bm, RGB (192, 192, 192));
	
	        // m_pList is  CTestView's member variable of type CListCtrl*
	        // create the CListCtrl.
	        m_pList = new CListCtrl();
	        VERIFY (m_pList->Create (WS_VISIBLE | WS_CHILD | LVS_REPORT |
	            LVS_EDITLABELS, CRect (0, 0, 400, 400), this, IDI_LIST));
	        // Create column.
	        m_pList->InsertColumn (0, "Button Number", LVCFMT_LEFT, 100);
	        // Associate CImageList with CListCtrl.
	        m_pList->SetImageList (m_pImage, LVSIL_SMALL);
	
	        char szTemp[10];
	        for (int iCntr = 0; iCntr < 9; iCntr++)
	        {
	           wsprintf (szTemp, "%d", iCntr);
	           m_pList->InsertItem (LVIF_IMAGE | LVIF_TEXT,
	              iCntr, szTemp, 0, 0, I_IMAGECALLBACK, 0L);
	        }
	        return 0;
	     }
	
	     void CTestView::OnGetDispInfo (NMHDR* pnmhdr, LRESULT* pResult)
	     {
	        LV_DISPINFO* pdi = (LV_DISPINFO *) pnmhdr;
	
	        // Fill in the LV_ITEM structure with the image info.
	        // When an item is selected, the image is set to the first
	        // image (the new bitmap on the toolbar).
	        // When it is not selected, the image index is equal to the
	        // item number (that is, 0=new, 1=open, 2=save, and so on.)
	        if (LVIS_SELECTED == m_pList->GetItemState (pdi->item.iItem,
	                           LVIS_SELECTED))
	           pdi->item.iImage = 0;
	        else
	           pdi->item.iImage = pdi->item.iItem;
	     }
	
	     CTestView::~CTestView()
	     {
	        // Clean up.
	        delete m_pImage;
	        delete m_pList;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCmnCtrls kbDocView kbMFC KbUIDesign kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
