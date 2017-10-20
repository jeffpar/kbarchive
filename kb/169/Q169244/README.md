---
layout: page
title: "Q169244: Autodial Fails to Dial Automatically"
permalink: /kb/169/Q169244/
---

## Q169244: Autodial Fails to Dial Automatically

{% raw %}

	Article: Q169244
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a network resource that is not accessible, Windows NT
	Remote Access Service (RAS) does not attempt to Autodial.
	
	For example, if you start Internet Explorer with the Start Page set to an
	Internet Web site when you are not connected to the Internet, Autodial fails to
	dial.
	
	CAUSE
	=====
	
	There are several causes or scenarios where Autodial may fail. The causes and
	resolutions are discussed below:
	
	Multiple Shells
	---------------
	
	If your computer has multiple programs defined for the Shell value under the
	HKEY_Local_Machine\Software\Microsoft\Windows NT\ CurrentVersion\Winlogon
	registry key.
	
	Roaming Profiles
	----------------
	
	If you log on to your Windows NT computer with a user account that uses roaming
	profiles, then Autodial may not work if you do not Shut Down the computer
	between log on sessions.
	
	PPTP
	----
	
	If you have the Point-to-Point Tunneling Protocol installed on your Windows NT
	computer, then Autodial may not work.
	
	SLIP account
	------------
	
	If you are using a SLIP account to connect to the Internet, then the Autodial
	addresses may not get added to the registry. In this scenario, Autodial may not
	work correctly.
	
	RESOLUTION
	==========
	
	Multiple Shells
	---------------
	
	If you have multiple shells defined in the registry you will need to edit the
	registry to remove the multiple shells to get Autodial working.
	
	Roaming profiles
	----------------
	
	If you are encountering this issue due to multiple users and roaming profiles,
	then you will need to shut down the computer before logging on as a new user.
	
	PPTP
	----
	
	To resolve this issue if you have PPTP installed, you will need to upgrade your
	Windows NT computer to the latest Service Pack.
	
	SLIP Account
	------------
	
	There is no known work around for Autodial not working due to using a SLIP
	account. A PPP account is required.
	
	MORE INFORMATION
	================
	
	To verify that the automatic dialing feature is properly configured, perform the
	following steps:
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. Click More, and then click User preferences.
	
	3. In the Enable Auto-Dial By Location dialog box, select each location for
	  which you want the automatic dialing feature to operate.
	
	4. Click OK and then restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: autodial auto-dial rasautou
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
