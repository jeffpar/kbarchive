---
layout: page
title: "Q164622: WD97: Inserting Linked Picture Results in Absolute Path"
permalink: /kb/164/Q164622/
---

## Q164622: WD97: Inserting Linked Picture Results in Absolute Path

{% raw %}

	Article: Q164622
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbprogramming kbdta kbdtacode word8 kbwordvba word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you record a macro to insert a picture(on the Insert menu, point to Picture
	and click From File), and
	
	- you choose Link to File,
	
	-and-
	
	- the picture is located in the same folder or in a folder belonging to the
	  same folder as your document,
	
	the macro records an absolute path for the picture instead of recording a
	relative path as expected. When the macro is run, the field code used for the
	linked picture is an absolute path instead of a relative path.
	
	WORKAROUND
	==========
	
	To change the path for the linked picture, edit the recorded macro and change
	the path for the linked picture from "absolute" to "relative."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you insert a picture into a document and the picture is located in the same
	folder or in a folder belonging to the same folder as your document, if you
	choose Link to File, the linked path for the picture is stored as a "relative
	path".
	
	For example, if the document path is
	
	  c:\My Documents\MyPage\mydoc.doc
	
	and the picture file path is
	
	  c:\My Documents\MyPage\Images\myimage.bmp
	
	viewing the field code, the relative path is:
	
	  {INCLUDEPICTURE "Images\\myimage.bmp" \* MERGEFORMAT \d}
	
	However, when you record a macro to insert a linked picture whose path is
	relative to the document in which it is being inserted, the path is recorded and
	played back as an absolute path. For example, the resulting macro would record
	and play back the path to the picture, in the IncludePicture field, as:
	
	  {INCLUDEPICTURE "c:\My Documents\MyPage\Images\myimage.bmp" \* MERGEFORMAT
	  \d}
	
	To toggle the viewing of field codes, on the keyboard, press and hold "Alt" then
	press F9.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon vb vba vbe
	
	======================================================================
	Keywords          : kbgraphic kbprogramming kbdta kbdtacode word8 kbwordvba word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
