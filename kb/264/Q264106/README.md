---
layout: page
title: "Q264106: SMS: Err Msg: A DB Could Not Be Found with the Name Supplied"
permalink: /kb/264/Q264106/
---

## Q264106: SMS: Err Msg: A DB Could Not Be Found with the Name Supplied

{% raw %}

	Article: Q264106
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbClient kbDatabase kbMMC kbRemote kbServer kbWBEM kbsms200 kbHelpDesk kbsmsAdmin kbsms
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an administrator selects a machine from within the Systems Management
	Server (SMS) Administrator's Console to remotely control, the following message
	may appear:
	
	  A Database could not be found with the name supplied.
	
	CAUSE
	=====
	
	The Windows Management Repository files may have become corrupted. This can
	occur if the Smsprov.mof file is compiled on the site server while SQL and the
	repository are on a different machine.
	
	WORKAROUND
	==========
	
	To work around this behavior, remove and recompile the Windows Management
	Repository files. To do this, follow these steps:
	
	1. Stop the Windows Management Service.
	
	2. Remove "x:\SMS\bin\i386\smsprov.mof" from:
	
	  HKLM\Software\Microsoft\WBEM\CIMOM\AutoRecoverMOFs
	
	  This line needs to be removed so the MOF is not recompiled when the repository
	  is being rebuilt. The Smsprov.mof should not be compiled on the site server
	  if the provider is on a separate SQL server.
	
	3. Delete the WBEM repository. To do this, delete all files in:
	
	  \winnt\system32\wbem\repository
	
	4. Restart the Windows Management Service.
	
	If this procedure does not resolve the problem, you may need to reload the latest
	Service Pack. To do this, go to Start, Programs, System Management Server, and
	then SMS Setup. Next, select Upgrade. Upgrade requires the CD-ROM on your local
	drive. If any post-Service Pack hotfixes have been applied, it will be necessary
	to reapply those hotfixes again after the upgrade.
	
	MORE INFORMATION
	================
	
	Windows Management (such as Microsoft's implementation of the WBEM
	specification) is now part of the operating system and other functions may
	require it. Systems Management Server 2.0 is simply a delivery mechanism for
	Windows Management. Thus, client removal leaves this component intact. It is
	also available from Microsoft as part of Windows NT 4.0 SP4, Windows 98, and
	Windows 2000.
	
	For additional information on Windows Management(WMI or WBEM), click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q216738 SMS: WMI Terms and Concepts
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbDatabase kbMMC kbRemote kbServer kbWBEM kbsms200 kbHelpDesk kbsmsAdmin kbsmsProvider kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
