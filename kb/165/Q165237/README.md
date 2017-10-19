---
layout: page
title: "Q165237: FIX: Word 97 Document Added to Visual SourceSafe as Text File"
permalink: /kb/165/Q165237/
---

## Q165237: FIX: Word 97 Document Added to Visual SourceSafe as Text File

	Article: Q165237
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual SourceSafe might interpret Word Documents as Text format when you add
	them to your database, potentially corrupting the files. The conversion process
	of Word 97 to Word 6.0/95 format apparently converts the file into text format.
	
	Note: To verify the format type Visual SourceSafe stored, highlight the file,
	then from the File menu in the Visual SourceSafe Explorer, choose Properties.
	The file type is displayed on the General tab.
	
	CAUSE
	=====
	
	When you save a file in Word 6.0/95 format, it generates a file in Rich Text
	Format (RTF), which is text representation of a Binary file. SourceSafe detects
	this and stores the file as Text. The corruption occurs when the format of the
	file is converted back to Word 97 Binary format while Visual SourceSafe has the
	file registered as Text.
	
	RESOLUTION
	==========
	
	Any of the following three methods can be used to avoid this problem:
	
	- Don't save files created in Word 97 as Word 6.0/95 format. Instead, have
	  users of Word 6.0 or Word 95 get the Microsoft Word 97 Converter. For
	  additional information about the Microsoft Word 97 Converter, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q162602 WD 97: Questions About Saving in the Word 6.0/95 File Format
	
	- When adding a file, you see a Comment dialog box with an Advanced>>
	  button at the bottom. Click this button and change the File Type drop-down
	  box to Binary.
	
	- Add the following to your Srcsafe.ini file before any section headers:
	
	  Binary_Masks = *.doc
	
	If you find a .doc file (that it is not damaged) stored incorrectly as Text type,
	you can store it correctly without damaging the file, but you will lose the
	History. Perform a Get Latest Version, destroy (delete permanently) the file in
	SourceSafe, then add back the local file using one of the three methods
	described above.
	
	STATUS
	======
	
	This behavior is by design. Visual SourceSafe correctly identifies the .rtf file
	as being a text file. This problem was corrected in Visual SourceSafe version
	6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Open a new document in Word 97, save it as Word 6.0/95 type and close.
	
	2. Add the file to Visual SourceSafe.
	
	3. Check out the file and edit it in Word 97.
	
	4. Choose File, then save as a Word Document(*.doc) file type.
	
	5. Close the file.
	
	6. Check the file back into Visual SourceSafe.
	
	7. Now highlight the file, choose Edit, View File, and you will see corrupted
	  characters.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
