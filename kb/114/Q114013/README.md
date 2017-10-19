---
layout: page
title: "Q114013: BUG: General Protection Fault When Accessing an HFONT"
permalink: /kb/114/Q114013/
---

## Q114013: BUG: General Protection Fault When Accessing an HFONT

	Article: Q114013
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 27-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On rare occasions, in low memory situations or after calling the function
	GlobalCompact(-1), a general protection fault (GP) Fault may occur when calling
	SelectObject() to select a handle to a logical font (HFONT) into a device
	context. This happens when the application caches the handle to the logical
	font.
	
	CAUSE
	=====
	
	Part of the internal data structure for the font resides in global memory that
	is allocated as GMEM_DISCARDABLE. In tight memory situations, this global memory
	may be discarded and GDI does not detect this situation before attempting to
	access the memory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	This problem does not occur in Windows 95.
	
	MORE INFORMATION
	================
	
	To avoid this bug, applications should not cache font handles but instead hold
	onto the LOGFONT structure that contains the information for recreating the
	font. By holding onto the LOGFONT and calling the function CreateFontIndirect()
	each time a font is needed, applications should be able to safely avoid this
	bug.
	
	NOTE: The call to CreateFontIndirect() is not an expensive call in terms of
	performance. The actual mapping of logical font to physical font happens when
	you call SelectObject(). When you cache HFONTs, you still have to call
	SelectObject() each time before calling any of the Windows text APIs so this
	approach only requires one additional function call.
	
	Additional query words: buglist3.10 3.10 font fault error
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
