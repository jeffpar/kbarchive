---
layout: page
title: "Q102068: Remote Access Server Port Speed Indicates DTE Rate"
permalink: kb/102/Q102068/
---

## Q102068: Remote Access Server Port Speed Indicates DTE Rate

	Article: Q102068
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	Remote Access Service (RAS) for Windows NT Advanced Server does not
	provide the Data Communications Equipment (DCE) link speed in the RAS
	Admin User Interface. If you select Port Status, you will see a field
	for "Port Speed [bps]." This value indicates only the Data Terminal
	Equipment (DTE) rate (bps, or bits per second, between serial port and
	modem). It does not adjust for the DCE link speed (bps between two
	modems).
	
	For example, if your DTE rate is set for 38,400 bps and a client dials
	in at 2400, your modems will connect and operate at 2400. Your Port
	Speed will still show 38,400. The client's port status may show 2400
	if the initial bps was specified as 2400.
	
	This behavior is by design. Not all the modems supported by RAS will
	report the DCE link speed in their CONNECT response. However, they all
	can be configured to report their DTE rate.
	
	Future versions of RAS will provide a way to report the DCE link speed
	to system administrators.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	
	=============================================================================
	
