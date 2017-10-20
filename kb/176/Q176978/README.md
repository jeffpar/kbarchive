---
layout: page
title: "Q176978: Error C00000BE When Changing Password"
permalink: /kb/176/Q176978/
---

## Q176978: Error C00000BE When Changing Password

{% raw %}

	Article: Q176978
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Clients logging on and attempting to change their password receive the following
	error:
	
	  Unable to change the password on this account (C00000BE).
	  Please consult your system administrator.
	
	Event Viewer Security log shows Event ID 577 - Security-Failure. Audit-Privilege.
	
	CAUSE
	=====
	
	C00000BE indicates STATUS_BAD_NETWORK_PATH. When users change passwords, they
	connect directly to the primary domain controller.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Check physical connectivity by pinging the primary domain controller by IP
	  address and name.
	
	- Check connectivity through NET USE * \\PDCNAME\Share at an MS-DOS command
	  prompt.
	
	- Review entries in the primary and secondary WINS servers for inaccurate
	  records.
	
	- Under User Manager for Domains, Policies, Account, click to clear the "Users
	  must log on in order to change password" check box.
	
	- RestrictAnonymous has been set to 1 on the PDC, which prevents the user from
	  connecting to the PDC with a Null Session from the client workstation. The
	  user will not be able to change his or her password before he or she logs on
	  to the domain. The user can change his or her password after he or she logs
	  on to the domain because he or she will not be connecting to the PDC with a
	  null session at that time; the user domain credentials will be passed to the
	  PDC while trying to set up the session.
	
	  For additional information about RestrictAnonymous, please see the following
	  articles in the Microsoft Knowledge Base:
	
	  Q143474 Restricting Information Available to Anonymous Logon Users
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q135060 Access Denied Attempting to Change Client Domain Password
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbWin95search kbZNotKeyword3
	Version           : :2000,3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
