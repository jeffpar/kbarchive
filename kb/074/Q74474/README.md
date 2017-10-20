---
layout: page
title: "Q74474: INFO: Killing the Parent of a Modal Dialog Box"
permalink: /kb/074/Q74474/
---

## Q74474: INFO: Killing the Parent of a Modal Dialog Box

{% raw %}

	Article: Q74474
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbDlg kbSDKPlatform
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application cannot destroy the parent of a modal dialog box. When the modal
	dialog box ends, control is returned to its parent. If the parent is destroyed,
	control is given to a nonexistent window and the application crashes.
	
	When a parent window receives the destroy message, it is too late to destroy a
	child modal dialog box. The destroyed dialog box does not return control until
	after all the existing messages are processed, including the final destruction
	of the parent window.
	
	Therefore, it is imperative that all generational parents of a modal dialog box
	be disabled and have no way of receiving a WM_DESTROY message while the modal
	dialog box is active.
	
	MORE INFORMATION
	================
	
	This situation does not affect modeless dialog boxes. Therefore, if the design
	of a system cannot rule out the preceding problem, use a modeless dialog box
	instead of a modal dialog box.
	
	Because the Task Manager can kill any program at any time, there is no absolute
	protection from the parent being closed. The optimal solution is to forgo modal
	dialog boxes in favor of modeless dialog boxes. When a modeless dialog box is
	created, it may disable its parental windows.
	
	Additional query words: 3.00 3.10 wm_close
	
	======================================================================
	Keywords          : kb16bitonly kbDlg kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
