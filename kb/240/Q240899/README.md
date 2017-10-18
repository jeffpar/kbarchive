---
layout: page
title: "Q240899: Error Message: You Must Select at Least One Network Protocol"
permalink: kb/240/Q240899/
---

## Q240899: Error Message: You Must Select at Least One Network Protocol

	Article: Q240899
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create or edit a phonebook entry in Dial-Up Networking, you
	may receive the following error message:
	
	  You must select at least one network protocol.
	
	CAUSE
	=====
	
	This issue can occur if you click to clear the check boxes under "Network
	protocols" on the Server tab, and then click OK.
	
	NOTE: You continue to experience this issue even if you click to select a
	protocol check box.
	
	RESOLUTION
	==========
	
	To work around this issue, click Cancel to close and not save any changes you
	made to the phonebook entry, or change the server type, save the changes, and
	then edit the phonebook entry again to use the server type you want.
	
	For example, to change the phonebook entry you use to connect to the Internet
	using the server type you want and the TCP/IP protocol, follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. In the "Phonebook entry to dial" box, click the phonebook entry you use to
	  connect to the Internet.
	
	3. Click More, and then click "Edit entry and modem properties."
	
	4. On the Server tab, click PPP: Windows NT, Windows 95 Plus, Internet in the
	  "Dial-up server type" box.
	
	5. Click to select the TCP/IP check box, and then click OK.
	
	6. Close the Dial-Up Networking dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
