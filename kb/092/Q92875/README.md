---
layout: page
title: "Q92875: WFWG Err Msg: Parameter Format Not Correct"
permalink: /kb/092/Q92875/
---

## Q92875: WFWG Err Msg: Parameter Format Not Correct

{% raw %}

	Article: Q92875
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you load the NDIS driver for the Thomas Conrad TC6145 card, WORKGRP.SYS
	may report the following error message:
	
	  Parameter Format Not Correct
	
	WORKAROUND
	==========
	
	This card may have "compatibility mode." If so, configure the card for
	compatibility with a card listed in Setup or the Network section of Control
	Panel.
	
	STATUS
	======
	
	The TC6145 is an older card and is no longer supported by Thomas Conrad. The
	TC6242 card does not have this problem.
	
	Additional query words: 3.10 wfwfest
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
