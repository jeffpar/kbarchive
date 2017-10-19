---
layout: page
title: "Q126253: Scenes 1.0: After Dark 3.0 Causes GP Fault"
permalink: /kb/126/Q126253/
---

## Q126253: Scenes 1.0: After Dark 3.0 Causes GP Fault

	Article: Q126253
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error is generated when you use the Scenes 1.0 After Dark module
	with After Dark 3.0:
	
	  Application Error
	  ADW30 caused a General Protection Fault in Module ADW30.EXE at XXXX:XXXX.
	
	The error occurs when the "Preparing to change pictures..." status bar gets to
	100 percent.
	
	CAUSE
	=====
	
	The GP fault occurs because the Scenes 1.0 After Dark module was designed for
	use with After Dark 2.0. Berkeley Systems made some slight changes in the After
	Dark engine with the release of After Dark 3.0. This caused some compatibility
	problems with modules designed for After Dark 2.0. Berkeley Systems is aware of
	the problem between After Dark 3.0 and Scenes 1.0, but does not plan to make any
	changes to After Dark 3.0 to support Scenes 1.0.
	
	WORKAROUND
	==========
	
	A possible workaround to view Scenes 1.0 images using After Dark 3.0 is to use
	the After Dark SlideShow module. The SlideShow module can display the Scenes 1.0
	JPEG (JPG) files as well as any BMP (including RLE), TARGA, PCX and GIF files.
	
	MORE INFORMATION
	================
	
	After Dark is manufactured by Berkeley Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	For more information on After Dark, contact Berkeley Systems Technical Support at
	(510) 549-2300. For additional information about contacting Berkeley Systems,
	refer to the Technical Support section on the back cover of the After Dark 3.0
	Quick Reference Guide.
	
	
	Additional query words: 3.00 afterdark berkley msscenes screen saver screensaver third party
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
