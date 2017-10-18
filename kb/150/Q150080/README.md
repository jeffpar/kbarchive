---
layout: page
title: "Q150080: Win2w95.exe Run from &#92;MSTEST Directory"
permalink: kb/150/Q150080/
---

## Q150080: Win2w95.exe Run from &#92;MSTEST Directory

	Article: Q150080
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbPCM smshowto smspcm
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the upgrade from Windows for Workgroups to Windows 95 in Package
	Command Manager, you may, if the client is unable to access the specified logon
	server, receive the following error:
	
	  Could not load file from logon server
	  \\LOGONSERVER\SMS_SHR\X86.BIN\409\_OSW16RC.DLL
	
	CAUSE
	=====
	
	When executed from the Logon.srv\MSTEST directory, Win2w95.exe loads the
	Resource.dll from the same logon server from which it was run. If Win2w95.exe
	was run from the package directory on the distribution server, it searches
	Sms.ini for a logon server from which it can load the Resource.dll. If it
	chooses a logon server that is inaccessible to the client (for example, because
	the server is down or the server is across a router and the client is using a
	protocol like NetBEUI that does not cross the router), the client may receive
	the error quoted above.
	
	RESOLUTION
	==========
	
	Create a new package without including Win2w95.exe in the package.
	Logon.srv\MSTEST already contains Win2w95.exe. Win2w95.eXE will run from the
	default logon server for the client. This eliminates the possibility of not
	being able to access the .dll for the client.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbusage kbPCM smshowto smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
