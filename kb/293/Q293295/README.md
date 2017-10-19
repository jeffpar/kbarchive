---
layout: page
title: "Q293295: BUG: PDW Package Cannot Be Installed If User Name Is Korean DBCS"
permalink: /kb/293/Q293295/
---

## Q293295: BUG: PDW Package Cannot Be Installed If User Name Is Korean DBCS

	Article: Q293295
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbDeployment kbFarEast kbOSWin2000 kbVBp kbVBp600bug kbGrpDSVB kbKo
	Last Modified: 10-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a Visual Basic 6.0 application setup package that the Package and
	Deployment Wizard (PDW) generated, you may receive the following error message:
	
	  Path or File not found
	
	This error occurs when the following conditions are met:
	
	- The operating system is Korean Windows 2000.
	- The package is installed by a user whose user name is Korean-character based.
	
	
	RESOLUTION
	==========
	
	To work around this problem, log on as a user whose user name is ANSI-based to
	install the application. After the installation, you should be able to use the
	application when you log on as the Korean character-based user.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an application setup package with the Visual Basic 6.0 Package and
	  Deployment Wizard.
	
	2. On a Korean Windows 2000-based computer, from the Start menu, point to
	  Programs, point to Administrative Tools, and then click Computer Management.
	
	3. Click to expand the Local Users and Groups node. Right-click Users, and then
	  click New User. In the User name box, type a name with Korean characters.
	  Complete the necessary information to create a new user, and then click
	  Create.
	
	4. Click Groups, right-click Administrators in the right pane, and then click
	  Add to Group. Click Add, and add the newly created user to the Administrators
	  group. Click OK twice.
	
	5. Log off, and then log on with the newly created user.
	
	6. Start the application setup package to reproduce the error.
	
	Additional query words: Korean PDW
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbDeployment kbFarEast kbOSWin2000 kbVBp kbVBp600bug kbGrpDSVB kbKorean kbDSupport kbIntlDev 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
