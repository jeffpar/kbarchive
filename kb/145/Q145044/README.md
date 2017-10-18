---
layout: page
title: "Q145044: WD97: Document Corrupt After Editing Word 2.0 Document"
permalink: kb/145/Q145044/
---

## Q145044: WD97: Document Corrupt After Editing Word 2.0 Document

	Article: Q145044
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion WordCon word97 kbconvert
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Word 97 document, there are extra paragraph marks or boxes in
	the document. If the document contains a table, there are paragraph marks or
	boxes in front of the end of the row marker for every row within a table.
	
	CAUSE
	=====
	
	This behavior may occur when the following conditions are true:
	
	- You have opened and edited a Text Only or a Word 2.0 document in Word 97.
	
	- You have the AutoRecover save option turned on and have edited the document
	  long enough for an AutoRecover file to be created.
	
	- You save the document as a Word 97 document, close, and reopen the document.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	MORE INFORMATION
	================
	
	To work around this problem, use one of the following methods:
	
	Method 1: Convert the Table to Text (use if your document contains a table)
	---------------------------------------------------------------------------
	
	1. Place your insertion point in the table.
	
	2. On the Table menu, click Select Table.
	
	3. On the Table menu, click Convert Table to Text, select Tabs, and click OK.
	
	4. With the text still selected, on the Table menu, click Convert Text to Table,
	  select Tabs, and click OK.
	
	5. The unwanted paragraph marks should now be gone.
	
	Method 2: Save the Document as RTF
	----------------------------------
	
	1. On the File menu, click Save As.
	
	2. In the Save As Type drop-down list, select Rich Text Format, and click OK.
	
	3. Close and reopen the file.
	
	
	Additional query words: autosave autorecover autorecovery corrupt save Saveas
	
	======================================================================
	Keywords          : kbdta kbconversion WordCon word97 kbconvert 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
