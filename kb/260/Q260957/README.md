---
layout: page
title: "Q260957: RAS Returns Error 633 When Installed on a Lotus Notes Server"
permalink: /kb/260/Q260957/
---

## Q260957: RAS Returns Error 633 When Installed on a Lotus Notes Server

{% raw %}

	Article: Q260957
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to make a dial-up networking connection on a Lotus Notes
	server, you receive the following error message:
	
	  Error 633: The port is in use or not configured for Remote Access Dial-Out.
	
	CAUSE
	=====
	
	When the Lotus Notes client is configured to use one of the Component Object
	Model (COM) ports, Lotus Notes takes control of that COM port and prevents the
	remote access server (RAS) from gaining access for subsequent dial-out sessions.
	
	RESOLUTION
	==========
	
	To prevent the Lotus Notes client from taking control of the COM port, follow
	these steps:
	
	1. Start the Lotus Notes client on the server.
	
	2. On the File menu, click Tools. On the Notes menu, click User Preferences.
	
	  This opens the User Preferences dialog box where you can configure which ports
	  the Lotus Notes client uses.
	
	3. Click Ports, select the COM port that the RAS service is using, and then
	  clear the Port Enabled option.
	
	This ensures that the Lotus Notes client running on the server does not grab the
	COM port before the RAS dial-out client.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
