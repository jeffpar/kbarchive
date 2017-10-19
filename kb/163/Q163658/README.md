---
layout: page
title: "Q163658: WD97: TOC Doesn't Display Bullets or Paragraph Numbering"
permalink: /kb/163/Q163658/
---

## Q163658: WD97: TOC Doesn't Display Bullets or Paragraph Numbering

	Article: Q163658
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbfield word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have bulleted, numbered, or outline numbered formatting applied to a
	heading in your document, when you generate a table of contents to include that
	heading, the text of the heading appears in the table of contents but the
	bullet, number, or outline number may not.
	
	CAUSE
	=====
	
	This problem occurs when a "float over text" object is anchored to that heading.
	
	WORKAROUND
	==========
	
	Use one of the following methods to work around the problem.
	
	Method 1: Move the Object Anchor to Another Paragraph
	-----------------------------------------------------
	
	To move the object anchor to another paragraph, follow these steps:
	
	1. Click the Show/Hide button on the Standard toolbar to display paragraph
	  marks.
	
	2. Click the object.
	
	  An anchor appears in the document, usually somewhere near the object. The
	  anchor will be near one of the paragraphs in the document that is incorrectly
	  displayed in the table of contents.
	
	3. If the anchor is locked, you need to unlock it before you can move it by
	  doing the following:
	
	  a. On the Format menu, click Picture, and click the Position tab.
	
	  b. Clear the Lock Anchor check box, and then click OK.
	
	4. Move the pointer over the anchor.
	
	5. Drag the anchor to a paragraph that is not a heading of the table of
	  contents.
	
	6. To relock the anchor, do the following:
	
	  a. On the Format menu, click Picture and click the Position tab.
	
	  b. Select the check box Lock Anchor and then click OK.
	
	7. To update the table of contents, click it, press F9, select Update Entire
	  Table, and then click OK.
	
	The table of contents will now work correctly.
	
	Method 2: Convert the Floating Object to a Framed Object
	--------------------------------------------------------
	
	If the object is a text box, use the following steps:
	
	1. Click to select the Text Box, and click Text Box on the Format menu.
	
	2. Click the Text Box tab.
	
	3. Click the Convert To Frame button.
	
	4. Click OK when the following message appears:
	
	  When you convert this drawing object to a frame, some of the drawing object's
	  formatting may be lost. Do you want to continue?
	
	If the object is something other than a text box or AutoShape, follow these
	steps:
	
	1. Click to select the object and on the Format menu, click Format Object or
	  Picture.
	
	2. Click the Position tab.
	
	3. Clear the Float Over Text check box and click OK.
	
	The object is now in the text layer as an inline object. To make text flow around
	the object, you must insert a frame around the object. To do this, follow these
	steps:
	
	1. Make sure the object is still selected.
	
	2. On the Tools menu, point to Macro, and then click Macros.
	
	3. Under Macros In, select Word commands.
	
	4. Type "InsertFrame" (without the quotation marks) for the macro name, and
	  click Run.
	
	  The object will now be in a frame and can be moved around the document in the
	  same way a floating object can.
	
	5. To update the table of contents, click it, press F9, select Update Entire
	  Table, and then click OK.
	
	The table of contents will now work correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	Additional query words: missing gone chapter section legal
	
	======================================================================
	Keywords          : kbualink97 kbfield word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
