---
layout: page
title: "Q154729: Close Combat: How to Set Up Modem-to-Modem Play"
permalink: /kb/154/Q154729/
---

## Q154729: Close Combat: How to Set Up Modem-to-Modem Play

	Article: Q154729
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbhw kbmm kbusage kbHardwarekbfaq
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat for Windows 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to connect your computer to an opponent's computer
	using a modem. This allows you to play Close Combat against each other.
	
	To connect to another computer via a modem in Close Combat, your computer must be
	configured properly. Specific information will need to be shared between the
	players before a multiplayer game is started. For example, you must determine
	who will be the HOST of the game session.
	
	The HOST is in charge of the game. The HOST must configure his/her computer to
	receive the modem call from the joining player. The joining player is called the
	CLIENT. The CLIENT computer calls the HOST and connects to his/her computer. In
	the following article, the HOST is referred to as Player 1 and the CLIENT is
	referred to as Player 2.
	
	Player 1 and Player 2 have certain responsibilities. Player 1 must configure
	his/her computer as a server. As part of this action, an address and a password
	are created, and these must be relayed to Player 2 prior to beginning a game
	session. This address and password are required to connect and play Close Combat
	modem-to-modem.
	
	The instructions below guide Player 1 and Player 2 through the required steps to
	set up each machine for modem-to-modem play.
	
	**                          - WARNING -                        **
	**     Making these changes may cause loss of connection       **
	**       to a network or to the Internet. Please review        **
	**      this article carefully so you understand the changes   **
	**    necessary to restore Internet or Network connectivity.   **
	
	SETTING UP THE CONNECTION
	-------------------------
	
	To ensure proper configuration, follow the steps below in the order specified.
	
	1. To use Close Combat over a modem-to-modem connection, Dial-Up Networking must
	  be installed on both computers.
	
	  To verify installation of or to install Dial-Up Networking:
	
	  a. Click the Start button, point to Settings and click Control Panel.
	
	  b. Double-click the Add/Remove Programs icon.
	
	  c. Click the Windows Setup tab, then click the Communications component to
	     highlight it.
	
	  d. Click the Details button and make sure the Dial-Up Networking check box
	     contains a check mark. If the Dial-Up Networking check box is selected,
	     Dial-Up Networking is installed. If the check box is empty, install
	     Dial-Up Networking as follows:
	
	  i. Click the Dial-Up Networking check box.
	
	  ii. Click OK and follow the prompts on the screen.
	
	  e. Click OK.
	
	2. Verify that TCP/IP is installed on both computers. Use the following steps to
	  verify this:
	
	  a. Click the Start button, point to Settings, and click Control Panel.
	
	  b. Double-click the Network icon.
	
	  c. Click the Configuration tab in the Network dialog box.
	
	  d. Verify that a TCP/IP protocol is listed as an installed network component.
	
	  If a TCP/IP protocol is not listed as a network component, use the following
	  steps to install one:
	
	  a. Click the Start button, point to Settings, and click Control Panel.
	
	  b. Double-click the Network icon.
	
	  c. Click the Configuration tab in the Network dialog box, and then click the
	     Add button.
	
	  d. Click Protocol in the Select Network Component Type dialog box and click
	     the Add button.
	
	  e. Under Manufacturers in the Select Network Protocol dialog box, click
	     Microsoft.
	
	  f. In the Network Protocols in the Select Network Protocol dialog box, click
	     TCP/IP.
	
	  g. Click OK.
	
	3. Configure the Network properties on the computer that is going be the HOST of
	  the game. This allows other players to access your computer.
	
	  NOTE: Use these steps only if you are going to be the HOST of a game. If you
	  are going to be the CLIENT, you can skip to Step 4.
	
	  To allow users to connect to your computer do the following:
	
	  a. Click the Start button, point to Settings, and click Control Panel.
	
	  b. Double-click the Network icon.
	
	  c. On the Configuration tab, click the File And Print Sharing button.
	
	     Make sure the following check boxes are selected:
	
	      - I want to be able to give others access to my files.
	      - I want to be able to allow others to print to my printer(s).
	
	  d. Click OK.
	
	4. Both machines need to specify an Internet Protocol (IP) Address for their
	  computers. Use the following steps to do this:
	
	  a. Click the Start button, point to Settings, and click Control Panel.
	
	  b. Double-click the Network icon.
	
	  c. On the Configuration tab, click the TCP/IP component (or TCP/IP Dialup
	     Adapter if available) in the list of installed network protocols.
	
	  d. Click the Properties button.
	
	  e. On the IP Address tab, click Specify An IP Address.
	
	     WARNING: This may cause temporary loss of connection to a network or to the
	     Internet. If this occurs, click Obtain An IP Address Automatically to
	     restore connectivity when you are finished playing the game.
	
	  f. The IP address is four sets of three-digit numbers used to uniquely
	     identify your computer. Choose a number (for example 123.123.123.123) in
	     the IP address line. Do not use all 0's, 1's, or 255 because these numbers
	     are reserved. IP addresses are like license plates on a car -- all
	     addresses must be different. Therefore the IP address on the other
	     computer must be different from yours (for example,123.123.123.124).
	
	     NOTE: The HOST (Player 1) computer will provide its IP address to the
	     CLIENT (Player 2) computer prior to game play.
	
	  g. The Subnet mask is always 255.255.255.0 . You need to type this number in
	     the space provided below the IP Address.
	
	  h. On the host computer, click the Bindings tab and make sure the Client For
	     Microsoft Networks check box and File And Printer Sharing For Microsoft
	     Networks check box are selected.
	
	  i. Click OK.
	
	5. Ensure that the security level on the HOST computer is Share Level, as
	  follows:
	
	  NOTE: Use these steps only if you are going to be the HOST of a game. If you
	  are going to be the CLIENT, you can skip to Step 7.
	
	  a. Click the Start button, point to Settings, and click Control Panel.
	
	  b. Double-click the Network icon.
	
	  c. Click the Access Control tab in Network Properties.
	
	  d. Verify that Share-level access control is selected.
	
	  e. Click OK. If you changed the access control, you will receive an
	     information message explaining the changes you made. Click Yes to
	     continue.
	
	  f. When prompted, click Yes to restart your computer.
	
	6. To play Close Combat using a modem-to-modem connection, Dial-Up Networking
	  Server must be installed on the HOST (Player 1) computer. The player who has
	  the Dial-Up Networking Server installed will act as the server and host the
	  game, while the other player will act as the client and dial in to the
	  server.
	
	  To verify that Dial-Up Networking Server is installed:
	
	  a. Double-click the My Computer icon on your desktop.
	
	  b. Double-click the Dial-Up Networking folder. You may get a Welcome dialog
	     box if a Dial-Up Networking connection has not been set up. This will be
	     set up later. For now, click the Cancel button.
	
	  c. Click Connections on the Dial-Up Networking window, verify that Dial-Up
	     Server is a menu item.
	
	  If Dial-Up Server is not listed as a menu item, install it using the following
	  steps:
	
	  a. Click the Start button, point to Programs, and click Windows Explorer.
	
	  b. From the View menu, click Options.
	
	  c. On the View tab, click Show All Files.
	
	  d. Click OK.
	
	  e. Insert the Close Combat compact disc into your CD-ROM drive. You can hold
	     down the SHIFT key to disable the Autorun feature when you insert the
	     compact disc, or you can Exit the game when it starts.
	
	  f. Double-click the My Computer icon on your desktop.
	
	  g. Use your right mouse button to click your CD-ROM drive (this should be the
	     drive with the Close Combat icon) and click Explore.
	
	  h. Double-click the Goodies folder located in the Close Combat folder.
	
	  i. Use your right mouse button to click Rnaserv.dll and click Copy.
	
	  j. In the left pane of Explorer, double-click the drive C icon (or the drive
	     on your computer that contains your Windows folder), and double-click the
	     Windows folder.
	
	  k. Use your right mouse button to click the System folder and click Paste.
	     This places a copy of Rnaserv.dll from the compact disc into your
	     Windows\System folder on your hard drive.
	
	  To set up your computer to be the server for Dial-Up Networking:
	
	  a. Double-click the My Computer icon on your desktop.
	
	  b. Double-click the Dial-Up Networking folder.
	
	  c. From the Connections menu, click Dial-Up Server.
	
	  d. Click Allow Caller Access.
	
	     NOTE: Be sure to change this back to No Caller Access after you're finished
	     playing, or you will be unable to dial out later (for example, to an MSN
	     account or bulletin board service).
	
	  e. Click Change Password.
	
	  f. Leave the space next to the old password blank if you have not used a
	     password for Dial-Up Server before.
	
	  g. Type a password in the space provided next to New password.
	
	  h. Type the password again in the space provided to Confirm New Password and
	     click OK.
	
	     NOTE: You will have to provide this password to any player connecting to
	     the HOST computer before playing.
	
	  i. Click Server Type.
	
	  j. Click the down arrow at the end of Type Of Dial-Up Server to activate the
	     drop-down menu.
	
	  k. Select PPP:Windows 95, Windows NT 3.5, Internet.
	
	  l. Click OK twice.
	
	7. Connect the CLIENT (Player 2) to the HOST (Player 1) computer.
	
	  WARNING: Before continuing with the following steps, be sure Player 2 has the
	  host computers' modem number, IP address, and password.
	
	  The CLIENT computer (Player 2) needs to connect to the server or HOST computer
	  (Player 1) before a Close Combat multiplayer game can begin. Use the
	  following steps to do this:
	
	  NOTE: Use these steps only if you are the CLIENT in a game. If you are going
	  to be the HOST, you can skip to Step 8.
	
	  a. Click Start, point to Programs, point to Accessories, and click Dial-Up
	     Networking.
	
	  b. Double-click the Make New Connection icon.
	
	     NOTE: If you have never created a connection, the Make New Connection
	     Wizard will start automatically. If the Install New Modem Wizard appears,
	     you have not installed a modem in Windows 95. You must install a modem
	     before continuing. Refer to your Windows Online Help for instructions on
	     how to install a modem.
	
	  c. In the "Type a name for the computer you are dialing" box, type a name for
	     the connection and verify that the correct modem is selected.
	
	  d. Click Next.
	
	  e. Type the area code and telephone number and select the appropriate country
	     code for the modem you are dialing.
	
	  f. Click Finish. This will add an icon for this connection to the Dial-up
	     Networking folder.
	
	  g. Double-click the newly created icon. This will initiate the connection.
	
	  h. In the Connect To dialog box, type the name you want to use on the User
	     Name line.
	
	  i. On the Password line, enter the password of the HOST computer from Step 6
	     g-h of the "To set your computer up to be the server for Dial-Up
	     Networking" section above. You should have obtained this password from
	     Player 1.
	
	  j. Click the Connect button. Once you're connected, a Connected dialog box
	     will appear on the screen. Click Cancel if you are prompted for another
	     password.
	
	8. Once the connection is established you may start the Close Combat multiplayer
	  game by doing the following:
	
	  a. Player 1 and Player 2 start Close Combat.
	
	  b. Player 1 presses the 2-Player button (button with two people).
	
	  c. Player 1 clicks Wait For Connection and clicks OK.
	
	  d. Player 2 (player using the CLIENT) clicks the 2-Player button and clicks
	     Initiate Connection.
	
	  e. Player 2 enters the IP Address (created in Step 4) for the HOST computer
	     (Player 1) and clicks OK.
	
	When both players hear the announcement for "Connection Established," you can
	press the Begin button to start the game.
	
	MORE INFORMATION
	================
	
	To play a game on a network (LAN or WAN), see the following article in the
	Microsoft Knowledge Base:
	
	  Q154728 Close Combat: Playing Over a Network
	
	To play a game from a modem to a network, see the following article in the
	Microsoft Knowledge Base:
	
	  Q154796 Close Combat: Playing Modem to Network
	
	To play a game over the Internet, see the following article in the Microsoft
	Knowledge Base:
	
	  Q154727 Close Combat: Playing Over the Internet
	
	Additional query words: 1.00 1.00a close combat modem multiplay play dialup ip network dial-up connection game
	
	======================================================================
	Keywords          : kbhw kbmm kbusage kbHardware kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbZNotKeyword kbCloseCombatSearch kbCloseCombat
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
