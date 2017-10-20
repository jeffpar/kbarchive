---
layout: page
title: "Q195196: New MSMQ Registry Values with Windows NT 4.0 Service Pack 4"
permalink: /kb/195/Q195196/
---

## Q195196: New MSMQ Registry Values with Windows NT 4.0 Service Pack 4

{% raw %}

	Article: Q195196
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	This article describes two new registry values that are available after you
	install Windows NT 4.0 Service Pack 4. You can use these entries to configure
	and use the Microsoft Message Queue Server (MSMQ).
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	The new values are located in the following registry key:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\MSMQ\Parameters
	
	DeferredInit
	------------
	
	Value type: DWORD
	Valid data values: 0 or 1
	Default data value: 0
	
	You can use this value to prevent the MSMQ service from contacting the Message
	Queue Information Store (MQIS) database at startup (to prevent the Remote Access
	Autodial Manager service from dialing, for example). To activate this feature,
	this value must contain a data value of 1. You should use this value only if the
	initial MQIS access causes unwanted dial-up activity, because this setting can
	delay programs calling the MQOpenQueue service in offline situations.
	
	WaitTime
	--------
	
	Value type: REG_DWORD
	Value data values: 0x0 to 0xFFFFFFFF seconds
	Default data value: 0x3C seconds (60 seconds, decimal)
	
	This value determines the frequency with which the sending Queue Manager service
	can access the Directory Service service or perform name resolution as part of
	delivering outgoing messages. Use this value in environments in which TCP/IP or
	IPX machine addresses are changed often. Modifying this value may also be useful
	with messages submitted offline using a name format requiring access to the
	Directory Service service (Public or Private formats) or to perform name
	resolution (Direct format with a Universal Naming Convention or a Domain Name
	System computer name).
	
	Reducing this value minimizes the time it takes MSMQ to send messages once an
	MSMQ server reconnects to the network. However, setting a smaller data value may
	cause a sending Queue Manager service to spend unnecessary time attempting to
	access the Directory Service service or performing name resolution. Note that
	this value does not appear in the registry unless you manually add it or use a
	program to change the default value.
	
	Additional query words: unc dns
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
