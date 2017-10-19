---
layout: page
title: "Q135164: SLIP Connection: Ping Works, Other Programs Do Not"
permalink: /kb/135/Q135164/
---

## Q135164: SLIP Connection: Ping Works, Other Programs Do Not

	Article: Q135164
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Dial-Up Networking connection using the SLIP (Serial Line
	Internet Protocol) server type with an Internet service provider, Ping may
	function correctly, but other programs (such as a Web browser) may not.
	
	CAUSE
	=====
	
	This problem can occur if you select the wrong IP Header Compression setting.
	
	RESOLUTION
	==========
	
	Use these steps to change the IP Header Compression setting:
	
	1. Open the properties for the Dial-Up Networking connectoid.
	
	2. Click Server Type.
	
	3. Click TCP/IP Settings.
	
	4. Click the Use IP Header Compression check box.
	
	5. Click OK.
	
	MORE INFORMATION
	================
	
	If you choose the wrong IP Header Compression setting, IP and User Datagram
	Protocol (UDP) programs (such as Ping) may operate normally, but TCP-based
	programs will not work. The IP Header Compression setting must be changed.
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
