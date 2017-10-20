---
layout: page
title: "Q192868: SMSINST: Services Not Installed with Repackage of Norton AV 4.0"
permalink: /kb/192/Q192868/
---

## Q192868: SMSINST: Services Not Installed with Repackage of Norton AV 4.0

{% raw %}

	Article: Q192868
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Systems Management Server Installer 1.0 to repackage Norton Antivirus
	4.0 for Windows NT 4.0, some services do not appear to be installed correctly.
	
	CAUSE
	=====
	
	Systems Management Server Installer writes incorrect security information is
	written to the registry under
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\. This causes kernel mode
	driver services related to Norton Anti-Virus to fail at startup. This is due to
	the Repackage process in Systems Management Server Installer capturing
	installation-specific security information for the reference computer. This
	information is invalid for target systems; the Create Service driver will
	correctly create this information for each target system at run-time.
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following steps:
	
	1. After the repackage, but before compiling, modify the Edit Registry action in
	  the Script Editor view of the Systems Management Server Installer. You should
	  modify this script item so that it does not write to the registry keys under
	  HKLM\System\CurrentControlSet\Services related to Norton Anti-Virus services.
	  The Create Service script action takes care of creating these keys.
	
	2. Complete by compiling and installing on a clean computer.
	
	After performing these steps, note that the services, including the SYMEVENT
	kernel driver service, now start properly.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0.
	
	Additional query words: prodsms AV NAV
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
