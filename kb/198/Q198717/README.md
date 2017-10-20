---
layout: page
title: "Q198717: SMS: Client Requirements for Remote Control"
permalink: /kb/198/Q198717/
---

## Q198717: SMS: Client Requirements for Remote Control

{% raw %}

	Article: Q198717
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbRemote kbsms200 kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Several steps must be taken to prepare clients for Remote Tools. Remote Tools
	can only be installed on the following clients: Microsoft Windows NT 3.51,
	Windows NT 4.0, Windows 2000, Windows 95, Windows 98, Windows for Workgroups, or
	Windows 3.11. These clients must be a discovered resource in the Systems
	Management Server site, and must have the core client components installed on
	them.
	
	MORE INFORMATION
	================
	
	Because Remote Tools are a client component that is not installed by default,
	the Remote Tools Client Agent, under Client Agents, must be set to "Enable
	remote tools on clients". A valid client installation method must already be in
	place and working.
	
	Note that during installation, when you initially enable remote tools on a client
	in the Client Agents section, Microsoft recommends that you review the options
	that are selected on the Advanced tab. These options cannot be changed later.
	When changes are made on the Advanced tab, they are not propagated to clients
	that already have the Remote Tools installed.
	
	IMPORTANT: You must be careful that you set these options correctly for the site,
	before you enable Remote Tools.
	
	Additional query words: prodsms rc32
	
	======================================================================
	Keywords          : kbRemote kbsms200 kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
