---
layout: page
title: "Q100772: PRB: Upper Left Corner of CodeView Screen Displays &quot;a&quot;"
permalink: /kb/100/Q100772/
---

## Q100772: PRB: Upper Left Corner of CodeView Screen Displays &quot;a&quot;

{% raw %}

	Article: Q100772
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCodeView kbDebug kbVC kbprb
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In CodeView for Windows, the single screen mode may display one or more "a"
	characters. The "a" will appear in the title bar, the status bar, or both. This
	does not affect any of the functionality of CodeView.
	
	CAUSE
	=====
	
	This is caused by a problem in the currently set OEM font, and is not
	specifically related to CodeView.
	
	RESOLUTION
	==========
	
	To work around this problem, modify or add an OEMFONTS.FON line in the [boot]
	section of the SYSTEM.INI file. The OEMFONTS.FON line should point to one of the
	OEM fonts provided with the C/C++ compiler (either OEM10.FON or OEM08.FON from
	the BIN directory). For example, the line would appear as follows if you install
	Visual C++ in the default C:\MSVC directory:
	
	  OEMFONTS.FON=C:\MSVC\BIN\OEM10.FON
	
	MORE INFORMATION
	================
	
	Changing the OEM font used will probably change the size of the CodeView window
	on the screen.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kb16bitonly kbCodeView kbDebug kbVC kbprb 
	Technology        : kbAudDeveloper kbCodeView kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
