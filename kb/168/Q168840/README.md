---
layout: page
title: "Q168840: WD97: New File Types Still Open in Version 7.0 After Upgrade"
permalink: /kb/168/Q168840/
---

## Q168840: WD97: New File Types Still Open in Version 7.0 After Upgrade

	Article: Q168840
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:95,97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When associating a new file type with Microsoft Word, files of that type open in
	Word 7.0 instead of opening in Word 97.
	
	CAUSE
	=====
	
	The problem above occurs if the following conditions are true:
	
	- You have associated the file type you are trying to open with Word.
	
	  -and-
	
	- Both Word 7.0 and Word 97 are installed on the computer.
	
	  -and-
	
	- You are opening the file from the Windows Explorer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. We are researching this problem and will post more
	information here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	Associating the file type with Microsoft Word 97 will cause the file to open in
	the correct version of Microsoft Word. Follow the steps below to re-associate
	the files.
	
	1. In the Windows Explorer, Click View on the menu and then click Options. The
	  Options dialog will appear.
	
	2. Click the File Types tab. Highlight the file type you are trying to open from
	  the Registered Files Type list box. Click the Edit button. The Edit File Type
	  dialog box will appear.
	
	3. Highlight Open from the Actions list box. Click Edit. In the Editing Action
	  For Type dialog box, click the Browse button. The Open With dialog box
	  appears
	
	4. Search for and highlight the Microsoft Office 97 executable file. That file
	  in normally located in the C:\Program Files\Microsoft Office\Office folder.
	  Click the Open and then click OK. Click Close twice.
	
	When you now open that particular file type, it will open in Microsoft Word 97
	instead of Microsoft Word 7.0. This process must be repeated for each new file
	type you wish to open into Microsoft Word 97.
	
	
	Additional query words: shell registration
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin95 kbWordSearch kbOSWinSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:95,97
	
	=============================================================================
	
