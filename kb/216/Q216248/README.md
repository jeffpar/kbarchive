---
layout: page
title: "Q216248: PRB: IClientSecurity::CopyProxy() Leaks Memory"
permalink: kb/216/Q216248/
---

## Q216248: PRB: IClientSecurity::CopyProxy() Leaks Memory

	Article: Q216248
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95,98; winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbCOMt kbOSWinNT400 kbSecurity kbOSWin95 kbOSWin98
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Windows 98, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Windows NT Server version 4.0, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Windows NT Workstation version 4.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	IClientSecurity::CopyProxy() can appear to leak memory, as much as 2 KB per
	call. The symptom is usually seen when a thread is executing a tight loop of
	calls to CopyProxy(). The sequence would include the following calls:
	
	1. After obtaining the initial interface pointer to a component,
	  QueryInterface() for IID_ICLientSecurity.
	
	2. Use the IClientSecurity pointer, for example, pCS, to call pCS, then
	  CopyProxy() on the original interface (proxy).
	
	3. Release() the returned proxy interface pointer.
	
	4. Release() the pCS (IClientSecurity *).
	
	5. Repeat the above steps.
	
	::CoCopyProxy() also exhibits this behavior because it is a wrapper for the above
	steps.
	
	The MORE INFORMATION section below contains sample code that demonstrates the
	problem.
	
	CAUSE
	=====
	
	There is actually no "leak" per se; a delay in memory deallocation is causing
	the symptom. This delay can cause the client process's private bytes memory
	usage to climb to unacceptable levels in large numbers of iterations.
	
	The appearance of a leak is caused by the following:
	
	The proxy manager for a process aggregates all interface proxy objects.
	Therefore, when Release() is called on the interface proxy object the proxy
	manager is actually receiving the Release() call. The proxy manager doesn't
	actually free the interface proxy object until the final release of the proxy
	manager. Therefore, the memory usage in the client eventually subsides when the
	last Release() is called on the last copy of the interface proxy object [that
	is, the proxy manager receives the final Release()].
	
	RESOLUTION
	==========
	
	One way to work around this behavior, is to cache a number of copies of the
	proxy to be used as needed instead of creating and releasing each time one is
	needed. For example, you may create a copy of the proxy and apply certain
	security settings to it. For all subsequent calls to the object using these
	security settings, you should re-use the copied proxy object, rather than
	copying the proxy object each time. In other words, copy the proxy object only
	when needed.
	
	STATUS
	======
	
	Microsoft is aware of the behavior and has determined that it is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code excerpt demonstrates this increased memory usage behavior.
	Variations of this code can also show the behavior depending on the number of
	iterations and the "tightness" of the loop or how much time and processor usage
	elapses between the calls shown here:
	
	  	::CoInitializeEx(NULL, COINIT_MULTITHREADED);
	  	MULTI_QI mqi = { &IID_IStream, 0, S_OK }
	          ::OutputDebugString("Creating Object...\n"); 
	
	          HRESULT hr = ::CoCreateInstanceEx(CLSID_SimpleObject, NULL, CLSCTX_REMOTE_SERVER, NULL, 1, &mqi);
	  	if (FAILED(hr))
	  			return -1;
	
	  	for (long cnt = 0; cnt <= 20000; cnt++)
	  	{
	
	  		IClientSecurity* pCS = NULL;
	  		LPUNKNOWN pUnk = NULL;
	  		hr = mqi.pItf->QueryInterface(IID_IClientSecurity, (LPVOID*) &pCS);
	  		
	  		if (FAILED(hr))
	  		{
	  			::OutputDebugString("Failed to get IID_IClientSecurity!\n");
	  			return -1;
	  		}
	
	  		
	  		hr = pCS->CopyProxy(mqi.pItf, &pUnk);
	
	  		if (FAILED(hr))
	  		{
	  			::OutputDebugString("Failed to CopyProxy()!\n");
	  			return -1;
	  		}
	
	  		pCS->Release();
	  		pUnk->Release();
	
	  	}
	  	mqi.pItf->Release();
	  	::CoUninitialize();
	
	REFERENCES
	==========
	
	For more information about IClientSecurity::CopyProxy() and ::CoCopyProxy(), see
	the Platform SDK online documentation under "COM and ActiveX Object Services."
	
	Please see also the Platform SDK online documentation, COM and ActiveX Object
	Services, COM, COM Fundamentals, Reference.
	
	Additional query words: CoCopyProxy CoSetProxyBlanket SetBlanket
	
	======================================================================
	Keywords          : kbCOMt kbOSWinNT400 kbSecurity kbOSWin95 kbOSWin98 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95,98; winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
