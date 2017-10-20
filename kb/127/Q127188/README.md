---
layout: page
title: "Q127188: DOC: SourceSafe Undocumented Command Line Switches"
permalink: /kb/127/Q127188/
---

## Q127188: DOC: SourceSafe Undocumented Command Line Switches

{% raw %}

	Article: Q127188
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbdocerr kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following command line switches were not documented in the SourceSafe
	version 3.0 Command Line Reference or the SourceSafe 3.1 Reference Manuals:
	
	- When you use the -O@<filename> switch, the at character (@) with the -O
	  switch sends standard errors to the file as well as SourceSafe output
	
	- When you use the -o&<filename> switch, the ampersand character
	  (&) with the -O switch suppresses the 'SourceSafe Output' window in the
	  Windows and Windows NT Command Line executables.
	
	- When you use the -exitcode switch, SourceSafe outputs an exitcode.
	
	Combining these switches allows for automated macros that do not require
	intervention from the user. For example:
	
	  SS GET $/build -r -o@&bldreslt.txt -exitcode
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbdocerr kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	
	=============================================================================
	

{% endraw %}
