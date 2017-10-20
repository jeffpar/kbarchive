---
layout: page
title: "Q170392: PRB: SYS(17) Function Returns Incorrect Processor Type"
permalink: /kb/170/Q170392/
---

## Q170392: PRB: SYS(17) Function Returns Incorrect Processor Type

{% raw %}

	Article: Q170392
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WARNING: The information in this article has not been confirmed or tested by
	Microsoft. Some or all of the information in this article has been taken from
	unconfirmed customer reports. ANY USE BY YOU OF THE INFORMATION PROVIDED IN THIS
	ARTICLE IS AT YOUR OWN RISK. Microsoft provides this information "as is" without
	warranty of any kind, either expressed or implied, including but not limited to
	the implied warranties of merchantability and/or fitness for a particular
	purpose.
	
	The SYS(17) function returns the wrong processor type when running on a Power
	Computing Power Tower. On this machine, the SYS(17) function reports that the
	machine has a 68000 processor instead of 604E processor. Since Visual FoxPro
	only installs on Power Macintosh machines, this information is clearly
	incorrect.
	
	RESOLUTION
	==========
	
	If it is necessary to determine whether the machine is a Power Macintosh or a
	68k Macintosh, use the FXGestalt() function available in FoxTools. The following
	code provides an example of how to use this function:
	
	     SET LIBRARY TO Home()+"FoxTools.cfm"
	     retval=0
	     i=FxGestalt("sysa",@retval)
	     ? retval
	
	The variable "retval" returns 1 for a 68k Macintosh and 2 for a Power Macintosh.
	
	
	MORE INFORMATION
	================
	
	The Power Computing Power Tower is a Power Macintosh clone that uses the
	Motorola chip.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual FoxPro 3.0b on a Power Computing Power Tower.
	
	2. In the Command window, type the following:
	
	        ?SYS(17)
	
	Notice that SYS(17) functions reports that the machine has a 68000 processor.
	
	REFERENCES
	==========
	
	"Operating System Utilities," pages 1-20 to 1-24, Inside Macintosh CD-ROM by
	Apple Computer 1995.
	
	FoxTools Help file found in the Microsoft Visual FoxPro: Tools folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
