---
layout: page
title: "Q110535: PRB: Open Dialog Does Not Display Objects Without Extensions"
permalink: /kb/110/Q110535/
---

## Q110535: PRB: Open Dialog Does Not Display Objects Without Extensions

{% raw %}

	Article: Q110535
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.5b 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FoxPro for Macintosh Open File dialog box does not display files that have
	no extension, even if the file type matches the chosen file type.
	
	CAUSE
	=====
	
	For consistency between platforms, the Open dialog box is based on file
	extensions instead of file types.
	
	RESOLUTION
	==========
	
	Either select the All Files check box to see files with no extensions, or do not
	remove the extensions from your filenames.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the Apple Finder, remove the extension from a program's filename. For
	  example, change TEST.PRG to TEST.
	
	2. In FoxPro for Macintosh, choose Open from the File menu, select Program as
	  the file type, and select the folder where the renamed program is stored.
	
	The TEST file is not displayed until the All Files check box is selected. This
	behavior holds true for all file types.
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
