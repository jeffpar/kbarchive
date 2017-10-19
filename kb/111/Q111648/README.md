---
layout: page
title: "Q111648: BUG: EM_CANUNDO Returns Zero After EM_REPLACESEL"
permalink: /kb/111/Q111648/
---

## Q111648: BUG: EM_CANUNDO Returns Zero After EM_REPLACESEL

	Article: Q111648
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCtrl kbEditCtrl kbGrpDSUser kbOSWin310bug
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	EM_CANUNDO returns 0 (zero) after text in an edit control has been set or
	replaced using EM_REPLACESEL. EM_CANUNDO should return nonzero, and EM_UNDO
	should undo the change.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows versions 3.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbCtrl kbEditCtrl kbGrpDSUser kbOSWin310bug 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	
	=============================================================================
	
