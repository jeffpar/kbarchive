---
layout: page
title: "Q163521: Event ID 5000 Starting The Shared Folders Gateway Service"
permalink: /kb/163/Q163521/
---

## Q163521: Event ID 5000 Starting The Shared Folders Gateway Service

{% raw %}

	Article: Q163521
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to start the Shared Folders Gateway (SFGW) Service fails. The Windows
	NT Server Event Viewer Application log shows an Event ID 5000 with the following
	description:
	
	  Load IFS Driver failed with error 1314, A required privilege is not
	  held by the client.
	
	  EXPLANATION
	  The Shared Folders Gateway service failed to load the Shared Folders
	  Installable File System driver SFFSD.SYS.
	
	  ACTION
	  Report this error to SnaServer Support.
	
	
	CAUSE
	=====
	
	The user account under which the SFGW service is running requires the user right
	Load and Unload Device Drivers. By default the local Administrators group and
	local system account have this right. The SNA Server Setup program, when
	creating the user account to be used by the SNA services, adds this user to the
	global Domain Admins group, which by default is part of the Administrators
	group.
	
	RESOLUTION
	==========
	
	In the Windows NT Server User Manager for Domains, under the Policies menu
	select User Rights. The Show Advanced User Rights option must be checked to see
	the Load and Unload Device Drivers user right. Verify that the user account used
	by the SNA Services or a group it is a member of is listed here.
	
	Additional query words: AS/400
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,4.0
	
	=============================================================================
	

{% endraw %}
