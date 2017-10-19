---
layout: page
title: "Q128456: PCM and PGC Fail to Execute Package from Servers with Long Name"
permalink: /kb/128/Q128456/
---

## Q128456: PCM and PGC Fail to Execute Package from Servers with Long Name

	Article: Q128456
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPCM kbPGC smspcm smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There are two symptoms:
	
	- When you use a Windows 3.1 client to execute a package which requires
	  utilities from the MSTEST directory and the logon server has a server name
	  greater than 11 characters, the client receives the following error:
	
	  Unable to connect. <errcode> - \\server\share. 2 - <followed by the
	  actual universal naming convention (UNC) path used.>
	
	  If you execute a package that does not require UNC access to the server, the
	  symptom does not occur.
	
	- When you run the Program Group Control (PGC) that normally produces the
	  shared application group, the following error appears:
	
	  No server could be found for application
	
	These symptoms usually on computers running Windows 3.1 in a NetWare environment
	where logon servers can have names up to 47 characters in length.
	
	These symptoms do not occur on clients running Windows for Workgroups 3.11.
	
	CAUSE
	=====
	
	Windows 3.1 KRNL386.EXE does not allow UNC paths with large server names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbPCM kbPGC smspcm smspgc 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
