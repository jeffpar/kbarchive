---
layout: page
title: "Q166978: WD97: Subdocuments Lost When Master Document Saved in HTML"
permalink: /kb/166/Q166978/
---

## Q166978: WD97: Subdocuments Lost When Master Document Saved in HTML

{% raw %}

	Article: Q166978
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you open or create a master document containing subdocuments and save it in
	HTML format, when the master document is re-opened, the subdocuments are
	missing.
	
	CAUSE
	=====
	
	HTML does not support the master document feature. The text and formatting of
	the master document are retained, but the subdocuments are not converted.
	
	WORKAROUND
	==========
	
	Before saving the master document in HTML format, collapse the subdocuments into
	the master document by following these steps:
	
	1. Make sure the master document is open and view it in master document view.
	
	2. Click a subdocument and click the Remove Subdocument button on the Master
	  Document toolbar.
	
	  This collapses the subdocument into the master document while retaining the
	  formatting.
	
	3. Repeat step 2 for each subdocument.
	
	4. Save the document in HTML format.
	
	If the master document has already been saved in HTML format and you do not have
	a copy of the master document before the save, follow these steps:
	
	1. Open the new HTML version of the master document.
	
	2. Position the insertion point where you want to insert the first subdocument.
	
	3. On the Insert menu, click File.
	
	4. Under Files Of Type, click All Files.
	
	5. Click the HTML version of the first subdocument.
	
	  For more information about how Word names the subdocuments if they do not
	  already have a name, see the "More Information" section of this article.
	
	6. Repeat steps 1-5 for the other subdocuments.
	
	7. Save the master document (in HTML format).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you save a master document in HTML format, Word attempts to convert and
	save the master document in HTML format. It also attempts to convert each
	individual subdocument in HTML format and save it as a separate file.
	
	If the subdocument has been previously saved and has a name, Word displays a
	dialog box giving you the option to overwrite the file with the new format
	(HTML) or to save the HTML version of the file with a new name.
	
	If the subdocument has not been previously saved and therefore does not have a
	name, Word automatically saves the subdocument in HTML format in the same
	directory as the master document. Word gives the subdocument a name based on the
	first line of text in the subdocument.
	
	REFERENCES
	==========
	
	For more information on features that are unavailable when you work with HTML
	documents, please see the following article in the Microsoft Knowledge Base:
	
	  Q157477 WD97: Features Not Available During Web Authoring
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
