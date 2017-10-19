---
layout: page
title: "Q189707: PRB: &quot;Help not available&quot; Viewing TypeLib in Class Browser"
permalink: /kb/189/Q189707/
---

## Q189707: PRB: &quot;Help not available&quot; Viewing TypeLib in Class Browser

	Article: Q189707
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the Type library for an object in the Class Browser, and
	repeatedly click the +/- sign of a node in the right-hand pane, the following
	error may occur:
	
	  Help not available.
	
	CAUSE
	=====
	
	The Class Browser is designed to display help for an item when you double- click
	the item. This is useful when a Type library, for example, contains help
	information. Rapidly clicking the +/- sign in a Treeview control may fire the
	double-click event.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the Tools menu, choose Class Browser.
	
	2. Open an .ocx control. For example, you may use \VFP98\FPOLE.OCX.
	
	3. Rapidly click the +/- sign next to the lfpolectl object in the right-hand
	  pane.
	
	  The "Help not available" error occurs.
	
	Additional query words: kbbeta kbVFp500a kbVFp500 kbXbase kbTools
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
