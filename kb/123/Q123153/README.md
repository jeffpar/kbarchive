---
layout: page
title: "Q123153: Error 84: There Are Too Many Network Redirections..."
permalink: /kb/123/Q123153/
---

## Q123153: Error 84: There Are Too Many Network Redirections...

{% raw %}

	Article: Q123153
	Product(s): Microsoft Disk Operating System
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the real-mode network with the basic redirector by running the
	NET USE, NET START BASIC, or NET START WORKSTATION command, you receive one of
	the following error messages:
	
	- Error 84: There are too many network redirections.
	
	  -or-
	
	- Cannot reconnect <x>: to \\<server>\<share> (Error 84)
	  where <x> is the network drive letter.
	
	CAUSE
	=====
	
	This problem occurs because the real-mode basic redirector that is packaged with
	Windows for Workgroups 3.11 and Workgroup Add-On for MS-DOS is limited to a
	maximum of ten connections (sessions) to network resources (printers and drive
	connections).
	
	The above errors can occur if you make more than ten connections in Workgroup
	Add-On for MS-DOS or Windows for Workgroups and you then quit Windows or
	Workgroup Add-On for MS-DOS and start the real-mode redirector with the NET
	START BASIC command.
	
	WORKAROUND
	==========
	
	To work around this problem, load the full redirector with the NET START FULL
	command.
	
	NOTE: Increasing the value of the SESSIONS= line in the PROTOCOL.INI file has no
	effect on the number of sessions that can be established with the basic
	redirector. The SESSIONS= entry is valid for the full redirector only.
	
	
	Additional query words: 3.11 err msg real mode redirector error 84
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : :3.11
	
	=============================================================================
	

{% endraw %}
