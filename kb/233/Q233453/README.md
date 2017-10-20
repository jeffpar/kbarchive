---
layout: page
title: "Q233453: MSBP Err Msg: Some Components of the Wizard Engine Are Missing"
permalink: /kb/233/Q233453/
---

## Q233453: MSBP Err Msg: Some Components of the Wizard Engine Are Missing

{% raw %}

	Article: Q233453
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbimu
	Last Modified: 13-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Personal Interviewer in Microsoft Business Planner,
	you may receive the following error message:
	
	  Some components of the Wizard Engine are missing. Please reinstall Microsoft
	  Business Planner by running Setup from Microsoft Office 2000 Disc 2.
	
	When you click OK, this error message remains on the screen. If you click OK
	again, you receive the following error message:
	
	  There is not enough free space left on this disk. Free some space on this
	  drive before continuing with the wizard.
	
	If you click OK, the initial error message reappears on the screen, and you are
	forced to click through the same series of error messages.
	
	CAUSE
	=====
	
	This behavior can occur if you specify a read-only path, such as a folder marked
	with the read-only attribute or a CD-ROM drive, as the default file location for
	Business Planner.
	
	RESOLUTION
	==========
	
	To resolve this issue, set a folder that is not marked with the read-only
	attribute as the default file location for Business Planner. To do this:
	
	1. When you receive the error message that begins
	
	  There is not enough free space left on this disk...
	
	  click the Close button in the upper-right corner of the error message dialog
	  box.
	
	2. On the Go menu, click Options.
	
	3. In the Default File Location box, type the path to a folder that is not
	  marked with the read-only attribute.
	
	4. Click OK.
	
	Additional query words: msbp repeated errors
	
	======================================================================
	Keywords          : kberrmsg kbtool kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
