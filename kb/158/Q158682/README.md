---
layout: page
title: "Q158682: Shortcuts Created Under Windows NT 4.0 Resolve to UNC Paths"
permalink: kb/158/Q158682/
---

## Q158682: Shortcuts Created Under Windows NT 4.0 Resolve to UNC Paths

	Article: Q158682
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbui kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	A Windows NT user may click a program's shortcut and be prompted to Enter
	Network Password, yet the properties of the shortcut indicate a relative path to
	the local computer.
	
	This problem may become evident where server-based profiles are used and the user
	logs on to a computer other than the one where the shortcut was created.
	
	CAUSE
	=====
	
	Shortcuts created on a computer automatically embed a UNC (Universal Naming
	Convention) path such as \\<computer>\admin$ in the .lnk file. The default
	shortcut resolution method is to resolve the link to the original location of
	the file (the "absolute" path) before looking at another path of where that file
	may or may not exist (the secondary or "relative" path). In this case, the UNC
	path to the original file is always reachable, which prevents the link from
	being resolved by means of a local path. As a result, the user who is trying to
	run the shortcut is prompted for the administrator's password of the computer
	that created the link.
	
	RESOLUTION
	==========
	
	Apply the updated Shell32.dll from the latest Windows NT 4.0 service pack and
	then change the registry setting using one of the following methods for either
	the computer or the user. This will change all existing shortcuts that are
	showing the UNC path to the local relative path.
	
	Use System Policy editor to create a policy file that is distributed when the
	user logs on to the domain. The advantage of distributing the registry change
	using Windows NT Policies is that users receive the change when roaming.
	
	If the systems are in a workgroup environment, apply the policy to each user on a
	computer. Because the policy change is on a per-user basis and the policies key
	requires administrative rights, the user must have administrative rights to
	change the registry setting.
	
	As an alternative, the Microsoft Windows NT Server 4.0 Resource Kit, Supplement
	One ships with a utility called Shortcut.exe, which modifies the actual shortcut
	file and disables automatic link tracking of network shortcuts on a per-shortcut
	basis.
	
	Distribute the Change Per Computer
	----------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: If you are using Internet Explorer 4.0 and the Active Desktop, do not
	install the Shell32.dll file because it may cause Internet Explorer and Windows
	NT to not function correctly. However, the registry changes are still available.
	If you are using Internet Explorer 4.0 without the Active Desktop, install
	Shell32.dll as described.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To change these parameters, use the following procedure:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \Software\Microsoft\Windows\CurrentVersion\Policies\Explorer
	
	  NOTE: Add the Explorer subkey, if it does not exist.
	
	3. Click Add Value on the Edit menu.
	
	4. Add the following value:
	
	     Value Name: LinkResolveIgnoreLinkInfo
	     Data Type: REG_DWORD
	     Data:  1 (enable)
	
	5. Click OK.
	
	6. Exit Registry Editor.
	
	7. The user must log off and log on before the change takes place.
	
	Distribute Change to Users in the Domain
	----------------------------------------
	
	In a domain environment, the change can be applied using Windows NT Policies.
	Windows NT Service Pack 2 or later also ships with the appropriate Winnt.adm
	file that contains the registry setting to enable the policy change.
	
	1. Start System Policy Manager.
	
	2. Enable: Default User\Windows NT Shell\Restrictins\Disable Link file tracking
	
	3. Consult System Policy Editor Help or the resource kit for more information on
	  using the System Policy Editor.
	
	Change an Individual User
	-------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To change these parameters, use the following procedure:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_CURRENT_USER subtree, go to the following key:
	
	  \Software\Microsoft\Windows\CurrentVersion\Policies\Explorer
	
	3. Click Add Value on the Edit menu.
	
	4. Add the following value:
	
	     Value Name: LinkResolveIgnoreLinkInfo
	     Data Type: REG_DWORD
	     Data:  1 (enable)
	
	5. Click OK.
	
	6. Exit Registry Editor.
	
	7. The user must log off and log on before the change will take place.
	
	MORE INFORMATION
	================
	
	After the Shell32.dll file has been applied, the system resolves the relative
	path to the shortcut as expected. If the shortcut does not have a relative path
	and contains the UNC name to the executable or file to which the user does not
	have rights or cannot connect, the following message is displayed:
	
	  The file or folder "<filename>" that this shortcut refers to cannot be
	  found.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q150215 Disabling Automatic Network Shortcut Resolution
	
	  Q195887 Shortcuts Created Under Terminal Server 4.0 Resolve to UNC Paths
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time         Size          File Name     Platform
	  10/21/98    02:26p      1,296,656     Shell32.dll        Intel
	  10/21/98    02:26p        308,916     Shell32.dbg        Intel
	  10/21/98    02:37p      1,880,848     Shell32.dll        Alpha
	  10/21/98    02:37p        265,604     Shell32.dbg        Alpha
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbui kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
