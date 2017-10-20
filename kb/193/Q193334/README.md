---
layout: page
title: "Q193334: PRB: Modification to DefProgramGroup in Setup.lst is Ignored"
permalink: /kb/193/Q193334/
---

## Q193334: PRB: Modification to DefProgramGroup in Setup.lst is Ignored

{% raw %}

	Article: Q193334
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When modifying the value of "DefProgramGroup" in the Application Setup Wizard's
	Setup.lst file to change the name of the program group to be created, the
	modification is ignored during the application's installation.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Changing the value of "DefProgramGroup" does not change the name of the program
	group. Below is a typical [Setup] paragraph:
	
	     [Setup]
	     Title=Project1
	     DefProgramGroup=Project1
	     DefaultDir=$(ProgramFiles)\Project1
	     Setup=setup1.exe
	     AppExe=Project1.exe
	     AppToUninstall=Project1.exe
	     AppPath=
	
	Changing the line "DefProgramGroup=Project1" to "DefProgramGroup=MyProject" will
	not create a group named "MyProject" after you install the application.
	
	NOTE: This behavior has been updated with the new Visual Basic 6.0 Package and
	Deployment Wizard (PDW). The PDW now allows multiple group creation that was not
	available in previous versions of the Application Setup Wizard.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q193082 : HOWTO: Build a Setup Program Creating Multiple Group and Icons
	
	Additional query words: kbdss kbDSupport kbVBp kbVBp400 kbVBp500 kbAppSetup
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
