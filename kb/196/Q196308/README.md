---
layout: page
title: "Q196308: Name and Password Are Not Accepted When Opening Web"
permalink: /kb/196/Q196308/
---

## Q196308: Name and Password Are Not Accepted When Opening Web

{% raw %}

	Article: Q196308
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to open a Web in FrontPage Explorer, you are prompted for a name
	and password. After entering the correct name and password, you are repeatedly
	prompted to re-enter your name and password.
	
	A Windows NT Administrator can open the Web in FrontPage Explorer and verify that
	the user name is listed and allowed to access this Web, yet you are unable to
	open it.
	
	CAUSE
	=====
	
	This only occurs when the security is edited with the Fpsrvadm.exe or
	Fpremadm.exe command-line utilities. User tokens are not refreshed until the
	server is restarted.
	
	WORKAROUND
	==========
	
	There are three methods to work around this problem.
	
	Method 1 (Applies to IIS 4.0):
	
	1. Click Start, point to Settings, and choose Control Panel.
	
	2. Double-click the Services icon.
	
	3. Stop and restart the IIS Admin Service. This will prompt you to stop W3svc
	  (World Wide Web Publishing service), Msftpsvc (FTP Publishing service), and
	  Smtpsvc (Microsoft SMTP service), if they are running.
	
	4. Restart W3svc, Msftpsvc, and Smtpsvc individually. This can also be
	  accomplished from the command line (as a part of a batch file) by issuing
	  syntax at the following:
	
	  net stop iisadmin /y
	  net start w3svc
	  net start msftpsvc
	  net start smtpsvc
	
	  NOTE: Not everyone uses the Msftpsvc or Smtpsvc services, therefore they may
	  not need to be restarted.
	
	
	Method 2:
	
	Edit the security in FrontPage Explorer. This forces a refresh of the IIS
	security cache without stopping and restarting the Web server.
	
	1. Open the Web in FrontPage Explorer.
	
	2. On the Tools menu, click Permissions. If this is a subweb, then on the
	  Settings tab in the Permissions dialog box, click the "Use Unique Permissions
	  for this Web radio button and click Apply.
	
	3. In the Permissions dialog box, click the Users tab, and then click Add
	
	4. In the Add Users dialog box, click the domain name or the computer name from
	  the "Obtain list from:" drop-down.
	
	5. In the "Users Can" section, click the appropriate radio button for the level
	  of access you want to grant users.
	
	6. Highlight the user name in the "Names" list box, and click Add.
	
	7. Click OK to close the Add Users dialog box.
	
	8. Click Apply, and then click OK to close the Permissions Dialog box.
	
	Method 3 (Applies to IIS 3.0):
	
	Stop and Start World Wide Web Publishing Service (W3SVC) from the Services applet
	in Control Panel. This can also be accomplished from the command line (as a part
	of a batch file) by issuing the following commands at a command prompt:
	
	  net stop w3svc
	  net start w3svc
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q190521 FP98: Command Line Security Changes Require Restart of IIS
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch kbFrontPage97 _IKkbZNotKeyword4 kbZNotKeyword2 kbFrontPage97Search kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
