---
layout: page
title: "Q156432: Windows NT 4.0 Policy Restriction Error at Logon"
permalink: /kb/156/Q156432/
---

## Q156432: Windows NT 4.0 Policy Restriction Error at Logon

	Article: Q156432
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows NT version 4.0 allows administrators to create system policies
	that determine what programs users can run. In System Policy editor, an
	administrator can create a user policy, then create a list of allowable
	executables under User\System\Restrictions\Run only allowed Windows applications
	on the Properties screen. After creating this user policy, however, the affected
	user may receive the following error immediately after logging on:
	
	  This operation has been canceled due to restrictions in effect on this
	  computer.
	
	If the user continues past this error message, the Desktop will appear, but the
	arrow that normally appears, pointing to the Start button with the message
	"Click here to start," will not appear. Otherwise, the executables allowed in
	the system policy will run without error.
	
	CAUSE
	=====
	
	After you log on, a program called Systray.exe is run. This program creates the
	startup arrow and controls the message icons on the taskbar.
	
	If Internet Explorer 4.0 is installed, the computer runs another program called
	Loadwc.exe. For a description of Loadwc.exe, see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q176960
	  TITLE : Description of the Loadwc.exe File in Internet Explorer
	
	RESOLUTION
	==========
	
	Add Systray.exe to the list of allowable executables in the System Policy.
	
	If Internet Explorer 4.0 is been installed, Loadwc.exe also needs to be added to
	the list of allowable executables in the System Policy.
	
	
	NOTE:You may also need to add mstinit.exe to the list of allowable executables in
	the System Policy. Mstinit.exe is part of Internet Explorer 5.5.
	
	You may also want to use Regedit.exe or regedt32.exe and look at the following
	registry key for other applicaions that load during startup:
	HKLM\Software\Microsoft\Windows\CurrentVersion\Run
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
