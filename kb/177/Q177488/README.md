---
layout: page
title: "Q177488: SNA Client Takes Longer to Connect Than Normal"
permalink: kb/177/Q177488/
---

## Q177488: SNA Client Takes Longer to Connect Than Normal

	Article: Q177488
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the 5250 applet as well as some third-party 5250 emulators, the
	Windows NT SNA Client attempting to reconnect to the host may take an extra 20
	seconds to restart the session. The first time the emulator connects, the delay
	may not be evident, but if disconnected, further attempts to reconnect may take
	about 20 seconds.
	
	CAUSE
	=====
	
	The Winmgt32.dll display verb initializes the DMOD with the client type "admin,"
	and the wappc32.dll initializes the DMOD with the client type "TP." If the same
	application uses both DLLs, the DMOD creates two different semaphores, because
	the admin type is treated as a special case for no reason. In this case the I/O
	threads were signaling the second semaphore, but the "routing" thread was
	waiting on the first semaphore. This introduced a five-second delay in each
	incoming frame processing.
	
	STATUS
	======
	
	With the fix applied, the special semaphore created for "admin" type client
	processes is removed.
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0 SP1
	and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
