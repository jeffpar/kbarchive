---
layout: page
title: "Q191342: SMS: PGC Fails to Configure Shared Applications on WFW Clients"
permalink: /kb/191/Q191342/
---

## Q191342: SMS: PGC Fails to Configure Shared Applications on WFW Clients

{% raw %}

	Article: Q191342
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP2,1.2 SP3,1.2 SP4,2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2 SP2, 1.2 SP3, 1.2 SP4, 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying Systems Management Server 1.2 Service Pack 2 or later, the
	updated Appsta16.exe file fails to run the configuration command line for shared
	applications that have the option "Runs with UNC Name" selected.
	
	This version of Appstart.exe is only used on client computers running Windows 3.1
	or Windows for Workgroups 3.11. They normally receive the following error:
	
	  Cannot configure <app name>. Cannot obtain the configuration program
	  name.
	
	It is also possible for different errors to occur as well.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Configure the shared application to run with a drive letter and not a UNC
	  connection.
	
	-or-
	
	- Copy all of the files used by the configuration command line to the
	  SMS\Site.srv\Maincfg.Box\MStest directory. This may not always be a very
	  desirable solution if the configuration requires a large number of files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sp sp2 setup fails program group control
	
	======================================================================
	Keywords          : kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS200 kbSMS120SP2 kbSMS120SP3 kbSMS120SP4 kbSMS200SP1 kbSMS200SP2
	Version           : :1.2 SP2,1.2 SP3,1.2 SP4,2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
