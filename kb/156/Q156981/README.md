---
layout: page
title: "Q156981: FP: How to Assign IP Restrictions in FrontPage"
permalink: /kb/156/Q156981/
---

## Q156981: FP: How to Assign IP Restrictions in FrontPage

{% raw %}

	Article: Q156981
	Product(s): Word Front Page
	Version(s): ; WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194166.
	
	SUMMARY
	=======
	
	In order to restrict end user access to specific IP addresses in FrontPage, the
	Author and Administrator IP restrictions must be at least as rigorous as the End
	User restrictions.
	
	In FrontPage Explorer, if you click the End User tab in the Web Permissions
	dialog box (on the Tools menu, click Permissions) and apply an IP address
	restriction, FrontPage may still allow browsing to the Web from a restricted IP
	address.
	
	MORE INFORMATION
	================
	
	The security model of FrontPage assumes each successive group (End Users,
	Authors, and Administrators) is comprised of a subset of members from the group
	below it. In other words, all Authors must be End Users, and all Administrators
	must be Authors. This allows Administrators to automatically have authoring and
	browsing rights, and allows Authors to also browse the Web. Because authoring
	and administration of a FrontPage Web must be done through a browsing session,
	any IP restriction applied to End Users must also apply to the Administrators
	and Authors groups to prevent browsing. FrontPage doesn't challenge the user for
	a name and password to grant access to a higher level of permission until an
	authoring operation is attempted; therefore, all accounts initially are
	connected to the Web server with End User security.
	
	FrontPage offers the capability to define a separate IP restriction to each
	group, but each successive level must have an equal or tighter restriction.
	Because Administrators also have the right to author and browse, and since
	authors also have the right to browse, it may be helpful to think of the IP
	restrictions settings as being cumulative. For example, in a Web with the
	following IP restriction
	
	  Administrators: *.*.*.*
	  Authors:        244.24.*.*
	  End Users:      244.24.57.*
	
	End Users will be able to browse from any computer on the network. Another way to
	interpret the above table is as follows:
	
	  244.24.57.*  is granted the right to browse
	  244.24.*.*   is granted the right to browse and the right to Author
	  *.*.*.*      is granted the right to browse, the right to author, and
	               the right to administer
	
	If the FrontPage Web has the following restrictions,
	
	  Administrators: 244.24.57.*
	  Authors:        244.24.*.*
	  End Users:      244.24.*.*
	
	then only End users with IP addresses beginning with 244.24 can browse the Web,
	Authors can only come from 244.24.*.*, and Administrators can only come from
	244.24.57.*. Another way to interpret the IP restrictions above is as follows:
	
	  244.24.*.*   is granted the right to browse
	  244.24.*.*   is granted the right to browse and the right to author
	  244.24.57.*  is granted the right to browse, the right to author, and
	               the right to administer
	
	Note: The Microsoft Internet Information Server does not grant the right to
	assign IP restrictions on a per directory basis. The IP restrictions dialog box
	on a FrontPage Web being hosted on an IIS server will be disabled.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbnetwork kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : :; WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
