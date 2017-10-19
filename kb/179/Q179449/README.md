---
layout: page
title: "Q179449: Dial-Up Networking Err Msg &quot;An Exception OE Has Occurred at...&quot;"
permalink: /kb/179/Q179449/
---

## Q179449: Dial-Up Networking Err Msg &quot;An Exception OE Has Occurred at...&quot;

	Article: Q179449
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Dial-Up Networking, you may receive an error message similar
	to the following message on a blue screen:
	
	  An exception 0E has occurred at 0028:0240F000 in VxD ---. This was called
	  from 0028:C100D858 in VxD PPPMAC(01) + 00004610.
	
	CAUSE
	=====
	
	This behavior can occur if an Internetwork Packet Exchange (IPX) Network Basic
	Input/Output System (NetBIOS) wide-area network (WAN) packet is sent over the
	connection without first negotiating the protocol.
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade to Windows 95 Dial-Up Networking 1.3. For
	information about how to obtain the Dial-Up Networking 1.3 Upgrade, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q191494 Dial-Up Networking 1.3 Upgrade Available
	
	This upgrade provides additional features for the Dial-Up Networking (DUN)
	support that was first delivered in Windows 95. It includes all of the features
	of the first upgrade, widely known as the ISDN Accelerator Pack for Windows 95,
	including support for internal ISDN adapters, multilink support for two ISDN
	channels, and connection-time scripting to automate non-standard login
	connections. In addition to the features of the first upgrade, this upgrade also
	delivers PPTP client capability for Windows 95.
	
	
	======================================================================
	Keywords          : kberrmsg dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
