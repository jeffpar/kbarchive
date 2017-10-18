---
layout: page
title: "Q101878: Windows NT RAS Server Port Reset"
permalink: kb/101/Q101878/
---

## Q101878: Windows NT RAS Server Port Reset

	Article: Q101878
	Product(s): Microsoft Windows NT
	Version(s): 3.1 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Remote Access Server attempts to reset its serial ports when it
	detects that the phone line has been hung up. The server detects a disconnect
	when either Data Carrier Detect (DCD) or Data Set Ready (DSR) signals are
	dropped by the server's modem. After a few seconds, the server sends an
	initialization string to the modem, putting the modem in auto-answer mode, and
	configures the modem options. In Windows NT 4.0, the initialization string is
	pulled from the particular manufacturer's Mdm*.inf file. In Windows NT versions
	prior to NT 4.0, the initialization string is pulled from the Modem.inf file for
	the particular modem type.
	
	MORE INFORMATION
	================
	
	Data Carrier Detect (DCD)
	-------------------------
	
	Pin 8 on a DB 25 serial connector. This line is set high by the server modem when
	it is receiving a carrier signal from the remote modem. The carrier signal is a
	tone at a specific frequency that, by itself, does not carry any information.
	Information is actually conveyed by changes in the carrier signal's amplitude,
	frequency, phase, or some combination. When a phone line is disconnected, the
	carrier tone is interrupted. This causes the DCD signal to be dropped.
	
	Data Set Ready (DSR)
	--------------------
	
	Pin 6 on a DB 25 serial connector. When this signal is high, it indicates that
	the modem is powered on and is ready to receive commands.
	
	Troubleshooting
	---------------
	
	If you hang up your Remote Access Server (RAS) client and your RAS server modem
	does not reset to receive a new call, you may be having troubles with DSR or
	DCD. On the server, look at the port status in the RAS Admin application. If the
	port status says "Connected, user authenticated" even though the modem is
	disconnected, this indicates a problem. Check your serial cable wiring with the
	RAS requirements found in the online help files. If the modem is not wired
	properly, the DCD or DSR signals may not be received by the server.
	
	Some modems allow you to override DSR and DCD with dip switches and modem
	commands. Make sure these signals are allowed to function normally. These
	problems sometimes show themselves as the server not resetting the port until
	the AUTODISCONNECT timer expires. The line disconnects but the server does not
	detect it. The server leaves the line open, waiting for more data. However, more
	data never arrives. After the server waits for AUTODISCONNECT time (20 minutes
	is the default), it drops the line and sends the initialization strings that
	will reset the modem.
	
	Additional query words: prodnt NTRAS
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1 4.0
	
	=============================================================================
	
