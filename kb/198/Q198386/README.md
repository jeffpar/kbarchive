---
layout: page
title: "Q198386: Changes in IRP Stack Size in Lanman Server"
permalink: /kb/198/Q198386/
---

## Q198386: Changes in IRP Stack Size in Lanman Server

{% raw %}

	Article: Q198386
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you access shares on a computer running Windows NT Server from a Windows NT
	client and the IRPstackSize parameter is set too low on the server, you may
	receive the following error message:
	
	  Not enough server storage is available to process this command.
	
	CAUSE
	=====
	
	Depending on the hardware configuration of a specific computer, the default
	value may not be large enough for the Srv service to properly administer shared
	directories on some of the physical drives. You may see one or both of the
	following event messages:
	
	  Event ID: 2011  Source: Srv
	  The server's configuration parameter "irpstacksize" is too small for
	  the server to use a local device.  Please increase the value of this
	  parameter.
	
	  Event ID: 0
	  Source SRV
	  Description:  Description for Event ID 0 could not be found.  It
	  contains the insertion string \device\LanManServer
	
	You may receive one of the above error message when a Windows NT client tries to
	access certain shared directories on such a server.
	
	When a Windows for Workgroups client tries to access the same shared directories,
	the following message will be generated:
	
	  Path not found.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition or the individual software
	update. For information on obtaining the latest service pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Service Pack (SP) 5 sets a minimum allowed of 7. It ignores all smaller values,
	and sets a default of 7 if none is specified.
	
	SP6 sets a minimum allowed of 7. It ignores all smaller values and sets a default
	of 11 if none is specified.
	
	
	WORKAROUND
	==========
	
	To work around this problem, modify the registry by using the following
	information.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The registry value IRPstackSize, which may be listed at
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer
	  \Parameters
	
	defaults to 0x4 if the value is not explicitly present. Valid values range from
	0x1 to 0xC (1 to 12).
	
	To increase the value of the parameter when it is not already present, go to the
	key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \LanmanServer\Parameters
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	For the IRPStackSize change to take effect, the Server has to be rebooted.
	
	The value of IRPStackSize defaults to 0x4 if it is not explicitly present. If the
	key is not present, click Add Value in Registry Editor. The Value Name should be
	IRPStackSize and the Data Type is REG_DWORD.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
