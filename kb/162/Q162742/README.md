---
layout: page
title: "Q162742: BUG: Setup Fails When Directory Named is &gt;237 Characters"
permalink: /kb/162/Q162742/
---

## Q162742: BUG: Setup Fails When Directory Named is &gt;237 Characters

	Article: Q162742
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbVBp500 kbVBp500bug kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a Setup program that is created with Microsoft Visual Basic Setup
	Wizard and install to an directory that has a path and name greater than 237
	characters, the following error message appears at the end of the installation:
	
	  Cannot create uninstall icon, destination Path too long.
	
	The Setup program then removes the entire installation.
	
	WORKAROUND
	==========
	
	To work around this behavior, select a directory that has a shorter combined
	name and path.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbtool kbVBp500 kbVBp500bug kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper
	Version           : :5.0
	Issue type        : kbbug
	
	=============================================================================
	
