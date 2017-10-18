---
layout: page
title: "Q199516: HOWTO: Set Default Values for ActiveX Control Stock Properties"
permalink: kb/199/Q199516/
---

## Q199516: HOWTO: Set Default Values for ActiveX Control Stock Properties

	Article: Q199516
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbActiveX kbCOMt kbCtrl kbMFC kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	When developing an ActiveX Control, you may decide that some of the properties
	should be serialized. This can be accomplished in the DoPropExchange() method of
	your COleControl-derived class by using the PX_ functions. The PX_ functions
	also allow you to specify a default value for the property, which is a good
	programming practice. You may also want to give default values to any stock
	properties that are used by your control. The serialization and initialization
	of stock properties is handled by MFC in COleControl::DoPropExchange(pPX). To
	set a default value for a stock property, you need to work around some of MFC's
	functionality. This article explains how to do this.
	
	MORE INFORMATION
	================
	
	Using AppWizard to generate an MFC ActiveX control project creates a
	COleControl-derived class with an overridden DoPropExchange() member function.
	By default, the overridden DoPropExchange() calls COleControl::DoPropExchange().
	This in turn calls COleControl::ExchangeStockProps(), which contains the MFC
	code for serializing stock properties.
	
	Within this function, MFC (pre version 4.2) uses the
	COleControl::m_dwStockPropMask protected member variable to determine which
	stock properties you have added with Class Wizard. This mask can be modified in
	your DoPropExchange() to force MFC to ignore existing stock properties and
	therefore allow you to add your own code. Ideally, you should copy the relevant
	code already present in COleControl::ExchangeStockProps(), and then modify it as
	necessary.
	
	In MFC version 4.2 and later, a different variable is used as the Stock Property
	mask. In the following code, GetStockPropMask and SetStockPropMask hide these
	differences.
	
	The following sample code shows how to accomplish this for the Caption stock
	property by modifying step three of the Circ OLE Control tutorial.
	
	Sample Code
	-----------
	
	     class CCirc3Ctrl : public COleControl
	     {
	     ...
	     public:
	         void SetStockPropMask(DWORD dwStockPropMask);
	         DWORD GetStockPropMask();
	     ...
	     }
	
	     // MANUAL CONTROL OF MAKING Caption PERSISTANT.
	     // To test the initialization of the caption stock property
	     // replace the circle3 samples DoPropExchange function with the
	     // following version.
	
	     // These #defines can be found in the Ctlprop.cpp file and are given
	     // here to remove the need to continually track them down. In the
	     // code, only STOCKPROP_CAPTION is used.
	     #define STOCKPROP_BACKCOLOR     0x00000001
	     #define STOCKPROP_CAPTION       0x00000002
	     #define STOCKPROP_FONT          0x00000004
	     #define STOCKPROP_FORECOLOR     0x00000008
	     #define STOCKPROP_TEXT          0x00000010
	     #define STOCKPROP_BORDERSTYLE   0x00000020
	     #define STOCKPROP_ENABLED       0x00000040
	     //**************************************************************
	     #define STOCKPROP_APPEARANCE    0x00000080   // New in VC 5.0
	     //**************************************************************
	
	     // Helper method for setting the Stock property mask.
	     void CCirc3Ctrl::SetStockPropMask(DWORD dwStockPropMask)
	     {
	     #if _MFC_VER >= 0x0420   // MFC version >= v4.2
	         *GetDispatchMap()->lpStockPropMask = dwStockPropMask;
	     #else                    // MFC version < v4.2
	         m_dwStockPropMask = dwStockPropMask;
	     #endif
	     }
	
	     // Helper method to Get the Stock property mask.
	     DWORD CCirc3Ctrl::GetStockPropMask()
	     {
	     #if _MFC_VER >= 0x0420   // MFC version >= v4.2
	         return COleControl::GetStockPropMask();
	     #else                    // MFC version < v4.2
	         return m_dwStockPropMask;
	     #endif
	     }
	
	     void CCirc3Ctrl::DoPropExchange(CPropExchange* pPX)
	     {
	         ExchangeVersion(pPX, MAKELONG(_wVerMinor, _wVerMajor));
	     // Need to comment out the following line since it will be <BR/>
	     // called later.
	     // COleControl::DoPropExchange(pPX);
	
	      // Handle Property Exchange of the Stock Property Caption ourselves.
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
	
	      // Bypass MFC's Property Exchange of the Stock Property Caption.
	      DWORD dwStockPropMask = GetStockPropMask();
	      DWORD tempMask = dwStockPropMask;
	
	      // Remove all stock property flags we are handling from tempMask.
	      tempMask &= ~STOCKPROP_CAPTION;
	      SetStockPropMask(tempMask);
	
	      // Let MFC handle any stock properties that we aren't.
	      COleControl::DoPropExchange(pPX);
	
	      // Reset the Stock Property Mask.
	      SetStockPropMask(dwStockPropMask);
	
	      if (pPX->GetVersion() == (DWORD)MAKELONG(_wVerMinor, _wVerMajor))
	      {
	          PX_Bool(pPX, _T("CircleShape"), m_circleShape, TRUE);
	          PX_Short(pPX, _T("CircleOffset"), m_circleOffset, 0);
	          PX_Long(pPX, _T("FlashColor"), (long &)m_flashColor,
	          RGB(0xFF, 0x00, 0x00));
	          PX_String(pPX, _T("Note"), m_note, _T(""));
	      }
	      else if (pPX->IsLoading())
	      {
	          // Skip over persistent data.
	          BOOL bDummy;
	          short sDummy;
	          long lDummy;
	          CString strDummy;
	          PX_Bool(pPX, _T("CircleShape"), bDummy, FALSE);
	          PX_Short(pPX, _T("CircleOffset"), sDummy, 0);
	          PX_Long(pPX, _T("FlashColor"), lDummy, 0);
	          PX_String(pPX, _T("Note"), strDummy, _T(""));
	
	          // Force property values to these defaults.
	          m_circleShape = TRUE;
	          m_circleOffset = 0;
	          m_flashColor = RGB(0xFF, 0x00, 0x00);
	          m_note = _T("");
	      }
	     }
	
	REFERENCES
	==========
	
	The functions discussed in this article can be found using the Find in Files
	feature of Visual C++. In version 2.x, search within the Cdk32\Src directory and
	in version 4.x or later, search within the mfc\src subdirectory.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Shawn
	William Karr, Microsoft Corporation.
	
	
	Additional query words: 3.0 3.1 3.2 3.00 3.10 3.20 4.2 4.2b 5.0 cdk ole activex ocx initialize mfc
	
	======================================================================
	Keywords          : kbnokeyword kbActiveX kbCOMt kbCtrl kbMFC kbVC200 kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
