---
layout: page
title: "Q136852: FIX: Objects Are Missing the Destroy Event"
permalink: kb/136/Q136852/
---

## Q136852: FIX: Objects Are Missing the Destroy Event

	Article: Q136852
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Destroy event is missing for the CommandGroup, OptionGroup, Column, and
	Header objects. Every class should have an Init, Destroy, and Error event.
	
	WORKAROUND
	==========
	
	Place the code in the Destroy event procedure of the container object of the
	CommandGroup, optionGroup, Column, and Header objects.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
