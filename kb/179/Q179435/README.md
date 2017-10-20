---
layout: page
title: "Q179435: WD97: Error: &quot;Cannot Access the File&quot; After File Closed (ODMA)"
permalink: /kb/179/Q179435/
---

## Q179435: WD97: Error: &quot;Cannot Access the File&quot; After File Closed (ODMA)

{% raw %}

	Article: Q179435
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Word 97 in a Document Management System (DMS) that uses the
	ODMA API, you may receive the following error message after copying a large
	amount of text and closing the document:
	
	- The process cannot access the file because it is being used by another
	  process.
	
	  -or-
	
	- <document name> is in use by another application.
	
	These error messages will occur when the DMS attempts to move or catalog the
	original Word document.
	
	CAUSE
	=====
	
	This problem occurs because when you use the Cut or Copy commands to copy
	information, Word makes a copy of the information, saves it in memory, and makes
	a note of where the copied data is stored (Word caches the data). Word
	incorrectly keeps the pointer to this cached information after allowing the file
	to be closed. The error message is displayed when DMS attempts to move or
	catalog the original Word document.
	
	
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q174304 WD97: Save As Command Does Not Close the Previous Document
	
	  Q159963 WD97: Word 97 Supports ODMA
	
	Additional query words: PCDocs PC Docs groupwise novell saveas saveas.dot legal
	
	======================================================================
	Keywords          : kb3rdparty kbinterop word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
