---
layout: page
title: "Q82167: INFO: DeviceCapabilities(DC_BINNAMES) Data Format"
permalink: /kb/082/Q82167/
---

## Q82167: INFO: DeviceCapabilities(DC_BINNAMES) Data Format

{% raw %}

	Article: Q82167
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an application calls the DeviceCapabilities() API with the nIndex parameter
	set to DC_BINNAMES, 24 bytes are required for each bin name.
	
	DeviceCapabilities() returns the name of each bin as a null-terminated string in
	a character array. Each bin-name entry requires 24 bytes and begins on the
	[(n-1) * 24] byte of the array.
	
	The following code demonstrates how to allocate a block of memory, retrieve the
	bin names, and walk through the array of bin names. The code assumes that
	GetProcAddress() has been used to retrieve a long pointer to the
	DeviceCapabilities() in the printer driver and that the pointer was stored in
	the lpfnDevCap variable:
	
	     if ((dwDMSize = (*lpfnDevCap)(lpszDevice, lpszPort, DC_BINNAMES,
	
	                                   0L, lpDevMode))
	          && (dwDMSize != (DWORD)(-1)))
	
	     {
	
	        if (hMem = GlobalAlloc(GMEM_MOVEABLE, (WORD)dwDMSize * 24))
	        {
	           lpMem = (LPINT)GlobalLock(hMem);
	           nBins = (WORD)(*lpfnDevCap)(lpszDevice, lpszPort,
	                                       DC_BINNAMES, lpMem, lpDevMode);
	           for (lpBins = lpMem, i = 0; i < nBins; i++, lpBins += 24)
	           {
	              // lpBins points to the null-terminated bin name.
	           }
	           GlobalUnlock(hMem);
	           GlobalFree(hMem);
	        }
	
	     }
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
