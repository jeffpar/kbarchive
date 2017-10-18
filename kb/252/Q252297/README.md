---
layout: page
title: "Q252297: BUG: Calling GetPageInfo Can Give Unhandled Exception"
permalink: kb/252/Q252297/
---

## Q252297: BUG: Calling GetPageInfo Can Give Unhandled Exception

	Article: Q252297
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL kbCOMt kbMFC kbPropSheet kbVBp600bug kbDSupport kbGrpDSMFCATL kbArchite
	Last Modified: 26-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you call IPropertyPage::GetPageInfo on any of the stock property pages
	(CLSID_StockColorPage, CLSID_StockFontPage, or CLSID_StockPicturePage) exported
	from MsStkPrp.dll, you may receive an unhandled exception.
	
	RESOLUTION
	==========
	
	Work around this problem by setting the property page site; call
	IPropertyPage::SetPageSite, and pass a pointer to an implementation of
	IPropertyPageSite immediately after using the CoCreate function of the property
	page object or anytime before you call GetPageInfo.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	You may encounter this problem if you are developing your own custom property
	frames and fail to site the property page object properly.
	
	Steps to Reproduce Behavior
	---------------------------
	
	If you have code similar to the following in your component, you receive the
	error described in the "Symptoms" section.
	
	  	HRESULT hr;
	  	CAUUID pages;
	  	CComPtr<IPropertyPage> pPropertyPage;
	
	  	CComPtr<ISpecifyPropertyPages> pStockPage;
	  	hr = this->QueryInterface(IID_ISpecifyPropertyPages, (void **)&pStockPage);
	
	  	if (SUCCEEDED(hr))
	  		hr = pStockPage->GetPages(&pages);
	
	  	if (SUCCEEDED(hr))
	  		hr = ::CoCreateInstance(pages.pElems[0], NULL, CLSCTX_ALL , IID_IPropertyPage, (void **)&pPropertyPage);
	
	  	if (SUCCEEDED(hr))
	  	{
	  		PROPPAGEINFO pageInfo;
	  		memset(&pageInfo, 0, sizeof(PROPPAGEINFO));
	  		pageInfo.cb = sizeof(PROPPAGEINFO);
	  		
	  		// Will give unhandled exception here....
	  		hr = pPropertyPage->GetPageInfo(&pageInfo);
	  		if (SUCCEEDED(hr))
	  		{
	  			// Do something.
	  		}
	  	}
	
	REFERENCES
	==========
	
	- OleCreatePropertyFrame
	
	- OleCreatePropertyFrameIndirect
	
	- IPropertyPage
	
	- IPropertyPageSite
	
	- ISpecifyPropertyPages
	
	- IPerPropertyBrowsing
	
	Additional query words: custom OleCreatePropertyFrame OleCreatePropertyFrameIndirect IPerPropertyBrowsing
	
	======================================================================
	Keywords          : kbActiveX kbATL kbCOMt kbMFC kbPropSheet kbVBp600bug kbDSupport kbGrpDSMFCATL kbArchitecture 
	Technology        : kbVCsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
