---
layout: page
title: "Q167736: MFC ISAPI Generates Access Violation in CHtmlStream.Detach"
permalink: kb/167/Q167736/
---

## Q167736: MFC ISAPI Generates Access Violation in CHtmlStream.Detach

	Article: Q167736
	Product(s): Internet Information Server
	Version(s): winnt:1.0,2.0,3.0,4.0,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbISAPI kbMFC kbVC kbVC410bug kbVC500bug
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	- Microsoft Visual C++, version 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an MFC ISAPI extension DLL generates HTML text whose length is exactly a
	multiple of 4096 bytes, an access violation is generated in Internet Information
	Server (IIS). This results in a crash of IIS if your ISAPI DLL is running in
	process, or a crash of the process hosting your ISAPI DLL (usually mtx.exe) if
	you are running out of process under IIS 4.
	
	CAUSE
	=====
	
	There is a bug with the CHtmlStream class (in the CHtmlStream::Detach() method),
	where a null character is appended to the end of the stream to end the string.
	The buffer is allocated in 4K increments, and if the size of the stream is a
	multiple of 4K, the null character is written in memory that has not been
	allocated.
	
	RESOLUTION
	==========
	
	To work around this problem, make sure that the length of the CHtmlStream is not
	a multiple of 4096. You can use code similar to this:
	
	     if ( pCtxt->m_pStream->GetStreamSize() % 4096 == 0 )
	                   *pCtxt << _T( " " ) ;
	
	You will need to do this at the end of any function that returns data to the
	server. Here is an example:
	
	     void CTestExtension::Default(CHttpServerContext* pCtxt)
	     {
	       StartContent(pCtxt);
	       WriteTitle(pCtxt);
	       *pCtxt << _T("This default message was produced by the Internet");
	       *pCtxt << _T(" Server DLL Wizard. Edit your
	           CTestExtension::Default()");
	       *pCtxt << _T(" implementation to change it.\r\n");
	
	       EndContent(pCtxt);
	
	       if ( pCtxt->m_pStream->GetStreamSize() % 4096 == 0 ) *pCtxt << _T( " " ) ;
	     }
	
	You want to put this code at the end of the proc because any of the code before
	this may change the size of the buffer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Leon
	Braginski, Microsoft Corporation
	
	
	Additional query words: kbVC420bug kbDSupport
	
	======================================================================
	Keywords          : kbISAPI kbMFC kbVC kbVC410bug kbVC500bug 
	Technology        : kbVCsearch kbiisSearch kbAudDeveloper kbiis400 kbiis300 kbiis200 kbiis100 kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC420b kbVC500Search
	Version           : winnt:1.0,2.0,3.0,4.0,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
