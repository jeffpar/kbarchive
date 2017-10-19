---
layout: page
title: "Q197199: WD97: Word 6.0 Document Objects Cropped When Embedded/Pasted"
permalink: /kb/197/Q197199/
---

## Q197199: WD97: Word 6.0 Document Objects Cropped When Embedded/Pasted

	Article: Q197199
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Embedded Word 6.0 for Windows document objects have default margins of 0 inches
	and page sizes of 6 by 9 inches or smaller. As a result, when you embed a Word
	document object in another Word document or in another program (such as
	Microsoft Publisher or Microsoft PowerPoint), one side of the object may appear
	cropped. This happens if the page width of the object is greater than 6 inches.
	
	WORKAROUND
	==========
	
	To preserve margins and page sizes for document objects, you must insert a Word
	6.0 document object and then paste the text you want into the open object. To do
	this, follow these steps:
	
	1. Select the text that you want for the object.
	
	  NOTE: Be sure to include all trailing section breaks for text in the section
	  and the last paragraph mark for text of the last section of a document. Page
	  sizes and margins of sections are stored in trailing section breaks and in
	  the last paragraph mark for the last section of a document.
	
	2. On the Edit menu, click Copy.
	
	3. Using the client program's Insert Object command, insert a Word 6.0 document
	  object. The object by default has margins of 0 inches and a page size of
	  approximately 6 inches by 9 inches.
	
	4. Put the insertion point in the open document object.
	
	5. On the Edit menu, click Paste or Paste Special to insert the previously
	  copied or cut text.
	
	The object now reflects the margins and page sizes of the original text, which
	may be too wide to be viewed fully in the client program.
	
	MORE INFORMATION
	================
	
	Document text that is copied has a page size of 6 inches by 9 inches or less and
	margins of 0 inches when pasted as a Word version 6.0 document object into a
	client program. These settings are applied to every section of the document
	object. A Word 6.0 document object created with the Object command on the Insert
	menu also has the same page and margin settings specified above.
	
	NOTE: Paragraphs that are indented from either the left or right margin may
	appear strange when pasted as an object due to the changed page width for the
	object. For example, a paragraph that is indented 3 inches from the right on an
	8.5-inch-wide page appears extremely narrow when pasted as an object (which has
	a 6-inch-wide page). Paragraphs or tables that contain border formatting may
	appear to be missing the left or right side borders. Borders normally extend to
	the left and right of indentations. This is so that the text of the bordered
	paragraph will align with other text in the document that contains no bordering
	(assuming the same indentation settings). Therefore, with margins for the object
	at 0 inches, paragraphs with no indentations have borders that extend off the
	left and right side of the document.
	
	Word 6.0 for Windows sets these page specifications for objects so that each
	document object can be represented at full scale visually within a standard Word
	document. Default Word documents have left and right margins of 1.25 inches,
	which leaves 6 inches of horizontal printable space. If you copy and paste text
	wider than 6 inches as an object, the object will extend past the area of the
	containing program (object page length may also vary).
	
	Text narrower than 6 inches pasted as an object has a page width approximately
	equal to the original width. For example, if you copy text 3- inches wide, it
	pastes as an object of approximately the same width.
	
	Additional query words: picture crop powerpoint table cut off ole officeinterop
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
