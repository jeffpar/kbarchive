---
layout: page
title: "Q172631: WD97: Custom Numbering Scheme Not Available on Other Computer"
permalink: /kb/172/Q172631/
---

## Q172631: WD97: Custom Numbering Scheme Not Available on Other Computer

	Article: Q172631
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a custom numbering scheme in a Word document and then open that
	document on another computer, the custom numbering scheme may not be available
	in the Bullets and Numbering dialog box. When you click the Bullets or Numbering
	buttons on the Formatting toolbar, the custom numbering scheme may not be
	applied.
	
	This problem occurs when the insertion point is in a paragraph that does not have
	bullets or numbering applied.
	
	CAUSE
	=====
	
	The gallery of custom bullets and numbering schemes (Bullets and Numbering
	dialog box) are stored on the individual computer. Therefore, a custom scheme
	created on one computer is unlikely to be available on another computer.
	
	WORKAROUND
	==========
	
	The document with the custom numbering scheme contains enough information to
	allow you to re-create the custom scheme on the second computer. To do this, use
	either of the following methods.
	
	Method 1: Use the Format Painter
	--------------------------------
	
	You can use the Format Painter to copy the numbering scheme from a numbered
	paragraph to an unnumbered paragraph. To do this, follow these steps:
	
	1. Select a correctly numbered paragraph.
	
	2. Click the Format Painter button on the Standard toolbar.
	
	  The mouse pointer should now look like an "I-beam" with a paintbrush attached
	  to it.
	
	3. Select the paragraphs you want to number. Once you release the mouse button,
	  Word applies custom numbering to the selected paragraphs.
	
	Method 2: Update the Numbering Gallery on the Second Computer
	-------------------------------------------------------------
	
	You can update the numbering gallery on the second computer to include the custom
	numbering scheme used in the document. To do this, follow these steps:
	
	1. Position the insertion point in one of the correctly numbered paragraphs.
	
	2. On the Formatting toolbar, click the Numbering button to turn off the
	  numbering for that paragraph.
	
	3. On the Formatting toolbar, click the Numbering button again to turn on the
	  numbering again for that paragraph.
	
	The custom numbering scheme will now be available in the numbering gallery. To
	use this scheme, follow these steps:
	
	1. Position the insertion point on the paragraph you want to number.
	
	2. On the Format menu, click Bullets and Numbering.
	
	3. In the Bullets and Numbering dialog box, click the appropriate tab, and then
	  click the custom scheme you want to use.
	
	From this point on, in this document, the Numbering button on the Formatting
	toolbar will use the custom scheme you selected in the gallery.
	
	REFERENCES
	==========
	
	For more information about working with the Numbering gallery, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q165256 WD97: Numbering Gallery Retains Custom Scheme After Exiting
	
	For more information about the Format Painter, click Contents And Index on the
	Help menu, click the Index tab in Help Topics: Microsoft Word, type the
	following text
	
	  Format Painter
	
	and then double-click the selected text to go to the "Copy character and
	paragraph formats" topic. If you are unable to find the information you need,
	ask the Office Assistant.
	
	Additional query words: auto automatic custom list numbers
	
	======================================================================
	Keywords          : winword word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
