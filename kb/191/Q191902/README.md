---
layout: page
title: "Q191902: PRB: Errors Using Setup Wizard on Novell Network"
permalink: /kb/191/Q191902/
---

## Q191902: PRB: Errors Using Setup Wizard on Novell Network

{% raw %}

	Article: Q191902
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbVBp kbVBp500 kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Application Setup Wizard (ASW) on a Microsoft Visual Basic
	project that resides on a Novell network file server, the following error
	message may occur:
	
	  The specified directory:
	  F:\aaa
	  is invalid, incomplete, or write protected. Please type a full path
	  with drive letter; for example 'C:\APPS'.
	
	which is followed by the following error:
	
	  F:\aaa
	  is invalid, incomplete, or write protected. Please type a full path
	  with drive letter; for example 'C:\APPS'.
	
	which is followed by the following error:
	
	  File not found
	  An error occurred while processing the project file
	
	where "F:\aaa" is the directory on a network server where the Visual Basic
	project (.vbp) file resides.
	
	RESOLUTION
	==========
	
	If the project files are copied to a local drive, the Setup Wizard will proceed
	as normal.
	
	
	STATUS
	======
	
	This problem occurs when you use Microsoft Visual Basic 5.0 and Novell 4.11
	Server with IntranetNetware Client 4.11a.
	
	This problem has been corrected in Microsoft Visual Basic, version 6.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbVBp kbVBp500 kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
