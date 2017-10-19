---
layout: page
title: "Q201793: SMS: Version 2.0 Remote Control Command Line Options"
permalink: /kb/201/Q201793/
---

## Q201793: SMS: Version 2.0 Remote Control Command Line Options

	Article: Q201793
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): _IK964 kbsms200 smsremtshoot kbRemoteProg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Systems Management Server version 2.0, you can start a remote control session
	through command line options similar to those you used in Systems Management
	Server version 1.2.
	
	  remote.exe: \sms\bin\i386\ directory
	  remote.exe <address-type ><name> [/SMS:Server=Site Server Name]
	
	where <address-type> is as follows:
	
	  
	  +-----------------+
	  | Value | Equals  | 
	  +-----------------+
	  | 1     | Novell  | 
	  +-----------------+
	  | 2     | TCP/IP  | 
	  +-----------------+
	  | 3     | NetBIOS | 
	  +-----------------+
	
	For example
	
	  Remote.exe 2 SMSCLIENT Remote.exe 0 <Resource-ID> [/SMS:Server=Site
	  Server Name]
	
	where Resource-ID is the SMS database unique ID (not the GUID) pointing to the
	resource.
	
	If you run Remote.exe with no arguments, it displays a dialog box in which you
	can type the name or address to use.
	
	An important caveat to all this is, the application still accesses the SMS
	database and checks that the name and address you entered are of a known
	resource. It also checks that the collection (or collections) to which the
	resource belongs allows you to remote control it. (The program bases the
	decision on the security permissions set on that collection.) You cannot use
	Remote.exe to run remote control entirely independently without System
	Management Server.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : _IK964 kbsms200 smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
