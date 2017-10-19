---
layout: page
title: "Q171138: Secure TCP Port Not Properly Specified"
permalink: /kb/171/Q171138/
---

## Q171138: Secure TCP Port Not Properly Specified

	Article: Q171138
	Product(s): Internet Information Server
	Version(s): WinNT:1.0,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Certificate Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to an Internet Information Server (IIS) web server
	through Secure Sockets Layer protocol (https), you may get the following error
	message:
	
	  Microsoft Internet Explorer
	  The site was not found. Make sure the address is correct, and
	  try again.
	
	CAUSE
	=====
	
	IIS has not been configured with the correct port for the Secure Sockets Layer
	(SSL) protocol.
	
	RESOLUTION
	==========
	
	Steps to change the SSL protocol port number:
	
	1. Select the plus sign beside IIS under the Console Root.
	
	2. Select the plus sign beside the appropriate Web Server.
	
	3. Right click the appropriate web site, and select Properties from the shortcut
	  menu.
	
	4. On the Web Site tab, place "443" inside the Secure Port text box.
	
	MORE INFORMATION
	================
	
	For information about changing the Secure Socket Layer port for Internet
	Information Server, see the following article in the Microsoft Knowledge Base:
	
	  Q165338 : IIS Does Not Allow its TCP Port to Be Same as SSL Port
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis400 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : WinNT:1.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
