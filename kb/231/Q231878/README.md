---
layout: page
title: "Q231878: Location of Winsock Proxy Client Configuration Information"
permalink: /kb/231/Q231878/
---

## Q231878: Location of Winsock Proxy Client Configuration Information

	Article: Q231878
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv osr1 osr2 win95 win98 win98sekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Works for the Macintosh, versions 1.0, 2.0, 2.1, 2.5 
	- Microsoft Windows 98 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the location of Winsock Proxy (WSP) Client configuration
	information.
	
	MORE INFORMATION
	================
	
	WSP Client does not write information to the registry. WSP Client writes pointer
	information in the System.ini file in all operating systems. This information
	refers to the Mspclnt.ini file. The default locations for these files are:
	
	- <drive>:\%SystemRoot%\System.ini
	
	- <drive>:\Mspclnt\Mspclnt.ini
	
	This method is used to allow for backward compatibility.
	
	Sample System.ini Entry
	-----------------------
	
	[Microsoft Proxy Service]
	Ini File Path=C:\mspclnt\mspclnt.ini
	StfPath=C:\mspclnt\setup.stf
	Configuration Location=C:\mspclnt\ 
	
	Sample Mspclnt.ini File
	-----------------------
	
	[Internal]
	scp=9,10
	Build=2.0.400.12
	[RAPLAYER]
	RemoteBindUdpPorts=6970-7170
	LocalBindTcpPorts=7070
	[Master Config]
	Path1=\\PROXY-09\mspclnt\ 
	[Servers Ip Addresses]
	Name=PROXY
	[Servers Ipx Addresses]
	[Common]
	Port=1745
	Configuration Refresh Time (Hours)=6
	Set Browsers to use Proxy=1
	Re-check Inaccessible Server Time (Minutes)=10
	Inaccessible Servers Give Up Time (Minutes)=2
	WebProxyPort=80
	WWW-Proxy=PROXY
	Refresh Give Up Time (Minutes)=15
	LocalDomains=.dns.comp.com
	Setup=Setup.exe
	Set Browsers to use Auto Config=1
	Configuration Url=http://PROXY:80/array.dll?Get.Routing.Script
	[rvplayer]
	RemoteBindUdpPorts=6970-7170
	LocalBindTcpPorts=7070
	[services]
	Disable=1
	[spoolss]
	Disable=1
	[rpcss]
	Disable=1
	[inetinfo]
	Disable=1
	[net2fone]
	RemoteBindTcpPorts=0
	ServerBindTcpPorts=0
	[MAPISP32]
	Disable=0
	[EXCHNG32]
	Disable=0
	[kernel32]
	Disable=1
	[icq]
	RemoteBindTcpPorts=0
	RemoteBindUdpPorts=0
	ServerBindTcpPorts=0,1025-5000
	UseProxyIpForGetHostByName=1
	NameResolutionForLocalHost=P
	[wspsrv]
	Disable=1
	[outlook]
	Disable=0
	[lsass]
	Disable=1
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv osr1 osr2 win95 win98 win98se kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbHWMAC kbOSMAC kbHomeProdSearch kbWin95search kbWin98search kbWin98SEsearch kbWorksMacSearch kbZNotKeyword3 kbWin98 kbWin98SE kbWorks200Mac kbWorks100Mac
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
