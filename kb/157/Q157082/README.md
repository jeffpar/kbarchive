---
layout: page
title: "Q157082: FIX: Rollback of a Shared File Rolls to Unexpected Version"
permalink: kb/157/Q157082/
---

## Q157082: FIX: Rollback of a Shared File Rolls to Unexpected Version

	Article: Q157082
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,4.0a
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500fix
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you Rollback a Shared file, the resulting version number may appear to be
	incorrect. For example, if your file contains 8 versions, and you elect to
	Rollback from version 8 to version 7, the History window will indicate that you
	rolled back to version 8, not 7 as expected.
	
	CAUSE
	=====
	
	When you Rollback a Shared file, Visual SourceSafe forces a Branch to occur. The
	additional version number is a result of the Branch that takes place when a
	shared file is rolled back.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual SourceSafe
	5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open or switch to Microsoft Visual SourceSafe.
	
	2. Select a file that has several versions and share it with another project.
	
	3. Open the History Window, and select the previous version of the file. For
	  example, if there are 10 versions, select version 9.
	
	4. Select the Rollback Command Button. You will be presented with a dialog that
	  notifies you that Rollback is undoable. Click the Yes Command Button.
	
	
	5. Note that the topmost item in the History Window is still the version number
	  that you rolled back from. The Action column also indicates that you rolled
	  back to the version number that you were rolling back from. For example, if
	  you were rolling back from version 10 to version 9, after the Rollback the
	  History Window still shows 10 versions, with version 10 reading "Rolled Back
	  to Version 10."
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q157813 FIX: Branch or Rollback of Shared File May Cause Corruption
	
	  Q156717 PRB: Rollback of Shared Files Forces a Branch
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500fix 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe400a kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : :4.0,4.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
