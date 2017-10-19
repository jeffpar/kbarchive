---
layout: page
title: "Q197759: WD97: Drawing Object Is Printed over Header/Footer Text"
permalink: /kb/197/Q197759/
---

## Q197759: WD97: Drawing Object Is Printed over Header/Footer Text

	Article: Q197759
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Drawing objects that you insert in the main text area of a Word document are
	printed over header or footer text, even if you send the drawing object to the
	back or behind the text.
	
	CAUSE
	=====
	
	By design, the drawing layer in the main text area of the document lies in front
	of the drawing layer for the header or footer.
	
	The following diagram demonstrates how Word stacks drawings and text in each
	layer:
	
	Cross Section of Word Document Layers
	-------------------------------------
	
	                                          ___________________
	                                         /                   /|
	                                        /   <SURFACE OF     / |
	                                       /       PAPER>      /  |
	                                      /                   /  /|
	                Front Drawing Layer  |-------------------|  / |
	                    MAIN TEXT LAYER  |===================| / /|
	                 Back Drawing Layer  |-------------------|/ / / 
	                                     |                   | / / 
	                Front Drawing Layer  |-------------------|/ / 
	  (Header/Footer) BOTTOM TEXT LAYER  |===================| / 
	                 Back Drawing Layer  |-------------------|/ 
	
	WORKAROUND
	==========
	
	To place a drawing behind the header or footer text, create it in the header or
	footer drawing layer and then send it to behind the text.
	
	MORE INFORMATION
	================
	
	In the diagram earlier in this article, the main text layer of a document and
	its drawing layers are in front of objects and text in the bottom
	(header/footer) layer of the document. Therefore, if you send a drawing object
	to the back in the main text layer, other objects and text in that layer are
	printed over this object. However, all the drawing objects in the main text
	layer overprint those in the header/footer layer.
	
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
