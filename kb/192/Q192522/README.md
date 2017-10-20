---
layout: page
title: "Q192522: How to Make Client Local Drive Available to Terminal Server"
permalink: /kb/192/Q192522/
---

## Q192522: How to Make Client Local Drive Available to Terminal Server

{% raw %}

	Article: Q192522
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a client is logged on to a Terminal Server, the local drives of the
	computer from which he or she is connecting are not available. This article
	describes how to make a client's local drives available, while logged on as a
	client, to Microsoft Windows NT Terminal Server.
	
	MORE INFORMATION
	================
	
	You can use the following steps to make the client's local drives available to
	them while he or she is logged on to Windows Terminal Server:
	
	1. On the client's computer, go to the root of the drive you want to make
	  available. Create a new share. Assign permissions only to the user whom you
	  want to have access to the data.
	
	2. Log the user on to the Windows Terminal Server, and then use the "Map Network
	  Drive" option from Windows NT Explorer to connect the shared local drive.
	
	Now the local drive will be available to the user while that user is logged on to
	the Terminal Server Client.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
