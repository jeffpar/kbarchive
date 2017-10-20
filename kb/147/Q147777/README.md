---
layout: page
title: "Q147777: 'Print Spooled Jobs First' Option Will Not Stay Selected"
permalink: /kb/147/Q147777/
---

## Q147777: 'Print Spooled Jobs First' Option Will Not Stay Selected

{% raw %}

	Article: Q147777
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the Printer Properties-Details dialog box, when you select the "Print Spooled
	Jobs First" option and then click OK to close the dialog box and save, when you
	go back to the Details dialog box the option is not selected.
	
	CAUSE
	=====
	
	Although the option check box is available, it cannot be implemented unless the
	"Job Prints While Spooling" option is selected also. Although not mentioned in
	the help file description of this option, the ability to print spooled jobs has
	to be enabled before completely spooled jobs can be given a priority over them.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	Enable "Print Jobs While Spooling" at the same time as "Print Spooled Jobs
	First."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	This problem was corrected in Windows NT Workstation or Server version 4.0.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
