---
layout: page
title: "Q107097: 3COM: Removing the 3COM Gateway with INSTALL -r"
permalink: /kb/107/Q107097/
---

## Q107097: 3COM: Removing the 3COM Gateway with INSTALL -r

{% raw %}

	Article: Q107097
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you need to remove Microsoft Mail Gateway to 3COM to change your postoffice
	configuration (for instance, to change from the 3COM Gateway to the Microsoft
	Mail Gateway to SMTP) use this command:
	
	  INSTALL -r
	
	MORE INFORMATION
	================
	
	When you first run INSTALL -r, a screen display informs you that you are about
	to INSTALL the software (either the Gateway or Access component).
	
	Ignore this screen and press any key. A second screen informs you that you are
	about to REMOVE the Gateway software from the postoffice.
	
	NOTES
	-----
	
	- Gateway executables are not deleted from the executable directory.
	
	- All addressing information is removed from the postoffice.
	
	- 3Com Name Service accounts created for the Gateway are not removed by INSTALL
	  -r. Use the 3Com 3N utility (3N.EXE) to delete the domain (3N del domain) and
	  any user aliases you created for custom addressing (3N del alias).
	
	Additional query words: 1.00 1.0
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
