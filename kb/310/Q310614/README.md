---
layout: page
title: "Q310614: SMS: The SMS Client Is Not Supported on 64-Bit Windows XP"
permalink: /kb/310/Q310614/
---

## Q310614: SMS: The SMS Client Is Not Supported on 64-Bit Windows XP

{% raw %}

	Article: Q310614
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	64-bit versions of Microsoft Windows XP are not supported as Systems Management
	Server (SMS) 2.0 clients in either 32-bit or 64-bit mode.
	
	MORE INFORMATION
	================
	
	Starting with SMS 2.0 Service Pack 3 (SP3), 32-bit versions of Windows XP are
	supported. With SMS 2.0 SP3, if you attempt to install the SMS client on 64-bit
	versions of Windows XP by using Smsman or Client Configuration Manager (CCM),
	the installation may appear to be successful. If you attempt to install the
	client by using Smsls, you receive error messages stating that Snsboot is a
	valid image, but not for that computer type.
	
	For additional information about SMS support for Windows XP, see the "Support for
	New Operating Systems and Applications" documentation at the following Microsoft
	Web site:
	
	  http://www.microsoft.com/smsmgmt/techdetails/newsupport.asp
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
