---
layout: page
title: "Q289810: BUG: Right-Clicking Close Button May Cause VFP to Shut Down"
permalink: kb/289/Q289810/
---

## Q289810: BUG: Right-Clicking Close Button May Cause VFP to Shut Down

	Article: Q289810
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 01-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you right-click and then left-click the Close button of the Code window or
	a window that is created with a MODIFY MEMO command, Visual FoxPro may report
	one of the following errors.
	
	In Microsoft Windows Millennium Edition (Me):
	
	  VFP6 has caused an error in VFP6.exe VFP 6.0 will now close.
	
	In Microsoft Windows 2000:
	
	  VFP has generated errors and will be closed by Windows. You will need to
	  restart the program. An error log is being created.
	
	In Microsoft Windows NT 4.0:
	
	  An application error has occurred and an application error log is being
	  generated.
	  VFP6.exe
	  Exception access violation (0xc0000005), address:<memory address>
	
	RESOLUTION
	==========
	
	If you are using a MODIFY MEMO command to display the contents of a memo field,
	use an edit box object in a form instead.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, type the following:
	
	  MODI COMM Test
	
	2. Click the Close button with the right mouse button, and then click the Close
	  button with the left mouse button.
	
	  -or-
	
	1. In the Command window, type the following:
	
	  USE Home(2)+"data\employee"
	  MODI MEMO Notes
	
	2. Click the Close button with the right mouse button, and then click the Close
	  button with the left mouse button.
	
	Additional query words: crash exit
	
	======================================================================
	Keywords          : kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
