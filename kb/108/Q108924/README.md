---
layout: page
title: "Q108924: DOC: DEVMODE dmPaperSize Member Documentation Error"
permalink: kb/108/Q108924/
---

## Q108924: DOC: DEVMODE dmPaperSize Member Documentation Error

	Article: Q108924
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbdocfix kbOSWinNT350 kbOSWinNT351 kbSDKWin32 kbOSWin95 _IK
	Last Modified: 12-MAY-2001
	
	3.00 3.10 4.00 | 3.50 3.51
	WINDOWS        | WINDOWS NT
	kbprint kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The dmPaperSize member of the DEVMODE structure is documented incorrectly. The
	documentation states that the dmPaperSize member may be set to zero if the
	length and width of the paper are specified by the dmPaperLength and
	dmPaperWidth members, respectively. However, the correct value to use for
	user-defined paper sizes is DMPAPER_USER.
	
	DMPAPER_USER is correctly listed in the Microsoft Windows 3.1 SDK documentation
	as meaning a user-defined paper size, but is completely omitted from the
	Microsoft Windows 3.0 SDK documentation.
	
	Additional query words: 3.00 3.10 4.00
	
	======================================================================
	Keywords          : kbdocfix kbOSWinNT350 kbOSWinNT351 kbSDKWin32 kbOSWin95 _IK 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51
	
	=============================================================================
	
