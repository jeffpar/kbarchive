---
layout: page
title: "Q148806: FIX: Cannot Open Document From Shell If EXE Has Long File Name"
permalink: kb/148/Q148806/
---

## Q148806: FIX: Cannot Open Document From Shell If EXE Has Long File Name

	Article: Q148806
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbOSWin95 kbOSWin98
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1, 4.2, 5.0, 6.0, used with:
	      - the operating system: Microsoft Windows 95 
	      - the operating system: Microsoft Windows 98 
	      - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a document whose extension is associated with an MFC
	application that has a long file name on Windows 95 or Windows 98, a dialog box
	with an error message similar to the following appears:
	
	  Cannot find the file 'filename' (or one of its components). Make sure the
	  path and filename are correct and that all required libraries are available.
	
	Closing the message box won't bring up the application's windows, but will leave
	the executable file open.
	
	On Windows Millennium Edition (Me), the error message is:
	
	  Windows cannot find '<filename>'. You may have typed the name
	  incorrectly in the Run dialog, or another open program cannot find a system
	  file. To search for a file, click the Start button, and then click Search.
	
	
	CAUSE
	=====
	
	The MFC function CWinApp::RegisterShellFileTypes() writes the application's 8.3
	file name to the registry. However, CWinApp::EnableShellOpen() calls
	::GlobalAddAtom() with the application's long file name. Windows 95 and Windows
	98 cannot handle this situation.
	
	RESOLUTION
	==========
	
	Override CWinApp::EnableShellOpen() using the sample code below to pass the
	application's short file name to ::GlobalAddAtom().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem on a Computer with Windows 95 or 98
	------------------------------------------------------------------
	
	1. Select a new MFC AppWizard(exe) project to create an MDI application with a
	  long project name.
	
	2. At step 3 of the AppWizard select Automation Support.
	
	3. Then at step 4 of the AppWizard, choose Advanced and specify a 3 letter file
	  extension.
	
	4. Build the application and run it once so the file type is registered by the
	  call to RegisterShellFileTypes in InitInstance.
	
	5. Save a file with the selected file extension and double-click to open it from
	  the Windows Explorer.
	
	This can be worked around by overriding CWinApp::EnableShellOpen() and
	registering the application name atom using the short filename. Following is a
	sample of what the code should look like:
	
	  /* Compile options needed: Default MFC applications.
	  */ 
	
	  void CLongFileNameApp::EnableShellOpen()
	  {
	     ASSERT(m_atomApp == NULL && m_atomSystemTopic == NULL); // do once
	
	     CString strShortName;
	     TCHAR szLongPathName[_MAX_PATH];
	     ::GetModuleFileName(m_hInstance, szLongPathName, _MAX_PATH);
	     if (::GetShortPathName(szLongPathName,
	         strShortName.GetBuffer(_MAX_PATH), _MAX_PATH) == 0)
	     {
	        // Rare failure case (especially on not-so-modern file systems)
	        strShortName = szLongPathName;
	     }
	     strShortName.ReleaseBuffer();
	     int nPos = strShortName.ReverseFind('\\');
	     if (nPos != -1)
	       strShortName = strShortName.Right(strShortName.GetLength()- nPos-1);
	     nPos = strShortName.ReverseFind('.');
	     if (nPos != -1)
	       strShortName = strShortName.Left(nPos);
	     m_atomApp = ::GlobalAddAtom(strShortName);
	     m_atomSystemTopic = ::GlobalAddAtom(_T("system"));
	  }
	
	Additional query words: 8.3 filename EnableShellOpen
	
	======================================================================
	Keywords          : kbcode kbMFC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbOSWin95 kbOSWin98 kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
