---
layout: page
title: "Q327276: Asherons Call: Cannot Connect by Using MSN DSL and Arescom"
permalink: /kb/327/Q327276/
---

## Q327276: Asherons Call: Cannot Connect by Using MSN DSL and Arescom

{% raw %}

	Article: Q327276
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Asheron's Call: Dark Majesty, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to connect to Asheron's Call with MSN Broadband Internet access, you
	may not be able to connect.
	
	CAUSE
	=====
	
	This problem may occur if either of the following conditions are true:
	
	- You recently reset your Arescom 800 modem.
	
	- You recently installed your Arescom 800 modem.
	
	The Arescom modem is designed to look for newer firmware whenever it is reset or
	installed. (Firmware is computer code that is inserted into programmable
	read-only memory.) The latest Arescom firmware, version 5/20, has problems with
	games that use UDP packets, such as Asheron's Call.
	
	RESOLUTION
	==========
	
	To resolve the problem, install an earlier version of the firmware. This
	resolution means that you will not have the functionality of the latest Arescom
	firmware. For more information about the problems that the 5/20 version of the
	firmware fixes, see the "More Information" section of this article.
	
	The 5/20 firmware may prevent access to online multiplayer games. If the issues
	that fixed in the 5/20 firmware are not as important to you as online games,
	install the previous version of the firmware, version 10/24. To do so, follow
	these steps:
	
	1. Start Microsoft Internet Explorer, and then visit the following MSN Web site:
	
	https://cpeconfig.dsl.msn.com
	
	2. When you are prompted for your MSN member name and password, type them in the
	  appropriate boxes.
	
	3. Click Submit.
	
	The firmware is now installed in the modem.
	
	MORE INFORMATION
	================
	
	The 5/20 firmware fixes the following connectivity and special program issues:
	
	- Some of the known PPP Down issues.
	
	- The FTP issue found in previous versions.
	
	- The Voice & Video MSN Messenger and Microsoft Net Meeting issues
	  exception scenario.
	
	MSN and Arescom are working on a newer firmware that will resolve the behavior
	and include the fixes in version 5/20. For the most current information, visit
	the following Arescom Web site:
	
	  http://www.arescom.com/New/Trouble%20Shooting%20Page/Troubleshooting%20Main%20Page/Products%20Troubleshooting/MSNfaq.htm
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: msgame vials connection
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbMSNSearch kbAsheronSearch kbAsheron100 kbAsheronDarkMaj
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
