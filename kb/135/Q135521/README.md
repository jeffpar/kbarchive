---
layout: page
title: "Q135521: PRB: Send Does Not Work Under Windows 95 or Windows NT"
permalink: /kb/135/Q135521/
---

## Q135521: PRB: Send Does Not Work Under Windows 95 or Windows NT

	Article: Q135521
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If 16-bit Microsoft Mail is used on a 32-bit operating system such as Windows 95
	or Windows NT, various MAPI errors occur when trying to use the File Send
	Command in Visual FoxPro. These same errors also occur when using the
	MAPIsession and MAPImessage OLE controls from within a Visual FoxPro
	Application.
	
	CAUSE
	=====
	
	MAPI is finding the 32-bit version of MAPI.DLL and trying to load the 32-bit
	mail client software. When using a MAPI session and message OLE controls under
	Windows 95 or Windows NT, you must use the 32-bit mail client that is supplied
	with these products.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Remove exchange (Windows 95) or the 32-bit version of Microsoft Mail (Windows
	  NT) from the computer.
	
	2. Install the 16-bit version of Microsoft Mail.
	
	3. Start Visual FoxPro.
	
	4. On the File menu, click Send.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	
