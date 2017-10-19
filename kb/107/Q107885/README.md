---
layout: page
title: "Q107885: RAS Can't Connect to Windows NT 3.1 RAS via AT&amp;T BNS 1000"
permalink: /kb/107/Q107885/
---

## Q107885: RAS Can't Connect to Windows NT 3.1 RAS via AT&amp;T BNS 1000

	Article: Q107885
	Product(s): Microsoft Programming Utilities
	Version(s): 1.1a
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Remote Access Service, version 1.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Remote Access Service (RAS) for Windows NT 3.1 server MODEM.INF file will need
	modification in order to allow RAS for Windows for Workgroups 3.11 clients or
	RAS for Windows NT 3.1 clients to be successfully authenticated if an AT&T
	BNS 1000 security switch box (or similar device) is linked in line between the
	RAS server's serial port and its modem.
	
	Configuration Diagram
	---------------------
	
	RAS client---modem <---phone line---> modem---BNS1000---RAS server
	
	This information does not apply to RAS 1.0, 1.1, nor 1.1a, because these versions
	do not include support for any kind of dialogue with a security host such as the
	AT&T BNS 1000 switch device.
	
	NOTE: The AT&T BNS 1000 device has NOT been certified for use with RAS at the
	time this article was written (November 29, 1993) and Microsoft therefore does
	NOT support it at this time. However, the following modifications may be all
	that's needed to operate RAS with this device successfully.
	
	MORE INFORMATION
	================
	
	If the following modifications to the RAS server's MODEM.INF file are not made,
	the RAS client user will initially be able to connect to the RAS server's modem,
	go into RAS' interactive Terminal mode and be successfully authenticated by the
	AT&T BNS 1000 security device, but then will be disconnected immediately
	after choosing Done in the Terminal mode.
	
	In order for the RAS server to properly wait for the client signal and
	authenticate RAS callers, do the following:
	
	1. Stop the RAS server.
	
	2. Copy the [SD ACM400 w/ AT&T 3820] section in the MODEM.INF file to the of
	  the file to create a new section.
	
	3. Give the newly created section a new section title, for example, [AT&T
	  BNS 1000 switch] and remove all the comment lines below the section title
	  that start with a semicolon.
	
	4. Remove all the following lines
	
	      - macros(for example, "<speaker_on>=M1" and so on)
	      - COMMAND_INIT
	      - COMMAND_DIAL
	
	  and then edit the rest of the section so it looks like this:
	
	     ;---------------------------------------------------------
	     [AT&T BNS 1000 switch]
	
	     DEFAULTOFF=
	     MAXCARRIERBPS=19200
	     MAXCONNECTBPS=19200
	
	     COMMAND_LISTEN=
	     CONNECT=<match>"DIALIN_GATEWAY"
	
	     ;---------------------------------------------------------------
	
	5. Save and close the MODEM.INF file.
	
	6. In the Control Panel window, choose the Network icon, and then select Remote
	  Access Service in the Installed Network Software list. Choose Configure and
	  reconfigure RAS to use the newly created section in the MODEM.INF file.
	
	7. Restart RAS on the server.
	
	With this new MODEM.INF section, the RAS server will NOT attempt any
	initialization of a modem or other device, but will simply listen and then
	attempt to match the string "DIALIN_GATEWAY" with the information sent by the
	RAS client. The RAS client sends this string several times during the initial
	connection process which allows for a successful connection.
	
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbRASSearch kbRAS110a
	Version           : :1.1a
	
	=============================================================================
	
