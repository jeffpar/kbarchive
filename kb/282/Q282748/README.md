---
layout: page
title: "Q282748: NFS Attributes Tab Disappears from Windows Explorer Properties"
permalink: /kb/282/Q282748/
---

## Q282748: NFS Attributes Tab Disappears from Windows Explorer Properties

{% raw %}

	Article: Q282748
	Product(s): Microsoft Windows NT
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Services for UNIX (SFU) contains a Server for NFS component. When the
	Server for NFS component is installed and the service is running, the properties
	dialog box for a folder in Windows Explorer contains an NFS Sharing tab. The
	options on the NFS Sharing tab allow the administrator to export the volume by
	using the Server for NFS component.
	
	If a program opens the Kernel-mode component of the Server for NFS component, and
	a user then stops and restarts the Server for NFS component, the NFS Sharing tab
	may disappear from the Windows Explorer property dialog box.
	
	If you run Performance Monitor and add counters, Performance Monitor opens a
	handle to every object from which it can collect counters, even if the counters
	for that object were not requested.
	
	
	CAUSE
	=====
	
	Performance Monitor has an open handle to the kernel component of the NFS
	server. Even if you issue a command to stop the NFS server, the Kernel-mode
	portion of the NFS Server component never stops. It is in a STOP_PENDING state.
	After Performance Monitor closes its handle, the kernel component of the NFS
	Server service can stop.
	
	The User-mode portion of the Server for NFS service does not pay attention to the
	state of the Kernel-mode component. If the Kernel-mode portion is not in a
	stopped state, the User-mode portion assumes that the Kernel-mode portion is
	running.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version       Size     File name   Platform
	  ---------------------------------------------------------------
	  04/25/2001  10:56a  5.2000.621.3   19,968  Dsctrs.dll  Intel
	  03/27/2001  03:49p  5.2000.621.3  101,888  Nfssvc.exe  Intel
	  03/27/2001  03:49p  5.2000.621.3  254,912  Nfssvr.sys  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
