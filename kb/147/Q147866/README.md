---
layout: page
title: "Q147866: Dial-Up Networking Refers to ISDN Adapter as a Modem"
permalink: /kb/147/Q147866/
---

## Q147866: Dial-Up Networking Refers to ISDN Adapter as a Modem

{% raw %}

	Article: Q147866
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using an ISDN adapter and Dial-Up Networking, you may encounter
	error messages stating that the "modem" is not responding or the "modem" is not
	configured properly. These messages are incorrect, because an ISDN adapter is
	not actually a modem (modulator/demodulator). An ISDN adapter uses an
	all-digital signal and does not need to modulate or demodulate the signal.
	
	This behavior occurs because the Dial-Up Networking tool was not written with
	ISDN devices in mind. Therefore, error messages make references to a "modem"
	instead of the ISDN device.
	
	Additional query words:
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
