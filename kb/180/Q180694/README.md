---
layout: page
title: "Q180694: SMS: Chkdsk Runs Every Time the System Is Restarted Post-SP3"
permalink: /kb/180/Q180694/
---

## Q180694: SMS: Chkdsk Runs Every Time the System Is Restarted Post-SP3

{% raw %}

	Article: Q180694
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP3,2.0
	Operating System(s): 
	Keyword(s): smsgeneral kbArtTypeINF
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2 SP3, 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you apply Systems Management Server Service Pack 3 (SP3) to Microsoft
	Windows NT clients, Chkdsk runs every time the client is rebooted, even if
	Windows NT had previously been shut down correctly.
	
	Additionally, when CHKDSK runs at system startup, you may also receive the
	following error message:
	
	  Cannot open volume for direct access
	
	CAUSE
	=====
	
	The new remote control video system driver, Systems Management Server Remote
	Control Video Helper (Rchelp.sys), is implemented in Systems Management Server
	1.2 Service Pack 3.
	
	The "Cannot open volume for direct access" error message occurs because
	Rchelp.sys was creating a file on the volume during startup. Consequently,
	CHKDSK was unable to get exclusive access to the volume.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around the problem, edit the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\rchelp
	
	Set the Start value (reg_dword) to 2 (the default is 1).
	
	This has the effect of changing the startup value from "System" to "Automatic",
	starting it later in the boot process, which solves the Chkdsk problem.
	
	Chkdsk will still work normally when you start the computer and the Systems
	Management Server Remote Control functionality is retained.
	
	To automate the deployment of the fix, create a text file with a REG extension.
	It should consist of the following lines:
	
	  REGEDIT
	  [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\rchelp]
	  "Start"=dword:00000002
	
	Run the following command at each computer to implement the fix. Note that the
	user who is logged on must have the appropriate permission.
	
	  "regedit <path>\<filename>.REG" (without the quotation marks)
	
	You can run the command as part of a logon script or distribute it as a Systems
	Management Server job, or a similar process.
	
	NOTE: This behavior also occurs in Systems Management Server 2.0 SP2. Following
	the installation/upgrade to the SP2 client components, client computers may
	begin exhibiting the same behavior.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q235771 BUG: Rchelp.Sys Can Cause CHKDSK to Run Continuously
	
	Additional query words:
	
	======================================================================
	Keywords          : smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS200 kbSMS120SP3
	Version           : :1.2 SP3,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
