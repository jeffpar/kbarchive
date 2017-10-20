---
layout: page
title: "Q192464: Err Msg: Unable to Start the Program. One of the Required..."
permalink: /kb/192/Q192464/
---

## Q192464: Err Msg: Unable to Start the Program. One of the Required...

{% raw %}

	Article: Q192464
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.51,2.6
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbmsnkbfaq
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.51, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you reinstall MSN, the Microsoft Network, or Microsoft Internet Explorer
	4.0, you may receive the following error message:
	
	  Outlook Express is not installed or corrupted.
	
	You may also receive the following error message when you attempt to start
	Microsoft Outlook Express:
	
	  Unable to start the program. One of the required components may be busy or
	  missing. Please check your installation and try again.
	
	CAUSE
	=====
	
	This behavior can occur if an earlier version of Internet Explorer 4.0 is
	installed over Internet Explorer 4.01 Service Patch 1 (SP1).
	
	NOTE: This behavior also occurs even if you successfully remove Internet Explorer
	4.01 SP1 before you reinstall the earlier version.
	
	RESOLUTION
	==========
	
	To resolve this issue, you need to reinstall both Internet Explorer 4.01 Service
	Patch 2 (SP2) and Outlook Express.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double click Add/Remove Programs.
	
	3. Click Microsoft Outlook Express 4 and then click Add /Remove.
	
	4. Follow the instructions to remove Outlook Express, click OK to return to
	  Windows, and then restart the computer.
	
	5. Start Internet Explorer. If you are prompted to connect to MSN do so.
	
	6. On the Help menu, click Product Updates.
	
	7. Click to select Microsoft Outlook Express. This will install Internet
	  Explorer SP2 as well.
	
	8. When the download and Internet Explorer 4.01 SP2 upgrade installation is
	  finished, restart the computer.
	
	9. Click Start, and then click Run.
	
	10. In the Open box, type the following line, and then click OK:
	  http://setup.msn.com/membersonly/config/config.asp. If you are prompted to
	  connect to MSN, do so.
	
	11. Scroll down the page and click the Click Here to Continue link.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. outex 2.51 2.60
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbmsn kbfaq
	Technology        : kbMSNSearch kbMSN251 kbMSN260
	Version           : WINDOWS:2.51,2.6
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
