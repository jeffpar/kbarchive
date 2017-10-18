---
layout: page
title: "Q156454: FIX: Adding File Causes Error if Name Contains a Space"
permalink: kb/156/Q156454/
---

## Q156454: FIX: Adding File Causes Error if Name Contains a Space

	Article: Q156454
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500fix
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a file to Microsoft Visual SourceSafe using the SourceSafe
	Explorer, you may receive the error message:
	
	  "<filename>
	  the above file name is invalid
	
	where <filename> represents the first section of the name of the file you
	are attempting to add. For example, if the filename is "SOURCESAFE RULES," the
	error will read:
	
	  "SOURCESAFE
	  the above file name is invalid
	
	You will receive this message if the following conditions are met:
	
	- You are running Microsoft Windows NT version 4.0.
	
	- The name of the file you are adding contains one or more spaces.
	
	WORKAROUND
	==========
	
	Choosing the OK Command button from the error dialog box will add the file to
	Visual SourceSafe. To avoid the error message altogether, you may use the Visual
	SourceSafe Command line:
	
	  SS ADD <filename>
	
	NOTE: Make sure that the current project is the one to which you want to add the
	file before using the Command line.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual SourceSafe
	version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create or locate a file whose name contains one or more spaces.
	
	2. Open or switch to Microsoft Visual SourceSafe 4.0 running on Microsoft
	  Windows NT 4.0.
	
	3. From the File menu, choose Add Files.
	
	4. Go to the drive and directory where the file described in step 1 is located.
	
	5. Attempt to add the file and note that the error message will appear. Choose
	  OK from the dialog box and note that the file is added successfully.
	
	Additional query words: long filename
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,4.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
