---
layout: page
title: "Q115361: X400: X400ADM.EXE Log Print Job Errors Overwrite Admin Menu"
permalink: /kb/115/Q115361/
---

## Q115361: X400: X400ADM.EXE Log Print Job Errors Overwrite Admin Menu

{% raw %}

	Article: Q115361
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start X400ADM.EXE and try to print a log file to an off-line LPT1 or
	LPT2, these error messages overwrite the Administration menu:
	
	- For LPT1:
	
	  Unrecoverable error
	  Device fault
	
	- For LPT2:
	
	  Unrecoverable error
	  Device unavailable
	
	  Write fault error writing device LPT1
	  Abort, Retry, Ignore, Fail?
	
	If you select Abort, the message disappears and you can continue on the
	Administration menu, but all other selections display the message again.
	Pressing the OK button for the unrecoverable error drops you from the
	Administration program to an MS-DOS prompt.
	
	CAUSE
	=====
	
	A dialog box should appear, saying that writing device is off-line, but the
	error message overrides the Administration menu due to a priority anomaly.
	
	RESOLUTION
	==========
	
	Code was changed so that if the utility detects that it can't print, it displays
	an error message (for example: Unable to Print: Device Fault). When you
	acknowledge the alert, the utility returns to where you were.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
