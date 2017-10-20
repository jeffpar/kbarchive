---
layout: page
title: "Q76824: Dial Not Available in Windows Terminal"
permalink: /kb/076/Q76824/
---

## Q76824: Dial Not Available in Windows Terminal

{% raw %}

	Article: Q76824
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Dial option may be unavailable in the Phone menu of Windows Terminal if you
	have Carrier Detect selected in the Communications dialog box under the Settings
	menu.
	
	Carrier Detect uses the modem signal to detect a carrier signal. When Carrier
	Detect is selected, Terminal uses the carrier detect signal to determine whether
	the modem is online. When Carrier Detect is off, Terminal looks at the modem
	response string to determine if it is connected.
	
	If your modem still isn't connecting after correctly setting the other options,
	clear the Carrier Detect check box to use Terminal's method and try connecting
	again.
	
	Additional query words: grey gray greyed 3.0 3.00 3.1 3.10 3.00a 3.11 wincomm dimmed dim
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
