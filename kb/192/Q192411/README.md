---
layout: page
title: "Q192411: Error 605: Cannot Set Port Information"
permalink: /kb/192/Q192411/
---

## Q192411: Error 605: Cannot Set Port Information

{% raw %}

	Article: Q192411
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kberrmsg kbmsn
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to MSN, The Microsoft Network, you may receive the following
	error message:
	
	  Error 605: Cannot set port information.
	
	CAUSE
	=====
	
	This behavior can occur if the Dial-Up Networking connections you use to connect
	to MSN are damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	  NOTE: If you are using Microsoft Windows 98, click Start, point to Programs,
	  point to Accessories, point to Communications, and then click Dial-Up
	  Networking.
	
	2. Right-click any of the following Dial-Up Networking connections, and then
	  click Delete:
	
	  - MSN
	  - MSN Backup (for advanced use only)
	
	  If you are prompted to confirm the deletion, click Yes.
	
	3. Repeat step 2 for each of the connections listed above.
	
	4. Close the Dial-Up Networking window.
	
	5. Click Start, point to Find, and then click "Files or Folders".
	
	6. In the Named box, type msn.cmp, and then click Find Now.
	
	7. In the list of found files, double-click the Msn.cmp file.
	
	8. In the MSN Sign-In screen, type your MSN Member ID in the User Name box, type
	  your password in the Password box, and then click Settings.
	
	9. Choose your access phone numbers on the Dialing tab, and then click OK.
	
	  NOTE: If you want to customize other Connection Settings, do so at this time.
	
	10. Click Connect.
	
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. dun
	
	======================================================================
	Keywords          : kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
