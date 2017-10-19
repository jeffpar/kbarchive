---
layout: page
title: "Q170271: Description of Zero Admin Kit for Windows NT Workstation 4.0"
permalink: /kb/170/Q170271/
---

## Q170271: Description of Zero Admin Kit for Windows NT Workstation 4.0

	Article: Q170271
	Product(s): Microsoft Windows NT
	Version(s): WinNT:1.0
	Operating System(s): 
	Keyword(s): kbtoolkbfaq
	Last Modified: 21-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes the Zero Administration Kit (ZAK) for Windows NT
	Workstation 4.0.
	
	MORE INFORMATION
	================
	
	The Zero Administration Kit (ZAK) for Windows NT Workstation 4.0 is a set of
	tools, methodologies, and guidelines designed to help corporate administrators
	install and configure Windows NT Workstation-based computers that are centrally
	administered. By using ZAK, a corporation can reduce end-user operations costs.
	These costs include time wasted due to self-induced system problems and
	unproductive activities. Examples of behaviors that can result in wasted time
	include:
	
	- Unintentionally deleting necessary system files from a hard disk.
	
	- Modifying Control Panel or registry settings incorrectly.
	
	- Introducing incompatible components or viruses by installing new software.
	
	- Changing system settings like colors, backgrounds, and desktop arrangement.
	
	- Installing and using unapproved software, such as games.
	
	Using the ZAK, an administrator can prevent these types of actions and increase
	the manageability of Windows NT Workstation systems by centralizing
	functionality. ZAK tools and methodologies are intended for use by experienced
	system administrators. An administrator can customize ZAK to meet the specific
	computing needs of a corporation.
	
	ZAK takes advantage of the security and reliability of the Windows NT File System
	(NTFS) and the power and flexibility of system policies and user profiles. These
	tools are already built into Windows NT 4.0.
	
	The ZAK Setup program provides two options for configuring a workstation:
	Taskstation mode and Appstation mode. Taskstation mode is designed for users who
	run task-specific programs or browser-based programs. A typical scenario for
	selecting Taskstation mode is a user who runs one or more form-based programs.
	The default ZAK Taskstation mode configuration allows users to run Microsoft
	Internet Explorer for Windows NT.
	
	Appstation mode is designed for users who run a well-defined set of programs. A
	typical scenario for selecting Appstation mode is a user with access to a
	limited set of well-defined programs installed on a central server. The default
	ZAK Appstation mode configuration allows users to run Microsoft Office 97
	programs and Microsoft Internet Explorer for Windows NT.
	
	Note that setting up an environment for corporate-wide deployment of Microsoft
	Windows NT and Microsoft Office is a task that requires careful thought and
	thorough planning. Although ZAK provides a method for implementing Windows NT
	Workstation and Microsoft Office 97, it should not take the place of the careful
	planning that must go into deploying these products.
	
	Requirements
	------------
	
	Minimum Network Configuration:
	
	- One computer running Windows NT Server version 4.0.
	
	- Two computers capable of running Windows NT Workstation version 4.0.
	
	- All computers must be running TCP/IP.
	
	Minimum Server Requirements:
	
	- A primary domain controller (PDC).
	
	- At least 1 GB of free hard disk space.
	
	- At least 32 MB RAM (at least 64 MB if using Microsoft Exchange).
	
	- A CD-ROM drive.
	
	- Windows NT Server version 4.0.
	
	- Windows NT File System.
	
	Minimum Workstation Requirements:
	
	- Hardware configurations should be as similar as possible.
	
	- Network adapters must be "unattend aware". (Refer to the Windows NT
	  Workstation Deployment Guide "Automating Windows NT Setup" for a list of
	  unattend-aware network adapters.)
	
	- 486 or higher processor (recommended Pentium 90 or higher).
	
	- 16 MB RAM or higher (recommended 32 MB or higher).
	
	- Clean hard disk with at least 300 MB of free space.
	
	- MS-DOS network boot disk.
	
	Other Possible Requirements:
	
	- Zero Administration Kit compact disc.
	
	- Service Pack 3 or later for Windows NT Server version 4.0.
	
	- Windows NT Workstation version 4.0.
	
	- Microsoft Office 97 (for Appstation only).
	
	- Microsoft Windows NT Workstation Deployment Guide "Automating Windows NT
	  Setup."
	
	- Windows NT Workstation 4.0 Resource Kit.
	
	- Microsoft Office 97 Resource Kit.
	
	- Microsoft Exchange Server 5.0 if you want to test the Microsoft Outlook
	  client with Exchange.
	
	REFERENCES
	==========
	
	For information about how to obtain the ZAK, see the following article in the
	Microsoft Knowledge Base:
	
	  Q170270 Availability of ZAK for Windows NT Workstation 4.0
	
	Additional information about the ZAK is available from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/windows/zak/
	
	======================================================================
	Keywords          : kbtool kbfaq
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : WinNT:1.0
	
	=============================================================================
	
