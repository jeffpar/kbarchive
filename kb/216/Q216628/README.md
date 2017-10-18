---
layout: page
title: "Q216628: WD97: Error Message: &quot;Word Cannot Open the Document&quot;"
permalink: kb/216/Q216628/
---

## Q216628: WD97: Error Message: &quot;Word Cannot Open the Document&quot;

	Article: Q216628
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under the following circumstances, an error message appears when you try to open
	a Word document.
	
	Case 1: The Document Is Protected with Multiple Passwords
	---------------------------------------------------------
	
	The document is not opened.
	
	This problem occurs when the following conditions are true:
	
	- The Temp directory variable points to a drive with more than 2 gigabytes (GB)
	  of free disk space available.
	
	  -and-
	
	- The document is protected with two passwords (an Open password and a Modify
	  password).
	
	After you correctly type the first password (called the Open password) for access
	to the file, a second dialog box appears with these options:
	
	  (1) enter an open password or alternatively, (2) access the file read- only
	  by clicking the Read-only button.
	
	After you click Read-only (without entering a modify password), the document
	fails to open.
	
	Case 2: You Try to Open a Document That Is in Use by Another Person
	-------------------------------------------------------------------
	
	When you attempt to open a document that is in use by another user, you are given
	the option of opening a read-only copy of the document, and the following
	message appears:
	
	  <path><document.doc> is in use by <username>. Do you want
	  to make a copy?
	
	where <path><document.doc> is the location and name of the document,
	and <username> is the name of the person who has the document open.
	
	After you click OK, the following error message appears:
	
	  Word cannot open the document. Try one or more of the following:
	
	  - On the File Menu, click open to open the document.
	  - Make sure the document has a .doc extension.
	
	After you click OK, the document fails to open.
	
	Case 3: You Attempt to Open a Document Saved with Read-only Recommended
	-----------------------------------------------------------------------
	
	When you attempt to open a document that has been saved with Read-only
	recommended, the following error message appears:
	
	  Word cannot open the document. Try one or more of the following:
	
	  - On the File Menu, click open to open the document.
	  - Make sure the document has a .doc extension.
	
	After you click OK, the document fails to open.
	
	
	CAUSE
	=====
	
	A variable limit was reached. Therefore, current disk free space appeared to be
	less than the amount required for creating an associated temp file.
	
	
	RESOLUTION
	==========
	
	If you are using Microsoft Word 97 for Windows Service Release 1, obtain
	Microsoft Word 97 Service Release 2 (SR-2).
	
	WORKAROUND
	==========
	
	Workaround for Case 1
	---------------------
	
	To temporarily work around this problem, use any of the following methods.
	
	Method 1: Reset the TEMP Environment Variable
	
	Set the TEMP environment variable to point to an FAT or NTFS drive that contains
	less than 2 GB of free space.
	
	To do this if you are running Windows NT, follow these steps:
	
	1. Close all open programs.
	
	2. Click the Start button, point to Settings, and click Control Panel.
	
	3. Double-click the System icon and click the Environment tab.
	
	4. In the User Variable box, select the TEMP variable.
	
	5. In the Value box, type the path to the new location--a drive containing less
	  than 2 GB of free space.
	
	6. Restart your computer.
	
	If you are running Windows 95 or Windows 98, you need to add the TEMP variable to
	the Autoexec.bat file. To do this, follow these steps:
	
	1. On the Start menu, click Run.
	
	2. Type "sysedit" (without the quotation marks) and click OK.
	
	3. Find the Autoexec.bat file and add the following to the end of the file
	  name:
	
	  "Set temp = c:\temp" (without the quotation marks)
	
	  Where c:\temp is the path to the new location--a drive containing less than 2
	  GB of free space.
	
	4. Restart your computer.
	
	Method 2: Create a Swap File to Reduce the Amount of Perceived Disk Space
	
	On the drive on which the Temp directory is located, create a swap file large
	enough to create the impression of less free disk space (less than 2 GB).
	
	Method 3: Use NTFS to Set the Permissions of the File
	
	Give the document Read-Only permission at the NTFS file level rather than
	protecting it with a password in Word.
	
	Workaround for Case 2
	---------------------
	
	Method 1: Reset the TEMP Environment Variable
	
	Set the TEMP environment variable to point to an FAT or NTFS drive that contains
	less than 2 GB of free space. To do this, follow these steps:
	
	1. Close all open applications.
	
	2. Click the Start button, point to Settings, and click Control Panel.
	
	3. Double-click the System icon and click the Environment tab.
	
	4. In the User Variable box, select the TEMP variable.
	
	5. In the Value box, type the path to the new location--a drive containing less
	  than 2 GB of free space.
	
	6. Restart your computer.
	
	Method 2: Create a Swap File to Reduce the Amount of Perceived Disk Space
	
	On the drive on which the Temp directory is located, create a swap file large
	enough to create the impression of less free disk space (less than 2 GB).
	
	Workaround for Case 3
	---------------------
	
	Method 1: Reset the TEMP Environment Variable
	
	Set the TEMP environment variable to point to an FAT or NTFS drive that contains
	less than 2 GB of free space. To do this, follow these steps:
	
	1. Close all open applications.
	
	2. Click the Start button, point to Settings, and click Control Panel.
	
	3. Double-click the System icon and click the Environment tab.
	
	4. In the User Variable box, select the TEMP variable.
	
	5. In the Value box, type the path to the new location--a drive containing less
	  than 2 GB of free space.
	
	6. Restart your computer.
	
	Method 2: Create a Swap File to Reduce the Amount of Perceived Disk Space
	
	On the drive on which the Temp directory is located, create a swap file large
	enough to create the impression of less free disk space (less than 2 GB).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of Word listed at
	the beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please click the article number(s) below
	to view the article(s) in the Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q189439 WD97: Word Fails to Open: 'Cannot Open the Existing ...'
	
	Additional query words: readonly read only temp dir directory failed to open password
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
