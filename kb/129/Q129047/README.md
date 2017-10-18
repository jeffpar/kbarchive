---
layout: page
title: "Q129047: Synchronizing DNS Information in Registry with Boot Files"
permalink: kb/129/Q129047/
---

## Q129047: Synchronizing DNS Information in Registry with Boot Files

	Article: Q129047
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbtool kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry. 
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring 
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help 
	topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Windows NT 4.0 imports Domain Name Service (DNS) information from boot files
	into the registry when data is modified using DNS Manager. However, after it is
	there, the information is maintained and updated only in the registry. If data
	is changed using DNS Manager, the information is not written back to the
	original boot file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Microsoft has designed a hotfix for the DNS service that causes it to
	automatically write back to boot files any changes in the registry that affect
	information stored in boot files (such as new zones, change files, change zone
	types, change master, change forwarders, and so on).
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys and
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT or Windows 2000, you should also update your
	Emergency Repair Disk (ERD).
	
	If you want to enable Windows NT to store and track DNS information in boot
	files, apply the above hotfix and use Registry Editor to delete the value
	EnableRegistryBoot from following key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	You can now replace your desired boot file in the %SystemRoot%\System32\Dns
	folder. During startup, the DNS service now reads from the boot file first,
	overriding any settings in the registry. After the boot file has been processed,
	secondary information not found in the boot file is loaded from the registry
	(secondary security, notify lists, forwarding timeouts, listen IP list, and so
	on).
	
	  WARNING: Initially, when you configure Windows NT to read and write DNS
	  settings to the boot files, any changes made in the registry through DNS
	  Manager that are not present in the boot files are lost. After making the
	  above registry change, all new changes made through DNS Manager are written
	  to the boot files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	======================================================================
	Keywords          : kbtool kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
