---
layout: page
title: "Q227181: How to Manage Windows Installer Local Policies"
permalink: kb/227/Q227181/
---

## Q227181: How to Manage Windows Installer Local Policies

	Article: Q227181
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbOSWin2000 kbMSI kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The installation behavior of the Microsoft Windows Installer can be configured
	by an administrator using the Group Policy Editor (GPE) and the Active
	Directory.
	
	There are also several user and machine policies that can be configured on a
	local computer. This article describes user polices and then the machine
	policies.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	User polices can be configured in the local registry and are located under the
	following registry key:
	
	  HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows\Installer
	
	The following list contains values for these entries:
	
	Value Name: AlwaysInstallElevated
	Value Data Types: REG_DWORD
	Description: If this value is set to "1" and the corresponding machine value is
	also set, the Installer always installs with elevated privileges. Otherwise, the
	Installer uses elevated privileges to install managed applications and uses the
	current user's privilege level for non-managed applications.
	
	Value Name: SearchOrder
	Value Data Types: REG_SZ
	Description: Order in which the Installer searches the three different types of
	sources:
	
	"n" - network
	"m" - media (CD-ROM or DVD)
	"u" - URL (Uniform Resource Locator)
	
	For example, a value of "nmu" instructs the Installer to search network sources
	first, media sources second, and URL sources last. Leaving out a letter removes
	the corresponding volume type from the search. Default order in absence of this
	value is network first, then media followed by URL.
	
	Value Name: DisableBrowse
	Value Data Types: REG_DWORD
	Description: If this value exists and is set to "1", users are forbidden from
	browsing to locate installer sources. Also, the "Use feature from:" combo box
	for direct input is locked the "Browse..." button is disabled. See the source
	resiliency topic in the Windows Installer SDK for more details on source
	browsing.
	
	Value Name: TransformsAtSource
	Value Data Types: REG_DWORD
	Description: If this value exists and is set to "1"; the Installer searches for
	transform files in the root of any network sources in the source list for the
	product. By default, transforms are stored in the Application Data folder of a
	user's profile.
	
	Value Name: DisableRollback
	Value Data Types: REG_DWORD
	Description: If this value is set to "1", the Installer will not store rollback
	files during installation, disabling installation rollback. By default, rollback
	is enabled. Administrators are advised to not use this policy unless it is
	absolutely essential.
	
	Machine polices can be configured under the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows\Installer
	
	Value Name: AlwaysInstallElevated
	Value Data Types: REG_DWORD
	Description: If this value is set to "1" and the corresponding user value is also
	set, the Installer always installs with elevated privileges. Otherwise, the
	Installer uses elevated privileges to install managed applications and uses the
	current user's privilege level for non-managed applications
	
	Value Name: DisableMSI
	Value Data Types: REG_DWORD
	Description: If this value exists and is set to "2", the Installer is always
	disabled for all applications. If this value is set to "1", the Installer is
	disabled for non-managed applications but is still enabled for managed
	applications. If this value is set to "0', any other number, or is absent, the
	Installer is always enabled.
	
	Value Name: Logging
	Value Data Types: REG_SZ
	Description: This policy is used only if logging has not been enabled by the "/L"
	command line option or MsiEnableLog. If policy is set in this case, a log file
	is created in the temp directory with the random name: MSI*.LOG. Specify the
	logging mode by setting the policy value to a string of characters. Use the same
	characters to specify logging mode policy as used by the '/L' command line
	option. See Command Line Options. Note that you cannot use "+" and "*" for the
	policy.
	
	Value Name: DisablePatch
	Value Data Types: REG_DWORD
	Description: If this value is set to "1" the Installer does not apply patches.
	This policy can be used to provide security in environments where patching must
	be restricted.
	
	More information about local polices and the Windows Installer can be found in
	the Windows 2000 Software Development Kit (SDK).
	
	Additional query words: 2000
	
	======================================================================
	Keywords          : kbnetwork kbtool kbOSWin2000 kbMSI kbDSupport 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
