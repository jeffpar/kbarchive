---
layout: page
title: "Q189472: PRB: &quot;Unexpected Error; Quitting&quot; When Starting Visual Basic"
permalink: /kb/189/Q189472/
---

## Q189472: PRB: &quot;Unexpected Error; Quitting&quot; When Starting Visual Basic

	Article: Q189472
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Trying to run Visual Basic results in the following error message:
	
	  Unexpected Error; Quitting
	
	This error occurs after the Visual Basic splash screen appears.
	
	CAUSE
	=====
	
	There are two known casues for this error:
	
	1. Visual Basic cannot find one of the following two files needed to run:
	
	  MSO97RT.DLL
	  MRT7ENU.DLL
	
	2. You are trying to run Visual Basic from a network "Administrator" setup.
	
	RESOLUTION
	==========
	
	For the first situation, the two files listed in the "Cause" section can be
	located on the Visual Basic installation CD in the \OS\System directory.
	
	These two files need to be copied into one of the following directories in order
	to resolve the issue:
	
	  C:\Program Files\Common Files\Microsoft Shared\VBA
	
	  -or-
	
	  C:\Program Files\Common Files\MsApps\VBA
	
	
	For the second situation, install Visual Basic locally. The Visual Basic product
	is not designed to run in a shared mode, so network Administrtator setups are
	unsupported. Please see the "References" section for more information.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q171813 FIX: IPF in MSO97RT.DLL When Starting Visual Basic
	
	  Q170680 XL7: MS Query Doesn't Work After Installing Visual Basic 5.0
	
	  Q142517 INFO: VB Doesn't Support Administrator or Network Installation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
