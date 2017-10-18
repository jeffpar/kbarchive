---
layout: page
title: "Q166756: FIX: Error in Requery When Set Null Date Parameter to Not Null"
permalink: kb/166/Q166756/
---

## Q166756: FIX: Error in Requery When Set Null Date Parameter to Not Null

	Article: Q166756
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC500bug kbVC600bug kbDSupportkbbuglist
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set a previously Null date parameter to no longer be Null, using either
	CRecordset::SetParamNull() or CRecordset::SetFieldNull(), it may cause a
	subsequent call to CRecordset::Requery() to generate the following exception:
	
	  Invalid string or buffer length
	
	CAUSE
	=====
	
	During a call to CRecordset::Open, no memory is allocated for a Null date field.
	However, CRecordset::Requery expects the memory to exist.
	
	RESOLUTION
	==========
	
	Create a replacement for the RFX_Date function which always allocates memory for
	the date field. See the MORE INFORMATION section.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	This problem only occurs with the version of RFX_Date that takes a CTime
	argument.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code displays the problem for a predefined query named Query1,
	which takes one date parameter:
	
	      CMySet rs;
	      try
	      {
	          rs.SetParamNull( 0, TRUE );
	          rs.Open( CRecordset::snapshot, "{Call Query1(?)}" );
	          rs.m_paramDate = CTime( 1996, 10, 13, 0, 0, 0 );
	          rs.SetParamNull( 0, FALSE );
	          rs.Requery();
	      }
	      catch( CDBException* e )
	      {
	          AfxMessageBox( e->m_strError );
	          e->Delete();
	      }
	      rs.Close();
	
	Steps to Replace the RFX_Date Function
	--------------------------------------
	
	The following steps detail one method of making the needed changes in RFX_Date:
	
	1. Copy the implementation of RFX_Date() (DEVSTUDIO\VC\MFC\SRC\DBRFX.CPP) into a
	  new .cpp file, and rename the function to something such as RFX_Date2().
	  Create a header file for the .cpp file and include that in your recordset
	  .cpp file. Be sure to type:
	
	        #include "stdafx.h"
	
	  at the top of your new .cpp file, and include the .cpp file in your project.
	
	2. Change all RFX_Date() calls for date parameters in your recordset's
	  DoFieldExchange() to calls to RFX_Date2().
	
	3. In your new RFX_Date2() implementation, comment out the following lines,
	  which appear under the CFieldExchange::BindParam case:
	
	         if (pFX->m_prs->IsParamStatusNull(nField - 1))
	         {
	             pts = NULL;
	             *plLength = SQL_NULL_DATA;
	         }
	         else
	
	4. To reduce the amount of code, you may want to remove all of the cases from
	  the select statement except the case for CFieldExchange::BindParam, and add
	  the following lines to the top of your replacement function:
	
	         if( CFieldExchange::BindParam != pFX->m_nOperation ) {
	             RFX_Date(pFX, szName, value);
	             return;
	         }
	
	Additional query words: kbVC500bug kbVC600bug kbmfc kbdatabase kbodbc
	
	======================================================================
	Keywords          : kbVC500bug kbVC600bug kbDSupport kbbuglist
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
