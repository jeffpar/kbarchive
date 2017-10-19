---
layout: page
title: "Q185589: Guide To Windows NT 4.0 Profiles and Policies (Part 4 of 6)"
permalink: /kb/185/Q185589/
---

## Q185589: Guide To Windows NT 4.0 Profiles and Policies (Part 4 of 6)

	Article: Q185589
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is the fourth in a series of articles that provides information and
	procedures for implementing Microsoft Windows NT 4.0 Profiles and Policies on
	client workstations and servers.
	
	A whitepaper is available that contains all of this information and additional
	flowcharts, diagrams and examples and can be downloaded from the following web
	page:
	
	  http://www.microsoft.com/ntserver/techresources/management/prof_policies.asp
	
	For the other sections of this guide, please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  Q161334 Guide to Windows NT 4.0 Profiles & Policies Part 1 of 6
	
	  Q185587 Guide to Windows NT 4.0 Profiles & Policies Part 2 of 6
	
	  Q185588 Guide to Windows NT 4.0 Profiles & Policies Part 3 of 6
	
	  Q185590 Guide to Windows NT 4.0 Profiles & Policies Part 5 of 6
	
	  Q185591 Guide to Windows NT 4.0 Profiles & Policies Part 6 of 6
	
	MORE INFORMATION
	================
	
	                  Windows NT Server Operating System
	                            White Paper
	        Guide to Microsoft Windows NT 4.0 Profiles and Policies
	
	Copyright 1997 Microsoft Corporation. All rights reserved.
	
	The information contained in this document represents the current view of
	Microsoft Corporation on the issues discussed as of the date of
	publication. Because Microsoft must respond to changing market conditions,
	it should not be interpreted to be a commitment on the part of Microsoft,
	and Microsoft cannot guarantee the accuracy of any information presented
	after the date of publication.
	
	This White Paper is for informational purposes only. MICROSOFT MAKES NO
	WARRANTIES, EXPRESS OR IMPLIED, IN THIS DOCUMENT.
	
	Microsoft, the BackOffice logo, MS-DOS, Windows, and Windows NT are
	registered trademarks of Microsoft Corporation.
	
	Other product or company names mentioned herein may be the trademarks of
	their respective owners.
	
	Microsoft Corporation
	One Microsoft Way
	Redmond, WA 98052-6399
	USA
	0997
	
	SYSTEM POLICY - AN INTRODUCTION
	===============================
	
	A System Policy is a set of registry settings that defines the computer
	resources available to an individual or to a group of users. Policies
	define the various facets of the desktop environment that a system
	administrator needs to control, such as which applications are available,
	which applications appear on the user's desktop, which applications and
	options appear in the Start menu, who can change their desktops and who
	cannot, and so forth. System policies can be implemented for specific
	users, groups, computers, or for all users. You create system policies with
	the System Policy Editor.
	
	The System Policy Editor is a graphical tool provided with Windows NT
	Server 4.0 that allows you to easily update the registry settings to
	generate the correct environment for a particular user or group of users.
	The System Policy Editor creates a file that contains registry settings
	which are then written to the user or local machine portion of the registry
	database. User Profile settings that are specific to a user who logs on to
	a given workstation or server, are written to the registry under
	HKEY_CURRENT_USER. Likewise, machine-specific settings are written under
	HKEY_LOCAL_MACHINE.
	
	When you apply a System Policy, the new policy overwrites the existing
	registry settings, thus giving you, as system administrator, the ability to
	set restrictions for the client machine and user. When a user logs on to a
	Windows NT 4.0 computer, the user's profile is loaded first and then the
	System Policy is downloaded. Any registry settings that you have
	reconfigured, whether these are machine-specific changes or are specific to
	the user logging on, are changed before the user receives control of the
	desktop. Note that System Policy changes are not dynamic; if you make a
	change to the policy, affected users must log off and log back on so that
	the new policy can be downloaded and applied.
	
	With a properly implemented policy, you can customize the user's
	environment to your specifications, despite the user's preferences and
	regardless of where he or she logs on. The settings available in the System
	Policy Editor provide a variety of options for managing the user
	environment. For a detailed list of these options, see the section
	"Registry Keys Modified by the System Policy Editor Default Templates."
	
	System Policy Files
	-------------------
	
	Policies can define a specific user's settings or the settings for a group
	of users. The resulting policy file contains the registry settings for all
	users, groups, and computers that will be using the policy file. Separate
	policy files for each user, group, or computer are not necessary.
	
	If you create a policy that will be automatically downloaded from
	validating domain controllers, you should name the file Ntconfig.pol. As
	system administrator, you have the option of renaming the policy file and,
	by modifying the Windows NT-based workstation, directing the computer to
	update the policy from a manual path. You can do this by either manually
	changing the registry or by using System Policy. This path can even be a
	local path such that each machine has its own policy file, but if a change
	is necessary to all machines, this change must be made individually to each
	workstation.
	
	When a user of a Windows NT 4.0-based workstation logs on, if the
	Windows NT 4.0-based machine is working in Automatic mode (which is the
	default), the workstation checks the NETLOGON share on the validating
	domain controller (DC) for the Ntconfig.pol file. If the workstation finds
	the file, it downloads it, parses it for the user, group, and computer
	policy data, and applies it if appropriate. If a user logs on to a machine
	that has a computer account in a resource domain, the search for the
	Ntconfig.pol file is redirected to the validating domain controller in the
	account domain. In this situation, the Windows NT 4.0-based workstation has
	a secure communication channel established to a domain controller of the
	resource domain. The Windows NT-based workstation sends the user's logon
	request over this communication channel, and expects a response the same
	way. The domain controller in the resource domain receives this request,
	forwards it to a domain controller in the user's account domain, and waits
	for a response. Once the domain controller in the resource domain receives
	this response from the account domain's DC, it returns the authentication
	request to the client machine, including the validating domain controller's
	name from the account domain. The Windows NT-based workstation now knows
	where to look for the Ntconfig.pol file.
	
	Policy Replication
	------------------
	
	If you implement a System Policy file for Windows NT users and computers
	and you intend to use the default behavior of Windows NT, be sure that
	directory replication is occurring properly among all domain controllers
	that participate in user authentication. With Windows NT, the default
	behavior is for the computer to check for a policy file in the NETLOGON
	share of the validating domain controller. If directory replication to a
	domain controller fails and a Windows NT-based workstation does not find a
	policy file on that server, no policy will be applied and the existing
	settings will remain, possibly leaving the user with a nonstandard
	environment or more capabilities than you want that particular user to
	have.
	
	How Policies Are Applied
	------------------------
	
	Once located, policies are applied as follows:
	
	- If the policy file includes settings for the specific user account,
	  those are applied to the HKEY_CURRENT_USER registry key. Other group
	  settings are discarded, even if the user is a member of the group,
	  because the user settings take precedence.
	
	- If a user-specific policy is not present, and Default User settings
	  exist, the Default User settings are applied to the HKEY_CURRENT_USER
	  registry key.
	
	- If no user specific settings are present, and group settings exist, the
	  user's group membership in each of those groups is checked. If the user
	  is a member of one or more groups, the settings from each of the groups-
	  starting with the lowest priority and continuing through the highest
	  priority-are applied to the HKEY_CURRENT_USER key in the registry.
	
	  NOTE: If a setting is ignored (gray) in the group settings, but the same
	  setting is marked as enabled or disabled in the Default User settings,
	  the Default User setting are used. The Default User settings take
	  precedence over only those settings that are ignored in the group
	  settings.
	
	- If the policy file includes settings for the specific computer name,
	  these are applied to the HKEY_LOCAL_MACHINE registry key. Otherwise, the
	  Default Computer settings are applied. This process is independent of
	  the user account for the user who is currently logged on. All users
	  receive these settings when they use this computer.
	
	NOTES:
	- Group policies do not operate in a NetWare only environment, because
	  Windows NT checks for Windows NT global groups only, not NetWare groups.
	- If an administrator logs on, a policy is in effect, no explicit settings
	  exist for the administrative account, and the Default User settings are
	  present, the administrator will receive the settings of the Default
	  User. Administrative accounts are not exempt from policies. This should
	  be a key factor to consider when implementing policies.
	
	The System Policy Editor provides a hierarchical Group Priority dialog that
	helps you see and manage the order in which group policies are applied. The
	next illustration shows the dialog and explains these priorities.  <image
	present in whitepaper>
	
	Additional Implementation Considerations
	----------------------------------------
	
	Although a properly implemented policy can simplify system administration
	in the long term, such policy requires careful planning. Before you
	implement system policies, consider the following:
	
	- Would administration be simplified by defining group settings rather
	  than creating settings for individual users?
	
	- Where are the computers located in your network? Is geographic location
	  an important aspect of your network's design-for example, is your
	  network distributed over a large geographic area? If so, computers from
	  a certain locale may benefit from retrieving policy files from a machine
	  that is close at hand, as opposed to using a domain controller that may
	  not be nearby.
	
	- What type of restrictions do you want to impose on users?
	
	- Will users be allowed to access locally installed common group
	  applications, or will these be overridden by administrator-defined
	  program groups, desktop icons, Start menu programs, and so forth?
	
	- What other options are available if you simply want to restrict access
	  to a specific icon or file? Would modifying NTFS permissions be more
	  effective?
	
	- Will you be controlling computer-specific settings only, and not user
	  settings?
	
	If after considering these issues, you conclude that System Policies will
	simplify administration of your system, use the System Policy Editor to
	create the appropriate individual and/or group policies, as explained in
	the next section.
	
	THE SYSTEM POLICY EDITOR
	========================
	
	The System Policy Editor is a graphical tool that allows you to easily
	update the registry settings to implement a System Policy. The System
	Policy Editor is included with Windows NT Server 4.0, but you can install
	it on Windows NT Workstation-based machines and on Windows 95-based
	machines as well.
	
	Note that a policy file is valid only for the platform on which it was
	created. For example, if you run Poledit.exe on a Windows 95-based machine,
	and you save the policy file, the file will be written in a format that can
	be interpreted by Windows 95-based machines only. The same is true when you
	
	create policy files on Windows NT-based machines. As a result, Windows 95
	and Windows NT policy files are not interchangeable.
	
	After you complete the installation, the administrative tools group
	includes the System Policy Editor.
	
	Installing the System Policy Editor on a Windows NT Workstation
	---------------------------------------------------------------
	
	You have two options when installing the System Policy Editor on a
	Windows NT Workstation-based computer. You can
	
	- Run the Setup.bat file from the Windows NT 4.0 CD-ROM
	  \Clients\Svrtools\Winnt directory, or
	
	- Copy the System Policy Editor executable, Poledit.exe, and template
	  files to the workstation. The template files have an .adm extension, and
	  are located in the %systemroot%\INF directory, which is hidden by
	  default.
	
	Installing the System Policy Editor on a Windows 95 Computer
	------------------------------------------------------------
	
	When you install the System Policy Editor on a Windows 95-based computer,
	the installation process modifies the Windows 95 registry to allow system
	policies to function correctly. You can install the policy editor from the
	Windows 95 Upgrade or Retail compact disc, or you can install the editor
	that ships with Windows NT Server 4.0.
	
	To install the System Policy Editor from the Windows 95 compact disc:
	
	1. Insert the Windows 95 Upgrade compact disc in your CD-ROM drive.
	
	2. Open Control Panel, and click Add/Remove Programs.
	
	3. Click the Windows Setup tab, and select Have Disk.
	
	4. Browse to locate the directory x:\Admin\Apptools\Poledit\ (where x is
	  drive A through Z) on the Windows 95 compact disc.
	
	5. Select both Group Policies and the System Policy Editor, and then click
	  OK to Install.
	
	It is important that you run the setup program as described above.
	Undesirable results will occur if you merely copy the Policy Editor and
	related files to the Windows 95-based computer.
	
	To install the System Policy Editor from a Windows NT 4.0 Server
	----------------------------------------------------------------
	
	1. Copy the Poledit.exe file from the Windows NT Server 4.0 to the \windows
	  directory of the Windows 95-based machine.
	
	2. Copy the Common.adm and Windows.adm files from the Windows NT 4.0-based
	  server to the \windows directory of the Windows 95-based machine.
	
	3. Create a shortcut to the System Policy Editor executable (Poledit.exe,
	  located in the \windows directory of the Windows 95-based computer).
	
	Updating the Registry with the System Policy Editor
	---------------------------------------------------
	
	The System Policy Editor allows you to easily update the registry settings
	to generate the correct environment for a particular user or group of
	users. You can use the System Policy Editor in two ways:
	
	- You can open the local registry through the System Policy Editor, and
	  change the settings for the local user and computer.
	
	- You can modify an existing policy file or create a new one to contain
	  the settings that you want to enforce on a per user, per computer, or
	  combined user/computer basis.
	
	When you open the System Policy Editor in registry mode, you can modify the
	registry of the local computer without having to use Regedt32.exe or
	Regedit.exe. However, you can modify only those values exposed by the
	templates; the System Policy Editor does not give you access to the entire
	registry.
	
	SYSTEM POLICY EDITOR TEMPLATE (.ADM) FILES
	==========================================
	
	The System Policy Editor uses administrative (.adm) files to determine
	which registry settings can be modified. An .adm file is a hierarchical
	template, and consists of categories and subcategories that dictate which
	settings are available through the user interface. An .adm file contains
	the registry locations where changes should be made for a particular
	selection, additional options for a particular selection, restrictions, and
	in some cases, the default value for a selection.
	
	When you run the System Policy Editor and select Policy Template from the
	Options menu, a window similar to the one shown below appears. This window
	displays the names of the .adm files that are currently being used. If you
	need to make changes to custom applications, for example, you can add a
	template to this list. To ensure that the system uses the latest
	administrative information, the System Policy Editor reads the custom .adm
	files each time it starts.
	
	For detailed instructions when creating .adm files, see the section
	"Creating Your Own Custom .Adm File," later in this document.
	
	NOTE: The option to Add or Remove will be grayed out if there is a policy
	file currently open. Close the file in use and then change the template
	configuration.
	
	CONFIGURING POLICY SETTINGS
	===========================
	
	The configuration options available to you fall into a tree structure,
	which is determined by the layout of the .adm file. By navigating through
	these options, you can select a mode that determines the action that will
	be taken when the policy file is applied.
	
	Policies are applied as follows:
	
	- If the box is checked, it is implemented. When the user next logs on,
	  the user's computer conforms to the policy. If the option was checked
	  the last time the user logged on, Windows NT makes no changes.
	
	- If the box is cleared, the policy is not implemented, and if the
	  settings were previously implemented, they are removed from the
	  registry.
	
	- If the box is grayed, the setting is ignored and unchanged from the last
	  time the user logged on. Windows NT does not modify this setting. The
	  grayed state ensures that Windows NT provides quick processing at system
	  startup because it does not need to process each entry every time a user
	  logs on.
	
	NOTE: When you decide whether the value should be checked or cleared, be
	careful of the terminology of the setting or unexpected results may occur.
	For example, the Don't save settings at exit option, when checked, does not
	allow settings to be saved. If you clear the checkbox, the settings can be
	saved.
	
	When you select an option, the pane below it contains other configurable
	items that relate to the setting you modified, as well as information about
	the option you selected.
	
	When administering System Policies, if you specify paths for particular
	options such as wallpaper, ensure that the paths are consistent across all
	workstations that will receive the policy file.
	
	SETTING FOLDER PATHS BACK TO DEFAULTS
	=====================================
	
	If you create a policy file and then change the path to any of the custom
	shared folders or custom user-specific folders, the change overrides the
	default setting established in the .adm file. For example, by default a
	user's program folder path is %USERPROFILE%\Start Menu\Programs.
	
	If the policy file is not modified from the default, this value is not
	changed for the client computer. However, you can modify this value to
	point to a server location that contains different shortcuts. To do this,
	click the option in the System Policy Editor, and specify the path to the
	folder containing the shortcuts. Once this change is applied, the user will
	receive the new shortcuts.
	
	Suppose, however, that you want to restore the user's environment to the
	state it was in before the change was made. To do this, follow the
	procedure described next.
	
	To restore the defaults:
	
	1. Open the policy file, and click the option to clear the check box.
	
	2. Save and close the policy file.
	
	3. Reopen the policy file, and click the option to re-enable it. The
	  original setting should be displayed, pointing to the user's local
	  machine.
	
	NOTE: Be sure to complete all steps; completing Steps 1 and 2 only results
	in an empty Programs folder on the client machine.
	
	CREATING A SYSTEM POLICY
	========================
	
	Before you create a System Policy, decide which settings will be enforced
	and how the settings will be grouped.
	
	To create a new System Policy:
	
	1. On a Windows NT Server-based machine in the domain where the policy file
	  will apply, open the System Policy Editor. From the Start menu, click
	  Programs, then click Administrative Tools (Common), then click System
	  Policy Editor.
	
	2. From the File menu, click New Policy.
	
	3. The Default Computer and Default User icons will be displayed. Click the
	  user, computer, or group to be modified.
	
	  NOTE: If you need to add a user, group, or computer, you can copy and
	  paste the settings without having to manually go through each of the
	  entries and make selections. For example, if you have made modifications
	  to User1 and want to create a similar profile for another user (User2),
	  select User1, then from the Edit menu, click Copy. Select User2, then
	  from the Edit menu, click Paste. Make any changes specific to User2 and
	  save your changes. You will be prompted to verify your changes, and then
	  the settings will be applied. When you add users or computers to the
	  policy file, they automatically assume the properties of the icons
	  Default User or Default Computer respectively.
	
	4. Make changes to the options desired. For more information on each
	  option, see the portion of this guide titled "Registry Keys Modified by
	  the System Policy Editor Default Templates."
	
	5. From the File menu, click Save As and save the policy file with the
	  appropriate name:
	
	   - If workstations will be set to Automatic mode, use the file name
	     NTconfig.pol.
	   - If workstations will be set to Manual mode, use the name of your
	     choice.
	
	6. If workstations will be set to Automatic mode, place the file in the
	  NETLOGON share of each of the domain controllers that will be performing
	  authentication. To simplify this process, you can use directory
	  replication from Windows NT to replicate the file to the other domain
	  controllers. If you use replication and later make changes to the file,
	  the modified file will be duplicated across validating machines
	  automatically.
	
	  Windows NT-based workstations, by default, are set to download the
	  policy file in Automatic mode. If you modify the setting to specify
	  manual update and to point to a specific machine, you must inform the
	  workstation about this location change. There are two ways to do this:
	
	   - Place the policy file in the location specified for manual updates,
	     but maintain a policy file in the NETLOGON share that points to the
	     manual path. Then, leave the Windows NT-based workstation in the
	     default Automatic mode. When the policy file is first downloaded this
	     change will be made, and at next logon and every logon thereafter,
	     Windows NT will go to the new location for policy file updates.
	   - Visit each Windows NT-based workstation either remotely or locally
	     and make the required registry change to point to the new location.
	     (Depending on the number of workstations affected, this could be very
	     time consuming.)
	
	7. Log on to the Windows NT-based workstation to download and enact the
	  policy.
	
	Creating Alternate Folder Paths
	-------------------------------
	
	You may need to create shared folders for groups of users who need a common
	set of tools and shortcuts. Windows NT 4.0 System Policies allows you to
	create such shared folders.
	
	To create shared folders and alternate folder paths:
	
	1. On a specific server, create a folder that contains shortcuts to network
	  applications or to locally installed programs. If you are creating
	  application shortcuts that will point to local paths on Windows NT
	  machines, refer to the section "Setting Up Shortcuts for Server-based
	  Profiles."
	
	2. Share the folder.
	
	3. Using the System Policy Editor, under computername or Default Computer,
	  select the option Custom Shared Folders, then select Custom Shared
	  Program Folder.
	
	4. Enable this option. By default the local All Users folder for the
	  workstation will be used, but you can replace the path to point to the
	  folder that you created in Step 1 and 2.
	
	5. Save the policy file. When the user logs on, the policy file will be
	  parsed for this information and will replace the common groups from the
	  local machine with the shortcuts, applications, and so forth, from the
	  folder that you created earlier.
	
	NOTE: This can be done per user for personal program groups and can also be
	done for other folder settings such as the startup group, Start menu, and
	desktop icons.
	
	SETTING UP SHORTCUTS FOR SERVER-BASED PROFILES
	==============================================
	
	You may notice that shortcuts created on any computer automatically embed a
	universal naming convention (UNC) path for the .lnk file, such as
	\\machine\admin$.
	
	This embedded UNC in the link can be a problem when it is copied to a
	server and used in a server-based profile. By default, such links are
	resolved to the original location of the file (the absolute path) before
	any other path is used (these other paths are referred to as secondary or
	relative paths). In this case, the UNC path to the original file is always
	reachable, which prevents the link from being resolved via a local path. As
	a result, the user trying to execute the shortcut will be asked for the
	administrator's password for the computer on which the link was created.
	
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. After you install the service pack, you can work around the
	problem by modifying the registry as explained next.
	
	To resolve links correctly:
	
	1. Open Registry Editor (Regedit.exe).
	
	2. Go to the following key:
	
	     HKEY_Current_User\Software\Microsoft\Windows\CurrentVersion\Policies
	     \Explorer
	
	3. Add the following DWORD value by clicking Edit, New, DWORD value:
	
	     LinkResolveIgnoreLinkInfo
	
	4. Once entered, double-click this value and set the Value data to 1.
	
	DEPLOYING POLICIES FOR WINDOWS NT 4.0 MACHINES
	==============================================
	
	By default, a Windows NT 4.0-based workstation checks the NETLOGON share of
	the validating domain controller for the user's logon domain. It is
	therefore critically important that replication of the Ntconfig.pol file
	take place among the domain controllers performing authentication. If a
	Windows NT 4.0-based workstation does not locate the policy file on its
	validating domain controller, it will not check any others.
	
	You have another option when enforcing policies. The UpdateMode registry
	setting, configurable through the System Policy Editor, forces the computer
	to retrieve the policy file from a specific location (expressed as a UNC
	path), regardless of the user who logs on.
	
	To retrieve the policy file from a specific location:
	
	1. Open either the specific machine policy or the Default Computer policy,
	  and navigate through the Network category and System policies update
	  subcategory to reach the Remote update option.
	
	2. Check the Remote update box.
	
	3. In the Update mode box, select Manual (use specific path).
	
	4. In the Path for manual update box, type the UNC path and file name for
	  the policy file.
	
	5. Click OK to save your changes.
	
	The first time the workstation is modified locally via the System Policy
	Editor or receives a default System Policy file from the NETLOGON share of
	a domain controller, this location is written to the registry. Thereafter,
	all future policy updates use the location you specified manually. This is
	a permanent change until the policy file resets the option to Automatic.
	The Windows NT 4.0-based computer will never again look at a domain
	controller to find a policy file until you either change the instruction in
	the local registry or modify the policy file in the location specified by
	the manual path to set the mode back to Automatic.
	
	DEPLOYING POLICIES FOR WINDOWS 95 MACHINES
	==========================================
	
	When creating a system policy file for a Windows 95-based client, you must
	first install the System Policy Editor on a Windows 95-based computer so
	that you can create the policy (.pol) file. You cannot run the System
	Policy Editor on a Windows NT 4.0-based server to generate a .pol file for
	Windows 95-based clients because a policy file is valid only for the
	platform on which it was created. For procedures when installing the System
	Policy Editor on a Windows 95-based computer, refer to the section
	"Installing the System Policy Editor on a Windows 95 Computer" earlier in
	this document.
	
	After you have created the .pol file, you can enable a Windows 95-based
	computer to look for and accept system policies as is described below.
	
	To deploy policies for a Windows 95-based computer:
	
	1. Open the Control Panel, and click Passwords and then User Profiles.
	
	2. To enable User Profiles, select Users can customize and then click OK.
	
	3. Check the UpdateMode value in the following registry location:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Update
	
	  If this value is 0, policies will not be applied. If this value is 1,
	  the Automatic Policy mode is in effect and when the user is validated on
	  the domain, the validating domain controller's NETLOGON share will be
	  checked for the existence of the Config.pol file. If this value is 2,
	  the Manual Policy mode is in effect, and when the user is validated on
	  the domain, the Windows 95-based machine will check the path specified
	  in the value NetworkPath for the existence of the Config.pol file. Note
	  that the default mode for a Windows 95-based machine is Automatic.
	
	4. Restart the computer and have the user log on. The policy file will be
	  downloaded from the configured location and applied.
	
	MODIFYING POLICY SETTINGS ON STAND-ALONE WORKSTATIONS
	=====================================================
	
	If you need to modify settings of a Windows NT 4.0-based workstation user
	who is not a member of the domain and thus will not be able to use the
	policy file located on the domain, you have three options available to you:
	
	- You can create a policy file for stand-alone workstations where users
	
	  log on locally, or
	
	- You can change policy settings remotely, or
	
	- You can change policy settings locally.
	
	Procedures for each option are described next. Note that you must have
	administrator rights to the stand-alone workstations in question.
	
	To Create a Policy File for Stand-alone Workstations
	----------------------------------------------------
	
	1. Log on as administrator, and create a policy file that includes Computer
	  and User objects with appropriate settings for the computer and users
	  respectively. The user objects may include the Default User or user
	  accounts from the local workstation, but global group objects will be
	  ignored if added to the policy file. Windows NT recognizes machine-
	  specific policy settings for the computer if those are specified in the
	  policy file.
	
	2. Place the policy file in a secure directory on the stand-alone computer
	  or on a network share to which the user has at least Read permissions.
	
	3. In the workstation registry, locate the UpdateMode value in the
	  following key:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Update
	
	4. Update the data to a hex value of 2.
	
	5. In the same registry subkey, modify the NetworkPath value with the local
	  or UNC path where the policy file resides. If this path does not exist,
	  add it as a data type of REG_SZ. For example, if the policy file is
	  named Ntconfig.pol and is placed in the root directory of Windows NT,
	  NetworkPath should contain the path c:\Winnt\Ntconfig.pol.
	
	6. Have the user log on to the workstation. Windows NT will read the policy
	  file specified by NetworkPath and then apply the appropriate policy to
	  the computer or to the user.
	
	NOTE: UNC paths may be used in the NetworkPath value. This is beneficial to
	those administrators who want to centralize the policy file in use.
	
	The ability of Windows NT to take advantage of and apply System Policies to
	local workstation users is not operable in Service Pack 3, but will be
	available in Service Pack 4 and future service packs. This does not affect
	the retail build of Windows NT 4.0 and Service Packs 1 and 2, where this
	feature is operable.
	
	To Change Policy Settings Remotely
	----------------------------------
	
	1. Log on as administrator, open the System Policy Editor, and from the
	  File menu, select Connect.
	
	2. Type the computer name of the workstation to be modified, and click
	  Enter. A dialog will appear displaying the user name of the currently
	  logged on user for whom the changes will apply. If the user is not
	  currently logged on, click Cancel. (The user must be logged on for the
	  changes to take effect.)
	
	3. If the user is logged on, click OK.
	
	4. The icons Local Computer and Local User will be displayed.
	
	5. Modify these just as you would modify a normal policy file. Save your
	  changes. The next time the user logs on, the changes made to the
	  computer and the user settings will be in effect on the remote machine.
	
	To Change Policy Settings Locally
	---------------------------------
	
	1. Log on as an administrator, and copy the Poledit.exe, Common.adm, and
	  Winnt.adm files to the Windows NT-based workstation where the changes
	  for the computer or user need to be made.
	
	2. Log on with administrative permissions as the user for whom the
	  modifications will apply.
	
	3. Open Poledit.exe and load the templates that were copied to the local
	  computer.
	
	4. From the File menu, select Open Registry.
	
	5. The icons Local Computer and Local User will be displayed.
	
	6. Modify these just as you would modify a normal policy file. Save your
	  changes. The next time the user logs on, these changes will be in
	  effect.
	
	7. Close the System Policy Editor and remove this tool from the workstation
	  by deleting the Poledit.exe file and any .adm files used.
	
	These changes modify the registry entries that control the behavior of
	Windows NT on the target computer. A policy file is not created when this
	procedure is used. This procedure is the same for Windows NT Workstation
	4.0 and Windows NT Server 4.0.
	
	CREATING A CUSTOM .ADM FILE
	===========================
	
	The content of this section is also documented in the Windows 95 Resource
	Kit and the Windows 32-bit Software Developer's Kit, which are available on
	the Microsoft Developer's Network or through Microsoft Sales.
	
	This section refers extensively to the following .adm files:
	
	- Common.adm-This contains registry settings common to both Windows NT 4.0
	  and Windows 95.
	
	- Winnt.adm-This contains registry settings specific to Windows NT 4.0.
	
	- Windows.adm-This contains registry settings specific to Windows 95.
	
	To Create A Custom .Adm File
	----------------------------
	
	1. Create a backup copy of the Winnt.adm file in the %systemroot%\ Inf
	  directory.
	
	2. Use a text editor to open the Winnt.adm file. The first entry of this
	  file is CLASS xxxx, where xxxx could be either:
	
	   - MACHINE = This section includes all entries available in the Local
	     Computer/DefaultComputer icon.
	
	   - USER = This section includes all entries available to modify user-
	     specific settings.
	
	  These are the only two classes that are valid within the System Policy
	  Editor. The System Policy Editor checks the syntax of each .adm file
	  when the files are loaded, and displays a message if any errors are
	  found.
	
	3. Choose the CLASS in which you want your custom entries to appear.
	
	4. Create categories by using the keyword CATEGORY followed by a space and
	  !!variable. The System Policy Editor requires that anything preceded by
	  !! must have a string defined in the [strings] section of the .adm file.
	  This allows the editor to use variables to define long strings of text
	  that will appear in the user interface a single time, even if these
	  strings are used in multiple locations in the .adm file. For example, to
	  open a category you would use:
	
	     CATEGORY !!MyNewCategory
	
	  To close the category after filling in the options, you would use:
	
	     END CATEGORY      ; MyNewCategory
	
	  These can be nested to create sub-categories as follows:
	
	     CATEGORY !!FirstCategory
	     CATEGORY !!SecondCategory
	     CATEGORY !!ThirdCategory
	     ...
	     ...
	     END CATEGORY ; ThirdCategory
	     END CATEGORY   ; SecondCategory
	     END CATEGORY      ; FirstCategory
	
	  Be sure to specify the text for the variables you used above. In this
	  case, in the [strings] section of the .adm file, you would need to
	  include:
	
	     FirstCategory="My First Category"
	     SecondCategory="My Second Category"
	     ThirdCategory="My Third Category"
	
	5. Within each category, define the registry key that will be modified. To
	  do this, use the keyword KEYNAME followed by the registry path to the
	  key that contains the value you want to change. Note that due to the
	  CLASS you are in, you do not need to specify HKEY_LOCAL_MACHINE or
	  HKEY_CURRENT_USER. For example, you can use:
	
	     KEYNAME System\CurrentControlSet\Services\LanManServer\Parameters
	
	6. Identify the policy that specifies which options the user can modify.
	  Use the keyword POLICY for this, followed by !!variable. For example:
	
	     POLICY !!MyFirstPolicy
	
	  Be sure to define MyFirstPolicy in the [strings] section of the .adm
	  file. Complete the policy specifics, and finish with an END POLICY
	  statement.
	
	7. Define the options available within the policy. ?Use the keyword
	  VALUENAME to identify the registry value that an administrator can
	  modify. For example:
	
	     VALUENAME MyFirstValue
	
	  Remember that the VALUENAME needs to be within a PART if the option is
	  selected within the lower pane of the System Policy Editor (see the
	  discussion of PART and the code example below).
	
	  If not specified otherwise, the value will be written in the following
	  format when any administratory checks or unchecks the option:
	
	     Checked: REG_DWORD with a value of 1
	     Unchecked: Removes the value completely
	
	  Other options can specify what the user selects from and what gets
	  written to the registry.
	
	   - Use the keyword PART to specify options, drop-down list boxes, text
	     boxes, and text in the lower pane of the System Policy Editor. PART
	     is similar to CATEGORY, and uses the syntax:
	
	        PART !!MyVariable FLAG
	        ...
	        END PART
	
	     where FLAG is one or more of the following:
	
	   - TEXT  -Displays text only, for example:
	
	     PART !!MyPolicy TEXT
	     END PART
	
	   - NUMERIC  -Writes the value to the registry with data type REG_DWORD,
	     for example:
	
	        PART !!MyPolicy NUMERIC
	        VALUENAME ValueToBeChanged
	        END PART
	
	   - DROPDOWNLIST   -Displays a list box of options to choose from, for
	     example:
	
	        PART !!MyPolicy DROPDOWNLIST
	        VALUENAME ValueToBeChanged
	        ITEMLIST
	        NAME "First" VALUE NUMERIC 1
	        NAME "Second" VALUE NUMERIC 2
	        NAME "Third" VALUE NUMERIC 3
	        NAME "Fourth" VALUE NUMERIC 4
	        END ITEMLIST
	        END PART
	
	   - EDITTEXT -Writes the value to the registry with data type REG_SZ, for
	     example:
	
	        PART !!MyPolicy EDITTEXT
	        VALUENAME ValueToBeChanged
	        END PART
	
	   - REQUIRED -Generates an error if the user does not enter a value, for
	     example:
	
	        PART !!MyPolicy EDITTEXT REQUIRED
	        VALUENAME ValueToBeChanged
	        END PART
	
	   - EXPANDABLETEXT-Writes the value to the registry with data type
	     REG_EXPAND_SZ, for example:
	
	        PART !!MyPolicy EDITTEXT EXPANDABLETEXT
	        VALUENAME ValueToBeChanged
	        END PART
	
	   - MAXLEN   -Specifies the maximum length of text, for example:
	
	        PART !!MyPolicy EDITTEXT
	        VALUENAME ValueToBeChanged
	        MAXLEN 4
	        END PART
	
	   - DEFAULT  -Specifies the default value for text or numeric data, for
	     example:
	
	        PART !!MyPolicy EDITTEXT
	        DEFAULT !!MySampleText
	        VALUENAME ValueToBeChanged
	        END PART
	
	     or
	
	        PART !!MyPolicy NUMERIC
	        DEFAULT 5
	        VALUENAME ValueToBeChanged
	        END PART
	
	   - MIN and MAX -These specify the lowest and highest valid values
	     respectively, for example:
	
	        PART !!MyPolicy NUMERIC
	        MIN 100 MAX 999 DEFAULT 55
	        VALUENAME ValueToBeChanged
	        END PART
	
	   - Use the keywords VALUEOFF and VALUEON to write specific values based
	     on the state of the option, for example:
	
	        POLICY !!MyPolicy
	        KEYNAME ....
	        VALUENAME ValueToBeChanged
	        VALUEON "Turned On" VALUEOFF "Turned Off"
	        END POLICY
	
	     or
	
	        POLICY !!MyPolicy
	        KEYNAME ....
	        VALUENAME ValueToBeChanged
	        VALUEON 5 VALUEOFF 10
	        END POLICY
	
	8. Save and test your file.
	
	Note that if you modify an .adm file while the System Policy Editor
	application is running, you will need to reload the file. From the Options
	menu, select Policy Template, and press OK. This reloads the structure, and
	your new entries will be available. (You do not need to perform this step
	if you modify a file before starting the System Policy Editor; the reload
	is done automatically each time the System Policy Editor starts.)
	
	CONFIGURING SYSTEM POLICIES BASED ON GEOGRAPHIC LOCATION
	========================================================
	
	You may choose to enforce certain environment settings based upon
	geographic site location or vicinity. At least two methods are available to
	do this.
	
	- Generate a System Policy that contains settings for specific computers.
	  In each of the machine-specific settings, configure the Remote Update
	  path to a specific regional server that will be maintaining the regional
	  System Policy file. When the user logs on at the Windows NT-based
	  workstation for the first time, because the default mode is Automatic,
	  the workstation will check the validating domain controller for a policy
	  file. The policy file it finds will point the policy update
	  configuration to another server. Note, however, that this does not work
	  for the first logon. When the user next logs on, Windows NT checks the
	  remote path and continues to use that path until the System Policy file
	  on the remote server directs otherwise.
	
	- Manually configure each of the workstations in a given region or site to
	  use a remote update path, and change the remote update mode from the
	  default of Automatic to Manual.
	
	CLEARING THE DOCUMENTS AVAILABLE LIST
	=====================================
	
	As an alternative to removing the Documents option from the Start menu, you
	can set and clear the documents available by clearing the MRUList value in
	the registry. Use this registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	  \Explorer\RecentDocs
	
	  Value: MRUList
	
	Note that you should not delete the value; instead, replace MRUList with a
	blank string.
	
	BUILDING FAULT TOLERANCE FOR CUSTOM SHARED FOLDERS
	==================================================
	
	If you want to create a user environment that includes a Custom Shared
	Programs Folder and a Custom Shared Desktop, you need to place the source
	folders for these shared items on a central server for all users to access.
	However, this involves some degree of risk if the server is unavailable. If
	that occurs, the user's Programs menu and desktop would not contain the
	appropriate folders, shortcuts, and files.
	
	To build fault tolerance into this configuration, you can take advantage of
	the distributed file system (Dfs) available for the Windows NT Server 4.0
	operating system platform. Dfs, which runs as a service, can provide a
	share that will refer the client to multiple servers for the same path. For
	example, on a Dfs server, the administrator has defined that users
	connecting to the UNC path \\Dfsserver\Dfsshare\Customfolder, will be
	returned a response with three different servers, \\Server1\Customerfolder,
	\\Server2\Customerfolder, and \\Server3\Customerfolder, all of which
	contain the same data. The client machine, which can be either a Windows NT-
	based 4.0 machine or a Windows 95-based machine with the Dfs client
	software, randomly selects one of these servers and uses that path to
	generate the custom shared folders for the user. If one of the servers is
	unavailable, the client has the other two servers to select from. Note that
	the Dfs host server must be running for this fault tolerant structure to
	work. (Although Dfs software currently supports a single host server,
	Microsoft is developing a fault-tolerant version of Dfs for a future
	release of Windows NT.)
	
	Additional query words: wpaper
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
