---
layout: page
title: "Q235184: SMS: Registry Change Turns Off Package Target Deletion"
permalink: /kb/235/Q235184/
---

## Q235184: SMS: Registry Change Turns Off Package Target Deletion

{% raw %}

	Article: Q235184
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbPackage
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Systems Management Server 2.0 removes and then recreates the entire package on
	the distribution points whenever an update is made to the package. This prevents
	administrators from sending another package to update specific files on the
	distribution point.
	
	An Example
	----------
	
	Package A distributes a program and data file. This package is advertised.
	Package B is an updated data file. This package is distributed to the same
	share/directory as Package A.
	
	As a result, Package A is overwritten by Package B. This is a change in behavior
	from System Management Server 1.2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Service Pack 1 provides a registry key to control whether or not Update
	Distribution Points delete the directory.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Components\SMS_DISTRIBUTION_MANAGER
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Reserved Flags
	  Data Type:  REG_DWORD
	  Value:      0 (Default, Delete target) or 1 (Overwrite target)
	
	4. Quit Registry Editor.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbPackage 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
