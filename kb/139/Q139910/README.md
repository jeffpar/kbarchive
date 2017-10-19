---
layout: page
title: "Q139910: Error 6118: &quot;The List of Servers for This Workgroup...&quot;"
permalink: /kb/139/Q139910/
---

## Q139910: Error 6118: &quot;The List of Servers for This Workgroup...&quot;

	Article: Q139910
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.0,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue a NET VIEW command from the MS-DOS prompt, the following error
	message appears:
	
	  Error 6118: The list of servers for this workgroup is not currently
	  available.
	
	If you try to browse in Windows 3.1 File Manager or Print Manager, no browse list
	is available.
	
	CAUSE
	=====
	
	Your workgroup name is different than your domain name.
	
	The NET VIEW command sends out a Status Query (0x03) to the client computer's
	workgroup name. Even if your client computer is not a member of a workgroup, the
	workgroup name is queried. If your client computer is a member of a domain, the
	domain name is queried. If your workgroup name is different than your domain
	name, the browse master never responds and the 6118 error appears.
	
	RESOLUTION
	==========
	
	Edit the SYSTEM.INI file in the network directory (usually C:\NET), do NOT edit
	the Windows SYSTEM.INI file (usually in the C:\WINDOWS directory).
	
	In the [network] section you will find entries for "workgroup=" and
	"logondomain=." These entries should be the same, both using the domain name.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbWFWSearch kbNetworkClientSearch kbWFW311DOS kbNetworkClient300DOS
	Version           : :3.0,3.11
	
	=============================================================================
	
