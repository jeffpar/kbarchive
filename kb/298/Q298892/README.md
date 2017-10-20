---
layout: page
title: "Q298892: SNA/HIS Client Logon Fails After New Password Prompt"
permalink: /kb/298/Q298892/
---

## Q298892: SNA/HIS Client Logon Fails After New Password Prompt

{% raw %}

	Article: Q298892
	Product(s): Microsoft SNA Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbhis2000
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a user's Windows NT or Windows 2000 domain password expires, the Windows 9x
	Client for SNA Server 4.0 will display a "Logon Failed" message when a session
	is initiated after the user changes the password. The Host Integration Server
	(HIS) 2000 End User Client will display an "Error: Could not open sponsor
	connection" message after the password is changed.
	
	After the Windows NT or Windows 2000 password is successfully changed, the user
	is able to connect to the SNA Server or HIS 2000 server if the SNA Server or HIS
	client application is restarted.
	
	CAUSE
	=====
	
	SnaBase was not able to successfully perform a new logon attempt after the
	user's domain password was changed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server 4.0 and
	Microsoft Host Integration Server 2000.
	
	
	MORE INFORMATION
	================
	
	If the Use Windows Domain Password option is not selected in the SNA Server
	Windows 9x or HIS 2000 End User client, a domain logon information pop-up dialog
	box is presented when the client connection is initiated. If the user's domain
	account has been set for "user must change password at next logon" or the
	account password has expired, a password change dialog box will be presented.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbhis2000 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
