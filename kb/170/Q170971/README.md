---
layout: page
title: "Q170971: WD97: Link to Floating Picture Lost When Document Saved as 6.0/9"
permalink: /kb/170/Q170971/
---

## Q170971: WD97: Link to Floating Picture Lost When Document Saved as 6.0/9

{% raw %}

	Article: Q170971
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbusage word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a Word 97 document in the Word 6.0/95 file format, you may lose
	the picture link information when you open the document in an earlier version of
	Word.
	
	CAUSE
	=====
	
	The converter that saves in Word 6.0/95 format does not preserve the picture
	link information for linked floating pictures.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Link the Picture as an Inline Object
	----------------------------------------------
	
	When you insert the picture, clear the Float Over Text check box so that Word
	inserts the picture as an inline object rather than a floating object.
	
	Method 2: Insert the Picture into a Text Box
	--------------------------------------------
	
	To keep the picture as a linked floating object, first insert a text box, and
	then insert the picture as a linked inline object in the text box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Word 6.0/95 (via RTF) Export
	Converter in Microsoft Word 97 for Windows. This problem was corrected in the
	Word 6.0/95 (via RTF) Export Converter that ships with Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	NOTE: If your document contains a picture as a linked floating object, none of
	following methods will work around this problem:
	
	- Saving the document in the Microsoft Word 97 file format, and opening the
	  document in Word 6.0 or 7.0 using the Microsoft Word 97 Import Converter.
	
	- Saving the document in Rich Text Format (RTF), and then opening the document
	  in an earlier version of Word.
	
	- Saving the document in the Word 6.0/95 file format using the binary export
	  converter, and then opening the document in Word 6.0 or 7.0.
	
	REFERENCES
	==========
	
	For additional information about floating pictures, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q162579 WD97: Linked Picture Doesn't Preserve Scaling Properties
	
	  Q161692 WD97: Problems With Float Over Text Objects
	
	Additional query words: SR1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbgraphic kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
