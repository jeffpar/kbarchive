---
layout: page
title: "Q170814: HOWTO: Determining the Amount of Physical RAM on a Mac from VFP"
permalink: /kb/170/Q170814/
---

## Q170814: HOWTO: Determining the Amount of Physical RAM on a Mac from VFP

{% raw %}

	Article: Q170814
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no function available in Visual FoxPro for the Macintosh that provides
	information on the amount of physical RAM on the machine. However, the Ram
	selector of the FxGestalt()function in the FoxTools.cfm library provides
	information on the amount of physical RAM installed on a machine.
	
	MORE INFORMATION
	================
	
	The following code example returns the amount of physical RAM installed on the
	machine. The function ignores any virtual memory. This code returns an integer
	indicating the amount of physical RAM.
	
	In the Command window or a program, enter the following lines of code:
	
	     SET LIBRARY TO Home()+"foxtools.cfm"
	     ram_amt=0
	     i=FxGestalt("ram ",@ram_amt)
	     ? INT(ram_amt/1024/1024)
	
	Notice a space exists after the "Ram" selector in the FxGestalt function.
	Omitting this space causes the function to fail and return a -1.
	
	All the selectors of the FxGestalt function are four letters long. The Help file
	states this fact in the Syntax section. The example in the FoxTools Help file,
	however, is not quite clear on this point. Since the space character is not
	easily seen in the example, it is easy to overlook it.
	
	REFERENCES
	==========
	
	FoxTools Help file located in the Microsoft Visual FoxPro:Tools folder
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
