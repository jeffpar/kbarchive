---
layout: page
title: "Q198019: FIX: ATL Control Does Not Size Correctly"
permalink: kb/198/Q198019/
---

## Q198019: FIX: ATL Control Does Not Size Correctly

	Article: Q198019
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbservicepack kbActiveX kbATL kbCtrlCreate kbVC600 kbVC600bug kbATL300 kbATL300bug kbVS
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	One of the following occurs:
	
	- An ATL control appears much bigger than the specified width and height in a
	  control container.
	
	- When you print a Web page in Internet Explorer that contains an ATL control,
	  additional pages are printed because the control is perceived to be bigger
	  than it actually is.
	
	CAUSE
	=====
	
	By default, ATL control projects have two entries in the Property Map that allow
	the control's display size to be persisted. These entries are:
	
	- PROP_DATA_ENTRY("_cx", m_sizeExtent.cx, VT_UI4)
	- PROP_DATA_ENTRY("_cy", m_sizeExtent.cy, VT_UI4)
	
	If the control supports IPersistPropertyBagWhen, AtlIPersistPropertyBag_Load() is
	called when the control's properties are read in. In this function,
	IPropertyBag::Read() is called, but the VARIANT passed in is not initialized.
	Because the "vt" member of the VARIANT is set to VT_EMPTY instead of VT_UI4, in
	the case of "_cx" and "_cy" they are read in as some other type, which results
	in incorrect values.
	
	RESOLUTION
	==========
	
	Modify AtlIPersistPropertyBag_Load() in ATLCOM.H so that it initializes the "vt"
	member of the VARIANT before calling IPropertyBag::Read():
	
	  ATLINLINE ATLAPI AtlIPersistPropertyBag_Load(LPPROPERTYBAG pPropBag,
	
	     LPERRORLOG pErrorLog, ATL_PROPMAP_ENTRY* pMap, void* pThis,
	     IUnknown* pUnk)
	
	  {
	
	     USES_CONVERSION;
	     CComPtr<IDispatch> pDispatch;
	     const IID* piidOld = NULL;
	     for (int i = 0; pMap[i].pclsidPropPage != NULL; i++)
	     {
	        if (pMap[i].szDesc == NULL)
	           continue;
	
	        CComVariant var;
	        var.vt = pMap[i].vt;     // This line needs to be added.
	        ....
	     }
	
	  }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.This bug was corrected in Visual Studio
	6.0 Service Pack 3. For more information about Visual Studio service packs,
	please see the following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Insert an ATL Control in Visual InterDev.
	
	2. Click the Source tab.
	
	3. Click the Design tab.
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Samson Tanrena, Microsoft Corporation
	
	
	Additional query words: IPersistPropertyBagImpl Visual Basic VB IE Print Office Word Excel Access extent extents
	
	======================================================================
	Keywords          : kbservicepack kbActiveX kbATL kbCtrlCreate kbVC600 kbVC600bug kbATL300 kbATL300bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
