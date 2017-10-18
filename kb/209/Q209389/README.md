---
layout: page
title: "Q209389: IIS 4.0 Prompts for Password with Web-based Password Change Tool"
permalink: kb/209/Q209389/
---

## Q209389: IIS 4.0 Prompts for Password with Web-based Password Change Tool

	Article: Q209389
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use the Web-based password change utility that is included in
	Internet Information Server (IIS) 4.0, the system may prompt you for a new
	password. However, you cannot successfully change your password.
	
	CAUSE
	=====
	
	When you install IIS, the passwordchangeflags parameter is set to a default
	value of 0. This value causes the system to prompt for a password when you try
	to use the Web-based password change utility.
	
	For this utility to work correctly, the passwordchangeflags parameter's default
	value must be changed in the metabase.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps.
	
	NOTE: For the following procedure to work, Windows Scripting Host must be
	installed on your computer.
	
	1. Change the IIS directory setting to the following:
	
	  \%windir%\System32\Inetsrv\Adminsamples
	
	2. Type the following:
	
	  cscript adsutil.vbs set w3svc/<1>/passwordchangeflags <value>
	
	NOTE: <1> represents the Web site on which this change is to occur. You may
	have to set this parameter multiple times if multiple Web sites are involved.
	
	3. The following values are possible settings for the passwordchangeflags
	  parameter:
	
	   - Value 0 (default): Requires that the password change utility reside over a
	     Secure Sockets Layer (SSL) connection.
	
	   - Value 1: Removes the requirement for SSL.
	
	   - Value 2: Disables password change notification.
	
	   - Value 4: Disables advance notification of password change.
	
	MORE INFORMATION
	================
	
	The IIS online documentation states the following:
	
	  Notifying Clients of Password Status: You can set properties in the metabase,
	  which will notify a client when his or her password has expired or is about
	  to expire. This feature also gives the client the opportunity to change the
	  password at the time of the notification, or to continue with the original
	  request. These metabase properties are used to configure the implementation
	  of the feature.
	
	  NOTE: Administrators do not have to set any of these properties for this
	  feature to work. These properties are automatically set in the metabase
	  during IIS setup.
	
	  The following metabase properties control this feature. PasswordChangeFlags
	  specifies the flags that control password expiration and password change
	  processing between the server and client. The default value of 0 indicates
	  that a password change is not permitted on an unsecured (that is, non-SSL)
	  channel. A value of 1 indicates that a password change is permitted on an
	  unsecured channel. A value of 2 indicates that password change notification
	  is disabled. A value of 4 indicates that advance notification of password
	  change is disabled.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
