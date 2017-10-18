---
layout: page
title: "Q259089: Allegiance: Unable to Find a Private Allegiance Server LAN Game"
permalink: kb/259/Q259089/
---

## Q259089: Allegiance: Unable to Find a Private Allegiance Server LAN Game

	Article: Q259089
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbui igz kbimu msgame
	Last Modified: 30-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Allegiance, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a private Allegiance Server game on your local area network
	(LAN), players who want to join may be unable to find the LAN game in
	Allegiance.
	
	CAUSE
	=====
	
	This behavior can occur if one of the following conditions is true:
	
	- The version of Allegiance Server installed on the LAN server does not match
	  the version of Allegiance installed on the player's computer.
	
	- The first three segments of the IP addresses for the player's computer do not
	  match the first three segments of the IP addresses for the server.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	AutoUpdate Allegiance and Allegiance Server
	-------------------------------------------
	
	To make sure that the version of Allegiance installed on the player's computer
	matches the version of Allegiance Server installed on the LAN server, update the
	Allegiance software on both the player's computer and on the LAN server.
	
	Update Allegiance on the player's computer:
	
	To update the Allegiance software software automatically:
	
	1. Start Allegiance.
	
	2. Click Allegiance Zone.
	
	3. Click Games List.
	
	4. If updated files are available, Allegiance downloads and installs them
	  automatically.
	
	After the installation is finished, Allegiance quits and then automatically
	restarts. For additional information about how to update the Allegiance
	software, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q253337 Allegiance: How to Update the Microsoft Allegiance Software
	
	Update Allegiance Server on the LAN server:
	
	To update the Allegiance Server software automatically, create a new public game
	in Allegiance Server.
	
	If a new update becomes available when a public game is running on Allegiance
	Server, the program waits until no players are connected, and then it downloads
	and installs the update.
	
	When the update is installed, Allegiance Server quits and restarts itself
	automatically. However, it does not re-create any games that were running before
	the update was installed. You must create or re-create any games that you want
	to run on Allegiance Server.
	
	Check the Client and Server IP Addresses
	----------------------------------------
	
	Make sure that the first three segments of the IP address for the player's
	computer match the first three segments of the IP address for the server. Only
	the last segment of the IP addresses can be different.
	
	The following table shows the results of several example combinations of IP
	addresses:
	
	  
	  +-------------------------------------------------------+
	  | Server IP Address | Player IP Address | Game Visible? | 
	  +-------------------------------------------------------+
	  | 123.45.6.78       | 123.45.6.42       | Yes           | 
	  +-------------------------------------------------------+
	  | 123.45.6.78       | 123.45.108.42     | No            | 
	  +-------------------------------------------------------+
	  | 123.45.108.78     | 123.45.6.42       | No            | 
	  +-------------------------------------------------------+
	
	To determine the IP address for your computer:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "winipcfg" (without the quotation marks), and then
	  click OK.
	
	3. In the adapter box, click the adapter that you want to use to play
	  Allegiance.
	
	4. In the IP Address box, note your IP address.
	
	5. Click OK.
	
	Additional query words: 1.00 msgame igz msngz host client
	
	======================================================================
	Keywords          : kbui igz kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbAllegianceSearch kbAllegiance
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
