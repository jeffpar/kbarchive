---
layout: page
title: "Q138660: PRB: No Event Fires as Focus Moves Out of a System Window"
permalink: kb/138/Q138660/
---

## Q138660: PRB: No Event Fires as Focus Moves Out of a System Window

	Article: Q138660
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an interactive user of Microsoft Visual FoxPro moves the focus from one
	system window to another system window, no event fires.
	
	STATUS
	======
	
	This behavior is by design. However, developers have requested that an event
	fire so that they can tell when the user moves off of a design window such as
	the Report Designer. It would be useful to be able to tell if the user saved the
	file, and if so, to what name. This feature has been requested as an enhancement
	to Microsoft Visual FoxPro.
	
	
	Additional query words: VFoxWin Project Manager Form Designer Command Window Table View Connection Query Report Class
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
