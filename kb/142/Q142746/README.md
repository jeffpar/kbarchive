---
layout: page
title: "Q142746: How to Set Up and Administer a Microsoft Mail Post Office"
permalink: kb/142/Q142746/
---

## Q142746: How to Set Up and Administer a Microsoft Mail Post Office

	Article: Q142746
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up and administer a Microsoft Mail workgroup
	post office using the Microsoft Mail transport in Microsoft Exchange. A
	workgroup post office is used to temporarily store messages until the intended
	recipients retrieve them.
	
	Note: Although you can install a workgroup post office from the Windows 98 CD-ROM
	(the location of Wms.exe on the Windows 98 CD-ROM is
	<X>:\Tools\Oldwin95\Message\US), the installation and configuration of
	that workgroup post office is not supported by Microsoft. For additional
	information on workgroup post offices, search the Microsoft Knowledge Base for
	additional articles at the following Web site:
	
	  http://search.support.microsoft.com/kb/c.asp
	
	MORE INFORMATION
	================
	
	Setting Up a Workgroup Post Office
	----------------------------------
	
	To set up a Microsoft Mail workgroup post office, follow these steps:
	
	1. In Control Panel, double-click Microsoft Mail Postoffice.
	
	2. Click Create A New Workgroup Postoffice, and then click Next.
	
	3. Type the path for the post office in the Postoffice Location box, and then
	  click Next. The post office can be located on your local hard disk, or on a
	  network drive. It must be placed in a location that can be accessed by all
	  the users who have accounts on the post office.
	
	  NOTE: A folder named Wgpo0000 is created in the location you specify. Numerous
	  folders are created in the Wgpo0000 folder, all of which must be present for
	  the post office to function correctly.
	
	4. Click Next to confirm the location of the new workgroup post office.
	
	5. In the Enter Your Administrator Account Details dialog box, type the
	  appropriate information about the post office administrator, and then click
	  OK. Only the Name, Mailbox, and Password fields are required.
	
	  NOTE: The Name field represents the name that other Microsoft Exchange users
	  use to identify the post office administrator. The Mailbox field represents
	  the name that the workgroup post office uses to identify the post office
	  administrator. The Mailbox name is normally assigned by the Microsoft
	  Workgroup Postoffice Admin Wizard automatically, and cannot contain spaces.
	
	6. Click OK in the dialog box that appears.
	
	To allow users who have accounts on the post office to access the post office,
	you must share the folder containing the post office. To do so, follow these
	steps:
	
	1. In Windows Explorer or My Computer, use the right mouse button to click the
	  folder containing the post office, and then click Properties on the menu that
	  appears.
	
	2. Click the Sharing tab.
	
	3. Click Shared As and then verify the name of the post office in the Share Name
	  box. If you want to add a comment in addition to the share name, type the
	  comment in the Comment box. The comment is seen by other users when they view
	  a list of computers on the network.
	
	4. To allow all users to access the post office, click Full Access and then
	  click OK. To restrict access to the post office by requiring a password,
	  click Depends On Password, type the password in the Full Access Password box,
	  and then click OK.
	
	Administering a Workgroup Post Office
	-------------------------------------
	
	To administer a Microsoft Mail workgroup post office, follow these steps:
	
	1. In Control Panel, double-click Microsoft Mail Postoffice.
	
	2. Click Administer An Existing Workgroup Postoffice, and then click Next.
	
	3. Type the path for the post office in the Postoffice Location box, and then
	  click Next.
	
	4. Type the mailbox name and password assigned to the post office administrator
	  during the creation of the workgroup post office in the Mailbox and Password
	  boxes, and then click Next.
	
	5. To add a new user to the workgroup post office, click Add User, type the
	  appropriate information about the user, and then click OK. Only the Name,
	  Mailbox, and Password fields are required. To remove a user from the
	  workgroup post office, click the user's name in the list of users, and then
	  click Remove User. To modify the information about a user, click the user's
	  name in the list of users, and then click Details.
	
	Additional query words: winnt
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
