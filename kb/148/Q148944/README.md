---
layout: page
title: "Q148944: SMS: Login Script Without Extension Will Not Be Modified"
permalink: /kb/148/Q148944/
---

## Q148944: SMS: Login Script Without Extension Will Not Be Modified

{% raw %}

	Article: Q148944
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2,2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig kbSCMan smsconfig smssiteconfigman
	Last Modified: 26-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a site server's properties are set to configure login scripts, and a user's
	login script is defined in User Manager for Domains without the file's
	extension, Systems Management Server will not modify it.
	
	MORE INFORMATION
	================
	
	If a Systems Management Server site server has been configured to "Automatically
	Configure Workstation Login Scripts," the Site Configuration Manager service
	will examine each user's profile for a login script. If the script exists, it
	will attempt to modify the script so that it calls Smsls.bat or Smsls.cmd.
	
	NOTE: The Guest and Administrator accounts are skipped in this process.
	
	In User Manager for Domains, under Profile, it is possible to define a user's
	login script without an extension, that is, LOGIN," when the actual executable
	file is Login.bat. In this situation, the Site Configuration Manager will not
	modify the script to call Smsls.bat.
	
	
	An administrator to can use this aspect of Systems Management Server control
	which login scripts are modified.
	
	If an administrator doesn't want a login script to be modified, the extension
	cannot be defined for any of the users that use that particular login script.
	For instance, if 10 users share a common login script and only one of them has
	it defined with the extension, it will be modified.
	
	Additional query words: prodsms scman
	
	======================================================================
	Keywords          : kbnetwork kbConfig kbSCMan smsconfig smssiteconfigman 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2,2.0
	
	=============================================================================
	

{% endraw %}
