---
layout: page
title: "Q172590: WD97: Unable to Insert Objects into Table Cell"
permalink: /kb/172/Q172590/
---

## Q172590: WD97: Unable to Insert Objects into Table Cell

	Article: Q172590
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): winword word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, when you attempt to insert or paste an object into a table
	cell, the object either floats over the table, or is placed above or below the
	table.
	
	CAUSE
	=====
	
	This behavior is by design of Word 97. When you insert any of the following
	types of objects into a Word document
	
	- AutoShapes
	
	- WordArt
	
	- Pictures
	
	- Clip Art
	
	- Objects (items inserted by clicking Object on the Insert menu)
	
	the object is formatted with the Float Over Text option selected. This creates a
	floating object instead of an inline object.
	
	WORKAROUND
	==========
	
	To work around this problem, use the method appropriate to your situation.
	
	Inserting AutoShapes, WordArt, and Clip Art:
	
	When you insert AutoShapes, WordArt, and Clip Art, you cannot turn off the Float
	Over Text option. However, you can paste an inline picture of the object into
	the table cell. To do this, follow these steps:
	
	1. Insert an AutoShape, WordArt, or Clip Art object in your document.
	
	2. Select the object you just inserted, and then click Cut on the Edit menu.
	
	3. Move the insertion point into the table cell where you want the object.
	
	4. On the Edit menu, click Paste Special.
	
	5. In the Paste Special dialog box, under As, click Picture. Click to clear the
	  Float Over Text check box, and then click OK.
	
	Inserting Other Objects:
	
	When you insert a picture or some other type of object (by clicking Object on the
	Insert menu), click to clear the Float Over Text check box.
	
	Pasting Objects:
	
	When you paste an object from the Clipboard, follow these steps:
	
	1. On the Edit menu, click Paste Special.
	
	2. Click to clear the Float Over Text check box, and then click OK.
	
	MORE INFORMATION
	================
	
	For more information about SR-1, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q170564 WD97: Pictures and Objects Inserted as Inline by Default in SR-1
	
	  Q172475 OFF97: How to Obtain and Install the MS Office 97 SR-1 Patch
	
	For more information about floating objects, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q167738 WD97: Can't See or Manipulate Objects (and Other Odd Behavior)
	
	STATUS
	======
	
	In Microsoft Word 97, pictures or objects are inserted as floating objects by
	default. That is, the Float Over Text check box is always selected.
	
	This behavior does not occur in Microsoft Word 97 Service Release 1 (SR-1). In
	Service Release 1, this feature behaves the way it did in Word versions 7.0 and
	earlier. That is, a picture or object is inserted as an inline
	
	(non- floating) object; the Float Over Text check box is cleared by default.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
