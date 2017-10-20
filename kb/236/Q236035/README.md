---
layout: page
title: "Q236035: SMSINST: SMS Installer Cannot Directly Call Windows API Function"
permalink: /kb/236/Q236035/
---

## Q236035: SMSINST: SMS Installer Cannot Directly Call Windows API Function

{% raw %}

	Article: Q236035
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug smsinst
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 2.0 Service Pack 1 Installer (version 2.00.80 or
	above) now has two options when using the Call DLL script item:
	
	- Call function written specifically for SMS Installer: Use this option to call
	  a function that is written specifically for SMS Installer. Provide the
	  variables, the parameter string, and the action.
	
	- Call function with variable parameter list: Use this option to call a
	  function that has variable parameters and that is not known to SMS Installer.
	  If you choose this option, you must provide the variable parameter.
	
	MORE INFORMATION
	================
	
	The ability to call a function written specifically for Systems Management
	Server Installer has been available in previous versions. Samples of custom DLLs
	and scripts that call them are available in the \DLL and \Samples directories of
	your SMS Installer installation directory.
	
	The ability to call a function with a variable parameter list is new to SMS
	Installer 2.0.80.00 and later, which is provided with Systems Management Server
	2.0 Service Pack 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	REFERENCES
	==========
	
	For more information on the Call DLL script item, see the Systems Management
	Server Installer Online Help.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : WINDOWS:2.0; winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
