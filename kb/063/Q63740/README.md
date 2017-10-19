---
layout: page
title: "Q63740: Windows Err Msg: System Error. Network Error on Drive &lt;x&gt;"
permalink: /kb/063/Q63740/
---

## Q63740: Windows Err Msg: System Error. Network Error on Drive &lt;x&gt;

	Article: Q63740
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you run an unsupported network (such as PC File Server) with Microsoft
	Windows, you may receive the following error message:
	
	  System Error: Network Error On Drive <x>:
	
	where "<x>" is the name of your drive.
	
	CAUSE
	=====
	
	This error occurs when you choose Connect Net Drive from the Drive menu in File
	Manager. File Manager then activates a network redirector that may not operate
	properly under Windows.
	
	WORKAROUND
	==========
	
	If the redirector is causing the problem, install Windows without a network and
	connect to network drives and sharing devices prior to loading Windows.
	
	Additional query words: 3.00 3.0 3.00a win30 win31 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
