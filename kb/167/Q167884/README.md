---
layout: page
title: "Q167884: WD97: &quot;You Cannot Edit Picture That Is Not Saved&quot; Error Msg"
permalink: kb/167/Q167884/
---

## Q167884: WD97: &quot;You Cannot Edit Picture That Is Not Saved&quot; Error Msg

	Article: Q167884
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbgraphic kbinterop word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to edit a picture in a Microsoft Word document, you receive the
	following message:
	
	  You cannot edit a picture that is not saved in the document.
	
	CAUSE
	=====
	
	This problem occurs when the following conditions are true:
	
	- The picture was inserted from the Insert Picture dialog box.
	
	  -and-
	
	- When the picture was inserted, the Link To File check box was selected.
	
	  -and-
	
	- The Save With Document and the Float Over Text check boxes were cleared (the
	  check boxes did not contain a check mark).
	
	WORKAROUND
	==========
	
	To edit the picture from within Word, use one of the following methods.
	
	Method 1: Delete and Re-insert Picture But Retain the Link to the File
	----------------------------------------------------------------------
	
	1. Click the picture in your document to select it, and press the DELETE key.
	
	2. On the Insert menu, point to Picture, and click From File.
	
	3. In the Insert Picture dialog box, click to select the Link To File check box.
	
	4. Click to select the Save With Document check box.
	
	  -or-
	
	  Click to select the Float Over Text check box.
	
	  -or-
	
	  Click to select the Save With Document check box, and click to select the
	  Float Over Text check box.
	
	5. Select the picture you want to insert.
	
	6. Click Insert.
	
	Method 2: Break the Link to the File
	------------------------------------
	
	1. Click the picture in your document to select it.
	
	2. On the Edit menu, click Links.
	
	3. In the Links dialog box, click Break Link.
	
	4. When prompted with the "Are you sure you want to break the selected links?"
	  message, click Yes.
	
	Additional query words: 8.0 vb vbe vba Run time error 5694
	
	======================================================================
	Keywords          : kberrmsg kbgraphic kbinterop word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
