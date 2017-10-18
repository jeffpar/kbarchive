---
layout: page
title: "Q185495: Error Selecting Link for Online Documentation"
permalink: kb/185/Q185495/
---

## Q185495: Error Selecting Link for Online Documentation

	Article: Q185495
	Product(s): Internet Information Server
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to open the Windows NT Option Pack online documentation from a
	remote computer causes the following error message to be displayed:
	
	  HTTP Error 403
	
	  403.6 Forbidden: IP address rejected
	
	  This error is caused when the server has a list of IP addresses that
	  are not allowed to access the site, and the IP address you are using is
	  in this list. Please contact the Web server's administrator if the
	  problem persists.
	
	CAUSE
	=====
	
	By default, Microsoft Internet Information Server version 4.0 has an IP address
	restriction configured on the documentation virtual directory. The restriction
	applies to any IP address except 127.0.0.1 (localhost). The Certificate Server
	Documentation link on the Microsoft Certificate Server default Web page
	automatically links to the machine name.
	
	WORKAROUND
	==========
	
	1. In Microsoft Management Console (MMC), display the properties for the IISHELP
	  virtual directory.
	
	2. Click the Directory Security tab.
	
	3. In the Domain Name Restrictions group, click Edit.
	
	4. Grant access to the needed IP of the remote computer, then click Apply
	  Changes or OK.
	
	To work around this problem, you can also change the link on the Default.htm file
	in the CertSrv virtual directory to the following, for example:
	
	  http://Localhost/Iishelp/Iis/Misc/Default.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version 4.0
	Option Pack.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNT400search kbWinNT400OptionPack
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
