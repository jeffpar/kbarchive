---
layout: page
title: "Q153963: FIX: Exception in DrawCli When Displaying Summary Information"
permalink: kb/153/Q153963/
---

## Q153963: FIX: Exception in DrawCli When Displaying Summary Information

	Article: Q153963
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When displaying the Summary Info for an existing DrawCli file with Summary Info
	saved, DrawCli may crash with the following error:
	
	  Unhandled Exception : Access Violation
	
	DrawCli is an MFC OLE sample that is shipped with Visual C++.
	
	CAUSE
	=====
	
	CSummInfo::ReadFromStorage does not set CSummInfo::m_pSection. This behavior
	leaves a dangling pointer into memory that has been deleted.
	
	RESOLUTION
	==========
	
	Modify the ReadFromStorage as follows:
	
	     BOOL CSummInfo::ReadFromStorage( LPSTORAGE lpRootStg )
	     {
	         if (lpRootStg != NULL)
	         {
	             LPSTREAM lpStream = NULL;
	
	             if (FAILED(lpRootStg->OpenStream( szSummInfo,
	                        NULL, STGM_SHARE_EXCLUSIVE|STGM_READ,
	                        0, &lpStream )))
	             {
	                 TRACE(_T("OpenStream failed\n"));
	                 return FALSE;
	             }
	             else
	             {
	                 if (!m_propSet.ReadFromStream( lpStream ))
	                 {
	                     TRACE(_T("ReadFromStream failed\n"));
	                     return FALSE;
	                 }
	     // add the following line
	                 m_pSection = m_propSet.GetSection(FMTID_SummaryInformation);
	
	                 lpStream->Release();
	                 return TRUE;
	             }
	         }
	         return FALSE;
	     }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 4.2.
	
	Additional query words: kbVC400bug 4.00 4.10 4.20 mfcole vcfixlist420 kbole CodeSam
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : winnt:4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
