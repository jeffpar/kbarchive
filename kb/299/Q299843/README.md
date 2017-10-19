---
layout: page
title: "Q299843: FIX: Using the Send Menu Changes the Current Folder"
permalink: /kb/299/Q299843/
---

## Q299843: FIX: Using the Send Menu Changes the Current Folder

	Article: Q299843
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbvfp700fix kbvfp700
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Send on the File menu in Visual FoxPro, the current folder may
	change.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run the following command from the Command window:
	
	  ? CURDIR()
	
	2. On the File menu, click Send.
	
	3. Run the following command from the Command window:
	
	  ? CURDIR()
	
	Note that the folder changes.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q269170 Set of DEFAULT Changed After MAPI.SESSION Logon
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
