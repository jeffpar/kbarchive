---
layout: page
title: "Q126383: RAS Callback Via ISDN Uses Only One Channel"
permalink: /kb/126/Q126383/
---

## Q126383: RAS Callback Via ISDN Uses Only One Channel

	Article: Q126383
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the callback feature of the Windows NT 3.5 Remote Access Service
	(RAS) server to perform a callback through an ISDN connection, only one channel
	of the ISDN line is used.
	
	CAUSE
	=====
	
	An ISDN line provides two b-channels that can be used for data transfer. You can
	configure RAS to use two channels for dial-in to a Windows NT 3.5 RAS server.
	However, even if the RAS client is able negotiate the RAS connection with two
	channels, the RAS server only uses one channel for a callback (when the callback
	security feature is enabled).
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: 3.50 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
