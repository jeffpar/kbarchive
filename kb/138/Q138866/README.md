---
layout: page
title: "Q138866: HOWTO: How to Set Default Values for Stock Properties in OLE Con"
permalink: /kb/138/Q138866/
---

## Q138866: HOWTO: How to Set Default Values for Stock Properties in OLE Con

{% raw %}

	Article: Q138866
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbActiveX kbCOMt kbCtrlCreate kbMFC kbVC200 kbVC400 kbVC410 kbGrpDSM
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When developing an OLE Control, you may decide that some of the properties
	should be serialized. This can be accomplished in the DoPropExchange() method of
	your COleControl-derived class by using the PX_ functions. The PX_ functions
	also allow you to specify a default value for the property, which is good
	programming practice. You may also want to give default values to any stock
	properties that are used by your control. The serialization and initialization
	of stock properties is handled by MFC in COleControl::DoPropExchange(pPX). To
	set a default value for a stock property, you need to work around some of MFC's
	functionality. This article explains how to do it.
	
	MORE INFORMATION
	================
	
	When you use the Microsoft Control Developer's Kit (CDK) to create the MFC
	framework for an OLE Control, it creates a COleControl-derived class with an
	overridden DoPropExchange() member function. By default, the overridden
	DoPropExchange() calls COleControl::DoPropExchange(). This in turn calls
	COleControl::ExchangeStockProps(), which contains the MFC code for serializing
	stock properties.
	
	Within this function, MFC uses the COleControl m_dwStockPropMask protected member
	variable to determine which stock properties you have added with Class Wizard.
	This mask can be modified in your DoPropExchange() to force MFC to ignore
	existing stock properties and therefore allow you to add your own code. Ideally
	you should copy the relevant code already present in
	COleControl::ExchangeStockProps(), and then modify it as necessary.
	
	The following sample code shows how to accomplish this for the Caption stock
	property by modifying step three of the Circ OLE Control tutorial.
	
	Sample Code
	-----------
	
	  // MANUAL CONTROL OF MAKING Caption PERSISTANT.
	  // To test the initialization of the caption stock property
	  // replace the circle3 samples DoPropExchange function with the
	  // following version.
	
	  // These #defines can be found in the ..\Msvc20\Cdk32\Src\Ctlprop.cpp
	  // file and are given here to remove the need to continually track them
	  // down. In the code, only STOCKPROP_CAPTION is used.
	  #define STOCKPROP_BACKCOLOR     0x00000001
	  #define STOCKPROP_CAPTION       0x00000002
	  #define STOCKPROP_FONT          0x00000004
	  #define STOCKPROP_FORECOLOR     0x00000008
	  #define STOCKPROP_TEXT          0x00000010
	  #define STOCKPROP_BORDERSTYLE   0x00000020
	  #define STOCKPROP_ENABLED       0x00000040
	
	  void CCirc3Ctrl::DoPropExchange(CPropExchange* pPX)
	  {
	     ExchangeVersion(pPX, MAKELONG(_wVerMinor, _wVerMajor));
	     BOOL bLoading = pPX->IsLoading();
	
	     CString strText;
	     if (!bLoading)
	        strText = InternalGetText();
	
	     PX_String(pPX,_T("Caption"),strText,_T("Caption"));
	     if (bLoading) {
	        TRY
	           SetText(strText);
	        END_TRY
	     }
	
	     // Mask out the Caption stock property before
	     // calling the base class functionality.
	     m_dwStockPropMask &= ~STOCKPROP_CAPTION;
	
	     // Call the base class.
	     COleControl::DoPropExchange(pPX);
	
	     // Mask the Caption property bit back in to minimize
	     // possible side effects.
	     m_dwStockPropMask |= STOCKPROP_CAPTION;
	
	     if (pPX->GetVersion() == (DWORD)MAKELONG(_wVerMinor, _wVerMajor))
	     {
	        PX_Bool(pPX, _T("CircleShape"), m_circleShape, TRUE);
	        PX_Short(pPX, _T("CircleOffset"), m_circleOffset, 0);
	        PX_Long(pPX, _T("FlashColor"), (long &)m_flashColor,
	                        RGB(0xFF, 0x00, 0x00));
	        PX_String(pPX, _T("Note"), m_note, _T("Note"));
	     }else if (pPX->IsLoading()) {
	        m_circleShape = TRUE;
	        m_circleOffset = 0;
	        m_flashColor = RGB(0xFF, 0x00, 0x00);
	        m_note = _T("");
	     }
	  }
	
	REFERENCES
	==========
	
	The functions discussed in this article can be found using the Find in Files
	feature of Visual C++; in version 2.x within the Cdk32\Src directory and in
	version 4.x within the mfc\src subdirectory.
	
	Additional query words: 2.00 2.10 2.20 3.0 3.1 3.2 3.00 3.10 3.20 4.00 4.10 cdk ocx initialize
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbActiveX kbCOMt kbCtrlCreate kbMFC kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC200 kbVC210
	Version           : winnt:2.0,2.1,2.2,4.0,4.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
