---
layout: page
title: "Q154738: &quot;Connect Network Drive&quot; Caches First Credentials Supplied"
permalink: /kb/154/Q154738/
---

## Q154738: &quot;Connect Network Drive&quot; Caches First Credentials Supplied

{% raw %}

	Article: Q154738
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you connect to a remote resource using the Connect As and Reconnect At
	Logon options within either File Manager or Windows Explorer, Windows NT caches
	the first set of credentials supplied, even if these credentials are invalid and
	fail to provide access to the remote resource. Subsequent attempts to access the
	remote resource with valid credentials will give the user access to the
	resource, but do not change the cached credentials used when reconnecting.
	
	WORKAROUND
	==========
	
	Be sure to provide the correct set of credentials when filling in the Map
	Network Drive dialog box.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Open Windows Explorer and click Map Network Drive.
	
	2. Specify the standard UNC \\<servername>\<sharename>.
	
	3. Specify a <DomainName>\<UserName> in the Connect As field,
	  misspelling either the DomainName or the UserName.
	
	4. Click the Reconnect At Logon check box.
	
	5. Click OK.
	
	6. You can now correct your mistake from step 3 by typing the properly spelled
	  DomainName or UserName. Also type the password.
	
	7. Click OK. You should now be mapped to a resource.
	
	8. Log off and then log on again.
	
	9. During the logon sequence, you will be prompted to provide credentials to
	  reconnect to the resource. Note that the misspelled DomainName or UserName is
	  displayed, and you cannot change either one. You must click Cancel at this
	  point. Also, you should click the "Do not Try to Restore this Connection in
	  the Future" check box.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
