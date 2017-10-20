---
layout: page
title: "Q229032: XADM:How to Install Exchange Server w/Circular Logging Disabled"
permalink: /kb/229/Q229032/
---

## Q229032: XADM:How to Install Exchange Server w/Circular Logging Disabled

{% raw %}

	Article: Q229032
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Microsoft Exchange Server versions 4.0, 5.0, and 5.5 are all
	installed with the Circular Logging feature enabled. However, you may wish to
	disable Circular Logging before installation.
	
	This means that after installation has completed, Circular Logging is already
	disabled, providing you with a complete set of Exchange Server transaction log
	files since the initial installation of Exchange Server.
	
	For more information regarding Exchange Server transaction log files, and
	Circular Logging, please refer to the following article in the Microsoft
	Knowledge Base:
	
	  Q147524 XADM: How Circular Logging Affects the Use of Transaction Logs
	
	MORE INFORMATION
	================
	
	1. From your Exchange Server CD-ROM, copy the following directory (including all
	  files and subdirectories) to a local directory on your server's hard drive:
	
	  <CD-ROM drive>:\SERVER\SETUP\<platform>
	
	2. Remove the "Read-only" attribute from this newly-copied directory (including
	  all files and subdirectories) on your server's hard drive.
	
	  <Server's hard drive>:\SERVER\SETUP\<platform>
	
	3. Open the Server.ins file with a text-editor capable of displaying line
	  numbers (for example, Visual C++, Visual Basic, and so on)
	
	4. Based upon the version of Exchange Server you are installing, modify the
	  Server.ins file as described below:
	
	Exchange Server 5.5
	-------------------
	
	  a. On line 359 of Server.ins, change the following line from:
	
	  SetDword:Circular Logging;0x01
	
	  -to-
	
	  SetDword:Circular Logging;0x00
	
	  b. On line 494 of Server.ins, change the following line from:
	
	  SetDword:Circular Logging;0x01
	
	  -to-
	
	  SetDword:Circular Logging;0x00
	
	Exchange Server 5.0
	-------------------
	
	  a. On line 330 of Server.ins, change the following line from:
	
	  SetDword:Circular Logging;0x01
	
	  -to-
	
	  SetDword:Circular Logging;0x00
	
	  b. On line 464 of Server.ins, change the following line from:
	
	  SetDword:Circular Logging;0x01
	
	  -to-
	
	  SetDword:Circular Logging;0x00
	
	Exchange Server 4.0
	-------------------
	
	  a. On line 229 of Server.ins, change the following line from:
	
	  SetDword:Circular Logging;0x01
	
	  -to-
	
	  SetDword:Circular Logging;0x00
	
	  b. On line 344 of Server.ins, change the following line from:
	
	  SetDword:Circular Logging;0x01
	
	  -to-
	
	  SetDword:Circular Logging;0x00
	
	5. From the directory where you copied the Exchange Server installation files,
	  run Setup.exe to install Exchange Server.
	
	Additional query words: howto registry regedit regedt32 jet ese logs logfiles circ
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
