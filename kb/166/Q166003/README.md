---
layout: page
title: "Q166003: How to Grant/Deny Access to a Group of Computers by Network ID"
permalink: /kb/166/Q166003/
---

## Q166003: How to Grant/Deny Access to a Group of Computers by Network ID

{% raw %}

	Article: Q166003
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Server (IIS) allows an administrator to grant or deny
	access to a Group of Computers based on Network ID and Subnet mask.
	
	MORE INFORMATION
	================
	
	The advanced property page on the WWW, FTP, and Gopher services has two security
	options. By default, all computers will be: Granted Access or Denied Access.
	
	The Except Those Listed Below: dialog box allows you to specify Single Computer
	or Group of Computers that access information. After you select between Granted
	Access and Denied Access for all computers, click the Add button. Depending on
	which option you selected, the Deny Access On or the Grant Access On dialog box
	is displayed.
	
	The Single Computer option allows you to enter a single IP address. The Group of
	Computers option allows you to enter the Network ID and the Subnet Mask. You
	must specify the first IP address in the range of IP addresses available for the
	Network ID along with the Subnet mask.
	
	Examples
	--------
	
	(Class A Address with custom subnet mask)
	Network ID: 50.48.0.0
	Subnet Mask: 255.240.0.0
	IP Addresses Effected: 50.48.0.0 to 50.63.255.255
	
	(Class B Address with custom subnet mask)
	Network ID: 150.150.64.0
	Subnet Mask: 255.255.224.0
	IP Addresses Effected: 150.150.64.0 to 150.150.95.255
	
	(Class C Address with custom subnet mask)
	Network ID: 200.200.200.128
	Subnet Mask: 255.255.255.192
	IP Addresses Effected: 200.200.200.128 to 200.200.200.191
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
