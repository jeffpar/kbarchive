---
layout: page
title: "Q150878: SMS Added to NetWare Login Script Twice"
permalink: /kb/150/Q150878/
---

## Q150878: SMS Added to NetWare Login Script Twice

{% raw %}

	Article: Q150878
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig kbMaintMan smsconfig smsmaintman smssiteconfig
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A second SMS section is added to the NetWare Login Script when "Automatically
	Configure Workstation Logon Scripts" is enabled.
	
	CAUSE
	=====
	
	The Site_Config_Manager service looks for the two SMS REM statements in the
	system logon script. If it does not find them, it will add the SMS section to
	the script.
	
	RESOLUTION
	==========
	
	Do not remove the REM statements surrounding the SMS section of the logon
	script.
	
	MORE INFORMATION
	================
	
	Example of SMS section:
	
	      REM Microsoft Systems Management Server (start)
	
	      REM SMS Build 692
	
	      set SMS_LOGON="SYS:SMS\logon.srv"
	      INCLUDE %<SMS_LOGON>\SMSLS.SCR
	      set SMS_LOGON=
	
	      REM Microsoft Systems Management Server (end)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig kbMaintMan smsconfig smsmaintman smssiteconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
