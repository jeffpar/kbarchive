---
layout: page
title: "Q267929: SMS: CCM Client Bootstrap Service Does Not Start"
permalink: /kb/267/Q267929/
---

## Q267929: SMS: CCM Client Bootstrap Service Does Not Start

{% raw %}

	Article: Q267929
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The Systems Management Server (SMS) Client Configuration Manager (CCM) component
	does not start the Client Bootstrap service if you use the Disk Administrator
	tool (Windisk.exe) to change the operating system partition hard disk letter
	designation.
	
	CAUSE
	=====
	
	Disk Administrator does not update the following registry key value when you
	change the hard disk letter:
	
	  HKEY_Local_Machine\Software\Microsoft\Windows NT\CurrentVersion <path
	  name>
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Modify the following registry key with the correct hard disk letter:
	
	  HKEY_Local_Machine\Software\Microsoft\Windows NT\CurrentVersion <path
	  name>
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following entries appear in the CCM log:
	
	  ---> Could not retrieve the heartbeat time from the client (2)
	  ---> Unable to retrieve a sites list from machine "MYNTCLIENT".
	  ---> Unable to retrieve travel mode switch from machine "MYNTCLIENT".
	  ---> Unable to retrieve pending command value for sms client base
	  components from machine "MYNTCLIENT".
	  ---> Could not retrieve the site config timestamp from the client (2)
	  ---> Copying client files to \\MYNTCLIENT\admin$\sms_temp.
	  ---> Copying file "E:\SMS\inboxes\clicomp.src\base\I386\CCMCore.exe" to
	  "\\MYNTCLIENT\admin$\sms_temp\CCMCore.exe"
	  ---> Copying file "E:\SMS\inboxes\clidata.src\cli_inst.cfg" to
	  "\\MYNTCLIENT\admin$\sms_temp\cli_inst.cfg"
	  ---> Copying file "E:\SMS\inboxes\clidata.src\caplist.ini" to
	  "\\MYNTCLIENT\admin$\sms_temp\caplist.ini"
	  ---> Copying file "E:\SMS\bin\I386\CCMData.tcf" to
	  "\\MYNTCLIENT\admin$\sms_temp\CCMData.tcf"
	  ---> Copying file "E:\SMS\bin\I386\CCMBtLdr.exe" to
	  "\\MYNTCLIENT\admin$\sms_temp\CCMBtLdr.exe"
	  ---> Created service "CCMBoot" on machine "MYNTCLIENT".
	  ---> ERROR: Unable to start service "CCMBoot" on machine "MYNTCLIENT",
	  error = 3.
	  ---> Failed to start the CCM Client Bootstrap service on MYNTCLIENT (3)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
