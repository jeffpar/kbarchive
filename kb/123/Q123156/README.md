---
layout: page
title: "Q123156: Server Spools Jobs Endlessly if AppleTalk Print Device Removed"
permalink: kb/123/Q123156/
---

## Q123156: Server Spools Jobs Endlessly if AppleTalk Print Device Removed

	Article: Q123156
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbprint kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows NT 3.5 print server running Services for Macintosh captures an
	AppleTalk print device in its zone whose name in Print Manager is the same as
	the print device name, the following problems will occur whenever the print
	server loses its connection to the print device:
	
	- On the Windows NT print server, the printer will send new print jobs to
	  itself, rather than to the print device, in an endless loop.
	
	- If the print device later becomes available, the Windows NT print server will
	  not recapture it.
	
	CAUSE
	=====
	
	When a Windows NT print server captures an AppleTalk print device, it creates a
	network connection to that print device. Once the connection is established, the
	print device stops advertising its name on the zone, and the Windows NT print
	server starts using the print device's name for the print server's print share
	name.
	
	If the print server loses its connection to the print device, the print server
	issues an AppleTalk NBPLookup() call, using the print device's original name, in
	an attempt to reestablish the connection. Because the Windows NT print server is
	advertising its print share under that name, and the real AppleTalk print device
	is not available on the network, the Windows NT print server responds to its own
	NBPLookup(). At this point, the server establishes a connection to what it
	believes to be the print device, but what is really the server's print share.
	Instead of sending new jobs to the print device, the print server starts sending
	job to itself in an endless loop.
	
	If the original AppleTalk print device again becomes available on the network,
	the scenario described above does not change. The AppleTalk print device looks
	for it's original name on the zone and finds the Windows NT print server already
	using that name. To avoid a name conflict, the print device creates a new name
	for itself by appending a number to the end of its original name, incrementing
	the number until the name is unique. Because the print server looks for the
	device under its original name, it will never find the print device.
	
	This problem does not occur in native Macintosh networks, because AppleShare
	print servers clear AppleTalk printer names whenever they lose their
	connections. The AppleShare solution is not an option in Windows NT 3.5, because
	of the more flexible printing architecture provided by Windows NT. Windows NT
	lets network clients send print jobs even if the print device is not immediately
	available. The AppleShare solution would prohibit this functionality. Also,
	Windows NT can create printer pools in which jobs sent to one print share are
	distributed over several print devices. The AppleShare solution would require
	removing a shared printer pool from the network whenever one device in the pool
	became unavailable.
	
	RESOLUTION
	==========
	
	To avoid these problems, do either of the following before you capture an
	AppleTalk print device in Print Manager:
	
	- Make the Windows NT printer name different from the AppleTalk print device
	  name.
	
	- Put the AppleTalk print device and the Windows NT server in different
	  AppleTalk zones.
	
	If these workarounds are not feasible, you can minimize the problem by not
	shutting down and restarting AppleTalk print devices except when absolutely
	necessary.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 3.5.
	This problem was corrected in Windows NT version 3.51.
	
	Additional query words: sfm prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
