---
layout: page
title: "Q166768: HOWTO: Implementing a Custom Property Showing a FileOpen Dialog"
permalink: kb/166/Q166768/
---

## Q166768: HOWTO: Implementing a Custom Property Showing a FileOpen Dialog

	Article: Q166768
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2,4.2b,5.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbCmnDlgFileO kbCOMt kbCtrl kbInprocSvr kbMFC KbUIDesign kbVC420 kbVC50
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.2, 4.2b, 5.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates a way to show the FileOpen dialog box for a custom
	property in an ActiveX control. The custom property is implemented by using
	per-property browsing in an ActiveX control. For information on implementing
	such a custom property, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q140592 HOWTO: Implementing Per-Property Browsing for a Custom Property
	
	When the custom property is selected for editing in a design environment such as
	Microsoft Visual Basic, an ellipsis button (or three-dots button) will be shown
	on the Properties window for the property. Clicking the ellipsis button in the
	Properties window displays a FileOpen dialog box associated with the property.
	
	MORE INFORMATION
	================
	
	
	Because the Windows FileOpen common dialog box is not a COM object, it doesn't
	have a CLSID associated with it. However, if you follow the instructions in
	Knowledge Base article Q140592 to add a custom property to an ActiveX control,
	the MFC framework calls OnMapPropertyToPage() to obtain the CLSID of a property
	page that implements editing of the specified property. To achieve the goal of
	showing the FileOpen dialog box, create a "dummy" property page and return its
	CLSID in the OnMapPropertyToPage() function. Then, using ClassWizard, add an
	OnInitDialog() function to the "dummy" property page class and add the following
	code:
	
	     // CTestPropPage is the classname for the "dummy" property page.
	     BOOL CTestPropPage::OnInitDialog()
	     {
	       COlePropertyPage::OnInitDialog();
	
	       // Display the FileOpen dialog box because the property page is not
	       // visible yet.
	       CFileDialog dlg(TRUE);
	       int nRet = dlg.DoModal();
	
	       if(nRet == IDOK)
	       {
	         // Do something with the selected filename. For illustration
	         // purposes assume that the control associated with this property
	         // page has a property named FileName which is of type BSTR. The
	         // following code will set the FileName property in the associated
	         // control(s) to the filename selected by the user via the FileOpen
	         // dialog box.
	
	         DISPID dwFileNameDispID;
	         COleDispatchDriver PropDispDriver;
	         ULONG nObjects;
	
	         // Get the array of control IDispatch's stored in the property page.
	         LPDISPATCH FAR * lpObjectArray = GetObjectArray(&nObjects);
	
	         // Get the name of the selected file.
	         CString strFileName = dlg.GetFileName();
	
	         // Set the filename property for all the control objects currently
	         // associated with this property page.
	         for (ULONG i = 0; i < nObjects; i++)
	         {
	           // Get the Dispatch ID for the property and if successful set the
	           // value of the property.
	           LPCOLESTR lpOleStr = L"FileName";
	
	           if (SUCCEEDED(lpObjectArray[i]->GetIDsOfNames(IID_NULL,
	             (LPOLESTR*)&lpOleStr, 1, 0, &dwFileNameDispID)))
	           {
	             // Set the property.
	             PropDispDriver.AttachDispatch(lpObjectArray[i], FALSE);
	             PropDispDriver.SetProperty(dwFileNameDispID, VT_BSTR,
	               (LPCTSTR)strFileName);
	             PropDispDriver.DetachDispatch();
	           }
	         }
	       }
	
	       // We are done with the FileOpen dialog box. Now you need to kill
	       // the property page so the user won't see it.
	       EndDialog(-1);
	
	       return TRUE;  // return TRUE unless you set the focus to a control
	                     // EXCEPTION: OCX Property Pages should return FALSE}
	     }
	
	The following steps summarize how to show a custom dialog for a custom property:
	
	1. Insert a new dialog into the control project. Use ClassWizard to generate a
	  new class for this dialog and specify COlePropertyPage as the base class to
	  be used. This new class will be the "dummy" property page referenced above
	  (CTestPropPage as shown in article Q140592).
	
	2. Follow the steps in Knowledge Base article Q140592 to implement per-property
	  browsing for a custom property and specify the CLSID of the "dummy" property
	  page created above (i.e. CTestPropPage::guid) in the OnMapPropertyToPage()
	  method in the control.
	
	3. Use ClassWizard to add an OnInitDialog() method to the "dummy" property page
	  class and add the appropriate dialog creation and handling code as shown
	  above.
	
	NOTE: The technique presented in this article can be used to display any dialog
	box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbCmnDlgFileO kbCOMt kbCtrl kbInprocSvr kbMFC KbUIDesign kbVC420 kbVC500 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : winnt:4.2,4.2b,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
