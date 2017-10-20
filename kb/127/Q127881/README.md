---
layout: page
title: "Q127881: Modem Fails to Disconnect After Selecting Hang Up in RASPHONE"
permalink: /kb/127/Q127881/
---

## Q127881: Modem Fails to Disconnect After Selecting Hang Up in RASPHONE

{% raw %}

	Article: Q127881
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Your modem may fail to disconnect from a remote modem when you choose the Hang
	Up button in Windows NT Remote Access (RASPHONE.EXE). RASPHONE acts as if the
	connection is broken, however, your modem is still connected to the remote
	modem. When you select the Hang Up button in RASPHONE, Remote Access Service
	(RAS) drops Data Terminal Ready (DTR) to force the modem to disconnect from the
	remote modem.
	
	MORE INFORMATION
	================
	
	If your modem is not disconnecting from the remote modem after you select the
	Hang Up button in RASPHONE:
	
	1. Check your modem cable if your are using an external modem.
	
	   - Verify that your RS-232 modem cable includes a DTR pin.
	
	   - Many 9-to-25 pin converters do not carry modem signals (including DTR).
	
	   - Try using a different cable that you know is working correctly with RAS.
	
	   - See the RAS help file (RASPHONE.HLP) for additional information on cable
	     requirements for RAS.
	
	2. Verify that RAS is setting your modem to use normal DTR operations. Most
	  modems use the &D2 command to set the modem for normal DTR operations. To
	  determine if normal DTR operations are being set properly for your modem,
	  check the COMMAND_INIT string in it's corresponding section of the Windows NT
	  MODEM.INF file. See the RAS help file for additional information on viewing
	  and modifying the MODEM.INF file.
	
	3. Confirm that your modem is not configured to ignore DTR. Some modems include
	  a dip switch or jumper that allows you to configure the modem to ignore DTR.
	  Check your modem documentation for information on how to configure your modem
	  to use normal DTR operations or ignore DTR.
	
	4. Add the following setting to the COMMAND_INIT string for your modem in the
	  MODEM.INF file:
	
	  S25=3.
	
	  S25 controls the duration of time (in hundredths of a second) that DTR must be
	  dropped before the modem disconnects itself from the remote modem. Setting
	  this value to 3 will ensure that the modem disconnects almost immediately
	  after choosing the Hang Up button in RASPHONE.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 4.0
	
	=============================================================================
	

{% endraw %}
