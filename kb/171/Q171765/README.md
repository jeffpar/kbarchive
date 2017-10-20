---
layout: page
title: "Q171765: SMS: Win95 Clients Are Put in the Wrong SMS Site with Smsls.ini"
permalink: /kb/171/Q171765/
---

## Q171765: SMS: Win95 Clients Are Put in the Wrong SMS Site with Smsls.ini

{% raw %}

	Article: Q171765
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbenv kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Windows 95 client computer has been upgraded from Windows for Workgroups
	3.11, it may be put into the wrong Systems Management Server site if you are
	using the Smsls.ini file.
	
	CAUSE
	=====
	
	When the computer running Windows 95 is upgraded, the [Network] section of the
	System.ini file is not removed. If the computer name or workgroup is changed in
	Windows 95, the registry is updated, but the [Network] section of the System.ini
	file is not. When the Smsls.ini file is used, the SETLS program reads the
	[Network] section of the System.ini file, not the registry. This may result in
	the client reporting its inventory to the wrong Systems Management Server site.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the [Network] section of the System.ini file
	from the computers running Windows 95. Doing this allows the SETLS program to
	obtain the correct information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms machine
	
	======================================================================
	Keywords          : kbenv kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
