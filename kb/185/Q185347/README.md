---
layout: page
title: "Q185347: SMS: PCM Error: Unable to Connect to &#92;&#92;Server&#92;Share(s)"
permalink: kb/185/Q185347/
---

## Q185347: SMS: PCM Error: Unable to Connect to &#92;&#92;Server&#92;Share(s)

	Article: Q185347
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	This error can also be caused by other conditions. For more information, refer
	to the following articles in the Microsoft Knowledge Base::
	
	  Q150727 PCM Error: Unable to Connect. <errcode> -\\Server\Share
	
	  Q156402 SMS: PCM Looks in Wrong Path for Default Distribution Server
	
	  Q128456 PCM and PGC Fail to Execute Package from Servers with Long Name
	
	SYMPTOMS
	========
	
	If the Systems Management Server client computer does not have an available
	drive to map a network connection, Package Command Manager (PCM) generates the
	following error message in its log file, Pcmwin.log, when attempting to connect
	to its distribution server:
	
	  Unable to connect to \\server\share(s)
	  '\\<ServerName>\SMS_PKG(x)\Package ID
	  '\\<ServerName>\SMS_PKG(x)\Package ID
	  '\\<ServerName>\SMS_PKG(x)\Package ID'.
	  This could be caused by a variety of conditions.
	  Ensure Windows networking drivers are loaded.
	  The Microsoft Network client does not have Windows drivers.
	
	WORKAROUND
	==========
	
	To work around this problem, disconnect some network drives and send the package
	again.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
