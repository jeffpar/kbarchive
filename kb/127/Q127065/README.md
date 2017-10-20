---
layout: page
title: "Q127065: Phone Number Does Not Appear in Modem Log File"
permalink: /kb/127/Q127065/
---

## Q127065: Phone Number Does Not Appear in Modem Log File

{% raw %}

	Article: Q127065
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 msnetwork
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you select the Record A Log File check box in your modem's properties, the
	log file (MODEMLOG.TXT) shows the phone number you dialed as "ATDT#######."
	
	CAUSE
	=====
	
	The phone number is shown this way to add security for credit card numbers used
	for long-distance dialing.
	
	WORKAROUND
	==========
	
	NOTE: You should use this workaround for troubleshooting purposes only.
	
	You can work around this behavior by typing "E1" (without the quotation marks) in
	the Extra Settings box in your modem's properties. Adding "E1" causes the phone
	number you dialed to be shown in the MODEMLOG.TXT file.
	
	The following steps demonstrate how to select the Record A Log File check box and
	add the "E1" setting:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Modems icon.
	
	3. Click the Properties button.
	
	4. Click the Connection tab.
	
	5. Click the Advanced button.
	
	6. Click the Record A Log File check box to select it.
	
	7. In the Extra Settings box, type "E1" (without the quotation marks).
	
	8. Click OK until you return to the Modems Properties dialog box.
	
	9. Click the Close button.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 1.00 telephone
	
	======================================================================
	Keywords          : win95 msnetwork 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
