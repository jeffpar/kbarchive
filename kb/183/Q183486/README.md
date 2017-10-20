---
layout: page
title: "Q183486: Using Multilink and ISDN Adapter Second Channel Does Not Connect"
permalink: /kb/183/Q183486/
---

## Q183486: Using Multilink and ISDN Adapter Second Channel Does Not Connect

{% raw %}

	Article: Q183486
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use multilink with an Integrated Services Digital Network (ISDN)
	adapter to make a connection that requires two different phone numbers separated
	by an ampersand character (&), the ampersand may be removed, and the second
	channel may not connect. The primary channel may connect properly, although data
	is transferred at a reduced throughput (the maximum throughput for a single ISDN
	channel is 64Kbps).
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following steps:
	
	1. Double-click My Computer, and then double-click the Dial-Up Networking
	  folder.
	
	2. Right-click the connection that uses the ISDN device, and then click
	  Properties.
	
	3. On the General tab, click the "Use area code and Dialing Properties" check
	  box to clear it, and then click OK.
	
	4. Double-click the connection to verify that both numbers are now being dialed
	  correctly, and then close the Dial-Up Networking folder.
	
	MORE INFORMATION
	================
	
	If you have a Motorola BitSURFR ISDN device, you may need to perform the
	following additional steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Modems.
	
	2. On the General tab, click your ISDN device, and then click Properties.
	
	3. On the connection tab, click Advanced, and then type the following text in
	  the Extra Settings box:
	
	  %A2=95%A4=0@B0=2
	
	4. Click OK, click OK, click OK, and then close Control Panel.
	
	Note that you may also experience problems dialing with a single modem if the
	dialing string contains an ampersand character.
	
	Additional query words: Bitsurfer
	
	======================================================================
	Keywords          : kbenv kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
