---
layout: page
title: "Q231872: FIX: Using #import May Cause Memory Leaks"
permalink: /kb/231/Q231872/
---

## Q231872: FIX: Using #import May Cause Memory Leaks

{% raw %}

	Article: Q231872
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbLangCPP kbVC600bug kbVC600QFE kbSmartPtr kbVS600sp4fix kbVS600sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using #import to generate wrapper classes for COM objects,
	_com_dispatch_method(), _com_dispatch_raw_method(), _com_dispatch_propput(),
	_com_dispatch_raw_propput(), _com_dispatch_propget(), and
	_com_dispatch_raw_propget() function calls may be generated.
	
	These functions leak memory if an exception is thrown by the COM object.
	Specifically, ICreateErrorInfo is not released and three BSTRs are not freed.
	
	CAUSE
	=====
	
	This is due to a bug in the internal implementation of the compiler native COM
	support.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time      Size        File Name    Version#   Platform
	  -------------------------------------------------------------------
	  06/04/1999  11:14PM   184KB       COMSUPP.LIB  N/A        (x86)
	  08/05/2000  01:55PM   198KB       COMSUPP.LIB  N/A        (alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in the next service pack for
	Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual Basic COM server. You can choose ActiveX DLL.
	
	2. Name the project LeakServer.
	
	3. Name the class LeakTester.
	
	4. Add one Public Sub called Leak to the class. For example:
	
	         Public Sub Leak()
	
	         End Sub
	
	5. Add the following code to the Leak Subroutine:
	
	           Err.Raise vbObjectError + &H200 + 5
	
	6. Build the ActiveX DLL. When prompted, place the DLL on C drive.
	
	7. Create a new MFC AppWizard-generated dialog box application. Name it
	  LeakTest.
	
	8. Add the following line to the Stdafx.h file:
	
	       #import "C:\LeakServer.dll" no_namespace no_dual_interfaces
	
	9. Add a button and use Class Wizard to add a BN_CLICK handler.
	
	10. Add the following code to the handler:
	
	    _LeakTesterPtr serv;
	    HRESULT hr = serv.CreateInstance(__uuidof(LeakTester));
	    if (FAILED(hr))
	    {
	        TRACE("Create failed= %x\n", hr);
	        return;
	    }
	
	    int nResponse = AfxMessageBox ("Catch 10 _com_errors?", MB_YESNO);
	    while (IDYES == nResponse)
	    {
	       for (int iLoop = 0; iLoop < 10; iLoop++)
	       {
	          try
	          {
	            serv->Leak();
	          }
	          catch(_com_error &x)
	          {
	            int i = 0;
	          }
	      }
	      nResponse = AfxMessageBox ("Catch 10 _com_errors?", MB_YESNO);
	    }
	
	11. Add the following code before the button handler:
	
	  struct InitCOM
	  {
	    InitCOM()  { CoInitialize(NULL); }
	    ~InitCOM() { CoUninitialize();   }
	  } g_Init;
	
	12. Build and test.
	
	You can use Task Manager in Windows NT to see the memory increase through each
	iteration.
	
	Additional query words: sp4 leak _com_ptr_t _com_error native COM #import kbqfe
	
	======================================================================
	Keywords          : kbCOMt kbLangCPP kbVC600bug kbVC600QFE kbSmartPtr kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
