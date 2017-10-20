---
layout: page
title: "Q123770: SETLS32 Fails To Remap Windows NT Clients"
permalink: /kb/123/Q123770/
---

## Q123770: SETLS32 Fails To Remap Windows NT Clients

{% raw %}

	Article: Q123770
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smshowto smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you log onto a Master User Domain (MUD) from a Windows NT workstation that is
	a member of a resource domain, the workstation will report to the MUD instead of
	the resource domain even though the SMSLS.INI file maps the workstations domain
	and workgroup to the resource domain.
	
	CAUSE
	=====
	
	The incorrect domain mapping results because there is no application programming
	interface (API) call that can retrieve the current resource domain, only the
	authenticating user domain.
	
	A possible workaround would be to use the [workgroup] section of the SMSLS.INI
	file and add the "resourcedomain=resourcedomain" line. Because this line would
	match the check made by SETLS32.EXE, the workgroup "resourcedomain" should be
	enumerated (even though there is no real workgroup by this name), a server
	should be found, and mapping should complete. Unfortunately, the default server
	is passed to the enumeration call and set to the authenticating server in the
	MUD. Because of this, there is no known workaround for the problem except a
	[machine]-based mapping.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smshowto smsconfig 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	

{% endraw %}
