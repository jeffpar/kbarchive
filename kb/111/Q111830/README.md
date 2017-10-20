---
layout: page
title: "Q111830: Problems Sending Faxes to European Numbers"
permalink: /kb/111/Q111830/
---

## Q111830: Problems Sending Faxes to European Numbers

{% raw %}

	Article: Q111830
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send a fax to a European number, Microsoft At Work PC Fax
	continues trying to dial the number but never actually send the fax. At Work PC
	Fax does not generate an error in this situation.
	
	CAUSE
	=====
	
	European phones usually transmit ring signals at the same pitch as a United
	States busy signal. Although most modems can distinguish between the two, some
	cannot. This prevents the fax from being sent since it detects a busy signal.
	
	WORKAROUND
	==========
	
	To work around this problem, enable the Blind Dialing option in Control Panel.
	To do this, choose the Fax icon, choose Setup, and then choose Dialing. In the
	Dialing dialog box, select the Blind Dialing option, then restart Microsoft
	Mail.
	
	NOTE: A disadvantage to this workaround is that it disables redial for other
	numbers.
	
	Additional query words: 3.11 international country
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
