---
layout: page
title: "Q154986: How To Configure PowerChute for WinNT to Communicate with UPS"
permalink: /kb/154/Q154986/
---

## Q154986: How To Configure PowerChute for WinNT to Communicate with UPS

{% raw %}

	Article: Q154986
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After installing PowerChute Plus version 4.2.x or PowerChute for Windows NT,
	PowerChute may be unable to communicate with the uninterruptable power supply
	(UPS). This article documents procedures for troubleshooting PowerChute
	installation.
	
	MORE INFORMATION
	================
	
	To troubleshoot communications problems between PowerChute and the UPS, do the
	following:
	
	1. Ensure that the UPS service has been started. You can check this in Control
	  Panel Services.
	
	2. Ensure that the PowerChute cable is properly and fully connected to both the
	  UPS interface port and the appropriate Windows NT serial port.
	
	3. The baud rate on the Windows NT serial port must be set to 2400. You can
	  check this in Control Panel Ports.
	
	4. Perform a terminal emulation test by doing the following:
	
	  a. Stop the UPS service. To do this, open Control Panel Services, select UPS,
	     and click Stop.
	
	  b. Double-click the Terminal icon in the Accessories group.
	
	  c. On the Settings menu, click Communications. The desired serial port should
	     be set to the following:
	
	        Baud rate     2400
	        Stop bits     1
	        Parity        none
	        Flow control  Xon/Xoff
	
	  d. Click OK.
	
	  e. At the flashing cursor prompt, type an uppercase Y. The computer should
	     return the uppercase letters SM.
	
	  f. If nothing is returned to the screen when you complete step e, move the
	     interface cable to another available serial port on the Windows NT system
	     and perform step e again.
	
	  g. If still nothing is returned when you complete step f, test the
	     questionable COM port with another communications device such as a modem,
	     or perform a loopback test with an appropriate software package. If an SM
	     is returned, go to step h.
	
	  h. Quit Terminal, but do not save any settings.
	
	  i. Restart the UPS service.
	
	Additional query words: prodnt tshoot repair uninterruptible
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
