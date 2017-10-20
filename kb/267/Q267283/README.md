---
layout: page
title: "Q267283: Inetmgr Shows Screen Errors with Virtual Server on Novell Share"
permalink: /kb/267/Q267283/
---

## Q267283: Inetmgr Shows Screen Errors with Virtual Server on Novell Share

{% raw %}

	Article: Q267283
	Product(s): Internet Information Server
	Version(s): 2000,5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Internet Information Services (IIS) 5.0 to connect to a virtual
	directory that is located on a Novell Netware server, you may receive a red
	error icon in the IIS Microsoft Management Console (MMC) snap-in stating that
	the connection is inaccessible.
	
	CAUSE
	=====
	
	IIS does not support the UNC connection to a computer in a domain that does not
	have a trust relationship with the domain where IIS server resides.
	
	WORKAROUND
	==========
	
	
	To work around this behavior, do the following:
	
	1. On the computer running IIS, create a user with the same user name and
	  password as the connect as user and give this user the logon locally right.
	  (Log on to the IIS server with this user account to verify that the user has
	  the logon locally right.)
	
	2. On the remote (UNC share) computer, give the above user access permissions on
	  both the share and on the physical directory that the share hands out.
	
	3. The physical directory must have the everyone permission if there are ASP
	  pages in the directory.
	
	4. The share must have the everyone permission for the MMC to display the files.
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbWin2000PreSP2Fix 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbWinAdvServSearch
	Version           : :2000,5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
