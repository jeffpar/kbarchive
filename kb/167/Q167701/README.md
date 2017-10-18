---
layout: page
title: "Q167701: Unattended Setup of WinNT Server 4.0 Network Monitor and Agent"
permalink: kb/167/Q167701/
---

## Q167701: Unattended Setup of WinNT Server 4.0 Network Monitor and Agent

	Article: Q167701
	Product(s): Microsoft Windows NT
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Greetings 2001 
	- Microsoft Greetings 2002, version 1.0 
	- Microsoft Picture It! Express 2002, version 1.0 
	- Microsoft Picture It! Photo 2002, version 1.0 
	- Microsoft Picture It! Photo Premium 2002, version 1.0, version 1.0 
	- Microsoft Picture It! Publishing 2002, Gold, version 1.0, version 1.0 
	- Microsoft Picture It! Publishing Platinum 2002, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the Microsoft Windows NT 4.0 "Deployment Guide" provides the option
	to only install the Network Monitor Agent for Microsoft Windows NT Server
	version 4.0 and Microsoft Windows NT Workstation version 4.0. Windows NT Server
	provides the Network Monitoring software. In order to install the agent and the
	monitoring software, a different option name is used in the Unattended answer
	file.
	
	MORE INFORMATION
	================
	
	To install the Network Monitor Agent and Tools on Windows NT Server 4.0, only
	the NETMONTOOLS is used instead of NETMON in the service section of the
	Unattended answer file.
	
	The following example shows how to install the Network Monitor Agent for Windows
	NT Server and Workstation.
	
	[NETWORK]
	InstallServices = SelectedServices
	
	[SelectedServices]
	NETMON = NETMONParams
	
	[NETMONParams]
	
	The following example shows how to install the Network Monitor Agent and tools on
	Windows NT 4.0 Server only.
	
	[NETWORK]
	InstallServices = SelectedServices
	
	[SelectedServices]
	NETMONTOOLS = NETMONParams
	
	[NETMONParams]
	
	On Windows NT Server 4.0 the option name NETMONTOOLS is used instead of NETMON to
	install the agent and the tools.
	
	Note that in both examples the section [NETMONParams] must be included even
	though there are no additional parameters required. If the section is missing
	the component will not be installed.
	
	For additional information on Windows NT 4.0 deployment/unattended installation,
	please consult the Microsoft Knowledge Base at:
	
	  http://www.microsoft.com/kb and download the Windows NT 4.0 Deployment Guide
	  from http://www.microsoft.com/ntworkstation.
	
	NOTE: The Deployment Guide is valid for both Windows NT Workstation and Windows
	NT Server.
	
	Additional query words: prodnt Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbHomeProdSearch _IKkbbogus kbPictureItSearch kbZNotKeyword3 kbGreetings2002 kbPictureItPhoto2002 kbPictureItPremium2002 kbPictureItPublishing2002 kbPictureItExpress2002
	Version           : :1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
