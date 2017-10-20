---
layout: page
title: "Q154727: Close Combat: Playing Over the Internet"
permalink: /kb/154/Q154727/
---

## Q154727: Close Combat: Playing Over the Internet

{% raw %}

	Article: Q154727
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): kbmm kbusagekbfaq
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can play Close Combat head-to-head over your Internet connection.
	
	To play Close Combat head-to head over the Internet, the initiating player must
	know the IP address of the waiting player. Your IP address may be different each
	time you connect, so Microsoft recommends that you tell your opponent your IP
	address while you are connected, using an Internet phone, second phone line,
	e-mail, chat program, etc.
	
	Additionally, both players must be connected to the Internet before you start a
	2-player game. You can connect to the Internet using any of the following
	methods:
	
	- Start your Web browser.
	- Use a dialer program provided by your Internet service provider (ISP).
	- Use a Dial-Up Networking connection through your ISP.
	
	For information about connecting to your ISP service, contact your ISP.
	
	To play head-to-head using the Internet, follow these steps:
	
	Waiting Player
	--------------
	
	1. Connect to your ISP.
	
	2. Start the game, and then click 2 Player. The IP address for your dial-up
	  adapter (modem) is listed.
	
	3. If you are accessing the Internet via a corporate network (LAN), click the IP
	  address. The first IP address is your dial-up adapter (modem) and the second
	  IP address is the network adapter card. Use the second address.
	
	4. Communicate this address to your game-play partner.
	
	5. Click Wait For Connection, and then click OK.
	
	6. Click Begin.
	
	  NOTE: Begin is unavailable until your game-play partner is ready.
	
	Initiating Player
	-----------------
	
	1. Connect to your ISP.
	
	2. Start Close Combat, and then click either Campaigns or Maneuvers.
	
	3. Choose your side. The other player plays the other side (his/her choices are
	  ignored). Choose a maneuver or campaign, and then provide the commander's
	  name if you are prompted.
	
	4. On the Command screen, click 2 Player.
	
	5. Click Initiate Connection.
	
	6. Type the waiting player's IP address, and then click OK.
	
	7. Select the level of difficulty. If you choose custom, then you must also
	  configure your game-play partners options.
	
	8. Click Begin.
	
	9. When you hear the Artificial Entity announce "connection established," you
	  can each press Begin to start the game.
	
	MORE INFORMATION
	================
	
	Troubleshooting
	---------------
	
	If you cannot establish a game connection, verify that you can "see" the other
	player's computer over your Internet connection. To do this, follow these
	steps:
	
	1. Both players connect to the Internet.
	
	2. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	3. Type the following line at the command prompt
	
	  ping <address>
	
	  where <address> is the other player's IP address.
	
	  If packets are not returned from the other player's computer, contact your ISP
	  for further troubleshooting steps.
	
	Check Domain Naming Services (DNS) Settings
	-------------------------------------------
	
	If you still cannot establish a game connection, verify that DNS is not enabled
	for your network adapter. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. On the Configuration tab, double-click the TCP/IP protocol. The TCP/IP
	  protocol can be listed as TCP/IP -> Dial-Up Adapter or TCP/IP -> Net
	  Card depending upon how you connect to the Internet.
	
	4. On the DNS Configuration tab, click Disable DNS.
	
	  NOTE: Disabling DNS does not remove any settings, it simply disables the
	  settings until you re-enable DNS. If another program requires DNS, re-enable
	  DNS when you are not using Close Combat.
	
	5. Click OK, and then click OK again.
	
	If Your IP Address Does Not Appear on The 2-Player Screen
	---------------------------------------------------------
	
	If an IP address is not displayed, even though you are connected to the Internet,
	you may be running older 16-bit (non-Windows 95) Internet software or network
	drivers. Contact your ISP or network administrator for further troubleshooting
	steps.
	
	Additional query words: 1.00 1.10 close combat connection internet modem
	
	======================================================================
	Keywords          : kbmm kbusage kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbCloseCombatSearch kbCloseCombat
	Version           : WINDOWS:1.0,1.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
