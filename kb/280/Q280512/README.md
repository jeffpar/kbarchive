---
layout: page
title: "Q280512: SAMPLE: ATLCPImplMT - ATL Event Firing Across COM Apartments"
permalink: /kb/280/Q280512/
---

## Q280512: SAMPLE: ATLCPImplMT - ATL Event Firing Across COM Apartments

	Article: Q280512
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbdocerr kbATL kbDSupport kbGrpDSToolskbfaq
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ATL-based ActiveX COM objects (including Automation objects and ActiveX
	controls) typically fire events from the same thread in which they were
	created.
	
	Sometimes it is desirable to start secondary threads in the COM object that fire
	events to the container. ATLCPImplMT.h provides an enhanced implementation of
	the ATL IConnectionPointImpl class, IConnectionPointImplMT, that provides this
	capability.
	
	Because IConnectionPointImplMT uses the Global Interface Table, it requires
	Windows NT 4.0 Service Pack 3 or later, or Windows 95 (or later) with DCOM
	version 1.1 or later.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ATLCPImplMT.exe
	  (http://download.microsoft.com/download/vc60std/sample4/1.0/WIN98MeXP/EN-US/ATLCPImplMT.exe)
	
	Release Date: Apr-26-2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The ATLCPImplMT.EXE (or ATLCPImplMT.hqx) file contains the following files:
	
	+----------------------+
	| ATLCPImplMT.h | 6 KB | 
	+----------------------+
	
	Using ATLCPImplMT.h Within Your ATL Project
	-------------------------------------------
	
	NOTES:
	
	- The following steps must be performed on files containing implementations of
	  proxy classes generated through the Implement Connection Point Wizard. These
	  classes are named CProxy{EventInterfaceName} by convention, and your ATL COM
	  class would derive from them. For additional information, see the following
	  Microsoft Web page:
	
	  Adding Connection Points to an Object
	  http://msdn.microsoft.com/library/devprods/vs6/visualc/vcmfc/_atl_adding_connection_points_to_an_object.htm
	
	- Because the Connection Point Wizard overwrites the generated proxy classes
	  every time it is invoked, these steps must be repeated at that point.
	
	1. Copy the file ATLCPImplMT.h to your project folder.
	
	2. Add the following #include statement near the top of the wizard-generated
	  files:
	
	  #include "ATLCPImplMT.h"
	
	3. Derive the proxy class, CProxy{EventInterfaceName}, from
	  IConnectionPointImplMT, instead of IConnectionPointImpl.
	  IConnectionPointImplMT has the same set of parameters. For example:
	
	  // Derive from IConnectionPointImplMT, instead of IConnectionPointImpl:
	  // template <class T>
	  // class CProxy_IEvntFirerEvents : public IConnectionPointImpl<T, &DIID__IEvntFirerEvents, CComDynamicUnkArray>
	  template <class T>
	  class CProxy_IEvntFirerEvents : public IConnectionPointImplMT<T, &DIID__IEvntFirerEvents, CComDynamicUnkArray>
	
	4. For each generated function (named Fire_{EventName}) within the proxy class:
	  Comment out the following lines within the generated for loop:
	
	  			// pT->Lock();
	  			// CComPtr<IUnknown> sp = m_vec.GetAt(nConnectionIndex);
	  			// pT->Unlock();
	
	  Insert the following lines in their place:
	
	  			CComPtr<IUnknown> sp;
	  			sp.Attach (GetInterfaceAt(nConnectionIndex));
	
	5. The Fire_{EventName} functions can now be called from any other COM thread
	  (in the same apartment, or a different apartment) that has access to the
	  object in question.
	
	Procedure to Use ATLCPImplMT.h in a Sample Project
	--------------------------------------------------
	
	1. Follow Steps 1 through 7 in the section "Steps to Create an ATL Project with
	  Visual C++" in the following Microsoft Knowledge Base article:
	
	  Q196026 PRB: Firing Event in Second Thread Causes IPF or GPF
	
	2. Add the following code to the MyAtl.cpp file. In the code below, the event is
	  being fired through the worker thread in the multi-threaded apartment (MTA),
	  not through the thread in the main single-threaded apartment (STA):
	
	        DWORD WINAPI justDoIt(LPVOID lpParameter)
	        {
	           // Initialize COM, 
	           // MTA worker thread:
	           HRESULT hRes = CoInitializeEx(NULL, COINIT_MULTITHREADED);
	
	           CMyAtl *myAtl = (CMyAtl*)lpParameter;
	
	           long result;
	           for (int i = 1; i <= myAtl->m_number; ++i)
	              result = i * 2;
	
	           myAtl->Fire_TaskFinished(result);
	
	  	::CoUninitialize ();
	
	           return 0;
	        }
	
	3. Follow steps 9 and 10 in the section "Steps to Create an ATL Project with
	  Visual C++" in article Q196026.
	
	4. Follow the steps outlined in this article in the section "Using ATLCPImplMT.h
	  Within Your ATL Project" to add support for IConnectionPointImplMT.
	
	5. Build the ATL project, and the control will be registered automatically.
	
	6. Follow the steps outlined under the heading "Steps to Create the Visual Basic
	  6.0 Project" in article Q196026.
	
	Notice that when you click the CommandButton, unlike in article Q196026, the
	event firing works correctly.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q157437 Fireev.exe Fires Events from a Second Thread
	
	  Q196026 PRB: Firing Event in Second Thread Causes IPF or GPF
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by S. Ganesh,
	Microsoft Corporation.
	
	
	Additional query words: ATLCPImplMT
	
	======================================================================
	Keywords          : kbfile kbSample kbdocerr kbATL kbDSupport kbGrpDSTools kbfaq
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL300
	Version           : :3.0
	
	=============================================================================
	
