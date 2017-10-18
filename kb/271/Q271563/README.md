---
layout: page
title: "Q271563: Host Name Error in DNS Properties After Changing Computer Name"
permalink: kb/271/Q271563/
---

## Q271563: Host Name Error in DNS Properties After Changing Computer Name

	Article: Q271563
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbNetBIOS
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following error message on a computer whose computer name was
	changed to a 15 character name, after making changes on the DNS tab, in the
	Transmission Control Protocol/Internet Protocol (TCP/IP) properties:
	
	  The new Internet host name is different than the computer name currently in
	  use. Your computer will now be known by one name on your local area network,
	  and by another name on the Internet. If the computer name is ever changed it
	  will overwrite this new host name and the changes will be lost.
	
	CAUSE
	=====
	
	When you edit the DNS properties, the network basic input/output system
	(NetBIOS) name is read for the purpose of comparing the Host name against the
	NetBIOS name. In this case, the internal NetBIOS name call fails, causing the
	NetBIOS name to be viewed as blank, in comparison to the Host name.
	
	RESOLUTION
	==========
	
	If the 15 character DNS name is the same as the 15 character NetBIOS (computer)
	name, the error message can be ignored. You should be able to click OK to bypass
	this message, without experiencing any performance issues, or loss of
	functionality.
	
	MORE INFORMATION
	================
	
	For additional information about the constraints for NetBIOS names, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q188997 Microsoft NetBIOS Computer Naming Conventions
	
	Additional query words: host
	
	======================================================================
	Keywords          : kbenv kberrmsg kbNetBIOS 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
