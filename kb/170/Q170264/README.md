---
layout: page
title: "Q170264: Office 97 Programs Do Not Expand Environment Variables"
permalink: /kb/170/Q170264/
---

## Q170264: Office 97 Programs Do Not Expand Environment Variables

{% raw %}

	Article: Q170264
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 27-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The paths used in Microsoft Office 97 policy templates (except the Personal
	folder) do not accept environment variables. For example, setting the user
	template folder in Policy Editor to the following path
	
	  \\<servername>\<sharename>\%username%
	
	generates the following error message when you start an Office 97 program:
	
	  The User Templates folder "\\servername\sharename\%username%" was not found.
	  Do you want to create this folder?
	
	CAUSE
	=====
	
	When they read paths from the registry, Office 97 programs do not expand
	environment variables (such as %USERPROFILE% or %USERNAME%).
	
	RESOLUTION
	==========
	
	Use fully qualified path names similar to one of the following:
	
	- C:\Program Files\Microsoft Office\Templates
	
	- \\<servername>\<sharename>\templates
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00 %userprofile% %username% variable
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : WINDOWS:
	
	=============================================================================
	

{% endraw %}
