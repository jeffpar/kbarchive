---
layout: page
title: "Q156717: PRB: Rollback of Shared File Forces a Branch"
permalink: /kb/156/Q156717/
---

## Q156717: PRB: Rollback of Shared File Forces a Branch

{% raw %}

	Article: Q156717
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a Rollback of a shared file, Visual SourceSafe will cause the
	shared file to branch. This article describes how to reproduce this behavior and
	how to avoid it.
	
	RESOLUTION
	==========
	
	The following procedure describes a workaround that will avoid branching a
	shared file that is being rolled back:
	
	1. Open or switch to Microsoft Visual SourceSafe.
	
	2. Locate the file that needs to be rolled back and open its History Window.
	
	3. Select the version to which you want to Rollback, and perform a Get Close the
	  History window.
	
	4. Using File Manager or Windows Explorer, move the file from step 3 to a
	  different directory.
	
	5. Switch to Visual SourceSafe, and check out the file that needs to be rolled
	  back.
	
	6. Using File Manager or Windows Explorer, move the file from step 3 back to its
	  working directory, overwriting the checked-out file from step 5.
	
	7. Switch to Visual SourceSafe, and check the file back in.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open or switch to Microsoft Visual SourceSafe.
	
	2. Locate a file that has several versions in its history and share it with
	  another project.
	
	3. Open the file's History window and perform a Rollback to a previous version.
	  If you are using Visual SourceSafe 5.0 or later, a dialog box appears warning
	  you that the Rollback will perform a branch.
	
	4. Note that the rolled back file is no longer shared.
	
	  NOTE: You may need to refresh the Explorer window to see the updated glyphs.
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q157082 FIX: Branch or Rollback of Shared File May Cause Corruption
	
	  Q157813 BUG: Rollback of Shared File Rolls to Unexpected Version
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
