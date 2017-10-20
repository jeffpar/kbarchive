---
layout: page
title: "Q135183: &quot;Windows Protection Error&quot; on NEC Powermate 466"
permalink: /kb/135/Q135183/
---

## Q135183: &quot;Windows Protection Error&quot; on NEC Powermate 466

{% raw %}

	Article: Q135183
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start Windows 95 for the first time after Setup finishes, you
	may receive the following error message:
	
	  Windows Protection Error
	
	If you restart Windows 95 in Safe mode, you see an incorrect display device
	listed in Device Manager.
	
	CAUSE
	=====
	
	Early versions of the NEC Powermate 466 Plug and Play BIOS do not report the
	display type correctly.
	
	
	RESOLUTION
	==========
	
	To work around this problem, restart Windows 95 using the Command Prompt Only
	option on the Startup menu. Run Setup again, with the following command:
	
	  setup /p i
	
	This command forces Setup to ignore the computer's Plug and Play BIOS.
	
	You may also want to contact NEC to inquire about obtaining an updated BIOS that
	resolves this problem.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
