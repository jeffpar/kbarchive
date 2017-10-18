---
layout: page
title: "Q168461: Customizing Your Network Neighborhood Help Topic Does Not Exist"
permalink: kb/168/Q168461/
---

## Q168461: Customizing Your Network Neighborhood Help Topic Does Not Exist

	Article: Q168461
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Customizing Your Network Neighborhood topic in the Windows NT
	help file, you receive the following error message:
	
	  The topic does not exist. Contact your application vendor for an updated help
	  file. (129)
	
	CAUSE
	=====
	
	There is a link in the Windows.cnt file that points to a non-existent topic.
	
	RESOLUTION
	==========
	
	Edit the Windows.cnt file and remove the following line:
	
	  Customizing your Network Neighborhood=NET_CUSTOMIZE_HOOD
	
	
	MORE INFORMATION
	================
	
	The following information should exist for this topic:
	
	To add items to your Network Neighborhood:
	
	1. On the Desktop, double-click Network Neighborhood.
	
	2. Double-click Entire Network.
	
	3. When you find something you want in your Network Neighborhood (for example, a
	  computer, folder, printer, or file), drag it to your NetHood folder, which is
	  located in Winnt\Profiles\Yourname. When you open Network Neighborhood, the
	  new item will appear.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
