---
layout: page
title: "Q156699: Limitations of &quot;Run Only Allowed Windows Application&quot;"
permalink: /kb/156/Q156699/
---

## Q156699: Limitations of &quot;Run Only Allowed Windows Application&quot;

{% raw %}

	Article: Q156699
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT 4.0 System Policy Editor allows administrators to determine what
	applications can be run on computers running Windows NT 4.0 by using the "Run
	only allowed Windows applications" option.
	
	MORE INFORMATION
	================
	
	The "Run only allowed Windows applications" entry under the System Restrictions
	book of System Policy Editor can be assigned to specific users and groups, or to
	default users.
	
	Enabling this option limits what applications can be run on computers running
	Windows NT 4.0, if the applications are called through the shell name space.
	
	When a user attempts to run an application not specified in System Policy Editor,
	the following error message is displayed:
	
	  Restrictions: This operation has been canceled due to restrictions in effect
	  on this computer. Please contact your system administrator.
	
	Microsoft Office applications, including Office 95, include the utilities
	Msinfo.exe and Msinfo32.exe. These applications bypass the shell name space and,
	because of this, they are not monitored or restricted by the System Policy. This
	allows users to run applications even if they are not listed in the System
	Policy's "Allowed to run" list. Administrators may choose to customize
	installations so these utilities are not installed.
	
	Another consideration for System Policies is the use of reference accounts. A
	reference account is a special user created specifically as the logon account
	for the administrator who will be setting System Policies. Logging on as an
	administrator named POLICY and setting policies under this account will help
	prevent a situation in which even administrators cannot run server tools. It is
	easy, by using the "Allowed to run" policy, to restrict even the administrator
	account from running administration tools. Because of this it is better not to
	manage System Policies while logged on as Administrator.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
