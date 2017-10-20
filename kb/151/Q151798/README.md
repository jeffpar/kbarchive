---
layout: page
title: "Q151798: How To Prevent the VFP Desktop from Appearing at Startup"
permalink: /kb/151/Q151798/
---

## Q151798: How To Prevent the VFP Desktop from Appearing at Startup

{% raw %}

	Article: Q151798
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenv kbvfp300
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To suppress the main Visual FoxPro screen in the development environment, or the
	logo, product registration information, and sign-on screen in an executable
	application, add the following command to the configuration file:
	
	     MACSCREEN = OFF
	
	MORE INFORMATION
	================
	
	The MACSCREEN command for the configuration file is new to Visual FoxPro. This
	command, along with the TITLE command, allows developers to have more control
	over how their run-time applications appear when loading.
	
	A sample configuration file using these two command follows:
	
	     ***Sample Config.fpm***
	     MACSCREEN = OFF
	     TITLE = My Exe File
	     DEFAULT = "Macintosh HD:My Exe File"
	     KEYCOMP = Mac
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          : kbenv kbvfp300 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
