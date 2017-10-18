---
layout: page
title: "Q249828: Unable to Log on to Domain After Applying SP4 or Later"
permalink: kb/249/Q249828/
---

## Q249828: Unable to Log on to Domain After Applying SP4 or Later

	Article: Q249828
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you join a domain after applying Service Pack 4 (SP4) or later to your
	Windows NT 4.0-based computer, you are unable to log on to the domain. Also, you
	receive the following error message after you restart your computer:
	
	  System can not log you on to the domain because the systems computer account
	  in its primary domain is missing or the password on that account is
	  incorrect.
	
	When you use the Server Manager tool to view the properties of your computer, you
	receive the following error message:
	
	  The trust relationship between this workstation and the primary domain
	  failed.
	
	The domain controller your computer is authenticating with generates an event id
	5722 in the System log for your Windows NT 4.0 SP4-based or later computer name.
	Also, an event id 3224 is generated on the System log of your computer with the
	following error message:
	
	  The authentication service is unknown.
	
	CAUSE
	=====
	
	This issue can occur because of a Remote Procedure Call (RPC) issue with the
	following registry key on your computer:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\RPC
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, use either of the following methods:
	
	- Export the registry key listed earlier in this article from a working Windows
	  NT 4.0-based computer, and then import it to your computer.
	
	- Use the Server Manager tool to reset your computer account.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	
