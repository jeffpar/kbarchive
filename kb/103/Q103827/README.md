---
layout: page
title: "Q103827: RAS and SFM Passwords Are Not Case Sensitive"
permalink: /kb/103/Q103827/
---

## Q103827: RAS and SFM Passwords Are Not Case Sensitive

{% raw %}

	Article: Q103827
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT Remote Access Service (RAS) and Services for Macintosh (SFM)
	passwords are not case sensitive.
	
	CAUSE
	=====
	
	RAS and SFM do not use the Windows NT password authentication scheme. Instead,
	these services use the same password authentication model that is used by
	Microsoft LAN Manager. Unlike Windows NT passwords, LAN Manager passwords are
	not case sensitive. Therefore, SFM and RAS client passwords ignore case.
	
	Windows NT stores both a LAN Manager and Windows NT version of your password in
	its Security Accounts Manager (SAM) database. RAS and SFM both have the option
	to use Windows NT or LAN Manager password authentication. In Windows NT and
	Windows NT Advanced Server version 3.1, they always choose LAN Manager password
	authentication even when connecting to another Windows NT computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	For more information on user authentication in Windows NT, how passwords are
	stored, RAS password authentication, and the differences between LAN Manager and
	Windows NT, query on the following words in the Microsoft Knowledge Base:
	
	  authentication lan
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
