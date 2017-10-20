---
layout: page
title: "Q162797: Trust Relationship Between Workstation and Domain Fails"
permalink: /kb/162/Q162797/
---

## Q162797: Trust Relationship Between Workstation and Domain Fails

{% raw %}

	Article: Q162797
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsgkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a computer running Windows NT Server or Workstation that
	is a member of your domain with one of the following methods, it fails with one
	of the messages listed below.
	
	- At a command prompt, type either of the following commands:
	
	  Net Use \\<ComputerName>\<Share>
	
	  -or-
	
	  Net View \\<ComputerName>
	
	  You receive the following message:
	
	  System Error 1789 has occurred. The trust relationship between this
	  workstation and the primary domain failed.
	
	- You are in Server Manager and try to view the computer's properties. You
	  receive the following message:
	
	  The trust relationship between this workstation and the primary domain
	  failed.
	
	- You are in User Manager and try to add a user account from the Member Server
	  or Workstation's database. You receive the following error message:
	
	  The trust relationship between this workstation and the primary domain
	  failed.
	
	- In Event Viewer on the Member Server or Workstation, you receive Event ID
	  5722:
	
	  The session setup to the Windows NT Domain Controller <Unknown> for the
	  domain <DomainName> failed because the Windows NT Domain Controller
	  does not have an account for the computer <ComputerName>.
	
	- When you attempt to log on to the console, you receive the message:
	
	  System can not log you on to the domain because the systems computer account
	  in its primary domain is missing or the password on that account is
	  incorrect.
	
	CAUSE
	=====
	
	The computer's machine account has the incorrect role or its password has become
	mismatched with that of the domain database.
	
	RESOLUTION
	==========
	
	Log on locally as a local administrator. In the Network tool of Control Panel,
	select Change and enter a Workgroup name, leaving the domain. Restart the
	computer and log on locally as a local administrator.
	
	There are two methods to rejoin the domain:
	
	- You can join the domain from the client if at the same time you can provide
	  an administrator username and password on the domain.
	
	  -or-
	
	- You can delete the existing computer account in Server Manager, recreate the
	  computer account, synchronize the domain, and then on the client rejoin the
	  domain.
	======================================================================
	Keywords          : kberrmsg kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
