---
layout: page
title: "Q130417: Using SMS Remote Control and RAS to Control a WFW Client"
permalink: /kb/130/Q130417/
---

## Q130417: Using SMS Remote Control and RAS to Control a WFW Client

	Article: Q130417
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the SMS Remote Control functions and Remote
	Access Service (RAS) to control a Windows for Workgroups client.
	
	NOTE: The Windows for Workgroups client must not have the network card software
	loaded. If it does, Systems Management Server records the NIC in the database
	and tries to make the connections that way. Systems Management Server must see
	the remote client as a RAS connection.
	
	To setup Remote Control for a successful connection:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. From the Windows for Workgroups client:
	
	  a. Reconfigure the Windows for Workgroups client network setup so that RAS is
	     the only network adapter, and NetBEUI is the default protocol.
	
	  b. Delete the existing SMS.INI file and the existing MS\SMS directory tree.
	
	  c. Remove the SMSRUN16.EXE from the LOAD= line in the [windows] section of
	     the WIN.INI file.
	
	  d. Reboot the Windows for Workgroups client. Do not log on to the Systems
	     Management Server server yet.
	
	2. From the Systems Management Server server:
	
	  a. Delete the existing client from the Systems Management Server database.
	
	  b. Run Registry Editor and add some new LANAs and increase their timeouts:
	
	        HKEY_LOCAL_MACHINE\SOFTWARE
	          \Microsoft\SMS\Components\SightNT\Lana
	        HKEY_LOCAL_MACHINE\SOFTWARE
	          \Microsoft\SMS\Components\SightNT\TimeOut
	
	  c. Delete the Machine name if it is present.
	
	  d. Make sure that an NdisWAN driver is the first protocol for the RAS server.
	     To do this, run Control Panel, choose Network, select NetBIOS Interface,
	     and then choose Configure.
	
	  e. If any changes were made, re-boot the server.
	
	Additional query words: prodsms sms wfw wfwg time-outs
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
