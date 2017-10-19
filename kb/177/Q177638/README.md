---
layout: page
title: "Q177638: BUG: Upgrading Exchange to 5.5 Causes Reference Problems in VB"
permalink: /kb/177/Q177638/
---

## Q177638: BUG: Upgrading Exchange to 5.5 Causes Reference Problems in VB

	Article: Q177638
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVBDB kb32bitOnly
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When upgrading Microsoft Exchange Server from 4.0 or 5.0 to 5.5, you may need to
	re-register some DLLs in the Visual Basic references menu.
	
	CAUSE
	=====
	
	When Visual Basic is installed on an Exchange Server computer, and the Exchange
	version is upgraded to 5.5, some DLLs become unregistered due to version changes
	and will require re-registering in Visual Basic.
	
	RESOLUTION
	==========
	
	There is no workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem. We are researching this and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVBDB kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
