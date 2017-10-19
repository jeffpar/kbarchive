---
layout: page
title: "Q137140: ErrMsg: Unable to Read from &lt;Path&gt;, It Is Open by Someone Else"
permalink: /kb/137/Q137140/
---

## Q137140: ErrMsg: Unable to Read from &lt;Path&gt;, It Is Open by Someone Else

	Article: Q137140
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click a Write (.wri) file in Windows Explorer or My Computer,
	you may receive the following error message
	
	  Unable to read from <path>, it is open by someone else
	
	where <path> is your Windows folder.
	
	CAUSE
	=====
	
	This error message may be caused by an incorrect association for .wri files.
	
	RESOLUTION
	==========
	
	To restore the default association for .wri files, follow these steps:
	
	1. Double-click My Computer.
	
	2. On the View menu, click Options.
	
	3. On the File Types tab, click Write Document in the Registered File Types box,
	  and then click Edit.
	
	4. In the Actions box, click Open, and then click Edit.
	
	5. In the Application Used To Perform Action box, replace the existing text with
	  the following text:
	
	     c:\progra~1\access~1\wordpad.exe "%1"
	
	6. Click OK until you return to My Computer.
	
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You may see similar error messages for other programs that are associated
	incorrectly.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
