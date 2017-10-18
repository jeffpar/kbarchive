---
layout: page
title: "Q234545: Opropsheet.exe Modeless OLE Property Sheet Using MFC"
permalink: kb/234/Q234545/
---

## Q234545: Opropsheet.exe Modeless OLE Property Sheet Using MFC

	Article: Q234545
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbsample kbActiveX kbCOMt kbCtrl kbDlg kbMFC kbPropSheet kbVC500 kbVC600 kbDSupport kbG
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The OLE API OleCreatePropertyFrame() is used to create a modal property sheet
	displaying the property pages supported by a given object. This API does not
	support modeless creation. There is no equivalent API for creating a modeless
	OLE property sheet. This article explains how to create one using MFC.
	
	Opropsheet.exe is a self extracting archive that contains a Visual C++ 6.0
	workspace (Opropsheet.dsw). This workspace contains two projects, CTRL and
	PROPCLI. The CTRL project is an ATL full control. This control supports two OLE
	property pages, the system-provided stock color and a custom property page
	called PropPageCustom. The PROPCLI project is an MFC dialog box-based client
	application for the CTRL control. This project also contains the code for the
	modeless property sheet. After invoking the property sheet, you can change
	properties and see the control get updated; because it is modeless, you can
	leave it active and return to the main UI.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Opropsheet.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To create a modeless OLE Property Sheet, you need to write your own property
	frame and property page site. This is not a trivial task because you also need
	to implement the rest of what OleCreatePropertyFrame gives you, that is, a
	parent dialog box with a tab control (the property sheet), display and hiding of
	property pages, navigation between pages and the property sheet, creation and
	destruction of the property page objects, and implementation of
	IPropertyPageSite.
	
	Fortunately, the MFC classes CPropertySheet and CPropertyPage help with this by
	handling all of the page creation, display, hiding, navigation, and modeless
	creation.
	
	The following outline will help you get started:
	
	1. Implement IPropertyPageSite. Because an instance of IPropertyPageSite is
	  required for each page, this can be done in the derived CPropertyPage class.
	  Use the ClassWizard to create a class derived from CPropertyPage and add
	  automation support. Even though you are not implementing automation, this
	  gives you many of the macros necessary for implementing interfaces. See
	  "TN038: MFC/OLE IUnknown Implementation" and "Tom's Handy Dandy MFC/COM/MIDL
	  Recipe Book for Creating Custom Interfaces," in the Visual C++ documentation
	  for details on implementing custom interfaces in MFC. For implementation
	  details of IPropertyPageSite, see "Inside OLE" on MSDN at:
	
	  The Property Page Site: IPropertyPageSite
	
	2. In the Create() call for your CPropertySheet class, called for modeless
	  creation, ISpecifyPropertyPages::GetPages() is called to retrieve the count
	  and CLSID of the pages supported by the server. Create your CPropertyPage
	  objects on the heap and add them to the property page collection via
	  AddPage(), as follows:
	
	  BOOL COlePropSheet::Create(CWnd* pParentWnd, DWORD dwStyle, DWORD dwExStyle)
	  {
	  	ASSERT(m_pUnkServer != NULL);
	
	  	// Get number of property pages that reside in object.
	  	ISpecifyPropertyPages * lpSPP;
	  	HRESULT hRes = m_pUnkServer->QueryInterface(IID_ISpecifyPropertyPages, (LPVOID*)&lpSPP);
	  	if( FAILED( hRes ) )
	  		AfxThrowOleException( hRes );
	
	  	CAUUID cauuid;
	  	lpSPP->GetPages(&cauuid);
	  	m_iPageCnt = cauuid.cElems;
	  	lpSPP->Release();
	
	  	for (UINT i = 0; i < m_iPageCnt; i++)
	  	{
	  		// Create CPropertyPages and Property page sites.
	  		COlePropPage * pPage = new COlePropPage(cauuid.pElems[i], m_pUnkServer);
	  		if (pPage == NULL)
	  			return FALSE;
	  		m_pageArray.Add(pPage);
	  		AddPage((COlePropPage*)m_pageArray[i]);			
	  	}
	  	
	  	return CPropertySheet::Create(pParentWnd, dwStyle, dwExStyle);
	  }
	
	3. Create the COM property pages as children of MFC property pages. The idea is
	  that in the constructor of your derived CPropertyPage, you call
	  CoCreateInstance() to create the COM property page and parent it to a
	  placeholder property page that your CPropertyPage provides. The setting of
	  the page site and the number of objects the page supports is also done here.
	  Additionally, IPropertyPage::GetPageInfo() is used to retrieve the title of
	  the property page. This will be used as the text for the tab of the property
	  page. The "parenting" of the placeholder page to the COM page takes place in
	  the OnInitDialog handler of the property page (see below). The COM object is
	  released in the page destructor. Your property page class should have data
	  members for the CLSID of the COM property page, IProperyPage pointer, and an
	  LPUNKNOWN pointer back to the server object. For example:
	
	  COlePropPage::COlePropPage(CLSID clsidPage, LPUNKNOWN lpUnkPage) : CPropertyPage(COlePropPage::IDD),
	   m_clsidPage(clsidPage), m_pObject(lpUnkPage)
	  {
	      HRESULT hRes = E_FAIL;
	      m_pPropPage=NULL; 
	      try {
	          // Create COM Property page and get IPropertyPage interface.
	          hRes = CoCreateInstance( m_clsidPage, NULL, CLSCTX_INPROC, IID_IPropertyPage, (void**)&m_pPropPage );
	          if( FAILED( hRes ) )
	              AfxThrowOleException( hRes );
	    
	          hRes = m_pPropPage->SetPageSite( (IPropertyPageSite*) GetInterface( &IID_IPropertyPageSite ) );
	          if( FAILED( hRes ) )
	              AfxThrowOleException( hRes );
	    
	          hRes = m_pPropPage->SetObjects( 1, &m_pObject );
	          if( FAILED( hRes ) )
	              AfxThrowOleException( hRes );
	    
	          IMalloc     *pIMalloc;
	          if (FAILED(CoGetMalloc(MEMCTX_TASK, &pIMalloc)))
	              AfxThrowOleException(E_FAIL);
	    
	          PROPPAGEINFO* pPPI = (PROPPAGEINFO*) pIMalloc->Alloc(sizeof(PROPPAGEINFO));
	          pPPI->cb = sizeof(PROPPAGEINFO);
	          hRes = m_pPropPage->GetPageInfo(pPPI);
	          m_strCaption.Format("%S", pPPI->pszTitle);
	          m_psp.pszTitle = m_strCaption;
	          m_psp.dwFlags |= PSP_USETITLE;
	   
	          pIMalloc->Free(pPPI);
	          pIMalloc->Release();
	    
	          }
	          catch (COleException * e)
	          {
	              throw (e);
	          }
	      file://{ {AFX_DATA_INIT(COlePropPage)
	      // <B>NOTE</B>: The ClassWizard adds member initialization here
	      file://} }AFX_DATA_INIT
	  }
	
	4. One problem with using the COM property pages as children of MFC property
	  pages is that it creates a nested dialog-box scenario. In this case, the COM
	  property page must have the WS_EX_CONTROLPARENT style to allow the user to
	  use mnemonics and the dialog box navigation keys to move the focus to and
	  from the controls in the COM property page. Adding this style is done in the
	  OnInitDialog handler of the page, as follows:
	
	  // Parent COM Property page to placeholder page,
	  // add WS_EX_CONTROLPARENT to COM property page.
	  BOOL COlePropPage::OnInitDialog() 
	  {
	      CPropertyPage::OnInitDialog();
	      HRESULT hRes = E_FAIL;
	   
	      try {
	          // Activate COM property page and parent to placeholder page. 
	          CRect pgrect;
	          GetWindowRect(&pgrect);
	          ScreenToClient(pgrect);
	          hRes = m_pPropPage->Activate( GetSafeHwnd(), pgrect, TRUE );
	          if( FAILED( hRes ) )
	              AfxThrowOleException( hRes );
	    
	          hRes = m_pPropPage->Show( SW_SHOW );
	          if( FAILED( hRes ) )
	              AfxThrowOleException( hRes );
	    
	      } catch (COleException * e)
	      {
	          throw (e);
	      }
	   
	      // Add WS_EX_CONTROLPARENT style to property page
	      // necessary to allow tabbing from page to sheet.
	      // Get COM Prop Page.
	      CWnd * pWnd = GetWindow(GW_CHILD);
	      CString str;
	      ::GetClassName(pWnd->GetSafeHwnd(), str.GetBuffer(128), 128);
	      str.ReleaseBuffer();
	      if (str == (CString)"#32770")  // #32770 is dialog class name
	          pWnd->ModifyStyleEx(0,WS_EX_CONTROLPARENT,0);
	   
	  return TRUE;  // Return TRUE unless you set the focus to a control.
	  }
	
	5. The creation and destruction of the modeless property sheet follows the same
	  rules for a modeless dialog box. For additional information, please see the
	  following articles in the Microsoft Knowledge Base:
	
	  Q103788 Creating a modeless dialog box with MFC libraries
	
	  Q117500 Using Accelerators with MFC Modeless Dialog
	
	6. The Create() call to create the property sheet, COM property pages, and MFC
	  property pages resembles the following:
	
	      m_pModelessSheet = new CModelessOPS(m_ctrl.GetControlUnknown(),
	           _T("Modeless Ole Property Sheet"));
	      m_pModelessSheet->Create();
	
	  With the exception of the additional parameter in the property sheet
	  constructor, this is exactly how you would create a "normal" modeless
	  property sheet.
	
	7. The default MFC implementation of modeless property sheets does not include
	  the display of the Apply, OK, or Cancel button. Normally, when the Apply or
	  OK button is clicked, the properties for the object are updated. How are the
	  changes made in the property pages applied to the object for this sample? In
	  IPropertyPageSite::OnStatusChanged (implemented in the page class) and the
	  OnKillFocus handler for the page, the IPropertyPage::Apply method is called.
	
	  For additional information about how to display the Apply, OK, and Cancel
	  buttons, please see the following article in the Microsoft Knowledge Base:
	
	  Q146916 HOWTO: Create a Modeless CPropertySheet With Standard Buttons
	
	REFERENCES
	==========
	
	Visual C++ documentation: TN038: MFC/OLE IUnknown Implementation.
	
	Visual C++ documentation: Tom's Handy Dandy MFC/COM/MIDL Recipe Book for Creating
	Custom Interfaces.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q103788 Creating a modeless dialog box with MFC libraries
	
	  Q117500 Using Accelerators with MFC Modeless Dialog
	
	  Q146916 HOWTO: Create a Modeless CPropertySheet With Standard Buttons
	
	MSDN, see "Inside OLE": The Property Page Site: IPropertyPageSite
	(http://msdn.microsoft.com/library/books/techlang/inole/D1/S1277.HTM)
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Mike Francis, Microsoft Corporation
	
	
	Additional query words: CPropertySheet IPropertyPage IPropertyPageSite WS_EX_CONTROLPARENT ISpecifyPropertyPages
	
	======================================================================
	Keywords          : kbsample kbActiveX kbCOMt kbCtrl kbDlg kbMFC kbPropSheet kbVC500 kbVC600 kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:5.0,6.0
	
	=============================================================================
	
