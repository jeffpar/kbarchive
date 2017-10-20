---
layout: page
title: "Q181380: RAS Disconnects Due to Line Noise When Using Multitech Modems"
permalink: /kb/181/Q181380/
---

## Q181380: RAS Disconnects Due to Line Noise When Using Multitech Modems

{% raw %}

	Article: Q181380
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork win95
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After dialing into a Windows NT Remote Access Service (RAS) server, where the
	RAS server and the RAS client use Multitech MT2834 modems, Windows NT RAS
	clients and Windows 95 Dial-Up Networking (DUN) clients may randomly disconnect
	from the RAS server with one of the following error messages:
	
	Windows NT RAS Client
	---------------------
	
	  Event ID : 20050
	  Source : Remote Access
	  Description: The user <domain\userid> connected on port <com port>
	  on <date> at <time> and disconnected on <date> at
	  <time>. The user was active for <time length>. <# bytes>
	  bytes were sent and <# bytes> bytes were received. The port speed was
	  28800. The reason for disconnecting was administrator's request.
	
	Windows 95 DUN Client
	---------------------
	
	  You have been disconnected from the computer you dialed. Double-click the
	  connection to try again.
	
	CAUSE
	=====
	
	Disconnects may be caused by one of the following:
	
	- Inactivity Timeout:
	
	  If you are being disconnected at a regular interval, the system you dialed may
	  have an Inactivity Timer that is set fairly low (5-10 minutes). For example,
	  if you are reading a Web page through a connection to an Internet Service
	  Provider (ISP) and are not actively doing anything other than scrolling up or
	  down, the Inactivity Timer can disconnect you.
	
	-or-
	
	- Line Noise causing a modem retrain:
	
	  If you have irregular disconnect problems (immediate disconnect or random
	  disconnect), you may want to modify the default initialization string on your
	  modem, as Multitech modems will automatically try to resynchronize an already
	  established connection, when line noise or other aberrations affect the
	  quality of the connection.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	Inactivity Timeout
	------------------
	
	Contact your RAS administrator to increase the Inactivity Timer value.
	
	Line Noise Causing a Modem Retrain
	----------------------------------
	
	Use the following steps to change the Multitech modem's initialization string on
	the RAS or DUN client:
	
	Windows NT version 4.0 and Windows 95:
	
	1. Click Start, point to Settings, and click Control Panel.
	
	2. Double-click Modems, select the Multitech modem, and click Properties.
	
	3. Click the Connection tab, click Advanced, and type the following in the Extra
	  Settings field:
	
	  " AT&FX4#F0$R1%E0 " (without the quotation marks)
	
	4. Click OK, click OK, and click Close.
	
	Windows NT version 3.51:
	
	In Windows NT version 3.51, RAS uses a file called Modem.inf in the
	%Systemroot%\system32\ras sub-directory to send the right communication strings
	to the modem through the selected modem in RAS. Use a text editor, such as
	Notepad.exe to open the Modem.inf file. Then find the modem you selected in RAS,
	and check the COMMAND_INIT string, which is the communication string RAS sends
	to set up the modem for communication. Refer to the "Modifying MODEM.INF"
	section in the RAS Online Help program and the modem init string in step three
	above.
	
	This string will make sure your modem does not initiate a speed change while it
	is connected because of line noise or other unfavorable conditions. Your modem,
	will, however, still follow any speed change that the other modem makes. This
	will ensure that your modem does not cause a disconnect.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
