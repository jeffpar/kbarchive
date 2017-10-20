---
layout: page
title: "Q165180: How to Create a Virtual Server"
permalink: /kb/165/Q165180/
---

## Q165180: How to Create a Virtual Server

{% raw %}

	Article: Q165180
	Product(s): Internet Information Server
	Version(s): WinNT:3.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Internet Information Server (IIS), you can create virtual servers that
	enable a single server to appear as several servers. By convention, each domain
	name (for example, www.company.com) represents an individual computer. However,
	it is possible to use a single computer and make it appear to be not only a
	primary server (for example, named www.company.com), but also servers for
	different departments of your company (for example, marketing.company.com,
	sales.company.com, etc.). You can create virtual servers for these departments
	with Microsoft Internet Information Server. You do not need a different computer
	for each domain name.
	
	MORE INFORMATION
	================
	
	To create virtual servers, you must get Internet Protocol (IP) addresses from
	your Internet Service Provider (ISP) for the primary server and for each virtual
	server you want to create. For example, you assign the first IP address
	(10.212.56.184) in the Domain Name System (DNS) as www.company.com (your primary
	server), and assign C:\Wwwroot as its content home directory. You register the
	second IP address (10.212.56.185) in the DNS as marketing.company.com, and
	assign a different drive or directory as its content home directory. Therefore,
	it appears to users on the Internet that there are two computers when in fact it
	is the same computer running one copy of the WWW Service.
	
	NOTE: If you create a home directory without specifying an IP address, that home
	directory will be used for all requests containing server IP addresses not
	specified in other home directories.
	
	These multiple IP addresses can be assigned to multiple network adapter cards or
	to a single card. You use the Control Panel, Network to bind the additional IP
	addresses to your network adapter card. On the Protocol tab, click TCP/IP
	protocol, and click Properties. Type the first IP address, subnet mask, and the
	computer's default gateway under Specify an IP Address on the IP Address tab.
	
	Then click the Advanced tab to display the Advanced IP Addressing dialog box. To
	add additional IP addresses to your network interface card, click the Add button
	under IP Addresses.
	
	NOTE: When you assign more than one IP address to a single network interface
	card, you must disable automatic DHCP configuration. The DHCP server cannot
	assign multiple IP addresses to the same network interface card.
	
	To set up a virtual server
	--------------------------
	
	You set up a virtual server by using the Directories Property in Internet Service
	Manager.
	
	1. To display property sheets in Internet Service Manager, double-click the WWW
	  Service or the computer name.
	
	2. Click the Directories tab.
	
	3. Click the Add button.
	
	4. In the Directory box of the Directory Properties dialog box, select a
	  directory by clicking the Browse button.
	
	5. Click Home Directory.
	
	6. Select the Virtual Server check box.
	
	7. Type the IP address for the virtual server.
	
	8. Click OK.
	
	To specify directories with virtual servers
	-------------------------------------------
	
	If you have assigned more than one IP address to your server, when you create a
	virtual directory, you must specify which IP address has access to that
	directory. If no IP address is specified, that directory will be visible to all
	virtual servers.
	
	NOTE: The default directories created during setup do not specify an IP address.
	You may need to specify IP addresses for the default directories when you add
	virtual servers.
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis300
	Version           : WinNT:3.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
