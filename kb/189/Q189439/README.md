---
layout: page
title: "Q189439: WD97: Word Fails to Open &quot;Cannot Open the Existing &lt;Square&gt;&quot;"
permalink: /kb/189/Q189439/
---

## Q189439: WD97: Word Fails to Open &quot;Cannot Open the Existing &lt;Square&gt;&quot;

	Article: Q189439
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Case 1
	------
	
	When you attempt to start a second session of Microsoft Word 97 running on a
	Windows NT, version 4.0, the following error message may appear:
	
	  Word cannot open the existing <square symbol>
	
	where <square symbol> is a symbol resembling an empty white box.
	
	Case 2
	------
	
	When you attempt to open a password-protected document using the "read-only
	recommended" option, the document fails to open.
	
	CAUSE
	=====
	
	A variable limit was reached. Therefore, current disk free space appears to be
	less than the amount required for creating an associated Temp file.
	
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	
	To temporarily work around this problem, use either of the following methods.
	
	Method 1: Create a Paging File to Reduce the Amount of Perceived Disk Space
	---------------------------------------------------------------------------
	
	On the drive on which the Temp directory is located, create a paging file large
	enough to create the impression of less free disk space [less than 2 gigabytes
	(GB)].
	
	Method 2: Use Only One Session of Word
	--------------------------------------
	
	Do not attempt to use two sessions of Word. Close the dialog box to the error
	message and activate the open session of Word.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2). For additional information about SR-2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173547 WD: Document Fails to Open "Cannot Open The Existing <Square>"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
