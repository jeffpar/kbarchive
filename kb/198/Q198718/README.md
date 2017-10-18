---
layout: page
title: "Q198718: SMS: Client-Side WUSER Logging for Remote Tools"
permalink: kb/198/Q198718/
---

## Q198718: SMS: Client-Side WUSER Logging for Remote Tools

	Article: Q198718
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Information on the client's remote control session can be viewed in Remctrl.log.
	There is an additional ability to log all WUSER transaction information on the
	client for remote transactions. This is called WUSER Logging.
	
	WUSER logging is not turned on by default. This can be activated by a registry
	or, in the case of 16-bit clients, an .ini file modification only.
	
	NOTE: Once started, logging continues until the process is reversed and it is
	turned off. Consequently, this will degrade the performance of the client-side
	agent.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	For true 32-bit clients, such as Windows NT using WUSER32 and Windows
	95/98/Millennium Edition (Me) clients using WUSER32, find the registry key to
	easily update the registry and create a text file on the desktop with any name
	and a .reg extension. Enter the lines of text exactly as they appear below and
	include a blank line at the bottom of the file. Save the file and then
	double-click the file to merge the entries into the registry. To verify the
	values have been entered correctly into the registry, click Start, click Run,
	and then type "REGEDIT" (without the quotation marks):
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Client\Client Components\Remote
	  Control
	
	Make a new Reg_SZ:EnableRemoteConnect with a value of 'NO'.
	
	In this same key make another value:
	
	  Reg_DWORD:LogToFile with a value of 0x1
	
	Here the value of LogToFile should be formatted as REG_DWORD and set to 1. If the
	key or value does not exist, create it. In the instance of LogToFile, case and
	spacing are crucial. To verify the changes have taken effect, search for
	Wuser32.log.
	
	In the instance of 16-bit clients using WUSER, an entry of "LogToFile=1" will
	have to be added to Smsrc16.ini, under [Client Components - Remote Control].
	Stop, then restart WUSER, and search for the Wuser.log to verify. However, it is
	important to note that that the next time Client Services performs a full
	maintenance cycle, the addition to the .ini file of the 16-bit clients will be
	purged. To prevent this, ensure that SMSMAN16 is not run on this machine while
	you are logging. You can also do this by disabling logon scripts, although this
	is a less attractive alternative.
	
	Very detailed information is captured during the logging of each remote session
	and it is therefore important to note that no passwords or encrypted information
	is passed or logged. The customer should also be aware that the information
	provided in the Wuser32.log or the Wuser.log is used specifically for the
	troubleshooting of connection level and transaction problems.
	
	The logs overwrite themselves with each stop and start cycle of WUSER32 or WUSER,
	so if information from the log is required to be kept for troubleshooting, the
	log must be copied and renamed to preserve the data. The registry entries for
	the true 32-bit clients are dynamic; therefore, there is no need to stop and
	restart WUSER32 for the changes to take effect. However, changes to the registry
	in the Windows 95\98 client are static, and stopping and restarting the agent is
	required for the changes to take effect.
	
	Additional query words: prodsms rc32
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
