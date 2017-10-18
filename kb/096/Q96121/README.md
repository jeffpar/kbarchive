---
layout: page
title: "Q96121: How to Configure MSDLC Transport on WfW 3.1 Client"
permalink: kb/096/Q96121/
---

## Q96121: How to Configure MSDLC Transport on WfW 3.1 Client

	Article: Q96121
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This document describes the configuration file settings required for using the
	MSDLC transport with a Windows for Workgroups 3.1 client. It is for systems in
	which NetBEUI is the only protocol installed. If TCP/IP is already installed,
	the value associated with the LANA may not be 0.
	
	The installation is covered in Microsoft Technical Note Volume 3, Number 33,
	included with LAN Manager 2.2.)
	
	Once MSDLC is installed, edit the files listed below to make the changes
	described:
	
	AUTOEXEC.BAT
	------------
	
	Insert the following line before the "net start" line:
	
	  " c:\windows\msdlc.exe" (without the quotation marks)
	
	C:\WINDOWS\PROTOCOL.INI
	-----------------------
	
	Insert the following line after the last transport line:
	
	  " transport=msdlc,MSDLC" (without the quotation marks)
	
	Insert the following line after the last lana line:
	
	  " lana0=ms$elnkii,1,msdlc" (without the quotation marks)
	
	(Replace "ms$elnkii" with the correct adapter driver name.)
	
	Insert the following section at the end of the file:
	
	  " [MSDLC]
	  DriverName=MSDLC$
	  Usedix=0
	  Swap=1
	  Bindings=adapter_name
	  Lanabase=0" (without the quotation marks)
	
	On Ethernet networks only, add:
	
	  " Usedix = 0 for Ethernet DIX 2.0 format
	  Usedix = 1 for 802.3 frame format
	
	  Swap = 0 (do not bit-swap Ethernet address)
	  = 1 (bit-swap Ethernet address)" (without the quotation marks)
	
	C:\WINDOWS\SYSTEM.INI
	---------------------
	
	Add the following line to the [386Enh] section:
	
	  " v86modelanas=0" (without the quotation marks)
	
	Add the following line to the [network] section:
	
	  " exclude=0" (without the quotation marks)
	
	The above changes take effect when you restart the system.
	
	Additional query words: wfw wfwg 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
