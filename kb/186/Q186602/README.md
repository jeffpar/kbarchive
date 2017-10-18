---
layout: page
title: "Q186602: Terminal Server's Three Levels of Security"
permalink: kb/186/Q186602/
---

## Q186602: Terminal Server's Three Levels of Security

	Article: Q186602
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the three levels of security (High, Medium, Low)
	available for a defined Terminal Server connection. Security levels are set in
	Connection Configuration under Advanced Properties for the defined connection.
	
	MORE INFORMATION
	================
	
	Low Encryption:
	
	Low encryption will encrypt only packets being sent from the client to the server
	running Terminal Server. This "input only" encryption is to protect the input of
	sensitive data like a user's password.
	
	Medium Encryption:
	
	Medium encryption will encrypt outgoing packets from the client the same as
	Low-level encryption, but will also encrypt all display packets being returned
	to the client from the server running Terminal Server. This method of encryption
	will secure sensitive data as it travels over the network to be displayed on a
	remote screen.
	
	Both Low and Medium encryption use the RC4 algorithm with a 40-bit key.
	
	High Encryption:
	
	High encryption will encrypt packets in both directions, to and from the client,
	but will use the industry standard RC4 encryption algorithm, again with a 40-bit
	key. A non-export version of Windows NT Terminal Server will provide 128-bit
	high-level RC4 encryption.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
