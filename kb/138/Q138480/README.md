---
layout: page
title: "Q138480: BUG: Using the Keyboard in SourceSafe Administrator May Fail"
permalink: /kb/138/Q138480/
---

## Q138480: BUG: Using the Keyboard in SourceSafe Administrator May Fail

	Article: Q138480
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400bug kbSSafe500bug kbSSafe600bug
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assigning user rights in the Visual SourceSafe Administrator does not work
	correctly with the keyboard. Attempting to add project rights for a user by
	choosing Rights by Project on the Tools menu will change the rights for the root
	project only.
	
	RESOLUTION
	==========
	
	The mouse must be used in place of the keyboard.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the Visual SourceSafe Administrator.
	
	2. Select any user other than Guest and Admin.
	
	3. From the Tools menu, choose Rights Assignments for User.
	
	4. Choose the Add Assignment button.
	
	5. Using only the keyboard, use the arrows to select a project.
	
	6. Press the TAB key to move to the rights section. Assign any rights to the
	  user.
	
	7. Press the TAB key to move to the OK button, and press ENTER.
	
	The Assignments for <username> dialog box shows that the rights for the
	root ($/) project have been changed to the rights assigned in step 6. The same
	behavior also occurs when from the Tools menu, you choose Rights by Project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400bug kbSSafe500bug kbSSafe600bug 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbbug
	
	=============================================================================
	
