---
layout: page
title: "Q196512: WD97: Frame Does Not Copy from One Column to Another"
permalink: /kb/196/Q196512/
---

## Q196512: WD97: Frame Does Not Copy from One Column to Another

{% raw %}

	Article: Q196512
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbframe
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to copy and paste a frame from one column to another column using
	newspaper-style columns, the following behavior occurs:
	
	- The frame is not pasted into the destination column.
	
	  -and-
	
	- A duplicate copy of the frame appears in the original column.
	
	CAUSE
	=====
	
	This functionality is by design. Frames retain their Relative To setting when
	copied. If the original frame was Relative To the page, the pasted frame is,
	too.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Drag the duplicate frame to the correct location.
	
	  -or-
	
	- Select the frame, and modify its properties.
	
	MORE INFORMATION
	================
	
	To insert a frame into a Word document, follow these steps:
	
	In Word 97 and later, the Frame command is not on the Insert menu. You can use a
	text box instead. However, if you want to use a frame, follow these steps:
	
	1. On the Tools menu, point to Macro and click Macros.
	
	2. In the "Macros in" box, click to select Word commands.
	
	3. In the macro list, click to select Insert Frame, and then click Run.
	
	  NOTE: When you first run this command, Word prompts you with the following
	  message:
	
	  You inserted a frame but Insert Frame is not on any menu. Press the button
	  below to add Frame to the Insert menu so you can quickly and easily insert
	  frames.
	
	  Click Yes if you want Word to add Frame to the Insert menu.
	
	  Click Cancel if you do not want Word to add Frame to the Insert menu.
	
	If you want to add another frame, you need to repeat steps 1-3 again.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbframe 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
