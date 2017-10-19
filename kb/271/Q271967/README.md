---
layout: page
title: "Q271967: Select Active Directory Containers to Discover Box Unavailable"
permalink: /kb/271/Q271967/
---

## Q271967: Select Active Directory Containers to Discover Box Unavailable

	Article: Q271967
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click any of the following buttons when you configure the Active
	Directory Management Agent on the Active Directory Discovery Settings tab under
	Active Directory Container, the ellipsis button may be missing, and the "Select
	Active Directory Containers to Discover" box may be unavailable:
	
	- Active Directory Containers to Discover
	
	- Active Directory Containers to Exclude
	
	- Active Directory Objects to Discover
	
	CAUSE
	=====
	
	This issue can occur if you are running a version of Microsoft Metadirectory
	Services (MMS) Compass that is earlier than version 2.2.
	
	RESOLUTION
	==========
	
	To resolve this issue, uninstall the version of MMS Compass that is earlier than
	version 2.2, and then install MMS Compass client version 2.2 (build 0630.1123).
	To determine which version of the MMS Compass client you are running:
	
	1. Log on to the MMS server with the Compass client.
	
	2. On the Help menu, click About MMS Compass. Note that if you see About Zoomit
	  Compass instead of About MMS Compass, you are using the wrong version. Note
	  the version and build number for the Compass client.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
