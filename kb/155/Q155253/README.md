---
layout: page
title: "Q155253: Improper NTFS Permissions May Result in IIS Failure"
permalink: /kb/155/Q155253/
---

## Q155253: Improper NTFS Permissions May Result in IIS Failure

{% raw %}

	Article: Q155253
	Product(s): Internet Information Server
	Version(s): 1.0 2.0 3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Improper modification of Microsoft Windows NT file system (NTFS) permissions may
	create an environment where browser clients fail when attempting to access the
	Microsoft Internet Information Server (IIS) publication services.
	
	MORE INFORMATION
	================
	
	Microsoft Windows NT version 4.0 installs on a new NTFS partition with change
	permission for the group Everyone. Improper NTFS access permissions involving
	other Windows NT accounts such as System, Network, Interactive, and
	IUSR_ComputerName may affect the operation of IIS. Most of these improperly
	defined permissions result in a browser client receiving an HTTP response of 401
	Access Denied.
	
	As an example, consider an IIS server that has been configured with only Allow
	Anonymous access in the in WWW Services tab of the Internet Service Manager. The
	web master has set the following permissions on his or her NTFS WWW publication
	directory wwwroot of:
	
	  CREATOR OWNER                 Full Control
	  ComputerName\Administrators   Full Control
	  IUSR_ComputerName             Full Control
	  Everyone                      No Access
	  System                        Full Control
	
	The web master calls Microsoft Product Support, describing an issue in which no
	one can access his or her IIS server from a WWW client browser. A sniffer trace
	shows that all of the client browsers receive a 401 Access Denied error message
	in the HTTP response.
	
	The problem is the NTFS permissions. The Web master has allowed the IIS anonymous
	user account IUSR_ComputerName full access, but the web master has also
	explicitly denied the group Everyone. The IUSR_ComputerName account belongs to
	the group Everyone. An explicit deny always takes precedence over an allow,
	therefore no browser client can access the IIS server.
	
	Before contacting Microsoft Product Support Services, customers are encouraged to
	check the NTFS permissions to verify that any modified access permission is not
	the cause of improper IIS functionality.
	
	For more information on issues related to NTFS permission, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q109076 : Removing Permissions to an NTFS Partition May Prevent Startup
	
	  Q130016 : Removing Everyone On Root Dir. Leaves Limited Virtual Memory
	
	  Q137155 : Users Without System32 Permissions Cannot Log On
	
	  Q137400 : Changing Default Permissions Causes STOP 0xC000021A
	
	  Q138923 : Partitions Displaying as Unknown in Disk Administrator
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis300 kbiis200 kbiis100
	Version           : 1.0 2.0 3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
