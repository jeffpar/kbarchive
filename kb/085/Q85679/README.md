---
layout: page
title: "Q85679: INFO: Changing Print Settings Mid-Job"
permalink: /kb/085/Q85679/
---

## Q85679: INFO: Changing Print Settings Mid-Job

{% raw %}

	Article: Q85679
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 _IK kbSDKWin16
	Last Modified: 12-MAY-2001
	
	3.10 4.00 | 3.50 3.51
	WINDOWS   | WINDOWS NT
	kbprint
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows 3.1 and later, print settings can be changed on a page-by-page basis
	through the ResetDC() API.
	
	MORE INFORMATION
	================
	
	An application can pass a new DEVMODE structure (containing new print settings)
	to ResetDC() between pages to change the print settings. For example, this
	function makes it possible to change the paper bin or paper orientation for each
	page in a print job. Note that ResetDC() cannot be used to change the driver
	name, device name, or the output port.
	
	Before calling ResetDC(), the application must ensure that all objects (other
	than stock objects) that were previously selected into the printer device
	context are selected out.
	
	Additional query words: 3.10 4.00 dmOrientation dmDefaultSource dmPaperSize hDC WM_DEVMODECHANGE ExtDeviceMode
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWinNT400 kbOSWin95 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
