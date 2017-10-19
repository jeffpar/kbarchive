---
layout: page
title: "Q128770: PRB: &quot;Insufficient Memory&quot; Previewing A Report In FPM"
permalink: /kb/128/Q128770/
---

## Q128770: PRB: &quot;Insufficient Memory&quot; Previewing A Report In FPM

	Article: Q128770
	Product(s): Microsoft FoxPro
	Version(s): 2.60a 3.00b
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error messages may be received when previewing a report:
	
	  Insufficient Memory
	
	  -or-
	
	  Internal Consistency Error
	
	  -or-
	
	  Error #43 in process (O): there is not enough memory to complete this
	  operation."
	
	CAUSE
	=====
	
	On the Macintosh, there is a 'Setting of selected monitor' in the Monitors
	Control Panel. If this setting is set to 'Millions' or 'Thousands' of colors
	this may cause FoxPro to report 'INSUFFICIENT MEMORY' when previewing a report.
	This has also been reported to cause Internal Consistency Errors (ICE) errors.
	
	RESOLUTION
	==========
	
	To prevent this from occurring, change the setting under 'Control
	Panel/Monitors' to 256 or 16 (recommended).
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: FoxMac vFoxmac
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : 2.60a 3.00b
	
	=============================================================================
	
