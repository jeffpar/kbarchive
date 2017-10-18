---
layout: page
title: "Q263024: XADM: RoleAdmin Installation and Script Errors on Windows 2000"
permalink: kb/263/Q263024/
---

## Q263024: XADM: RoleAdmin Installation and Script Errors on Windows 2000

	Article: Q263024
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3, used with:
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you install the RoleAdmin application on a Windows 2000 Server-based
	computer that is running Exchange Server 5.5 Service Pack 3 in a Microsoft
	Windows NT Server 4.0 domain, you may receive the following error message:
	
	  Cannot rename temporary file. The file could not be installed.
	
	If you click OK, the installation continues. However, if you load the RoleAdmin
	application in a browser and create a new role, when you click Create Role, you
	receive an error message that contains the following line (the exact error
	message text may vary according to the browser that you use):
	
	  Line: 8
	  Error: Unterminated String Constant
	
	CAUSE
	=====
	
	This issue can occur if necessary permissions for RoleAdmin are missing on the
	computer that is running Windows 2000 Server (in a Windows NT Server 4.0 domain
	only).
	
	WORKAROUND
	==========
	
	To work around this issue, assign the appropriate permissions:
	
	1. Start the Exchange Server Administrator program.
	
	2. On the Tools menu, click Options.
	
	3. Click the Permissions tab, click to select the "Show permissions page for all
	  objects" check box, click to select the "Display rights for roles on
	  Permissions page" check box, and then click OK.
	
	4. Click to expand your site, click the Recipients container, and then click
	  Properties on the File menu.
	
	5. Click the Permissions tab, click Add, click Everyone, and then click OK.
	
	6. Under Rights, make sure that only the following check boxes are selected:
	
	   - The Add Child check box
	
	   - The Modify User Attributes check box
	
	   - The Delete check box
	
	7. Click OK, and then start the RoleAdmin application to create and modify new
	  roles.
	
	NOTE: When you add these permissions to the Recipients container, you grant
	permission to the Everyone group to add, edit, and delete mailboxes in this
	container and this container's subcontainers. Take this into account when you
	add these permissions.
	
	MORE INFORMATION
	================
	
	If you have installed RoleAdmin on a Windows 2000 Server-based computer that is
	running Exchange Server 5.5 Service Pack 3 in a Windows 2000 Server domain, when
	you load http://servername/roleadmin in a browser and try to log on in the Role
	Administrator page by using a valid account, you receive the following error
	message:
	
	  Organization or site not found.
	  Error number: 80072020
	  Error Description:
	
	This error message is displayed because the RoleAdmin application is not
	supported on Windows 2000 Server. There is no resolution for this issue. The
	workaround in this article allows the application to run in a Windows NT 4.0
	domain, but it is not possible to run the RoleAdmin application in a Windows
	2000 Server Active Directory domain.
	
	For additional information about Exchange Server permissions, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q168753 XADM: Microsoft Exchange Roles, Rights, and Permissions
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
