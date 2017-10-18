---
layout: page
title: "Q90249: Some Network DDE Connections Not Displayed in Net Watcher"
permalink: kb/090/Q90249/
---

## Q90249: Some Network DDE Connections Not Displayed in Net Watcher

	Article: Q90249
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes network DDE (NDDE) conversations do not appear in the Windows for
	Workgroups Net Watcher. This happens because Net Watcher only displays NDDE
	conversations in which your computer is the DDE server. For example, if you look
	at Net Watcher during a Windows for Workgroups Chat session, Net Watcher
	displays the NDDE connection if you are the computer that answers (the server).
	Net Watcher does not display the NDDE connection if you are the computer that
	dials (the client).
	
	MORE INFORMATION
	================
	
	The Windows APIs called by Net Watcher only return information about NDDE
	clients of the computer it is running on (in other words, servers to your
	computer). Net Watcher does not access information about NDDE conversations
	where the local computer is the DDE client. This feature allows Net Watcher to
	monitor outside, or incoming, access to your shared directories. Net Watcher
	does not monitor outgoing connections initiated by your computer. In other
	words, Net Watcher monitors "who is using your computer," but it does not
	monitor "what you are using."
	
	This Net Watcher functionality can be somewhat confusing when you use an
	application such as Chat, which does not appear to be a client-server
	application.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
