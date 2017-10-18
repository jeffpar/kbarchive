---
layout: page
title: "Q175651: PRB: Unattended Setup Stops Asking for Network Confirmation"
permalink: kb/175/Q175651/
---

## Q175651: PRB: Unattended Setup Stops Asking for Network Confirmation

	Article: Q175651
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a Windows NT 4.0 unattended installation through an answer file, setup
	stops displaying the following message:
	
	  "Windows NT Setup Setup is now ready to guide you through installation of
	  Windows NT Networking. If you want to review or change any settings before
	  continuing, click Back. To begin installing Windows NT Networking, click
	  Next."
	
	After the user clicks on the Next button, the installation process continues.
	
	CAUSE
	=====
	
	This message will always appear if the machine name is not specified in the
	answer file or Uniqueness Database File (UDF), even if all networking options
	such as network cards, protocols, and services are specified.
	
	RESOLUTION
	==========
	
	Specify the machine name for the system using the following format in the answer
	file:
	
	  [UserData]
	  ComputerName = <string>
	
	-or-
	
	Use a Uniqueness Database File, which provides the ability to specify per-
	computer parameters including the ComputerName.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	Q155197 Unattended Setup Parameters for Unattend.txt File
	
	Q156876 Using UDF Files with Windows NT 4.0 Unattended Setup
	
	Additional query words: unattend Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
