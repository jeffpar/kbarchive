---
layout: page
title: "Q184031: Proxy/IIS Errors: Web Site IP Addresses Are Misconfigured"
permalink: kb/184/Q184031/
---

## Q184031: Proxy/IIS Errors: Web Site IP Addresses Are Misconfigured

	Article: Q184031
	Product(s): Internet Information Server
	Version(s): WINNT:2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When you access an Internet site through a Proxy Server that is installed on a
	Microsoft Internet Information Server 4.0 computer, you may receive the
	following error(s):
	
	  Internet Explorer cannot open the Internet Site <URL>
	
	  A connection with the server could not be established
	
	  11001 Host not found
	
	  Unable to form connection to the server.
	
	  The path c:\<path_name>\w3proxy.dll failed to load
	  The data is the error
	  Error 14
	
	CAUSE
	=====
	
	In Internet Explorer 4.0, the error message, "Internet Explorer cannot open the
	Internet Site <URL>," can occur when a connection with the server could
	not be established.
	
	In Internet Explorer 3.0x, the error message, "Internet Explorer cannot open
	http://<servername>," may be due to the properties of the default Web site
	in the Microsoft Management Console (MMC) having the IP Address field set to an
	IP address on the external NIC (or Dial-up Connection). This seems to occur only
	when there is just one Web site (the default Web site, not including the
	administration Web site).
	
	The error message, "11001 Host not found," may be due to the properties of the
	default Web site in the Microsoft Management Console (MMC) having the IP Address
	field set to an IP address on the internal NIC. Again, this seems to occur only
	when there is just one Web site (the default Web site, not including the
	administration Web site). This error message can also occur when the Auto Dial
	shared service of the Proxy Server in the IIS Console is not set correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	Open the Default Web Site Properties and change the IP Address field to All
	Unassigned.
	
	-AND/OR-
	
	Edit the Default Web Site properties. Click the Advanced button on the Web Site
	tab. Click the Add button in the "Multiple identities for this Web Site" section
	and remove the Host Header Name entry.
	
	If necessary, create a new site that will host the content that you wish to
	publish on the internet or intranet. Assign an external or internal IP address
	to this new Web site. Remember to stop and restart the browser after making this
	change.
	
	Make sure that the settings to Enable Dialing for the Winsock and Web Proxys also
	check the Credentials. Verify that these are correct and line up with the DUN.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbAudDeveloper kbiis400 kbProxyServSearch kbProxyServ200
	Version           : WINNT:2.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
