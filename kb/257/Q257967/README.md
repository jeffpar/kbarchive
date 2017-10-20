---
layout: page
title: "Q257967: SMSINST: Deleting Installer Packages May Remove Shared INI Files"
permalink: /kb/257/Q257967/
---

## Q257967: SMSINST: Deleting Installer Packages May Remove Shared INI Files

{% raw %}

	Article: Q257967
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbinterop kbClient kbConfig kbsms200 kbPackage kbsmsInst kbSoftwareDist
	Last Modified: 17-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience the following problem when you remove a package that shares
	files from a workstation:
	
	When multiple programs that write to the same file, such as Lotus.ini, are
	packaged and distributed by using Systems Management Server (SMS) Installer, you
	may find that when you remove the first package, you also remove the shared
	file.
	
	CAUSE
	=====
	
	This behavior occurs because SMS Installer lists the shared .ini file as a
	component of the first package. So, by removing the first package, you are also
	removing the file, whether or not it is in use by other programs. This behavior
	occurs because of the design of SMS Installer.
	
	WORKAROUND
	==========
	
	To work around this behavior, use either of the following methods:
	
	- Create a separate package that creates the file on the local computer. You
	  can then install this package first, before other dependent packages are
	  distributed. This ensures that the shared file will still exist when you
	  remove the programs.
	
	- Include the shared file as part of a standard workstation build. In doing so,
	  the file will already exist (it can be a 0 byte file) on all workstations.
	  When packages are rolled out, they can then edit the file.
	
	MORE INFORMATION
	================
	
	For example, many Lotus products will share the same Lotus.ini file. This is not
	a problem unless you decide to remove the package that you installed first.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbClient kbConfig kbsms200 kbPackage kbsmsInst kbSoftwareDist 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
