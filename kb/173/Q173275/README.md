---
layout: page
title: "Q173275: WD97: EMF Graphic Missing When You Open Document"
permalink: kb/173/Q173275/
---

## Q173275: WD97: EMF Graphic Missing When You Open Document

	Article: Q173275
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a Word 97 document that contains a graphic created in CorelDraw,
	the graphic may appear to be missing.
	
	CAUSE
	=====
	
	The graphic was created in CorelDraw 6.x and saved as an Enhanced Windows
	MetaFile (*.EMF).
	
	
	WORKAROUND
	==========
	
	To work around this behavior, use one of the following methods.
	
	Method 1: Use a CDR graphic
	---------------------------
	
	Save the file as a CDR graphic from CorelDraw, and then insert it into Microsoft
	Word.
	
	Method 2: Copy and Paste
	------------------------
	
	Use the Copy and Paste commands to move the graphic between CorelDraw and
	Microsoft Word.
	
	Method 3: Save the Word document as RTF
	---------------------------------------
	
	Save the document as Rich Text Format (*.RTF) in Microsoft Word 97 after
	inserting an EMF graphic created in CorelDraw. To do so, follow these steps:
	
	1. On the File menu, click Save As.
	
	2. In the Save As Type box, click to select "Rich Text Format (*.RTF)."
	
	3. Type a name for the document, and then click OK to save it.
	
	4. Close the document, and then re-open it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q157083 WD97: Graphics Filters Installed During Typical Setup
	
	  Q159282 OFF97: Shipped Graphics Filters and Their Limitations
	
	  Q158889 OFF97: Imported EMF Files Are Not Printed Correctly
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kb3rdparty winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
