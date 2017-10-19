---
layout: page
title: "Q161280: Unable to Change Previously Used FPNW Server Name"
permalink: /kb/161/Q161280/
---

## Q161280: Unable to Change Previously Used FPNW Server Name

	Article: Q161280
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change the File and Print Services for NetWare (FPNW) server
	name, the following error message is returned:
	
	  The specified FPNW Server Name has been used. Please specify a different
	  name.
	
	CAUSE
	=====
	
	The previous name is stored in the following registry locations:
	
	HKEY_LOCAL_MACHINE\SYSTEM\ControlSet00x\Services\FPNW
	\Bindery\Type07\00000002
	
	  Object Name:REG_SZ:<servername>_FPNW
	
	HKEY_LOCAL_MACHINE\SYSTEM\ControlSet00x\Services\FPNW
	\Bindery\Type07\Name\<servername>_FPNW
	
	RESOLUTION
	==========
	
	Two methods may be used to resolve this issue.
	
	Method #1
	---------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	Edit the registry and remove the entries for "<server name>_FPNW" noted
	above, close Registry Editor, and restart FPNW. Enter the FPNW Server Name you
	wish to use.
	
	Using this method will have no effect on the Maintain NetWare Compatible Login
	properties in User Manager.
	
	Method #2
	---------
	
	Remove and reinstall FPNW.
	
	This method will remove the NetWare Compatible User properties for all users in
	User Manager. Once FPNW is reinstalled, the Maintain NetWare Compatible Login
	choice will be available, but the checkbox will be unchecked for all user
	accounts. The checkbox must be re-selected for all user accounts that require
	this property.
	
	Hint: In User Manager, hold down the CTRL key, select individual user accounts,
	and double-click when the last account is selected. This will bring up the User
	Properties dialog box. Check the Maintain NetWare Compatible Login checkbox.
	This will enable this property for all selected users simultaneously. Be sure to
	verify the other user properties before clicking OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: fpnw nt
	======================================================================
	Keywords          : kbenv kbnetwork kbui 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
