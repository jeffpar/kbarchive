---
layout: page
title: "Q216760: IIS: FTP Users Will Still Be Prompted for Credentials Even From"
permalink: /kb/216/Q216760/
---

## Q216760: IIS: FTP Users Will Still Be Prompted for Credentials Even From

{% raw %}

	Article: Q216760
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When users connect to an IIS FTP server from a restricted IP address, they will
	still be prompted for credentials.
	For example, you have an FTP site at 192.168.1.1 with IP Address and Domain
	Restrictions, by default, set to denied access. If a user from a denied IP
	connects to your FTP server, he will be prompted for credentials. Once the user
	logs into the server, he will receive an access denied message from the server.
	
	CAUSE
	=====
	
	Once an FTP connection is established, a client/server handshake must take place
	before anything else can be done. Part of this handshake is obtaining the
	username and password to be used for the connection. Once the necessary
	handshake is finished, then the IP restrictions are checked.
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis300
	Version           : winnt:3.0,4.0,5.0
	
	=============================================================================
	

{% endraw %}
