---
layout: page
title: "Q163365: WD97: Hang During Copy/Paste or Drag/Drop of Object After Undo"
permalink: /kb/163/Q163365/
---

## Q163365: WD97: Hang During Copy/Paste or Drag/Drop of Object After Undo

	Article: Q163365
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you perform a certain sequence of specific steps involving cutting, pasting,
	undoing, and dragging an object back and forth from another program into Word,
	you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in MSO97.DLL at address.
	
	NOTE: The actual memory address may vary.
	
	This problem may be reproduced using the following steps:
	
	1. Start both Microsoft Word 97 and Microsoft Excel 97.
	
	2. In Microsoft Word, type a few lines of text.
	
	3. Insert an object into the document, such as a bitmap image. To do this, click
	  Object on the Insert menu. On the Create New tab, click to select Bitmap
	  Image, click to select the "Float over text" check box and then click OK.
	
	4. After creating the bitmap image, click anywhere inside the document.
	
	5. Select the object and the paragraph it is anchored to.
	
	  NOTE: To view the object anchor, on the Tools menu, click Options. On the View
	  tab, click to select the Object Anchors check box and click OK.
	
	6. On the Edit menu, click Cut.
	
	7. On the Standard toolbar, click Undo.
	
	8. Click to select just the bitmap image object. Do not select any text.
	
	9. On the Edit menu, click Copy.
	
	10. Press ALT+TAB to switch to Microsoft Excel.
	
	11. On the Edit menu in Microsoft Excel, click Paste.
	
	12. Click to select the bitmap image object in Microsoft Excel and then click
	  Copy on the Edit menu.
	
	13. Press ALT+TAB to switch back to Microsoft Word.
	
	14. On the Edit menu, click Paste.
	
	RESOLUTION
	==========
	
	To prevent this type of problem from occurring when working in your document,
	install Microsoft Word 2000 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	MORE INFORMATION
	================
	
	The error is specific to the order in which the editing steps are performed. In
	general these errors only occur if one or more objects and some text are
	selected, then a cut, and then followed by an undo command prior to some other
	object movement operations. This should not cause an ongoing problem because the
	second time this is tried, the undo command will not be required, as the
	incorrect items will not have been selected prior to the cut.
	
	Additional query words: hang powerpoint excel office drag drop ipf
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
