---
layout: page
title: "Q306450: Can't Connect to FTP Site Anonymously When FTP Service Alone"
permalink: /kb/306/Q306450/
---

## Q306450: Can't Connect to FTP Site Anonymously When FTP Service Alone

	Article: Q306450
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the File Transfer Protocol (FTP) server component of Internet Information
	Server (IIS) is installed without the World Wide Web server component, users may
	receive the following error message when they attempt to log on with the
	Anonymous account:
	
	  Login failed
	
	The Event Viewer displays the following warning:
	
	  Event ID: 100
	  Source: MSFTPSVC
	  Description: The server was unable to logon the Windows NT account
	  'IUSR_SERVERNAME' due to the following error: The specified module
	  could not be found. The data is the error code.
	
	CAUSE
	=====
	
	The Automatic Password Synchronization in IIS does not work if the World Wide
	Web server component is not installed.
	
	RESOLUTION
	==========
	
	Install or add the World Wide Web server component for IIS along with the FTP
	server component. If you are adding the World Wide Web server component after
	you install the FTP server component, ensure that you reapply the latest service
	pack after you add the World Wide Web server component.
	
	WORKAROUND
	==========
	
	To work around this problem, disable Automatic Password Synchronization on the
	FTP site and reset the passwords for the IUSR_SERVERNAME account. To do this,
	follow these steps:
	
	1. Open the Internet Service Manager. To do this, click Programs on the Start
	  menu, click Programs, click Windows NT 4.0 Option Pack, and then click
	  Microsoft Internet Infomation Server.
	
	2. Expand the Internet Information Server folder, then expand SERVERNAME.
	
	3. Right-click the default FTP site and click Properties.
	
	4. On the Security Accounts tab, clear Enable Automatic Password
	  Synchronization.
	
	5. Change the password to one that you can remember and click OK.
	
	6. Open User Manager for Domains. To do this, click Programs on the Start menu,
	  then click Administrative Tools (Common).
	
	7. Double-click the IUSR_SERVERNAME account.
	
	8. Change the Password and Confirm Password fields to match the password that
	  you set in step 5.
	
	9. Ensure that User Cannot Change Password and Password Never Expires are both
	  selected, then click OK.
	
	NOTE: If you reenable Automatic Password Synchronization, FTP again stops
	working.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
