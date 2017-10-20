---
layout: page
title: "Q191194: XCLN: Error Message: Can't Read Your Internet E-mail Profile"
permalink: /kb/191/Q191194/
---

## Q191194: XCLN: Error Message: Can't Read Your Internet E-mail Profile

{% raw %}

	Article: Q191194
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Outlook client or Microsoft Exchange client, the
	following error message may appear:
	
	  Couldn't read your Internet e-mail profile. Please exit, delete the
	  current profile and create a new one.
	
	CAUSE
	=====
	
	The Internet e-mail service is incorrectly configured in the profile being used.
	
	WORKAROUND
	==========
	
	To work around this problem, verify that the Internet e-mail service is properly
	configured in the profile by doing the following:
	
	1. Click Start, point to Settings, and then click Control Panel to open the
	  Windows Control Panel.
	
	2. Double-click the Mail And Fax icon. You may have only a Mail icon if you did
	  not install fax services.
	
	  NOTE: If you have more than one profile, click the Show Profiles button. On
	  the General tab, click the profile that contains the Internet e-mail
	  settings. Click the Properties button to open the Profile Properties dialog
	  box. On the Services tab, you should see the Internet e-mail service.
	
	3. Select the Internet e-mail service and the Properties button. Correct any
	  incorrect configuration settings and click OK to save this information.
	
	After the Internet e-mail service is properly configured, the Outlook client or
	Exchange client should start without error.
	
	MORE INFORMATION
	================
	
	If the Internet e-mail service is not being used, you can remove it entirely
	through Control Panel.
	
	1. Click Start, point to Settings, and then click Control Panel to open the
	  Windows Control Panel.
	
	2. Double-click the Mail And Fax icon. You may have only a Mail icon if you did
	  not install fax services.
	
	  NOTE: If you have more than one profile, click the Show Profiles button. On
	  the General tab, click the profile that contains the Internet e-mail
	  settings. Click Properties to open the Profile Properties dialog box. On the
	  Services tab, you should see the Internet e-mail service.
	
	3. Select the Internet e-mail service and click Remove.
	
	After the Internet e-mail service is removed, the Outlook client or Exchange
	client should start without error.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
