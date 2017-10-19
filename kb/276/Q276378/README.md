---
layout: page
title: "Q276378: Remote Control Does Not Work Even If Other Remote Tools Work"
permalink: /kb/276/Q276378/
---

## Q276378: Remote Control Does Not Work Even If Other Remote Tools Work

	Article: Q276378
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbClient kbMMC kbRemote kbServer kbWBEM kbsms200 kbHelpDesk kbsmsAdmin kbsmsUtil kbRemo
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to initiate a remote control session to a client computer, the
	remote control icon may be depressed, but a remote control session may not be
	established. However, all other remote tools may appear to be working properly.
	
	CAUSE
	=====
	
	This issue can occur in situations where a remote administration console has
	been connected to a parent primary site and can successfully remote control a
	Systems Management Server (SMS) client of a child primary site. However, after
	that same administration console is connected to the child primary site's
	database, the remote control button can be depressed but never successfully
	connects. The difference is that the remote administration console is now
	connecting to the provider on the child site. Security requests are made from
	that child site's server or the server that contains the provider for that child
	site.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Go to the server that contains the provider for the database that the
	  administration console is directed to when remote control does not work. If
	  SQL and the site server are on the same computer, go to the SMS Site Server
	  computer.
	
	2. Use the NLTEST tool to determine which domain controller has established a
	  secure channel.
	
	For additional information about how to use the NLTEST tool, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q156684 How to Use NLTEST to Force a New Secure Channel
	
	If this domain controller is not local to the server that you located in step 1
	of the preceding Microsoft Knowledge Base article, this could be causing some
	network latency.
	
	3. Use the Setprfdc.exe tool that is included with Microsoft Windows NT 4.0
	  Service Pack 4 to set the secure channel to a local domain controller, and
	  then try to initiate a remote control session again.
	
	For additional information about how to use the Setprfdc.exe tool, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q181171 Secure Channel Manipulation with TCP/IP
	
	NOTE: If the preceding steps resolve the issue, you must ensure that the secure
	channel is always set to a local domain controller. For additional information
	about how to ensure that the secure channel is always set to a local domain
	controller, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q181171 Secure Channel Manipulation with TCP/IP
	
	Also, determine if there are multiple network adapters in the server you located
	in step 2 of this article. If there are, try disabling the second network
	adapter, and then restart the server. After the reboot, check the secure channel
	to see if it is set to a local domain controller.
	
	IMPORTANT: It is very important that the WINS server contain a proper record for
	this local domain controller.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbMMC kbRemote kbServer kbWBEM kbsms200 kbHelpDesk kbsmsAdmin kbsmsUtil kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
