---
layout: page
title: "Q242305: XADM: Exstrace.dll prompt during setup on Windows 2000 Server"
permalink: kb/242/Q242305/
---

## Q242305: XADM: Exstrace.dll prompt during setup on Windows 2000 Server

	Article: Q242305
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:2000; winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 13-JUN-2001
	
	This article discusses a Beta release of a Microsoft product. The 
	information in this article is provided as-is and is subject to change
	without notice.
	
	No formal product support is available from Microsoft for this Beta 
	product. For information about obtaining support for a Beta release, 
	please see the documentation included with the Beta product files, or 
	check the Web location from which you downloaded the release.
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the Microsoft Windows 2000 security is set to High and you try to install
	Microsoft Exchange Server version 5.5 on that system, you may get a notification
	from the System File Protection (SFP) that a file replacement was attempted on
	the protected system file Exstrace.dll.
	
	You may also find the following event in the system event viewer:
	
	  Event ID: 64000
	  Source: SFC
	  Description: File replacement was attempted on the protected system file
	  exstrace.dll. This file was restored to the correct Microsoft version to
	  maintain system stability.
	
	STATUS
	======
	
	The version of Exstrace.dll that ships with Windows 2000 is backwards compatible
	with Exchange Server 5.5, so this message is harmless. Windows 2000 System File
	Protection replaces the file back to the Windows 2000 version.
	
	Additional query words: emstrace.dll
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbOSWin2000 kbOSWinSearch kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:2000; winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
