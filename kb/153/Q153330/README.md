---
layout: page
title: "Q153330: PGC Cannot Find Server with NetWare, WFWNET, LANMan Connections"
permalink: /kb/153/Q153330/
---

## Q153330: PGC Cannot Find Server with NetWare, WFWNET, LANMan Connections

{% raw %}

	Article: Q153330
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you have a NetWare, "WFWNET," and LAN Manager connection on a Windows for
	Workgroups 3.11 computer, the Program Group Control (PGC) is unable to find a
	server.
	
	
	CAUSE
	=====
	
	APPCTL16.EXE and APPSTART.EXE cannot call NWGetDriveStatus in SMSNETNW.DLL to
	enumerate the drive connections that exist. It starts with the lowest letter,
	which is a LAN Manager or "WFWNET" connection. This returns error code 18, which
	causes the symptom mentioned above.
	
	RESOLUTION
	==========
	
	To work around this problem, remove the LAN Manager or "WFWNET" connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms Novell database connect
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

{% endraw %}
