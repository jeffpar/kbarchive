---
layout: page
title: "Q187500: Unable to Log On to an Upgraded IIS 3.0/SSL Server"
permalink: /kb/187/Q187500/
---

## Q187500: Unable to Log On to an Upgraded IIS 3.0/SSL Server

{% raw %}

	Article: Q187500
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from Internet Information Server (IIS) version 3.0 to IIS 4.0,
	you may be unable to log on to your Secure Sockets Layer (SSL) enabled sites.
	
	CAUSE
	=====
	
	The upgrade procedure does not check for keys stored by Setkey.exe. Therefore,
	these keys are not available in IIS 4.0 after the upgrade.
	
	NOTE: Setkey.exe and Keygen.exe are designed to work with Internet Information
	Server 3.0 only.
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	- Before you upgrade, start the Keyring.exe in IIS 3.0 at least one time and
	  commit changes. The SSL key will be stored to the place recognized by the
	  upgrade process.
	
	  -or-
	
	- After you upgrade, reinstall the SSL key using Keyring.exe in IIS 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	After you install an SSL key with Setkey.exe and start the Keyring.exe, you may
	receive a pop-up message stating that keys were found. Keep in mind that
	Keyring.exe recognizes them but did not install them. Setkey.exe installs the
	SSL key to a different location in the registry than Keyring.exe. IIS 3.0 Secure
	connections will work fine with keys installed by Setkey.exe and Keyring.exe.
	
	
	Additional query words: security
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
