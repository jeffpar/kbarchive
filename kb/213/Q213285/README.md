---
layout: page
title: "Q213285: SMS: NetWare Bindery Server Must Be Client's Preferred Server"
permalink: /kb/213/Q213285/
---

## Q213285: SMS: NetWare Bindery Server Must Be Client's Preferred Server

{% raw %}

	Article: Q213285
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:2.0; winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbOSNovell smsinst
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 2.0 clients authenticate to a NetWare Bindery server.
	The NetWare server must be configured as a Systems Management Server CAP and
	logon point. The client will specify this NetWare server as the preferred server
	when logging on to NetWare in order to correctly report its inventory to the SMS
	site server.
	
	MORE INFORMATION
	================
	
	If the preferred server is anything other than the one defined as the SMS login
	point, then the smsls.scr will not execute because it is appended to the bindery
	system logon script (net$log.dat) on the defined preferred server in the
	following manner:
	
	  "include sys:\smslogon\config\smsls.scr"
	
	The client would be logging on to a bindery server that does not have this
	statement appended to its login script (net$log.dat).
	
	Additional query words: prodsms NW netware prefered server system logon script
	
	======================================================================
	Keywords          : kbsms200 kbOSNovell smsinst 
	Technology        : kbSMSSearch kbSMS200 kbSMSI200
	Version           : WINDOWS:2.0; winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
