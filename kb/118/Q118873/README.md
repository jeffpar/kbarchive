---
layout: page
title: "Q118873: PRB: EndPage() Returns -1 When Banding"
permalink: /kb/118/Q118873/
---

## Q118873: PRB: EndPage() Returns -1 When Banding

{% raw %}

	Article: Q118873
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 _IK kbSDKWin16
	Last Modified: 12-MAY-2001
	
	3.10 4.00 | 3.50 3.51
	WINDOWS   | WINDOWS NT
	kbprint kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application that implements banding calls EndPage(), EndPage() returns
	SP_ERROR (-1).
	
	CAUSE
	=====
	
	EndPage() returns -1 if there has been no corresponding call to StartPage().
	Windows keeps track of whether StartPage() has been called by maintaining an
	internal flag that is set when StartPage() is called and then is cleared when
	EndPage() is called.
	
	This flag is also cleared when the NEXTBAND escape is called and there are no
	more bands on the page to be printed. At this point, Windows clears the internal
	flag and tells the device that a page has been finished. Because the internal
	flag has been cleared, a subsequent call to EndPage() returns -1.
	
	RESOLUTION
	==========
	
	Though EndPage() returns -1 when it is called from printing code that implements
	banding, it does no harm. An application can safely call StartPage() and
	EndPage() when banding and ignore the -1 error returned from EndPage().
	
	NOTE: It is not recommended that a Win32-based application use banding. Windows
	NT, spools in a journal file and Windows 95 spools in an enhanced metafile, so
	all GDI calls are supported without banding.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10 4.00 NEWFRAME
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
