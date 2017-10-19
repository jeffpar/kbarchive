---
layout: page
title: "Q170937: WD97: Supplemental Converter Not Listed in Files Of Type List"
permalink: /kb/170/Q170937/
---

## Q170937: WD97: Supplemental Converter Not Listed in Files Of Type List

	Article: Q170937
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 08-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install a supplemental converter, you may not see the name of a
	supplemental text converter in the Files Of Type drop-down list in the Open
	dialog box.
	
	WORKAROUND
	==========
	
	In order for Microsoft Word to recognize the new converter, do the following:
	
	1. On the File menu, click Open.
	
	2. In the "Files of type" list, click "All Files (*.*)."
	
	3. Select the file that you are trying to open with the supplemental converter.
	
	4. Click Open.
	
	To save a file in a foreign format that is not listed after you install a
	supplemental converter, follow these steps:
	
	1. Open a new blank document.
	
	2. On the File Menu, click Save As.
	
	3. In the "Save as Type" drop-down list, click a foreign file format such as
	  Text Only (*.txt).
	
	4. Enter a name for the document and click Save.
	
	5. Close the new document then re-open the document you just closed.
	
	  This re-registers all of the installed text converters including any new
	  converters.
	
	6. Open the original file that you want saved in the new file format.
	
	7. On the File menu, click Save As.
	
	  You should now see the foreign format that you want to use in the "Save as
	  Type" list.
	
	8. Click to select the file type and then click Save.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about the conversion process, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q136385 Supported Foreign File Formats in Word and Office 95
	
	Additional query words: saveas
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
