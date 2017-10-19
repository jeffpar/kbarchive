---
layout: page
title: "Q95790: WFWG Err Msg: &quot;Mail Could Not Connect to Your Mail Server&quot;"
permalink: /kb/095/Q95790/
---

## Q95790: WFWG Err Msg: &quot;Mail Could Not Connect to Your Mail Server&quot;

	Article: Q95790
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Windows for Workgroups Mail is unable to find the MASTER.GLB file in the GLB
	subdirectory of the Workgroup Mail postoffice directory structure, you will
	receive the following error message:
	
	  Mail could not connect to your mail server
	
	CAUSE
	=====
	
	Mail is unable to find MASTER.GLB under any one of the following conditions:
	
	- The Workgroup postoffice computer is unavailable.
	
	- The postoffice directory is not shared.
	
	- You are using the wrong workgroup postoffice name.
	
	- The workgroup postoffice name is invalid.
	
	- The ServerPath= line in your MSMAIL.INI file is incorrect.
	
	- NetWare connectivity is installed.
	
	MORE INFORMATION
	================
	
	The following information describes these conditions in detail.
	
	Workgroup Postoffice Computer Unavailable
	-----------------------------------------
	
	To use the Windows for Workgroups mail system, one workgroup computer must be set
	up as the postoffice. This computer handles user accounts and mail messages for
	the workgroup. To provide these services, the postoffice computer must contain
	the workgroup postoffice directory structure and it must be running in 386
	enhanced mode (it must also be turned on).
	
	NOTE: There can be only one postoffice per workgroup.
	
	The Postoffice Directory Is Not Shared
	--------------------------------------
	
	If the postoffice computer is not sharing the postoffice directory structure, no
	one will be able to access the postoffice. Workgroup users will be able to work
	off line, but they will not be able to receive or send messages.
	
	Use File Manager to make sure the postoffice directory structure is being shared
	on the postoffice computer.
	
	Using Wrong Workgroup Postoffice Name
	-------------------------------------
	
	By default, the workgroup postoffice is named WGPO. However, in your workgroup,
	the name may be different. Make sure the name you are using for the postoffice
	is correct. (It should be the same as the share name on the workgroup postoffice
	computer.)
	
	Workgroup Postoffice Name is Invalid
	------------------------------------
	
	By default, the workgroup postoffice is named WGPO. You can use another name
	provided that it doesn't exceed 8 characters and doesn't contain any spaces. For
	example, changing the share name from "WGPO" (without the quotation marks) to
	"Post Ofc" (without the quotation marks) would cause unsuccessful connections.
	Make sure that the name each user is trying to connect to matches the name that
	was used as the share name on the postoffice computer.
	
	To correct this error, change the share name of the postoffice directory to a
	valid name with eight or fewer characters. To do this:
	
	1. Open File Manager on the postoffice machine.
	
	2. Select the postoffice directory.
	
	3. From the Disk menu, choose Share As.
	
	4. From the Share Directory menu, change the Share Name entry to a name with
	  eight or fewer characters. (Spaces count as characters.)
	
	ServerPath= Line in MSMAIL.INI Is Incorrect
	-------------------------------------------
	
	When you log on to the workgroup mail system, Workgroup Mail checks the
	ServerPath= line in your local MSMAIL.INI file to locate the post office
	computer and directory structure.
	
	If you are using universal naming convention (UNC) style paths to refer to the
	postoffice computer, make sure the computer name and share name are correct. If
	you are not sure of the names, you can use File Manager to connect to the
	postoffice computer and verify the computer and share names.
	
	If you are using a redirected drive letter (M for example) for your postoffice,
	make sure you have a network connection in File Manager that agrees with the
	ServerPath= statement.
	
	NetWare Connectivity Is Installed
	---------------------------------
	
	When you load the real mode redirector, the NetWare portion of the protocol stack
	intercepts Interrupt 21h calls before any other protocol (such as Microsoft
	NetBEUI). When you start Mail, Interrupt 21h is used to find the postoffice
	computer. This results in a problem if your post office is referred to by a UNC
	style path. NetWare does not understand UNC and does not forward the UNC
	information to NetBEUI. Therefore, if NetWare connectivity is installed, Mail
	displays the error message if you start the real mode redirector before you
	start Windows. To avoid this problem, do one of the following:
	
	- Switch to a redirected drive letter style path.
	
	  -or-
	
	- Do not load the real mode redirector before you start Windows.
	
	To switch to a redirected drive letter style path:
	
	1. Add the following to the PROTOCOL.INI file.
	
	  a. Increase the value for SESSIONS= to 20.
	
	  b. Increase the value for NCBS= to 40.
	
	2. In the MSMAIL.INI file, set the SERVERPATH= setting to the valid server drive
	  (for example, SERVERPATH=M:).
	
	3. Quit Windows and redirect the drive letter (M in this example) to the
	  appropriate server and share name (\\<servername>\<sharename>).
	
	Additional query words: 3.10 3.11 err msg post office 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
