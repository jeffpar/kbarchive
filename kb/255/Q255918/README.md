---
layout: page
title: "Q255918: Allegiance: Games List is Unavailable"
permalink: /kb/255/Q255918/
---

## Q255918: Allegiance: Games List is Unavailable

{% raw %}

	Article: Q255918
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool igz kbimu msgame
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Allegiance, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Allegiance Zone button or the Free Zone Game button on the
	Main Menu in Microsoft Allegiance, you may experience the following symptoms:
	
	- The Games List button may be unavailable.
	
	- No scrolling text message is displayed in the "Message of the Day" box.
	
	CAUSE
	=====
	
	This behavior can occur if your Internet connection settings are not correctly
	configured to use a proxy server.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure the Internet Options tool in Control Panel to
	use a proxy server:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Internet Options.
	
	3. Click the Connections tab.
	
	4. If you use a dial-up connection to connect to the Internet, click the
	  connection that you want to use in the "Dial-up settings" box, and then click
	  Settings.
	
	  If you use a Local Area Network to connect to the Internet, click LAN
	  Settings.
	
	5. If your Internet connection does not require a proxy server, click to clear
	  the "Use a proxy server" box.
	
	  If your Internet connection requires a proxy server, click to select the "Use
	  a proxy server" box, type the address of the proxy server in the Address box,
	  and then type the port of the proxy server in the Port box.
	
	6. Click OK, and then click OK again.
	
	MORE INFORMATION
	================
	
	To determine if your Internet connection uses a proxy server, and to determine
	the specific settings required to connect to the proxy server, contact your
	Internet Service Provider (ISP) or network administrator.
	
	To verify that your Internet connection settings are configured correctly, use
	Microsoft Internet Explorer to visit the following Zone Web site:
	
	  http://www.zone.com/allegiance
	
	If the Web site is opened correctly, then the Internet Options tool is configured
	correctly.
	
	NOTE: You cannot use Netscape Communicator to verify the configuration of the
	Internet Options tool, because it does not use the Windows system file
	(Wininet.dll) that Allegiance uses to establish a link to its Games List.
	
	Additional query words: 1.00 msgame igz msngz grayed greyed out blank
	
	======================================================================
	Keywords          : kbnetwork kbtool igz kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbAllegianceSearch kbAllegiance
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
