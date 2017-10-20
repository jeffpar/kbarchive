---
layout: page
title: "Q186266: INFO: What Is Handled Differently in Windows CE, VBCE, and eVB"
permalink: /kb/186/Q186266/
---

## Q186266: INFO: What Is Handled Differently in Windows CE, VBCE, and eVB

{% raw %}

	Article: Q186266
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows CE Toolkit for Visual Basic (VBCE) and eMbedded Visual Basic are
	similar to Visual Basic in both functionality and design. However, several
	Visual Basic features have not been implemented because of limitations in the
	Windows CE operating system and other factors. This article addresses the
	restrictions imposed by these limitations.
	
	MORE INFORMATION
	================
	
	IDE AND PROJECT STRUCTURE
	-------------------------
	
	- Visual Basic class files are not supported.
	
	- Designers and insertable objects, such as Excel, are not supported.
	
	- The Auto Increment checkbox on the Make tab is not supported.
	
	- The Standard, Edit, and Menu Bar toolbars can be customized, but the changes
	  are not persisted. This means that the next time you launch the design
	  environment, it will launch with its default settings.
	
	- The Debug toolbar is not available (VBCE6 only).
	
	- Some properties and methods are provided by the IDE but are not supported.
	
	- Icons cannot be specified in the Project Properties dialog.
	
	- The menu editor is not available (eVB only). Use either the CommandBar or
	  MenuBar (PocketPC platforms) for this functionality.
	
	OBJECTS AND CONTROLS
	--------------------
	
	- ActiveX components cannot be created.
	
	- ActiveX controls written for Visual Basic 5.0 or 6.0 cannot be used.
	
	- The Printer object is not supported.
	
	LANGUAGE FEATURES
	-----------------
	
	- Help files are not supported.
	
	- The only variable type is Variant. Although variables can be declared as a
	  specific type, this is only for Intellisense help.
	
	- Duplicate sub or functions, such as a sub-sub, function-function, or
	  sub-function combination, are not supported.
	
	- Conditional compilation is not supported.
	
	- Command line arguments are not supported.
	
	- The Next statement does not take an argument (VBCE6 only).
	
	- Only lete binding is supported.
	
	RUNNING AND DEBUGGING CODE
	--------------------------
	
	- Programs are compiled before they are run.
	
	- Most language errors are displayed only at run-time.
	
	- Arrays may not get initialized when there is little free memory.
	
	- The Debug object is not supported.
	
	- An external debugger is provided.
	
	NOTE: Adding an existing Visual Basic code module or existing Visual Basic forms,
	including those listed in the Add Form dialog, to a Windows CE Toolkit for
	Visual Basic or eMbedded Visual Basic project is generally not supported because
	the code module or form may use controls and/or language syntax not supported by
	Windows CE Toolkit for Visual Basic.
	
	REFERENCES
	==========
	
	eMbedded Visual Basic Online Help
	
	The Windows CE Toolkit for Visual Basic 6.0 Books Online
	
	For more information regarding Windows CE, please visit the following Microsoft
	web address:
	
	  http://www.microsoft.com/windowsce/
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q184650 INFO: What Does Visual Basic Have That VBCE Doesn't Have?
	
	Additional query words: wce wince vbce evb vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
