---
layout: page
title: "Q198882: Script Debugger Is Not Unicode Compatible"
permalink: kb/198/Q198882/
---

## Q198882: Script Debugger Is Not Unicode Compatible

	Article: Q198882
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using another language setting in Windows NT 2000, some characters may be
	unreadable. A good example is in the Help/About dialog box. When you use the
	script debugger under these circumstances, the dialog box displays question
	marks instead of the proper characters.
	
	CAUSE
	=====
	
	This problem occurs because the script debugger is not localized. There is only
	one version of it and it uses ANSI characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services version 5.0.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
