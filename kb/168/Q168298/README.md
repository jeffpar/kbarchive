---
layout: page
title: "Q168298: HOWTO: DDP_Text Not implemented for COleDateTime and COleCurrenc"
permalink: /kb/168/Q168298/
---

## Q168298: HOWTO: DDP_Text Not implemented for COleDateTime and COleCurrenc

	Article: Q168298
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbole kbSample kbCOMt kbDlg kbMFC kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DDP_Text functions for COleCurrency and COleDateTime are not implemented in MFC.
	However, code that uses these functions is added to DoDataExchange when
	ClassWizard is used to associate a CURRENCY or DATE property with a control on a
	property page. This results in the following compilation errors.
	
	For CURRENCY property:
	
	  <filename(lineno)> : error C2665: 'DDP_Text' : none of the 9 overloads
	  can convert parameter 3 from type 'class COleCurrency'
	
	For DATE property:
	
	  <filename(lineno)> : error C2665: 'DDP_Text' : none of the 9 overloads
	  can convert parameter 3 from type 'class COleDateTime'
	
	You must implement the DDP functions for COleCurrency and COleDateTime in order
	to associate a control on a property page with a property of one of these
	types.
	
	The DdpText.exe sample extracts a Visual C++ 5.0 ActiveX control project; it
	contains code for overrides of DDP_Text for COleCurrency and COleDateTime.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	DdpText.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	When you associate CURRENCY and DATE properties with edit controls on a property
	page, ClassWizard adds the following member variables to the COlePropertyPage
	derived class:
	
	     COleCurrency m_Currency;
	     COleDateTime m_Date;
	
	It adds the following to the DoDataExchange for the property page:
	
	     DDP_Text(pDX, IDC_CURRENCY, m_Currency, _T("CurrencyProp") );
	     DDX_Text(pDX, IDC_CURRENCY, m_Currency);
	     DDP_Text(pDX, IDC_DATE, m_Date, _T("DateProp") );
	     DDX_Text(pDX, IDC_DATE, m_Date);
	
	This results in a compile error because the compiler cannot find overrides of
	DDP_TEXT for COleCurrency and COleDateTime.
	
	To use the code in the sample, it is necessary to derive your code from
	CMyOlePropertyPage instead of COlePropertyPage. The project also has code for
	CMyOlePropertyPage.
	
	MyPropPg.h and MyPropPg.cpp have the code required to add code for DDP_Text to
	your project. Add these files to your project.
	
	Use ClassWizard to associate properties with controls on your property page. Now
	modify the property page class so that it is derived from CMyOlePropertyPage.
	The following steps are required:
	
	1. Add the following line to your property page header file:
	
	        #include "MyPropPg.h"
	
	2. Replace all instances of COlePropertyPage in the header and .CPP file for
	  your project with CMyOlePropertyPage.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Sridhar S.
	Madhugiri, Microsoft Corporation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbole kbSample kbCOMt kbDlg kbMFC kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	
