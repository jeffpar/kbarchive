---
layout: page
title: "Q111652: BUG: Edit Controls and WS_CLIPCHILDREN Function Differently"
permalink: /kb/111/Q111652/
---

## Q111652: BUG: Edit Controls and WS_CLIPCHILDREN Function Differently

{% raw %}

	Article: Q111652
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbEditCtrl kbGrpDSUser kbOSWin310bug
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Unnecessary painting is done when an edit control window is created with the
	WS_CLIPCHILDREN style bit set.
	
	CAUSE
	=====
	
	If an edit control window is created with the WS_CLIPCHILDREN style bit set, a
	WM_PAINT message will be sent to the parent. In Windows version 3.0, the
	rcUpdate is (0,0,0,0), which makes it very easy to ignore this WM_PAINT message.
	In Windows version 3.1, the rcUpdate is the size of the child edit control,
	which causes extra painting to be done. The WM_PAINT message is not necessary
	because the child control itself does the painting, not the parent.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbEditCtrl kbGrpDSUser kbOSWin310bug 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
