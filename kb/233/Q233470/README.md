---
layout: page
title: "Q233470: Business Planner Err Msg: The Macros in the Project Are Disabled"
permalink: kb/233/Q233470/
---

## Q233470: Business Planner Err Msg: The Macros in the Project Are Disabled

	Article: Q233470
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 04-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click an Excel wizard link or Word wizard link in Microsoft Business
	Planner, you may receive the following error message:
	
	  Microsoft Visual Basic
	
	  The macros in the project are disabled. Please refer to the online help or
	  documentation of the host application to determine how to enable macros.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- The only programs you install on your computer from the Microsoft Office 2000
	  Disc 1 CD-ROM are Microsoft Word and Microsoft Excel.
	
	- You select the "Run from My Computer" installation option.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You receive this error message if the Digital Signature for VBA Components is
	not installed from the CD-ROM.
	
	Additional query words: msbp template setup installs
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
