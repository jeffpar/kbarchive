---
layout: page
title: "Q154120: Debugging User Profiles and System Policies in Windows NT 4.0"
permalink: kb/154/Q154120/
---

## Q154120: Debugging User Profiles and System Policies in Windows NT 4.0

	Article: Q154120
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The checked version of Userenv.dll, in conjunction with a registry entry,
	creates a log file useful in troubleshooting and debugging problems with roaming
	profiles and system policies on Microsoft Windows NT version 4.0 clients.
	
	MORE INFORMATION
	================
	
	To enable the log file:
	
	1. Rename the Userenv.dll file in the %Windir%\System32 directory to Usernv.orig
	  or the unique name of your choice.
	
	2. Copy the checked version of Userenv.dll to the %Windir%\System32 directory of
	  the client computer that you want to debug. The checked version of the
	  Userenv file must match the version of the operating system being used.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Regedt32 and locate the following path:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion\Winlogon
	
	2. Create a new value called UserEnvDebugLevel as a reg_dword. Assign the value
	  10002 in hexadecimal format.
	
	3. Restart the computer with the .dll and registry changes in place.
	
	For Microsoft Windows NT Server version 4.0 and Microsoft Windows NT Server
	version 4.0 Terminal Server Edition SP4 and earlier, log information will be
	recorded in c:\userenv.log and can be viewed with Notepad, WordPad, or the text
	editor of your choice. For Microsoft Windows NT Server version 4.0 Terminal
	Server Edition SP5 and SP6, log information will be recorded in
	%systemroot%\system32\userenv.log.
	
	
	Information displayed in the log includes: Profile Path, Profile Type, System
	Policy Path (useful to determine which server the Ntconfig.pol file was pulled
	from), whether the profile was successfully loaded and unloaded at the client,
	and if the remote profile is newer than the local profile.
	
	A sample Userenv.log based on the following information is shown below.
	
	  Username = profile
	  Profile path defined in User Manager =
	     PDCServerName\Profiles\%username%
	  Domain Controller = PDCServerName
	  System Policy Path: PDCServerName\Netlogon
	
	NOTE: The response to the seventeenth line.
	
	  Profile is not reachable, error = 2
	
	A check is made for the existence of a mandatory profile path being defined in
	User Manager for Domains (Servername\Sharename\%Username%.man). Mandatory
	profiles were not used in this example, so the test fails.
	
	--------------------------------------------------------------------------
	LoadUserProfile: Entering, hToken = <0xa8>, lpProfileInfo = 0x12f4e8
	LoadUserProfile: lpProfileInfo->dwFlags = <0x2>
	LoadUserProfile: lpProfileInfo->lpUserName = <profile>
	LoadUserProfile: lpProfileInfo->lpProfilePath =
	<\\PDCServerName\profiles\profile>
	LoadUserProfile: lpProfileInfo->lpDefaultPath =
	<\\PDCServerName\netlogon\Default User>
	LoadUserProfile: lpProfileInfo->lpServerName = <\\PDCServerName>
	LoadUserProfile: lpProfileInfo->lpPolicyPath =
	<\\PDCServerName\netlogon\ntconfig.pol>
	ParseProfilePath: Entering, lpProfilePath =
	<\\PDCServerName\profiles\profile>
	ParseProfilePath: Tick Count = 60
	ParseProfilePath: FindFirstFile found something with attributes <0x10>
	ParseProfilePath: Found a directory
	LoadUserProfile: ParseProfilePath returned a directory of
	<\\PDCServerName\profiles\profile>
	RestoreUserProfile:  Entering
	RestoreUserProfile:  Profile path = <\\PDCServerName\profiles\profile>
	RestoreUserProfile:  User is a Admin
	IsCentralProfileReachable:  Entering
	IsCentralProfileReachable:  Testing
	<\\PDCServerName\profiles\profile\ntuser.man>
	IsCentralProfileReachable:  Profile is not reachable, error = 2
	IsCentralProfileReachable:  Testing
	<\\PDCServerName\profiles\profile\ntuser.dat>
	IsCentralProfileReachable:  Found a user profile.
	RestoreUserProfile:  Central Profile is reachable
	RestoreUserProfile:  Central Profile is floating
	GetLocalProfileImage:  Found entry in profile list for existing local
	profile
	GetLocalProfileImage:  Local profile image filename =
	<%SystemRoot%\Profiles\profile>
	GetLocalProfileImage:  Expanded local profile image filename =
	<C:\WINNT\Profiles\profile>
	GetLocalProfileImage:  Found local profile image file ok
	<C:\WINNT\Profiles\profile\ntuser.dat>
	Local profile is reachable
	Local profile name is <C:\WINNT\Profiles\profile>
	RestoreUserProfile:  About to call UpdateToLatestProfile
	UpdateToLatestProfile: Entering.  Central =
	<\\PDCServerName\profiles\profile>
	Local = <C:\WINNT\Profiles\profile>
	UpdateToLatestProfile:  Central and local profile times match.
	RestoreUserProfile:  About to Leave.  Final Information follows:
	Profile was successfully loaded.
	lpProfile->szCentralProfile = <\\PDCServerName\profiles\profile>
	lpProfile->szLocalProfile = <C:\WINNT\Profiles\profile>
	lpProfile->dwInternalFlags = 0x112
	RestoreUserProfile:  Leaving.
	UpgradeProfile: Entering
	UpgradeProfile: Build numbers match
	UpgradeProfile: Leaving Successfully
	ApplyPolicy: Entering
	ApplyPolicy:  PolicyPath is: <\\PDCServerName\netlogon\ntconfig.pol>.
	ReconcileFile: \\PDCServerName\netlogon\ntconfig.pol ==>
	C:\WINNT\Profiles\Policy\ntconfig.pol  [OK]
	ApplyPolicy:  Local PolicyPath is:
	<C:\WINNT\Profiles\Policy\ntconfig.pol>.
	ApplyPolicy:  Leaving succesfully.
	LoadUserProfile: Leaving with a value of 1.  hProfile = <0x90>
	--------------------------------------------------------------------------
	
	Below is a successful logoff and update by the client of the server-
	based roaming profile.
	
	--------------------------------------------------------------------------
	UnloadUserProfile: Entering, hProfile = <0xe0>
	UnloadUserProfile:  Succesfully unloaded profile
	UnloadUserProfile:  Copying profile back to
	\\PDCServerName\profiles\profile
	CopyProfileDirectory: Entering, lpSourceDir = <C:\WINNT\Profiles\profile>,
	lpDestinationDir = <\\PDCServerName\profiles\profile>, dwFlags = 0x32
	ReconcileFile: C:\WINNT\Profiles\profile\NTUSER.DAT ==>
	\\PDCServerName\profiles\profile\NTUSER.DAT  [OK]
	ReconcileFile: C:\WINNT\Profiles\profile\ntuser.dat.LOG ==>
	\\PDCServerName\profiles\profile\ntuser.dat.LOG  [OK]
	CopyProfileDirectory: Leaving with a return value of 1
	UnloadUserProfile: Leaving with a return value of 1
	--------------------------------------------------------------------------
	
	NOTE: The checked version of userenv.dll can be obtained by contacting Microsoft
	Product Support Services.
	
	
	Additional query words: ntfaqdom
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
