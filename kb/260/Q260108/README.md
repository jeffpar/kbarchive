---
layout: page
title: "Q260108: PRB: Restart Option Is Only Available on Windows CE 3.0"
permalink: /kb/260/Q260108/
---

## Q260108: PRB: Restart Option Is Only Available on Windows CE 3.0

{% raw %}

	Article: Q260108
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbOSWinCEsearch kbGrpDSVB kbDSupport kbVBM300 kbOSWinCE300 kbgrpdsvc
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Restart option on the Run menu is only available on eMbedded Visual Basic
	(eVB) projects that target Windows CE 3.0-based devices or emulation. You can
	only stop Handheld PC Pro and Palm-size PC projects once they are running.
	
	CAUSE
	=====
	
	Support for the restart functionality is only available for devices that are
	running Windows CE 3.0.
	
	MORE INFORMATION
	================
	
	After the application is running either in the emulator (PocketPC only) or on a
	remote device, on the Run menu, click Restart to stop the currently running
	application, and start a new emulator session to run the application again. You
	can also press the SHIFT+F5 key combination to restart the application.
	
	However, if you build a Palm-Size PC or Handheld PC Pro project, this menu option
	is not available.
	
	Additional query words: wince evb restart pvbkill wce unavailable
	
	======================================================================
	Keywords          : kbOSWinCEsearch kbGrpDSVB kbDSupport kbVBM300 kbOSWinCE300 kbgrpdsvc 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
