---
layout: page
title: "Q130590: Starting SNA Client Applet Can Start CIS Internet Dialer"
permalink: /kb/130/Q130590/
---

## Q130590: Starting SNA Client Applet Can Start CIS Internet Dialer

{% raw %}

	Article: Q130590
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the SNA Server Win3x client (WNAP.EXE) or Win3x client setup,
	after having installed NetLauncher by CompuServe, CompuServe's Internet Dialer
	(CID.EXE) will load and attempt to connect to the Internet.
	
	CAUSE
	=====
	
	CompuServe has introduced a new utility to allow users to connect to the
	Internet using their CIS account. This utility, Netlauncher, replaces the
	WINSOCK.DLL file located in your <winroot> directory with it's own
	version. This version of WINSOCK.DLL contains a hook in it which will launch the
	CompuServe Internet Dialer to establish the PPP connection.
	
	RESOLUTION
	==========
	
	To resolve WINSOCK.DLL problems, CompuServe technical support recommends the
	following:
	
	1. Create a batch file that copies over whichever version of WINSOCK.DLL you
	  want to use into the \WINDOWS directory.
	
	2. Move NetLauncher's WINSOCK.DLL into both the \CSERVE\CID and \CSERVE\MOSAIC
	  directories.
	
	3. Rename the old Windows windsock file (it will be named WINSOCK.000) back to
	  its original name, WINSOCK.DLL.
	
	NOTE: You will need to reboot your computer every time you start a sockets
	application that requires the WINSOCK.DLL that is not loaded.
	
	
	NetLauncher is manufactured by CompuServe, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this products' performance or
	reliability.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
