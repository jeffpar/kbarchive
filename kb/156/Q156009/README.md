---
layout: page
title: "Q156009: PRB: Century Not Picked Up from Date andTime Control Panel"
permalink: /kb/156/Q156009/
---

## Q156009: PRB: Century Not Picked Up from Date andTime Control Panel

	Article: Q156009
	Product(s): Microsoft FoxPro
	Version(s): 3.0b
	Operating System(s): 
	Keyword(s): kbYear2000 kbHWMAC kbvfp
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dates entered into memory variables, date fields, or date and time fields
	without the century default to the 20th century (that is, 1900s). This behavior
	occurs even if the century in the Date and Time control panel is set to a year
	in the 21st century (that is, 2000s).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual FoxPro expects that "19" is the default for the century. The DATE()
	function reports the correct century, however, since it reads the system date.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Macintosh Date and Time control panel, change the year to 2000 or
	  anything later.
	
	2. In the Visual FoxPro Command window, enter the following commands and you get
	  "05/15/05" on the Visual FoxPro desktop:
	
	  SET CENTURY OFF
	  x={05/15/05}
	  ? x
	
	3. Now enter the following commands in the Command window and you get
	  "05/15/1905" on the Visual FoxPro desktop:
	
	  SET CENTURY ON
	  x={05/15/05}
	  ? x
	
	4. Remember to set the system date back to the correct date.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : :3.0b
	Issue type        : kbprb
	
	=============================================================================
	
