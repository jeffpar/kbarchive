---
layout: page
title: "Q201879: HOWTO: Determine If an ActiveX Ambient Property Is Implemented"
permalink: /kb/201/Q201879/
---

## Q201879: HOWTO: Determine If an ActiveX Ambient Property Is Implemented

	Article: Q201879
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There may be situations where you want to use the ambient property values when
	they exist and your own values when the ambient property values don't exist. For
	example, when the AmbientBackColor isn't implemented, you may want to use the
	StockBackColor instead of the System Back Color. By design, this can not be
	accomplished with the COleControl::Ambient... methods.
	
	MORE INFORMATION
	================
	
	The following methods can be added to your derived COleControl class to provide
	greater flexibility in using ambient properties than provided by the default
	class methods. The methods have the following format:
	
	     bool Ambient...([in/out]type* name, [in]bool bInit = false);
	
	The return value is true if the ActiveX container implements the ambient property
	and false for all other cases. The name parameter is the address of a variable
	that is to be initialized with the ambient property. For AmbientFont, pDisp must
	be a pointer initialized to NULL; otherwise, it must point to a valid variable.
	Setting bInit to true causes the variable to be initialized to the default value
	as determined by MFC if the ambient property isn't implemented.
	
	  //*****************************************************
	  // Method definitions for your control's .h file.
	  //*****************************************************
	
	  bool AmbientAppearance(short* pAppearance, bool bInit = false);
	  bool AmbientBackColor(OLE_COLOR* pBackColor, bool bInit = false);
	  bool AmbientDisplayName(CString* pDisplayName, bool bInit = false);
	  bool AmbientFont(LPFONTDISP pDisp, bool bInit = false);
	  bool AmbientForeColor(OLE_COLOR* pForeColor, bool bInit = false);
	  bool AmbientLocaleID(LCID* plcid, bool bInit = false);
	  bool AmbientScaleUnits(CString* pStrScaleUnits, bool bInit = false);
	  bool AmbientTextAlign(short* pITextAlign, bool bInit = false);
	  bool AmbientUserMode(BOOL* pbUserMode, bool bInit = false);
	  bool AmbientUIDead(BOOL* pbUIDead, bool bInit = false);
	  bool AmbientShowGrabHandles(BOOL* pbShowGrab, bool bInit = false);
	  bool AmbientShowHatching(BOOL* pbShowHatch, bool bInit = false);
	
	  //*****************************************************
	  // Method implementations for your control's .cpp file.
	  //*****************************************************
	
	  //***** AmbientAppearance *****
	  bool CMyOleControl::AmbientAppearance(short* pAppearance,
	                                        bool bInit)
	  {
	
	      ASSERT (pAppearance);
	      if (!GetAmbientProperty(DISPID_AMBIENT_APPEARANCE,
	                              VT_I2,
	                              pAppearance)) {
	          if (bInit) *pAppearance = 0;
	              return false;
	      }else{
	          return true;
	      }
	  }
	
	  //***** AmbientBackColor *****
	  bool CMyOleControl::AmbientBackColor(OLE_COLOR* pBackColor,
	                                       bool bInit)
	  {
	      ASSERT (pBackColor);
	      if (!GetAmbientProperty(DISPID_AMBIENT_BACKCOLOR,
	                              VT_I4,
	                              pBackColor)) {
	          if (bInit) *pBackColor = GetSysColor(COLOR_WINDOW);
	              return false;
	      }else{
	          return true;
	      }
	  }
	
	  //***** AmbientDisplayName *****
	  bool CMyOleControl::AmbientDisplayName(CString* pDisplayName,
	                                         bool bInit)
	  {
	      ASSERT (pDisplayName);
	      if (!GetAmbientProperty(DISPID_AMBIENT_DISPLAYNAME,
	                              VT_BSTR,
	                              pDisplayName)) {
	          if (bInit) *pDisplayName = "CMyOleControl";
	              return false;
	      }else
	          return true;
	  }
	
	  //***** AmbientFont *****
	  bool CMyOleControl::AmbientFont(LPFONTDISP pDisp,
	                                  bool bInit)
	  {
	      // pDisp must be NULL.
	      ASSERT (!pDisp);
	
	      // Note: Caller MUST Release the font!
	      if (!GetAmbientProperty(DISPID_AMBIENT_FONT,
	                              VT_DISPATCH,
	                              &pDisp)) {
	          if (bInit) pDisp = NULL;
	              return false;
	      }else{
	          return true;
	      }
	  }
	
	  //***** AmbientForeColor *****
	  bool CMyOleControl::AmbientForeColor(OLE_COLOR* pForeColor,
	                                       bool bInit)
	  {
	      ASSERT (pForeColor);
	      if (!GetAmbientProperty(DISPID_AMBIENT_FORECOLOR,
	                              VT_I4,
	                              pForeColor)) {
	          if (bInit) *pForeColor = GetSysColor(COLOR_WINDOWTEXT);
	              return false;
	      }else{
	          return true;
	      }
	  }
	
	  //***** AmbientLocaleID *****
	  bool CMyOleControl::AmbientLocaleID(LCID* plcid, bool bInit)
	  {
	      ASSERT (plcid);
	      if (!GetAmbientProperty(DISPID_AMBIENT_LOCALEID,
	                              VT_I4,
	                              plcid)) {
	          if (bInit) *plcid = 0;
	              return false;
	      }else{
	          return true;
	      }
	  }
	
	  //***** AmbientScaleUnits *****
	  bool CMyOleControl::AmbientScaleUnits(CString* pStrScaleUnits,
	                                        bool bInit)
	  {
	      ASSERT (pStrScaleUnits);
	      if (!GetAmbientProperty(DISPID_AMBIENT_SCALEUNITS,
	                              VT_BSTR,
	                              pStrScaleUnits)) {
	          if (bInit) *pStrScaleUnits = "";
	              return false;
	      }else{
	          return true;
	      }
	  }
	
	  //***** AmbientTextAlign *****
	  bool CMyOleControl::AmbientTextAlign(short* piTextAlign, bool bInit)
	  {
	      ASSERT (piTextAlign);
	      if (!GetAmbientProperty(DISPID_AMBIENT_TEXTALIGN,
	                              VT_I2,
	                              piTextAlign)) {
	          if (bInit) *piTextAlign = 0;
	              return false;
	      }else{
	          return true;
	      }
	  }
	
	  //***** AmbientUserMode *****
	  bool CMyOleControl::AmbientUserMode(BOOL* pbUserMode, bool bInit)
	  {
	      ASSERT(pbUserMode);
	      if (!GetAmbientProperty(DISPID_AMBIENT_USERMODE,
	                              VT_BOOL,
	                              pbUserMode)) {
	          if (bInit) *pbUserMode = TRUE;
	              return false;
	      }else{
	          return true;
	      }
	  }
	
	  //***** AmbientUIDead *****
	  bool MyOleControl::AmbientUIDead(BOOL* pbUIDead, bool bInit)
	  {
	      ASSERT(pbUIDead);
	      if (!GetAmbientProperty(DISPID_AMBIENT_UIDEAD,
	                              VT_BOOL,
	                              pbUIDead)) {
	          if (bInit) *pbUIDead = FALSE;
	              return false;
	      }else{
	          return true;
	      }
	  }
	
	  //***** AmbientShowGrabHandles *****
	  bool CMyOleControl::AmbientShowGrabHandles(BOOL* pbShowGrab, bool bInit)
	  {
	      ASSERT(pbShowGrab);
	      if (!GetAmbientProperty(DISPID_AMBIENT_SHOWGRABHANDLES,
	                              VT_BOOL,
	                              pbShowGrab)) {
	          if (bInit) *pbShowGrab = TRUE;
	              return false;
	      }else{
	          return true;
	      }
	  }
	
	  //***** AmbientShowHatching *****
	  bool CMyOleControl::AmbientShowHatching(BOOL* pbShowHatch, bool bInit)
	  {
	      ASSERT(pbShowHatch);
	      if (!GetAmbientProperty(DISPID_AMBIENT_SHOWHATCHING,
	                              VT_BOOL,
	                              pbShowHatch)) {
	          if (bInit) *pbShowHatch = TRUE;
	              return false;
	      }else{
	          return true;
	      }
	  }
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Shawn W.
	Karr, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCOMt kbContainer kbCtrl kbMFC kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
