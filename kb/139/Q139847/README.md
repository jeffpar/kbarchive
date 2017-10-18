---
layout: page
title: "Q139847: Cannot Connect Using NET Command with Dial-Up Networking"
permalink: kb/139/Q139847/
---

## Q139847: Cannot Connect Using NET Command with Dial-Up Networking

	Article: Q139847
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet msnets win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Dial-Up Networking to connect to a computer that is running Windows
	95 and the "File and printer sharing for NetWare Networks" network service, you
	may be unable to use the NET command to browse or connect to shared resources on
	that computer.
	
	CAUSE
	=====
	
	This problem occurs when the following conditions are met:
	
	- Your computer and the computer that you connected to using Dial-Up Networking
	  are not physically connected.
	
	- The computer you connected to is not running Novell NetWare.
	
	RESOLUTION
	==========
	
	To resolve this situation, use one of the following methods:
	
	- Use Network Neighborhood to browse or connect to shared resources on the
	  computer you connected to (instead of using the NET command).
	
	
	- Disconnect your computer from the network it is connected to.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If your computer and the computer you connected to using Dial-Up Networking are
	physically connected, you do not need to use the Dial-Up Networking connection
	to browse or connect to shared resources on that computer. When you attempt to
	use the NET command, the LAN connection is used instead of the Dial-Up
	Networking connection.
	
	Additional query words: dun
	
	======================================================================
	Keywords          : 3rdpartynet msnets win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
