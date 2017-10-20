---
layout: page
title: "Q150280: Adding the Telephony Icon to Control Panel"
permalink: /kb/150/Q150280/
---

## Q150280: Adding the Telephony Icon to Control Panel

{% raw %}

	Article: Q150280
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 includes a telephony utility that can be run from Control Panel, but
	is not available by default. The telephony utility can be used for
	troubleshooting telephony-related issues.
	
	MORE INFORMATION
	================
	
	To add the Telephony icon to Control Panel, rename Telephon.cp$ in the
	Windows\System folder to Telephon.cpl, and then restart Control Panel.
	
	If you have a 16-bit Telephony application programming interface (TAPI) service
	provider already installed on your computer when you upgrade to Windows 95, you
	may experience problems with your 32-bit communication applications (such as
	HyperTerminal, Phone Dialer, and Dial-Up Networking).
	
	You can use the Telephony icon in Control Panel to determine if you have a 16-bit
	TAPI service provider installed and to remove your 16-bit TAPI service
	provider(s) to eliminate problems with 32-bit communication programs. However,
	removing your 16-bit TAPI service provider may prevent 16-bit TAPI-aware
	programs from functioning properly. If you are having TAPI-related problems,
	Microsoft recommends that you rebuild Telephon.ini using the steps outlined in
	the following article in the Microsoft Knowledge Base:
	
	  Q120221 How to Rebuild the TELEPHON.INI File
	
	If you add and run the Telephony utility, you will most likely see the following
	telephony driver installed:
	
	  Unimodem Service Provider
	
	This is the Windows 95 32-bit TAPI service provider and should not be removed.
	
	Additional query words: tapi
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
