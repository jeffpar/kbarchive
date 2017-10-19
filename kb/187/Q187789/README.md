---
layout: page
title: "Q187789: Step by Step: Novell NetWare to Windows NT Migration"
permalink: /kb/187/Q187789/
---

## Q187789: Step by Step: Novell NetWare to Windows NT Migration

	Article: Q187789
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to migrate accounts and resources from a Novell
	NetWare server to a computer running Microsoft Windows NT Server using the
	Migration Tool for NetWare. It also discusses the options that are available and
	how NetWare permissions and rights interoperate with Windows NT.
	
	MORE INFORMATION
	================
	
	The Migration Tool for NetWare (NWConv.exe) is included with Windows NT Server
	versions 3.51 and 4.0 and File and Print Services for NetWare (FPNW).
	
	NOTE: Gateway Services for Netware (GSNW) must be installed on the computer
	running Windows NT Server in order for the Migration Tool for NetWare to run.
	
	Using the Migration Tool for NetWare, you can transfer NetWare accounts and/or
	files and directories from NetWare volumes to a Windows NT Server domain
	controller. When you transfer users to a Windows NT domain with FPNW installed,
	the Maintain NetWare Compatible Login option is automatically selected for the
	users.
	
	NOTE: It is recommended that you perform the migration in two steps:
	
	1. Migrate user accounts.
	
	2. Migrate file resources.
	
	When NetWare accounts and volume data are transferred to a computer running
	Windows NT Server, the NetWare permissions and security information is also
	migrated, assuming NetWare file and directory resources are transferred to NTFS
	volumes. Additionally, migrated volumes are automatically shared for Microsoft
	network client users and NetWare clients when FPNW is installed.
	
	Starting the Migration Tool for NetWare
	---------------------------------------
	
	To start the Migration Tool for NetWare, follow these steps:
	
	1. In Windows NT 3.51, open Program Manager, and then click Run on the File
	  menu. Type "NWCONV" (without quotation marks), and then click OK.
	
	  -OR-
	
	  In Windows NT 4.0, click the Start button, click Programs, click
	  Administrative Tools, and then double-click Migration Tool for NetWare.
	
	2. In Select Servers For Migration, in the From NetWare Server box, do one of
	  the following:
	
	  Type the name of the Novell server to be migrated.
	
	  -OR-
	
	  Click the ellipses (...), and then click the appropriate Novell NetWare server
	  to be migrated.
	
	3. In Select Servers For Migration, in the To Windows NT Server box, do one of
	  the following:
	
	  Type in the name of the Windows NT Domain Controller to which the Novell
	  NetWare server listed above will be migrated.
	
	  -OR-
	
	  Click the ellipses (...) button, then click the appropriate Windows NT Domain
	  name and Windows NT Domain Controller to which the Novell NetWare server
	  listed above will be migrated.
	
	  NOTE: The computer running Windows NT Server that you select must be a Domain
	  Controller.
	
	Overview of Migration Tool for NetWare Dialog Buttons
	-----------------------------------------------------
	
	ADD            : This option allows you to migrate multiple servers at
	                 the same time.
	
	DELETE         : This option removes the selected NetWare and Windows
	                 NT Servers currently selected in the Server for
	                 Migration list.
	
	USER OPTIONS   : This option is used to specify how the migration will
	                 affect each user account and group.
	
	FILE OPTIONS   : This option is used to determine which folders and/or
	                 files are migrated to the computer running Windows NT
	                 Server, and to specify the new location for these
	                 resources.
	
	START MIGRATION: This option begins the migration. This actually brings
	                 information over from the NetWare server.
	
	TRIAL MIGRATION: This option starts a rehearsal migration. The benefit of
	                 this option is that it behaves just like the real
	                 migration would, except that it does not actually
	                 perform the migration. You can analyze error logs after
	                 a trial migration and make any corrections before doing
	                 the real migration.
	
	LOGGING        : Specifies error login detail level.
	
	NOTE: The Error.log, Summary.log, and Logfile.log files are located in the
	%systemroot%\system32 directory.
	
	Details of the User Options Button
	----------------------------------
	
	Passwords:
	
	Use this section to determine the passwords for the migrated accounts.
	
	NOTE: Make sure that the password option you select conforms to the password
	policy set in User Manager for Domains; otherwise, errors may occur when you
	perform the migration.
	
	Usernames:
	
	Use this section to specify the action to be taken when a duplicate account name
	is found in the Windows NT domain being migrated to.
	
	Group Names:
	
	Use this section to specify the action to be taken when a duplicate group name is
	found on the Windows NT domain being migrated to.
	
	Default:
	
	Use this section to specify account policies to be used and whether or not
	NetWare Supervisor rights should be transferred to the Windows NT domain.
	
	NOTE: The Migrate NetWare Specific Account Information option on the Defaults tab
	is only available if File and Print Services for NetWare (FPNW) is installed on
	the computer from which you are running the Migration Tool for NetWare.
	
	Advanced:
	
	Click the Advanced button to specify a trusted domain that you want to migrate
	users to.
	
	Transfer Users and Groups:
	
	When this check box is selected, the tool transfers NetWare-specific account
	information including grace logins, limiting concurrent connections, and station
	restrictions.
	
	NOTE: User disk volume restrictions are not supported, nor are they transferred.
	Also, when transferring NetWare accounts, new passwords must be set for the
	accounts because Windows NT cannot read users' passwords, as they are stored in
	encrypted form.
	
	Use Mappings in File:
	
	When this option is selected, the mapping file specifies how account information
	is transferred to Windows NT. The mapping file will only transfer those user
	accounts and groups that are included in the mapping file.
	
	You can create a new mapping file, or edit an existing file when you transfer
	user or group account information. The mapping file also has a comma-delimited
	format that makes it easier to transfer the information into a spreadsheet. The
	format is as follows:
	
	  <old name>, <new name>, <password>
	
	When you create a new mapping file, it is created as a text file and is
	automatically stored in the %SystemRoot%\System32 folder as a *.MAP file.
	
	To create a mapping file when you transfer accounts, follow these steps:
	
	1. In the Migration Tool for NetWare, click User Options.
	
	2. In the User and Group Options dialog box, click the Use Mappings in File
	  check box to select it, and then click Create.
	
	3. In the Create Mapping File dialog box, type a name for the mapping file in
	  the Use Mappings in File field.
	
	  NOTE: You can also click the ellipses (...) button to browse for a file.
	
	4. Click to select the Include User Names check box to include user names in the
	  mapping file.
	
	5. Click to select one of the following password options:
	
	   - No password: User accounts are transferred with a blank password.
	
	   - Password is Username: The new password is the same as the user name.
	
	   - Password is <field>: The text entered here is used for all
	     passwords.
	
	6. To include group names in the mapping file, click the Include Group Names
	  check box to select it.
	
	7. Click OK, and you should receive the following message:
	
	  Mapping file created successfully. Do you want to edit it?
	
	NOTE: Clicking Yes opens the mapping file in Notepad.exe and allows you to remove
	user accounts that you do not want transferred by deleting those user names. You
	may also change users' names and passwords, as needed.
	
	Details of the File Options Button
	----------------------------------
	
	Clicking File Options in the Migration Tool for NetWare allows you to customize
	what resources, such as files and folders, are to be migrated.
	
	Transfer Files:
	
	In the upper left-hand corner is a check box for the Transfer Files option. If
	you click to clear this check box, the migration process migrates only user
	groups and individual users. No directories or files from the NetWare server are
	migrated. Therefore, to ensure files migrate from NetWare to Windows NT, do not
	click this check box to clear it.
	
	Below the Transfer Files check box is a double-column list box. On the left side
	is the NetWare server from which information will be migrated. On the right side
	is the computer running Windows NT Server to which the information will be
	migrated.
	
	ADD   : This button allows you to select NetWare volumes to migrate.
	        Because all volumes are selected for migration by default, this
	        button is unavailable unless a volume has been previously
	        deleted.
	
	DELETE: This button deletes the currently selected NetWare volume and
	        Windows NT Server share that is highlighted in the list.
	
	MODIFY: This option allows you to modify the location where resources
	        will be located on the computer running Windows NT Server. Also,
	        a new share can be created in this dialog box.
	
	FILES : This option allows you to selectively pick which files and
	        folders are to be migrated.
	
	Security:  NetWare Migrated to Windows NT
	-----------------------------------------
	
	When the NetWare volumes are migrated to a computer running Windows NT Server,
	permissions on files and folders are only preserved if the volume is migrated to
	an NTFS volume.
	
	In NetWare, a user with explicit trustee rights to a low-level folder in the tree
	is automatically allowed read and file scan access to folders higher than that
	low-level folder, even if they are not given trustee rights to do so. However,
	Windows NT Server enforces security at every folder level. On a computer running
	Windows NT Server, if a user has no permissions for a high-level folder, then
	the user cannot access that folder or see its contents.
	
	So that NetWare users do not lose the ability to browse the tree if they have
	permissions on lower-level folders, the Migration Tool for NetWare checks
	whether trustee rights are set at the root of the NetWare volume being
	transferred. If there are no trustee rights set at that level, then the
	Migration Tool for NetWare grants the Domain Users group the Read Execute (RX)
	permissions for every folder of the transferred volume, allowing users to browse
	the volume.
	
	If you want to change these permissions after the volume has been transferred,
	you should use the CACLS tool. Using CACLS, you can use a single command to
	revoke the permissions granted to Domain Users throughout the tree, without
	altering any other permissions granted at any level in the tree.
	
	To use CACLS to revoke the permissions of Domain Users for all folders in the
	volume, change to the root of the volume and type the following command:
	
	CACLS /T /E /R "domain users"
	
	In this command, the /T switch specifies to revoke the permissions for every
	subfolder of the current folder, the /E switch specifies to not change
	permissions granted to other groups or users in those folders, and the /R
	"domain users" switch revokes the permission granted to domain users.
	
	Permissions: NetWare Migrated to Windows NT
	-------------------------------------------
	
	The individual permissions (and their abbreviations) are:
	
	  Read (R)
	  Execute (X)
	  Change Permissions (P)
	  Write (W)
	  Delete (D)
	  Take Ownership (O)
	
	Directory Permission   Explanation
	----------------------------------
	
	No Access             User cannot access the directory in any way, even
	                      if the user is a member of a group that has been
	                      granted access to the directory.
	
	List (RX)             User can only list the files and subdirectories in
	                      this directory and change to a subdirectory of this
	                      directory. User cannot access new files created in
	                      this directory.
	
	Read (RX)             User can read the contents of files in this
	                      directory and can run applications in the
	                      directory.
	
	Add (WX)              User can add files to the directory but cannot read
	                      or change the contents of current files.
	
	Add & Read (RWX)      User can add files and change the contents of
	                      current files.
	
	Change (RWXD)         User can read and add files and change the content
	                      of current files.
	
	Full Control (All)    User can read and change files, add new ones,
	                      change permissions for the directory and its files,
	                      and take ownership of the directory and its files.
	
	Directory Rights
	----------------
	
	  
	  +---------------------------------------------------------------------------+
	  | NetWare Directory Rights | Corresponding Windows NT Directory Permissions | 
	  +---------------------------------------------------------------------------+
	  | Read (R)                 | Read (RX)                                      | 
	  +---------------------------------------------------------------------------+
	  | Write (W)                | Write (W)                                      | 
	  +---------------------------------------------------------------------------+
	  | Create (C)               | Write (W)                                      | 
	  +---------------------------------------------------------------------------+
	  | Erase (E)                | Delete (D)                                     | 
	  +---------------------------------------------------------------------------+
	  | Modify (M)               | Write (W)                                      | 
	  +---------------------------------------------------------------------------+
	  | File Scan (F)            | Read (R)                                       | 
	  +---------------------------------------------------------------------------+
	  | Access Control (A)       | Change Permissions (PO)                        | 
	  +---------------------------------------------------------------------------+
	
	The next table shows how rights set using Windows NT are mapped for NetWare
	clients:
	
	Windows NT Directory Permissions   Corresponding NetWare Directory Rights
	-------------------------------------------------------------------------
	
	  
	  +-----------------------------------------------------------------------------------+
	  | Windows NT Directory Permissions | Corresponding NetWare Directory Rights         | 
	  +-----------------------------------------------------------------------------------+
	  | List (RX)                        | Read, File (RF)                                | 
	  +-----------------------------------------------------------------------------------+
	  | Read (RX)                        | Read, File (RF)                                | 
	  +-----------------------------------------------------------------------------------+
	  | Add (WX)                         | Write, Create, Modify (WCM)                    | 
	  +-----------------------------------------------------------------------------------+
	  | Add & Read (RWX)                 | Read, Write, Create, Modify, File Scan (RWCMF) | 
	  +-----------------------------------------------------------------------------------+
	  | Change (RWXD)                    | Read, Write, Create, Modify, File Scan (RWCMF) | 
	  +-----------------------------------------------------------------------------------+
	  | Full Control (All)               | Supervisor (S)                                 | 
	  +-----------------------------------------------------------------------------------+
	
	File Rights
	-----------
	
	NOTE: The Windows NT operating system does not support the Create (C) and File
	Scan (F) rights for files, but Windows NT does assign these permissions at the
	directory level, as shown in the previous table.
	
	  
	  +------------------------------------------------------------+
	  | NetWare File Rights | Corresponding Windows NT File Rights | 
	  +------------------------------------------------------------+
	  | Supervisory (S)     | Full Control (All)                   | 
	  +------------------------------------------------------------+
	  | Read (R)            | Read (RX)                            | 
	  +------------------------------------------------------------+
	  | Access Control (A)  | Change Permissions (PO)              | 
	  +------------------------------------------------------------+
	  | Create (C)          | Write (W)                            | 
	  +------------------------------------------------------------+
	  | Erase (E)           | Delete (D)                           | 
	  +------------------------------------------------------------+
	  | Modify (M)          | Write (W)                            | 
	  +------------------------------------------------------------+
	  | Write (W)           | Write (W)                            | 
	  +------------------------------------------------------------+
	
	The following table shows how file rights are mapped from Windows NT Server to
	Novell NetWare:
	
	  
	  +-----------------------------------------------------------------------------+
	  | Windows NT File Permissions | Corresponding NetWare File Rights             | 
	  +-----------------------------------------------------------------------------+
	  | Read (RX)                   | Read, File (RF)                               | 
	  +-----------------------------------------------------------------------------+
	  | Change (RWXD)               | Read, Write, Create, Modify, File Scan(RWCMF) | 
	  +-----------------------------------------------------------------------------+
	  | Full Control (All)          | Supervisor (S)                                | 
	  +-----------------------------------------------------------------------------+
	
	File Attributes
	---------------
	
	Both NetWare and Windows NT operating systems have assignable file attributes.
	The following table shows how file attributes are mapped between the NetWare and
	Windows NT operating systems:
	
	NetWare File Attributes   Windows NT File Attributes
	----------------------------------------------------
	
	NetWare File Attributes   Windows NT File Attributes
	----------------------------------------------------------------------
	
	Read Only (Ro)            Read Only (R)
	Delete Inhibit (D)        Read Only (R), or remove user permissions to
	                          delete the file.
	Rename Inhibit            This is assigned at the directory level by
	                          removing user permissions to write to the
	                          directory.
	Archive Needed (A)        Archive (A)
	System (Sy)               System (S)
	Hidden (H)                Hidden (H)
	Execute Only (X)          Execute (E). On Windows NT, the execute
	                          attribute can be reset by the administrator.
	Read Audit (Ra)           Audit Read, Audit Execute. These are fully
	                          supported.
	Write Audit (Wa)          Audit Write, Audit Delete. These are fully
	                          supported.
	
	Additional query words: nwconv convert
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
