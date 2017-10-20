---
layout: page
title: "Q150680: FP: FrontPage Times Out While Trying to Connect to Server"
permalink: /kb/150/Q150680/
---

## Q150680: FP: FrontPage Times Out While Trying to Connect to Server

{% raw %}

	Article: Q150680
	Product(s): Word Front Page
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kberrmsg kbusage kbdta
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 2000 version of this article, see Q205680.
	
	For a Microsoft FrontPage 98 version of this article, see Q194224.
	
	SYMPTOMS
	========
	
	When you attempt to open a Web, you may receive the error message
	
	  Timed out while trying to connect to a server at <xxxxx> on port 80.
	
	where <xxxxx> is a number representing the Internet Protocol (IP) address.
	
	CAUSE
	=====
	
	The network is attempting to resolve the numeric value as an IP address rather
	than as the server name.
	
	This behavior is due to how host names are resolved. For example, if the host
	name you are trying to resolve is numeric, the network may assume that the name
	is actually an IP address; therefore, the host name is not converted to an IP
	address. The network will time out attempting to reach this non-existent IP
	address.
	
	WORKAROUND
	==========
	
	To work around this behavior, use one of the following methods.
	
	Method 1: Use the 127.0.0.1 IP Address
	--------------------------------------
	
	Use the loopback IP Address (127.0.0.1) as the name of the computer you are
	trying to access. This reserved IP address corresponds to your local computer.
	
	Method 2: Use Localhost
	-----------------------
	
	Use "localhost" (without the quotation marks) as the name of the computer you are
	trying to access. This reserved host name also corresponds to your local
	computer.
	
	Method 3: Use at Least One Alphabetical Character
	-------------------------------------------------
	
	Rename the host computer so that it includes at least one alphabetical
	character.
	
	
	Additional query words: 97 front page
	
	======================================================================
	Keywords          : kberrmsg kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : :1.0,1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
