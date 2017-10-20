---
layout: page
title: "Q137777: PRB: Memo Field Contents Not Shown in the Debug Window"
permalink: /kb/137/Q137777/
---

## Q137777: PRB: Memo Field Contents Not Shown in the Debug Window

{% raw %}

	Article: Q137777
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the debug window to display the contents of a memo field, you can
	put the name of the memo field in the left pane, but the contents do not appear
	in the right pane.
	
	RESOLUTION
	==========
	
	To see the text of a memo field, enter either of the following expressions in
	the left pane of the debug window:
	
	     <tablename>.<memofldname> + ""
	
	  -or-
	
	     MLINE(<tablename>.<memofldname>,1)
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
