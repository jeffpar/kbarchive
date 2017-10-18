---
layout: page
title: "Q251147: PRB: Unable to Display Help or No Help Available for ADO in VB"
permalink: kb/251/Q251147/
---

## Q251147: PRB: Unable to Display Help or No Help Available for ADO in VB

	Article: Q251147
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access ActiveX Data Objects (ADO) documentation from within
	Visual Basic by pressing F1 from the code editor or from within the object
	browser, nothing occurs, or you receive one of the following error messages:
	
	  Unable to display help
	
	  -or-
	
	  No help available
	
	CAUSE
	=====
	
	This problem occurs because the following items must exist to access
	context-sensitive help for ADO in the Visual Basic IDE:
	
	- The correct version of the ADO compiled HTML help file that corresponds to
	  the ADO version that is referenced in the project references.
	
	-and-
	
	- An entry in the registry that lists this ADO compiled HTML help file as an
	  available HTML help file.
	
	This problem is known to occur when one or both of these items are missing.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Make sure that you have the compiled HTML help file that corresponds to the
	  ADO version that is referenced in your project references. This file is named
	  ADO2?0.chm, where the question mark (?) represents the minor version number.
	
	  For example, when you reference ADO 2.7 (which Microsoft Data Access
	  Components 2.7 installs) in your project, you must confirm that the
	  ADO270.chm file is present.
	
	2. Make sure that a registry entry exists for this .chm file in the following
	  registry subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\HTML Help
	
	  If a registry entry does not exist for the .chm file, add a new string value
	  with the complete path to the file under this subkey. Use the same format as
	  the existing entries for the new string value.
	
	MORE INFORMATION
	================
	
	After you fix this problem, context-sensitive help continues to open in a
	separate window; that is, when you invoke context-sensitive help for ADO
	objects, only the ADO help file (not the whole Microsoft Developer Network
	Library collection) is opened.
	
	If you have the appropriate version of MDAC installed, but if you do not have the
	corresponding version of the ADO help file, you may have to download and install
	the same version of the MDAC Software Development Kit (SDK). To obtain the MDAC
	SDK, visit the following Microsoft Web site:
	
	  Microsoft Universal Data Access
	  http://www.microsoft.com/data
	
	After you download the MDAC SDK, follow the steps that are listed in the
	"Resolution" section of this article.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q216109 HOWTO: Troubleshoot MSDN Library Run-Time/Install/Uninstall Problems
	
	  Q250334 PRB: MSDN Library Unable to Display Help from Within Visual Studio
	  Programs
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
