---
layout: page
title: "Q171354: Extinction Interval and Extinction Timeout Values Change"
permalink: /kb/171/Q171354/
---

## Q171354: Extinction Interval and Extinction Timeout Values Change

{% raw %}

	Article: Q171354
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The values in the server configuration dialog box in WINS Manager automatically
	change when other controls in the windows are selected.
	
	
	RESOLUTION
	==========
	
	The only work around to this issue at this time is to manually verify the proper
	settings before you click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For example, if you have WINS Manager open to the Configuration dialog Box and
	change any of the Renewal Interval values to a value higher than the Extinction
	Interval or Extinction Timeout, then click on another control or press Tab, you
	will notice that both of the Extinction values are changed to match the Renewal
	Interval value.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
