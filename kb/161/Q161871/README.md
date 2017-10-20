---
layout: page
title: "Q161871: PRB: MFC Sockets Application Crashes after Exit on NT 3.51"
permalink: /kb/161/Q161871/
---

## Q161871: PRB: MFC Sockets Application Crashes after Exit on NT 3.51

{% raw %}

	Article: Q161871
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.1,4.2
	Operating System(s): 
	Keyword(s): kbMFC kbOSWinNT350 kbOSWinNT351 kbVC410 kbVC420 kbWinsock kbGrpDSMFCATL kbNoUpdate
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you unload an application or DLL that uses the MFC socket classes, an
	Unhandled Access violation occurs. This only happens on Windows NT 3.50 or 3.51
	and will often be erratic in its occurrence; it does not reproduce consistently.
	
	CAUSE
	=====
	
	A bug in the WSOCK32.DLL that is included with Windows NT 3.5x can cause this
	behavior. The bug occurs when the DLL is being unloaded via FreeLibrary.
	
	As of MFC version 4.1, the sockets classes explicitly load the WINSOCK DLL rather
	than implicitly loading the DLL. Consequently, the socket classes may encounter
	this bug when FreeLibrary is called to unload the DLL.
	
	RESOLUTION
	==========
	
	The only resolution is to prevent WSOCK32.DLL from being completely unloaded
	when MFC makes the call to FreeLibrary. This can only be done by increasing the
	DLL's module usage count.
	
	The effect of this will be an increased memory footprint for the process that is
	using the socket classes. If it is a DLL that is using the MFC socket classes,
	then the WSOCK32.DLL will remain loaded in the process memory space even after
	the MFC DLL is unloaded.
	
	However, as long as the DLL is not being used or accessed, this memory will be
	swapped out to disk and should not have a major impact on performance.
	
	To implement the following workaround, modify your code to make an additional
	call to LoadLibrary after the call to AfxSocketInit(). Because the problem only
	occurs on Windows NT 3.5x, you don't need to include the additional call to
	LoadLibrary for Windows 95 or Windows NT 4.0. This can be determined using the
	GetVersion() API call.
	
	For example:
	
	     BOOL CMyApp::InitInstance()
	     {
	       ...
	       if(!AfxSocketInit())
	       {
	             AfxMessageBox(IDP_SOCKETS_INIT_FAILED);
	             return FALSE;
	       }
	       DWORD dwVersion = ::GetVersion();
	       BOOL bWin4 = (BYTE)dwVersion >= 4;
	       if(!bWin4 && !LoadLibrary("WSOCK32.DLL"))
	       {
	             AfxMessageBox(IDP_SOCKETS_INIT_FAILED);
	             return FALSE;
	       }
	       ...
	
	Additional query words: 4.10 4.20 kbdsd
	
	======================================================================
	Keywords          : kbMFC kbOSWinNT350 kbOSWinNT351 kbVC410 kbVC420 kbWinsock kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC410 kbVC420 kbVC32bitSearch
	Version           : winnt:4.1,4.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
