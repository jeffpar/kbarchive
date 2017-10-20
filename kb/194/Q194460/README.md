---
layout: page
title: "Q194460: XCLN: Security Settings in Outlook Clients"
permalink: /kb/194/Q194460/
---

## Q194460: XCLN: Security Settings in Outlook Clients

{% raw %}

	Article: Q194460
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:8.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using your Outlook client to access e-mail, there are different
	configurations you may set to allow password authentication access. By selecting
	either Tools, Services from the menu bar, or opening the Mail icon in Control
	Panel, you can select Microsoft Exchange Server, and modify the properties. To
	do so, in the Properties window, select the Advanced tab. Depending on the
	version of Outlook that you are using, the Logon Network Security options will
	vary.
	
	MORE INFORMATION
	================
	
	For Outlook 97, versions 8.0 through 8.02, you will have a check box called "Use
	Network Security During Logon." In Outlook 97, version 8.03, and in Outlook 98,
	you will have a Logon Network Security dialog box with the following three
	choices in the dropdown menu:
	
	- NT Password Authentication
	
	- Distributed Password Authentication
	
	- None.
	
	These settings can be changed according to whether you wish to be prompted for a
	password authentication dialog box or use the cached credentials to log onto the
	mailbox.
	
	If you choose NT Password Authentication, on opening, Outlook will use the cached
	credentials that you have used when logging onto the workstation for Windows NT
	domain access.
	
	If you choose Distributed Password Authentication, on opening, Outlook will use
	password authentication to access an LDAP server such as Microsoft Commercial
	Internet System (MCIS) Membership Server.
	
	If you choose None, on opening, Outlook will prompt you with a dialog box for you
	to enter Windows NT domain credentials to access your mailbox. This dialog box
	may be used when you are working off-line and connecting via dial-up. The domain
	logon is usually bypassed or cancelled in this situation, and once the dial-up
	network connection is made, you must enter credentials to allow authentication
	and a connection to your Exchange Server mailbox.
	
	None of the above settings should be used for security purposes to guard against
	unauthorized access to your mailbox. Because it is an easy matter for another
	user to change the settings in the Microsoft Exchange Server Properties dialog,
	you should always log out of the workstation or lock the workstation to prevent
	unauthorized access when away from your computer. This will be the most
	effective deterrent to unauthorized access to your mailbox.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch
	Version           : WINDOWS:8.0; :8.0,8.01,8.02,8.03
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
