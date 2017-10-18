---
layout: page
title: "Q163244: PRB: RFX Unnecessarily Updates Floating Point Fields"
permalink: kb/163/Q163244/
---

## Q163244: PRB: RFX Unnecessarily Updates Floating Point Fields

	Article: Q163244
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 1.52, 1.52b, 1.52c 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1, 2.2, 4.0, 4.1, 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Foundation Classes (MFC) ODBC database classes to
	access tables containing floating point numeric data, you may observe that some
	numeric fields are updated unnecessarily. Fields that contain values that were
	not modified may be marked as dirty and, as a result, are unnecessarily updated.
	
	CAUSE
	=====
	
	RFX_Double and RFX_Single are the RFX functions that the wizards select to
	handle the SQL data types SQL_DOUBLE and SQL_REAL, respectively. Both of these
	functions detect when recordset member variable values have changed and require
	an update to change the corresponding fields in the actual database table. The
	detection of dirty fields is based on caching the original value of the
	recordset member variable and comparing it to the current value of the variable.
	The comparison that Microsoft Foundation Classes uses to detect dirty floating
	point values has always been some form of exact comparison.
	
	It is generally not recommended that you perform exact comparisons of floating
	point values because when store a decimal fraction in binary it is inherently
	imprecise. Rounding and truncation can occur when these values are processed
	(particularly when the Floating Point Unit (FPU) is invoked) and can lead two
	values that were initially exactly equal to eventually be only nearly equal. It
	is preferable to either treat a floating point field as character data that is
	immune to rounding errors or incorporate a small offset value into comparisons
	(known as an epsilon value) to allow nearly equal values to be considered
	sufficiently equal.
	
	RFX_Double and RFX_Single do not employ an epsilon value in their dirty field
	detection comparisons so they will occasionally mark fields whose values have
	undergone some form of rounding or truncation as being dirty. The process of
	transferring recordset member variables via DDX to and from the edit controls of
	a record view or a dialog box can introduce sufficient rounding errors to result
	in a field that is marked dirty. In addition, in Visual C++ 4.2 Microsoft
	Foundation Classes has been modified to use the "==" equality operator when
	comparing the cached and current values. The "==" invokes the Floating Point
	Unit and that, in itself, causes rounding that may result in the field being
	flagged dirty when it could actually be unchanged.
	
	RESOLUTION
	==========
	
	There are several ways to address this problem:
	
	- Modify the tables of the database to use a data type different from
	  SQL_DOUBLE and SQL_REAL. If you store the value as a CHAR type or using some
	  type of integer representation, then the wizards will use RFX functions that
	  will not result in unneeded updates. Your application will then need to
	  manage any needed conversions of the recordset member variables.
	
	- For Visual C++ 4.x users only: Turn off field caching (which turns off
	  automatic dirty field detection. Now you need to manage the dirty status of
	  all fields manually with the CRecordset::SetFieldDirty() function.
	
	  To turn off field caching include this line in your recordset's constructor:
	
	                      m_bCheckCacheForDirtyFields = FALSE;
	
	- Modify Microsoft Foundation Classes to use an epsilon value in its dirty
	  field detection comparison. This is not a simple process since the RFX
	  functions are not virtual and they often delegate to
	  CFieldExchange::Default() which is also not virtual. See below for an example
	  of an alternate implementation of RFX_Double.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following sample code is designed to replace RFX_Double for MFC 4.2. You can
	use this code as a guide for replacing RFX_Single and for making similar
	modifications to other versions of Microsoft Foundation Classes.
	
	  //****************************************************************
	  // rfx_double2.cpp
	
	  // Most of this code is copied from the MFC source--see comments
	  // for NEW code.
	  // 
	  // .cpp file for version of RFX_Double that uses an epsilon value
	  // in its dirty field comparison.
	  // 
	  // THIS CODE IS WRITTEN TO WORK WITH MFC 4.2, TO WORK WITH OTHER
	  // VERSIONS, THIS CODE MAY REQUIRE EXTENSIVE MODIFICATION.
	
	  #include "stdafx.h"
	
	  // NEW: Constant required for clean compile--different versions of MFC
	  //      use different constants.
	  static const double afxDoublePseudoNull = AFX_RFX_DOUBLE_PSEUDO_NULL;
	
	  // NEW: Comparison that uses an epsilon to define a window within
	  //      which two values are considered equal.
	  BOOL AFXAPI CompareValueWithEpsilon(void* pvSrc, void* pvDest,
	                                      int nSrcType, double epsilon)
	  {
	      // Only call with type of double -- you can modify this to accept
	      // other types.
	      if (nSrcType != AFX_RFX_DOUBLE)
	      {
	          // called with unexpected type
	          ASSERT(FALSE);
	          return FALSE;
	      }
	
	      BOOL bDirty = FALSE;
	
	      // Do dirty detection comparison factoring in epsilon value.
	      if ((*(double *)pvDest) > ((*(double *)pvSrc) + epsilon) ||
	          (*(double *)pvDest) < ((*(double *)pvSrc) - epsilon))
	          bDirty = TRUE;
	
	      return !bDirty;
	  }
	
	  // Fourth parameter is new to this version--it allows you to specify
	  // the width of the comparison window.
	  // 
	  // NOTE: Epsilon is expected to be positive.
	  void AFXAPI RFX_Double2(CFieldExchange* pFX, LPCTSTR szName,
	      double& value, double epsilon)
	  {
	      ASSERT(AfxIsValidAddress(pFX, sizeof(CFieldExchange)));
	      ASSERT(AfxIsValidString(szName));
	
	      switch (pFX->m_nOperation)
	      {
	      case CFieldExchange::MarkForUpdate:
	          {
	              // NEW: You must move this from original MFC location
	              //      to avoid problems with delegating in default case.
	              UINT nField;
	              if (!pFX->IsFieldType(&nField))
	                  return;
	
	              if (value != afxDoublePseudoNull)
	                 pFX->m_prs->ClearNullFieldStatus(nField - 1);
	
	              // Get the field data,
	              CFieldInfo* pInfo = &pFX->m_prs->m_rgFieldInfos[nField - 1];
	
	              // If the user changed the field value from previous value,
	              // mark field dirty.
	              if ((pInfo->m_bStatus & AFX_SQL_FIELD_FLAG_NULL))
	              {
	                  if (!pFX->m_prs->IsFieldStatusNull(nField - 1))
	                      pFX->m_prs->SetDirtyFieldStatus(nField - 1);
	              }
	              else
	              {
	                  // Saved field is not NULL. The current field is null,
	                  // so the field is dirty.
	                  BOOL bDirty = pFX->m_prs->IsFieldStatusNull(nField - 1);
	
	                  // If values differ, then field dirty
	                  void* pvDataCache = pInfo->m_pvDataCache;
	
	                  // NEW: Now call a function that does dirty field
	                  //      detection based on an epsilon value.
	                  if (bDirty ||
	                      !CompareValueWithEpsilon(&value, pvDataCache,
	                          pInfo->m_nDataType, epsilon))
	                      pFX->m_prs->SetDirtyFieldStatus(nField - 1);
	              }
	
	  #ifdef _DEBUG
	              // Field address must not change--ODBC's SQLBindCol depends
	              // upon this.
	              void* pvBind = &value;
	
	              if (pInfo->m_pvBindAddress != pvBind)
	              {
	                  TRACE1("Error: field address (column %u) has changed!\n",
	                      nField);
	                  ASSERT(FALSE);
	              }
	  #endif // _DEBUG
	
	              if ((pFX->m_pvField == NULL  || pFX->m_pvField == &value) &&
	                  pFX->m_prs->IsFieldStatusDirty(nField - 1))
	              {
	                  pFX->m_bField = TRUE;
	              }
	              break;
	          }
	          // NEW: Only process MarkForUpdate--delegate all else.
	          default:
	              {
	                  // NEW: Call the original RFX function for all
	                  //      cases but MarkForUpdate.
	                  RFX_Double(pFX,szName, value);
	              }
	          return;
	      }
	  }
	
	Additional query words: CRecordview DDX_FieldText FPP kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC 400 kbVC410 kbVC420 kbVC500 kbVC600 s_mfc kbMfc kbtshoot MfcDatabase
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbprb
	
	=============================================================================
	
