---
layout: page
title: "Q152318: FIX: DAO SDK's CdbRecordset::Requery() May Fail"
permalink: kb/152/Q152318/
---

## Q152318: FIX: DAO SDK's CdbRecordset::Requery() May Fail

	Article: Q152318
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1
	Operating System(s): 
	Keyword(s): kbProgramming
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The DAO SDK, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to invoke the DAO SDK's CdbRecordset::Requery() method of the
	CdbRecordset class when the recordset has been opened with dbOpenDynaset and
	dbDenyWrite, may result in an error message similar to the following:
	
	  
	
	  Unhandled exception in <YourApp>.exe (DAO3032.DLL):
	  0xC0000005: Access Violation
	
	CAUSE
	=====
	
	Within the implementation of CdbRecordset::Requery found in DBDAO.CPP (line
	1645), the casting of a COleVariant method is performed incorrectly. The cast is
	performed as:
	
	     Var.pdispVal    = (LPDISPATCH)pq();
	
	The correct implementation should be:
	
	     Var.pdispVal    = (LPDISPATCH)pq->GetInterface();
	
	RESOLUTION
	==========
	
	Derive a new class from CdbRecordset and override the Requery method with the
	following:
	
	     VOID CdbRecordset::Requery( CdbQueryDef *pq )   // = NULL
	     {
	         DAORecordset*   prs = (DAORecordset *)GetInterface();
	         COleVariant     Var;
	
	         //Manually load the Query Def as a dispatch
	         if (!pq)
	         {
	             Var.vt          = VT_ERROR;
	             Var.scode       = DISP_E_PARAMNOTFOUND;
	         }
	         else
	         {
	             Var.vt          = VT_DISPATCH;
	             Var.pdispVal    = (LPDISPATCH)pq->GetInterface();
	         }
	
	         DAOMFC_CALL(prs->Requery(Var));
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in fixed in the DAO SDK that
	comes with Visual C++ version 5.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming 
	Technology        : kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbSDKSearch
	Version           : 4.0 4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
