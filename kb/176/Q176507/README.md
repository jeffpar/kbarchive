---
layout: page
title: "Q176507: Unattended Installation of MSCS Service"
permalink: kb/176/Q176507/
---

## Q176507: Unattended Installation of MSCS Service

	Article: Q176507
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Enterprise Server comes with a variety of installable components.
	Each additional component is normally installed through the Microsoft Windows NT
	Server, Enterprise Edition Installer application.
	
	The following parameters can be passed to the Setup.exe file for Microsoft
	Cluster Server (MSCS) to achieve a silent or unattended installation of the MSCS
	product. MSCS is located on CD Disc 2 of the Windows NT 4.0 Enterprise Edition
	in the directory MSCS.
	
	  -uninstall
	   Removes cluster software.
	
	  -u
	   Unattended installation of MSCS.
	
	  -join CLUSTERNAME
	   Join an existing cluster.
	
	  -name CLUSTERNAME
	   Form a new cluster.
	
	  -ipaddr xxx.xxx.xxx.xxx
	   Set cluster IP Address (for Administrative use).
	
	  -subnet xxx.xxx.xxx.xxx
	   Subnet mask based on IP address used with -ipaddr.
	
	  -account ACCOUNTNAME
	   Specifies the account used to start the cluster service.
	
	  -password PASSWORD
	   Set password for the account specified with -account.
	
	  -domain DOMAINNAME
	     Domain name that owns the account specified by -account.
	
	  -excludedrive X:
	   Exclude Specified drive letter from cluster use.
	
	  -quorum X:
	  Set quorum disk to specified drive on the shared SCSI bus.
	
	  -network AdapterName NetName Role
	
	Repeat for each adapter installed in the computer.
	
	AdapterName - The ServiceName assigned to the adapter in the registry. The
	ServiceName can be located in
	
	HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\NetworkCards<x>
	
	- NetName - Specifies name that indicates the purpose of the network (private,
	  client, and so forth)
	
	- Role - 0-All, 1-Internal, 2-Client
	
	NOTE: MSCS requires that Windows NT Server Enterprise Edition version 4.0 and
	Windows NT 4.0 Service Pack 3 be installed prior to the installation of MSCS.
	
	MORE INFORMATION
	================
	
	The entire command line is contiguous and all parameters must be specified. The
	parameters -name and -join are mutually exclusive and -excludedrive is
	optional.
	
	  setup.exe -u -name <Cluster_Name> -ipaddr <xxx.xxx.xxx.xxx>
	  -subnet xxx.xxx.xxx.xxx -account <Account_Name> -password <Password>
	  -domain <Domain_Name> -excludedrive <x:> -quorum <x:>
	  -network <Adapter_Name> <Network_Name> <Role>
	
	The following example may be copied to a batch file and the required information
	modified to fit the particular environment being used.
	
	For example:
	
	  setup.exe -u -name NEWCLUSTER -ipaddr 175.3.2.1 -subnet 255.255.255.0
	  -account installer -password password -domain CLUSDOMAIN
	  excludedrive E: -quorum D: -network E100B1 PUBLICNET 0
	
	The example above will create a new cluster called NEWCLUSTER and sets the
	administrative IP address to 175.3.2.1 with a subnet of 255.255.255.0. The
	account that will start the MSCS service is INSTALLER and the password for the
	account is PASSWORD. The account INSTALLER belongs to the domain CLUSDOMAIN.
	There are two drive letters available to the Cluster Server, drives D: and E:.
	Drive E: has been excluded and D: is going to be used for the Quorum drive. The
	Network option uses the ServiceName for the Intel 10/100B adapter which, in this
	example, is E100B1. The Name for the network used by the Intel adapter is
	PUBLICNET and the role of the adapter is for both public and private
	communications.
	
	Microsoft Windows NT Server Enterprise Edition version 4.0 may be deployed using
	normal deployment/unattended methods outlined in the Windows NT 4.0 Deployment
	Guide.
	
	REFERENCES
	==========
	
	The following are suggested additional references on this topic:
	
	- Windows NT 4.0 Deployment Guide - http://www.microsoft.com/ntworkstation
	
	- Microsoft Knowledge Base article:
	
	  ARTICLE-ID: Q168814
	  TITLE : Installing WinNT 4.0 Service Packs During Unattended Install
	
	- Zero Administration Kit(ZAK): ZAK provides additional examples and concepts
	  that can be incorporated into the installation. Information about ZAK can be
	  found at:
	
	  http://www.microsoft.com/windows/zak/
	
	- More information about Microsoft Windows NT Server Enterprise Edition version
	  4.0 may be obtained from the following Microsoft Web site:
	
	To perform an unattend installation for a Windows 2000 Cluster using an
	Uttend.txt file, please consult the Windows 2000 Deployment Guide located on the
	Windows 2000 CD-ROM in the following location:
	%CDROM%\SUPPORT\TOOLS\DEPLOY.CAB\Unattend.doc
	
	Additional query words: MSCS UNATTEND UNATTENDED DEPLOYMENT AUTOMATED
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
