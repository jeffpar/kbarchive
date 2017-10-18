---
layout: page
title: "Q161411: SMS: Client Error: &quot;Cannot Load C:&#92;Windows&#92;Vuser.386&quot;"
permalink: kb/161/Q161411/
---

## Q161411: SMS: Client Error: &quot;Cannot Load C:&#92;Windows&#92;Vuser.386&quot;

	Article: Q161411
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbnetwork kbsetup kbtshoot smsremtshoot smssetup kbRemoteProg
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When starting Windows after having installed the Systems Management Server
	client on a computer running Windows for Workgroups or Windows 95, the following
	errors may appear:
	
	  Cannot load C:\Windows\Vuser.386
	  User.com running version 5 should be version 4
	
	Further investigation may reveal the following:
	
	- Vuser.386 exists in the Windows\System directory.
	
	- There are two entries for Vuser in the System.ini file.
	
	- Wuser is in the Startup group.
	
	
	MORE INFORMATION
	----------------
	
	The Intel LANDesk(R) Management Suite Remote Control is installed, either fully
	or in part, on the client. LANDesk installs Vuser.386 in the Windows\System
	directory. Systems Management Server installs Vuser.386 in the Windows
	directory. The client cannot run both versions of Vuser.386 at the same time.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the LANDesk client, as described in the
	LANDesk documentation.
	
	Additional query words: prodsms LAN desk
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbnetwork kbsetup kbtshoot smsremtshoot smssetup kbRemoteProg 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2
	
	=============================================================================
	
