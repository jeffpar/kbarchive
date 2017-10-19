---
layout: page
title: "Q259577: XADM: Exchange Admin Settings Are Windows NT Profile-Specific"
permalink: /kb/259/Q259577/
---

## Q259577: XADM: Exchange Admin Settings Are Windows NT Profile-Specific

	Article: Q259577
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you administer an Exchange Server-based computer by using the Exchange
	Administrative program from various Microsoft Windows NT computers on the
	network, you may notice that your Exchange Administrative program settings are
	not maintained between these two computers unless you are using a Windows NT
	roaming profile.
	
	For example, while you administer the Exchange Server-based computer from
	computer A, you can modify the toolbar display if you click Customize Toolbar on
	the Tools menu. You can then log on to computer B and open the Exchange
	Administrator program against the same Exchange Server-based computer; however,
	the toolbar display does not reflect the change that you make to computer A.
	
	CAUSE
	=====
	
	This feature is by design.
	
	The Exchange Administrator Display settings are specific to each Windows NT
	profile. When you log on to a Windows NT computer, and then log on to the
	domain, a profile is used and created on the local computer by default unless
	you specify a roaming profile path in the "User Manager for Domains" tool.
	
	WORKAROUND
	==========
	
	To work around this problem, administer Exchange Server-based computers from
	only one computer or enable your Windows NT account to use a roaming Windows NT
	profile in the "User Manager for Domains" tool. If the profile is a roaming
	profile, it cannot be a mandatory profile. If the profile is mandatory, changes
	that you make to the Display settings in the Exchange Administrator tool are
	lost when you log off the Windows NT computer.
	
	MORE INFORMATION
	================
	
	By default, a user's Windows NT profile is created and maintained in the
	%SystemRoot%\Profiles\<username> folder.
	
	A user's Windows NT profile is made up of two components, folders and registry
	settings. The %SystemRoot%\Profiles\<username>\Ntuser.dat file is started
	in the HKEY_CURRENT_USER registry hive every time that a user logs on to a
	Windows NT computer.
	
	The Exchange Administrator settings are maintained in the following registry
	keys:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Exchange\MSExchangeAdmin
	
	  -and-
	
	  HKEY_CURRENT_USER\Software\Microsoft\Exchange\MSExchangeAdminCommon
	
	For additional information about Windows NT profiles, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q161070 Step by Step Roaming Profiles Configuration
	
	For information about how to implement profiles and policies for Windows NT 4.0,
	click the following link to view the Microsoft Web page:
	
	  http://www.microsoft.com/ntserver/management/deployment/planguide/prof_policies.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
