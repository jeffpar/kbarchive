---
layout: page
title: "Q220173: Err Msg: A Connection with the Server Could Not be Established"
permalink: /kb/220/Q220173/
---

## Q220173: Err Msg: A Connection with the Server Could Not be Established

	Article: Q220173
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open http://localhost or the product documentation using
	Internet Explorer on a computer running Internet Information Server (IIS)
	versions 4.0 or 5.0, one of the following error messages occurs:
	
	  Internet Explorer cannot open the Internet site http://localhost/.
	  A connection with the server could not be established
	
	  OR
	
	  Internet Explorer cannot open the Internet site
	  http://localhost/iisHelp/iis/misc/default.asp.
	  A connection with the server could not be established
	
	CAUSE
	=====
	
	The default Web site has been assigned to use a particular IP address.
	
	This change may modify or even prevent proper access to some of the functionality
	that a standard IIS installation makes available through the default (All
	Unassigned) setting. This change may also disable additional functionality that
	depends on the IIS default setting.
	
	The IIS default setting permits proper access to the default Web site through the
	locally predefined resolution of the host name "localhost". Whenever TCP/IP is
	installed, "localhost" is associated with the IP address 127.0.0.1, as defined
	from within the %SystemRoot%\System32\drivers\etc\HOSTS file (for Microsoft
	Windows NT and Microsoft Windows 2000), or the %windir%\HOSTS file (for
	Microsoft Windows 95 and Microsoft Windows 98). However, changing the
	association to this file is not enough to permit proper access to the default
	Web site.
	
	RESOLUTION
	==========
	
	Change the default Web site to use (All Unassigned) IP addresses. To do this,
	perform the following steps:
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. Right-click the default Web site folder, and then click Properties.
	
	3. On the Web Site tab, click the IP Address drop-down list box, and then click
	  (All Unassigned).
	
	4. Click OK.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	MORE INFORMATION
	================
	
	
	
	Additional query words: local host 127.0.0.1 ie browser akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	
	=============================================================================
	
