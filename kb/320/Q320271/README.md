---
layout: page
title: "Q320271: Members of the Users Group Can't Install the HIS 2000 Web Client"
permalink: /kb/320/Q320271/
---

## Q320271: Members of the Users Group Can't Install the HIS 2000 Web Client

{% raw %}

	Article: Q320271
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhis2000
	Last Modified: 04-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users that are members of the default Users group in Microsoft Windows 2000 and
	Microsoft Windows XP cannot install the Microsoft Host Integration Server (HIS)
	2000 Web Client. If a user tries to install the HIS 2000 Web Client, the
	following error message is displayed:
	
	  VBScript: Microsoft SNA Server Web Client
	
	  Please refresh your browser window and choose 'yes' when prompted to install
	  the Microsoft SNA Server ActiveX Control.
	
	  Please make sure you are running Microsoft Internet Explorer version 3.02 or
	  higher for Windows 95 or Windows NT 4.0.
	
	If the user is a member of either the Power Users or Administrators group, the
	user can successfully install the HIS 2000 Web Client.
	
	MORE INFORMATION
	================
	
	If you perform a clean installation of Microsoft Windows 2000 or Microsoft
	Windows XP (not an upgrade over Microsoft Windows NT 4.0 or Microsoft Windows
	98), members of the Users default group cannot download ActiveX Controls and may
	experience the problem that this article describes during the HIS 2000 Web
	Client installation. Similar results may occur when a user views any Web site
	that contains ActiveX Controls.
	
	For additional information about why members of the Users group cannot install
	ActiveX Controls, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q240897 Web Pages with ActiveX Controls Are Not Displayed Properly
	
	
	For additional information about SNA Server and HIS 2000 Web Client, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q279003 Understanding and Configuring the SNA Server/HIS 2000 Web Client
	
	  Q280740 Issues Associated with the SNA Server HIS 2000 Web Client
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
