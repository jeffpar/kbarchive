---
layout: page
title: "Q129603: Using Systems Management Server Remote Control over a RAS Server"
permalink: /kb/129/Q129603/
---

## Q129603: Using Systems Management Server Remote Control over a RAS Server

	Article: Q129603
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbenv smshowto
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Systems Management Server to remotely control a client through a
	Windows NT Remote Access Service (RAS) server, this error message appears:
	
	  Unable to locate <computer name>
	
	where <computer name> is the computer name of the remote client.
	
	CAUSE
	=====
	
	Systems Management Server cannot access the remote client because the RAS
	Service is not configured to allow listens to be posted for all NetBIOS names.
	
	By default, the RAS Service will only allow NCB.LISTENs to be posted for Server
	and Messenger service NetBIOS names. These names consist of the 15 character
	NetBIOS computer name with a 16th character that is ASCII 0x00 for Server, or
	0x03 for Messenger. This allows most file and print services to operate and
	reduces the resource requirements for the RAS service.
	
	When the Systems Management Server Remote Control client software is initialized
	during startup, it posts NCB.LISTENs that have the NetBIOS computer name and the
	following values for the 16th character:
	
	  Hex    ASCII   Description
	  ----   -----   --------------------------------------
	  0x43   C       SMS Administrators Remote Control Tool
	  0x44   D       SMS Clients Remote Control
	  0x45   E       SMS Clients Remote Chat
	  0x46   F       SMS Clients Remote Transfer
	
	When the Systems Management Server Administrators Tool attempts to remotely
	control a client, it first broadcasts a NetBIOS Name Query against the client
	with the NetBIOS name formatted as described above.
	
	For the RAS Server to forward the NetBIOS Name Query to the client, it must post
	each of these NetBIOS names. Otherwise, the client cannot respond and the
	Administrators Tool fails to find the client.
	
	RESOLUTION
	==========
	
	The RAS server needs to be configured to allow all NCB.LISTENs to be posted
	before remote control will work properly.
	
	To do this, use the registry editor to modify the RAS NetBIOSGateway Parameter.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Go to the following key in the HKEY_LOCAL_MACHINE subtree:
	
	  SYSTEM\CurrentControlSet\Services\RemoteAccess\Parameters\NetBIOSGateway
	
	Change the value of RemoteListen from 1 to 2.
	
	This will enable RAS to post NCB.LISTENs for all NetBIOS names. Once this is
	done, stop and restart the RAS Services for the change to take effect.
	
	For more information, see Appendix C of the Windows NT Server "Remote Access
	Service" or Knowledge Base articles Q97599, Q99145, and Q110315.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbenv smshowto 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
