---
layout: page
title: "Q238325: AC: Unable to Connect to Game Server When Using NAT or ICS"
permalink: kb/238/Q238325/
---

## Q238325: AC: Unable to Connect to Game Server When Using NAT or ICS

	Article: Q238325
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbimukbfaq
	Last Modified: 20-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Asheron's Call, version 1.0 
	- Microsoft Asheron's Call: Dark Majesty, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you connect to the Internet from your local area network (LAN) using Network
	Address Translation (NAT) or Internet Connection Sharing (ICS), only one
	computer on the network may be able to play Microsoft Asheron's Call. You may
	receive the following:
	
	  The connection progress tubes at the beginning of the game may not fill.
	
	  -or-
	
	  While in the game, when an additional computer connects, the previous
	  computer's server connection to Asheron's Call is lost.
	
	CAUSE
	=====
	
	This behavior can occur because the default network port setting in Asheron's
	Call is not compatible with ICS or NAT.
	
	RESOLUTION
	==========
	
	To resolve this issue, modify the network port setting in Asheron's Call on each
	computer:
	
	1. Click Start, point to Programs, point to Microsoft Games, point to Asheron's
	  Call, and then click Asheron's Call.
	
	2. Click Settings.
	
	3. For "Port number to use", select "Derived from your IP address" or
	  "Automatically detect my port for me", depending on whether you have
	  Asheron's Call 1.0 or Dark Majesty installed.
	
	4. Click OK, and then click Exit.
	
	If this fails, to resolve the issue:
	
	1. Click Start, point to Programs, point to Microsoft Games, point to Asheron's
	  Call, and then click Asheron's Call.
	
	2. Click Settings.
	
	3. For Specific Port, type in a different port number for each computer
	  attempting to connect. For example, 9000 on one computer and 9004 on another.
	
	4. Click OK, and then click Exit.
	
	If this fails, to resolve the issue:
	
	When playing Asheron's Call, have each computer join a different Asheron's Call
	world. You may also be successful in playing on the same world if your
	characters are extremely far apart on that world.
	
	NOTE: For Asheron's Call, version 1.0 the network port settings may not be save
	correctly on Windows 2000 or Windows XP.
	
	For additional information about Asheron's Call system requirements, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q240084 Asheron's Call: Minimum System Requirements
	
	  Q309277 Asheron's Call Dark Majesty: Minimum System Requirements
	
	
	Additional query words: 1.00 ac msngz igz single connections login asherons
	
	======================================================================
	Keywords          : kbenv kbnetwork kbimu kbfaq
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbMSNSearch kbAsheronSearch kbAsheron100 kbAsheronDarkMaj
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
