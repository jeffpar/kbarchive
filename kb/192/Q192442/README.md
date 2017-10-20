---
layout: page
title: "Q192442: Err Msg: Cannot Establish Modem Connection"
permalink: /kb/192/Q192442/
---

## Q192442: Err Msg: Cannot Establish Modem Connection

{% raw %}

	Article: Q192442
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, you may receive the
	following error message:
	
	  Cannot establish modem connection.
	
	CAUSE
	=====
	
	This behavior can occur if the Dial-Up Networking connections you use to connect
	to MSN are damaged or contain incorrect information about the modem you use to
	connect to MSN.
	
	RESOLUTION
	==========
	
	To resolve this issue, you have to first delete and then re-create the MSN
	Dial-Up Networking connections:
	
	Delete Dial-Up Networking Connections
	-------------------------------------
	
	1. Click Start, point to Programs, Accessories, and then click Dial-Up
	  Networking.
	
	  NOTE: If you are using Microsoft Windows 98, lick Start, point to Programs,
	  Accessories, then Communications, and then click Dial-Up Networking.
	
	2. Right-click any of the following Dial-Up Networking connections, and then
	  click Delete:
	
	  - MSN
	  - MSN Backup
	  - The Microsoft Network
	  - The Microsoft Network (Backup)
	
	3. Repeat step 2 for each of the connections listed above.
	
	4. Close the Dial-Up Networking window.
	
	Recreate Dial-Up Networking Connections
	---------------------------------------
	
	1. Click Start, point to Find, and then click "Files Or Folders".
	
	2. In the Named box, type msn.cmp, and then click Find Now.
	
	3. In the list of found files, double click the msn.cmp file, and then click
	  Settings.
	
	4. On the Dialing tab, next to the Phone Number, box click Phone Book.
	
	5. Select the access number nearest to you and then click OK.
	
	6. On the Dialing tab, next to the Backup Number, click Phone Book.
	
	7. Select the access number nearest to you, click OK, and then click OK again.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. dun
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
