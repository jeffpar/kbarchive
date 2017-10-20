---
layout: page
title: "Q159409: PRB: No Icons Created on Application Setup"
permalink: /kb/159/Q159409/
---

## Q159409: PRB: No Icons Created on Application Setup

{% raw %}

	Article: Q159409
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbAppSetup kbDSSTools kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a distribution set with the Setup Wizard and run the setup
	program on the target machine, Visual Basic 4.0 does not generate any icons or
	groups for the application.
	
	CAUSE
	=====
	
	This is caused by an invalid character in the application title. For example,
	you use parentheses in the title.
	
	WORKAROUND
	==========
	
	Remove any non-alpha-numeric characters from the application title and save the
	project file. Then create the setup distribution set with the Setup Wizard
	again.
	
	MORE INFORMATION
	================
	
	When you compile an application (the "make EXE" menu option), you can use the
	"Options" dialog box to type in an application title. Although Visual Basic 4.0
	allows you to place certain non-alpha-numeric characters in the title, this
	causes the setup program to fail when it creates icons.
	
	When you Save the project, the title is written to the .vbp file in the line
	starting with "TITLE=". The Setup Wizard uses this line to set the App Title
	that is then used as the default Group and Icon name. The setup program creates
	only one group and one icon for the main executable by default. In Windows 95
	and Windows 98, the group is not created according to Windows 95 and Windows 98
	standards.
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q151818 How To Build a Setup Program Creating Multiple Groups/Icon
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAppSetup kbDSSTools kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
