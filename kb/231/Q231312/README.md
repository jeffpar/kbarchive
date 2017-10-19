---
layout: page
title: "Q231312: Computer Name Missing in the Browsing List"
permalink: /kb/231/Q231312/
---

## Q231312: Computer Name Missing in the Browsing List

	Article: Q231312
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When the server comment is greater than 48 characters, the server name may
	disappear from the browsing list. The server comment may be set by typing the
	following command at an MS-DOS command prompt:
	
	  "net config server /srvcomment:"text"" (without the quotation marks)
	
	NOTE: This command does not allow you to specify a srvcomment greater than 48
	characters. Nevertheless, the problem may exist if the srvcomment size is
	greater than 48 characters when it set directly in the registry
	(HKLM\System\CCS\Service\LanmanServer\Parameters).
	
	
	RESOLUTION
	==========
	
	To resolve this problem, ensure that the length of the server comment
	(srvcomment) is not greater than 48 characters.
	
	MORE INFORMATION
	================
	
	The 48 characters limitation of srvcomment is a design limitation.
	
	
	When this symptom occurs, the browsing mechanism seems to work fine from a
	network capture point of view. The Host Announcement and Local Master
	Announcement are done normally. The full srvcomment is sent inside the network
	datagram (even if the length of srvcomment is greater than 48 characters).
	However, this kind of datagram is discarded by the master browser.
	
	
	For information on how to type a comment in the Description Box of Windows
	2000-Based Computer's Network Identification Properties, see:
	http://support.microsoft.com/support/kb/articles/q243/1/66.asp
	
	Additional query words: browsing browser srvcomment missing browse list network neighborhood
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
