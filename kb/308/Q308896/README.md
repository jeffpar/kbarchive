---
layout: page
title: "Q308896: PRB: Error in Ss.ini Remotely Accessing Default-Location DB"
permalink: kb/308/Q308896/
---

## Q308896: PRB: Error in Ss.ini Remotely Accessing Default-Location DB

	Article: Q308896
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSSExplorer kbDSupport kbGrpDSSSafe kbSrcControl
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access a Visual SourceSafe database from a remote (client) computer,
	various errors may be returned indicating there are insufficient permissions to
	the SS.ini file. For example:
	
	  Access to the file "\\MachineA\vss\users\user1\ss.ini" denied
	
	CAUSE
	=====
	
	By default, on Windows 2000 members of the Users group are not given write or
	modify permissions to folders in the Program Files tree. This is what causes the
	problem.
	
	RESOLUTION
	==========
	
	To resolve this issue, do not install the Visual SourceSafe database to the
	default location (the Program Files folder), because it is inherited permissions
	from this folder that cause the problem.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install Visual SourceSafe on one computer (for example, MachineA). Let it
	  create a database at the standard install location (C:\Program
	  Files\Microsoft Visual Studio\VSS).
	
	2. Create a share at the database install directory (C:\Program Files\Microsoft
	  Visual Studio\VSS in this example) named "VSS" (without the quotation marks).
	  Add a user ("User1" (without the quotation marks)) to the Visual SourceSafe
	  database who is not a member of MachineA's Administrators or Power Users
	  group, but is a member of the Users group. (By default domain users will be
	  members of the local computer's Users group).
	
	3. On another (remote) computer that has the Visual SourceSafe client installed,
	  log on as User1. Connect to the Visual SourceSafe database on MachineA by
	  using the client in the development tool of your choice or the Visual
	  SourceSafe Explorer.
	
	  Note that various errors are returned when you attempt to access the
	  SourceSafe database in this scenario. For example:
	
	  Unable to open user login file path to ..data\loggedin\VSSusername.log
	
	4. On MachineA open the Properties dialog box for C:\Program Files\Microsoft
	  Visual Studio\VSS. Look at the Security tab and note that the Users group has
	  read, list folder contents, and read & execute Permissions. Give the
	  Users group write permission. (Note that these are operating system file
	  permissions, NOT share permissions.)
	
	5. Next, open the database from the remote computer. Now you can access Visual
	  SourceSafe, but when you close the database you will get:
	
	  Access to the file "\\MachineA\vss\users\user1\ss.ini" denied
	
	6. Go back to MachineA and give the Users group modify permission (allows files
	  to be deleted).
	
	7. Note that User1 can now access the database from remote computers.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q131022 INFO: Required Network Rights for the SourceSafe Directories
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSExplorer kbDSupport kbGrpDSSSafe kbSrcControl 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
