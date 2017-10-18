---
layout: page
title: "Q255159: How to Disable File and Printer Sharing in Windows NT 4.0"
permalink: kb/255/Q255159/
---

## Q255159: How to Disable File and Printer Sharing in Windows NT 4.0

	Article: Q255159
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a Windows NT 4.0-based computer to not share resources over
	the network and you open My Computer or Windows NT Explorer, the icons for these
	folders may indicate they are being shared.
	
	CAUSE
	=====
	
	The Windows NT 4.0 Server service creates administrative shares each time the
	computer starts. By default, only a user that is a member of the local
	Administrators group can gain access to an administrative share.
	
	RESOLUTION
	==========
	
	To work around this issue, permanently disable File and Printer Sharing on the
	computer using the following steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click the Server service, and then click Startup.
	
	3. In the Startup Type section, click Disabled, click OK, and then click Close.
	
	NOTE: You can stop sharing immediately using the Services tool in Control Panel,
	by highlighting the Server service and clicking Stop.
	
	You can disable drive sharing by default using Windows NT 4.0 Policy Editor. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q185590 Guide To Windows NT 4.0 Profiles and Policies (Part 5 of 6)
	
	STATUS
	======
	
	This behavior is by design. The Server service is started in Windows NT to allow
	for administration of a server over a network.
	
	MORE INFORMATION
	================
	
	Microsoft does not typically recommend disabling the Server service, except for
	computers that are not sharing files and printers over the network, or for other
	special role servers (for example, Web and proxy servers). In these situations,
	you should disable other services that are dependent on the Server service.
	Another example is a computer that does not have a network card installed, or
	only has a modem or other connectivity device and is being used to connect to an
	Internet service provider (ISP).
	
	In a standard installation of Windows NT 4.0 Workstation, the Computer Browser
	service depends on the Server service. If the Server service is disabled and the
	Computer Browser service is not disabled, an error message indicating that the
	Computer Browser service did not start is generated as the computer starts up.
	On a computer that is not sharing files (for example, a laptop), you can disable
	the Computer Browser service with the only negative effect being that the laptop
	no longer maintains a browse list of network resources. This does not mean that
	the computer cannot participate on a network or is unable to browse the network;
	it only means that the list is not maintained locally on the computer.
	
	In a standard installation of Windows NT 4.0 Server, the Replication service is
	also dependent on the Server service. In this situation, you may not be able to
	disable the administrative shares or stop the Server service because the
	Replication service depends on the administrative shares.
	
	In addition, disabling the Server and Computer Browser services frees up
	resources that are normally used for these services, which increases the
	computer's performance. Disabling the Server service prevents the computer from
	being able to share files.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q164882 Practical Recommendations for Securing Internet-Connected Windows NT
	  Systems
	
	  Q102878 Information on Browser Operation
	
	Additional query words: AutoAdmin kbhowto LanManServer fail failed
	
	======================================================================
	Keywords          : kbnetwork kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
