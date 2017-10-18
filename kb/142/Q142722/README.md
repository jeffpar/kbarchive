---
layout: page
title: "Q142722: NDS Mapped Drives Inaccessible After Using Dial-Up Connection"
permalink: kb/142/Q142722/
---

## Q142722: NDS Mapped Drives Inaccessible After Using Dial-Up Connection

	Article: Q142722
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun 3rdpartynet win95 kb3rdPartyNetClient kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the Microsoft Service for NetWare Directory Services (MSNDS) in
	Windows 95, if you use a Dial-Up Networking connectoid to connect remotely, you
	may lose access to drives mapped in your logon script. The mapped drives still
	appear in My Computer and Windows Explorer, but if you try to access one of the
	drives you receive the following error message:
	
	  <drive>:\ is not accessible. Access is denied.
	
	You can access the NetWare server without error using Network Neighborhood.
	Additionally, if you run the Novell NetWare WHOAMI command, you appear to be
	logged on.
	
	RESOLUTION
	==========
	
	Use the following steps to correct this problem:
	
	1. Click the Start button, point to Programs, point to Accessories, and then
	  click Dial-Up Networking.
	
	2. Use the right mouse button to click the connectoid you want to use, and then
	  click Properties on the menu that appears.
	
	3. Click Server Type, click the Log On To Network check box to clear it, and
	  then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. This
	problem is resolved in Microsoft Windows 98.
	
	
	======================================================================
	Keywords          : dun 3rdpartynet win95 kb3rdPartyNetClient kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
