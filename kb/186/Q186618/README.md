---
layout: page
title: "Q186618: New System Policy Options in Terminal Server"
permalink: /kb/186/Q186618/
---

## Q186618: New System Policy Options in Terminal Server

{% raw %}

	Article: Q186618
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	Terminal Server includes four new user policy options.
	
	- Remove Windows NT Security Item from Start Menu
	- Remove Disconnect Item from Start Menu
	- Remove Logoff Item from Start Menu
	- Prevent users from creating global file associations
	
	These options are found under the User policy in Windows NT Shell\Restrictions
	and can be implemented globally under Default User or in
	administratively-created specific user or group policies.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	User Policy Changes
	-------------------
	
	The User policy is implemented by loading settings into the HKEY_CURRENT_USER
	section of the registry when a user's profile is loaded at logon time. These new
	settings are REG_DWORD with values of 0x0 (do not apply this policy) or 0x1
	(apply the policy). The default is to not apply the policy. The values set in
	the registry include:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	  \Policies\Explorer\ 
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	Value: NoNtSecurity (REG_DWORD) 0x1 = Hide Windows NT Security menu item
	
	Value: NoDisconnect (REG_DWORD) 0x1 = Hide Disconnect menu item
	
	Value: NoLogoff (REG_DWORD) 0x1 = Hide Logoff menu item
	
	In addition to the Explorer Shell, these policies will also be applied to the
	Windows NT Security dialog by using CTRL+ALT+DEL on the console or by the
	Windows NT Security item (or CTRL-ALT-END) in the Start menu from a client. The
	Logoff and Disconnect buttons will be disabled based on the NoDisconnect and
	NoLogoff policies.
	
	Another small change includes the removal of the Windows NT Security menu item
	from the Start menu for the console. This removal is to ensure the console
	functions like Windows NT Server or Workstation, which requires a user to press
	CTRL+ALT+DEL to access the Windows NT Security dialog box.
	
	Preventing Users from Changing Global File Associations
	-------------------------------------------------------
	
	In Windows, file types are associated with tools by mapping a file's extension to
	an executable program (for example, .xls files are associated with Excel.exe).
	The shell is aware of these file associations and runs Excel when you open an
	.xls file. The problem on Terminal Server is that these file associations are
	stored under HKEY_LOCAL_MACHINE, making them "global" associations.
	
	The shell also makes it easy to change these associations through a GUI
	interface, making it easy for a single user to change an association. Because
	the associations are global, it is easy for a single user to change the expected
	behavior of the entire system.
	
	To prevent this problem, Terminal Server includes a user policy that disables the
	file association functionality in the graphical user interface. This policy is
	set using System Policy Editor and is located under Default User\Windows NT
	Shell\Restrictions and is called "Prevent user from changing file type
	associations."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
