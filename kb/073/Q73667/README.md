---
layout: page
title: "Q73667: INFO: Considerations for CreateCursor() and CreateIcon()"
permalink: kb/073/Q73667/
---

## Q73667: INFO: Considerations for CreateCursor() and CreateIcon()

	Article: Q73667
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbOSWinNT350 kbOSWinNT351 kbOSWin95 kbSDKWin16
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51 
	   - Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application can use the CreateCursor() and CreateIcon() APIs to create icons
	and cursors on the fly. The application determines the shape at run time.
	
	When the shape of the icons and the cursors is known in advance, an application
	should use LoadIcon() and LoadCursor().
	
	An application that uses CreateIcon() must call DestroyIcon() to free the memory
	used by the icon when it is no longer needed. An application that uses
	CreateCursor() must call DestroyCursor() to release the memory used by the
	cursor when it is no longer needed.
	
	An application can call DestroyIcon() and DestroyCursor() only when the icon or
	the cursor is not in use. For example, if the cursor created by CreateCursor()
	has been specified in a SetCursor call, it must not be destroyed until it has
	been released by another SetCursor() call.
	
	An application can only use DestroyIcon() and DestroyCursor() to destroy icons
	and cursors created by CreateIcon() and CreateCursor(). It should not try to
	destroy icons and cursors loaded with LoadIcon() and LoadCursor().
	
	Additional query words: 3.00 3.10 3.50 4.00 win16sdk
	
	======================================================================
	Keywords          : kbOSWinNT350 kbOSWinNT351 kbOSWin95 kbSDKWin16 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
