---
layout: page
title: "Q161495: XADM: Setting Up Exchange View-Only Administrators"
permalink: /kb/161/Q161495/
---

## Q161495: XADM: Setting Up Exchange View-Only Administrators

{% raw %}

	Article: Q161495
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up Microsoft Exchange View-Only
	Administrators. This is useful if you want to include users in your organization
	who can run the Exchange Administrator program without having permission to
	modify any object in the Microsoft Exchange organization.
	
	MORE INFORMATION
	================
	
	To set up Microsoft Exchange View-Only Administrators, follow these steps:
	
	1. Determine which domain users will have View-Only rights. Anyone in the Domain
	  Users group is eligible. Permissions belonging to Domain Administrators are
	  not needed.
	
	  NOTE: If you want a user to run the Microsoft Exchange Administrator program
	  at the Microsoft Exchange Server computer itself, you need to assign the "Log
	  on locally" Windows NT user right. This user right is not granted by default
	  to the Domains Users group.
	
	2. Log on as an Administrator and run the Microsoft Exchange Administrator
	  program.
	
	3. Make sure the Permissions tab is visible for all objects. To do this:
	
	  a. From the Tools menu, click Options.
	
	  b. Click the Permissions tab.
	
	  c. Check the "Show Permissions page for all objects" and "Display rights for
	     roles on Permissions page" options.
	
	  d. Click OK.
	
	4. From the Microsoft Exchange Administrator program, click the site where you
	  want to set up the View-Only Administrator, and then select Properties from
	  the File menu.
	
	5. Click the Add button in the Permissions tab.
	
	6. In the Add Users and Groups window, add the user(s) you want to have
	  View-Only Administrative permissions. Then click OK to return to the Site
	  Properties window.
	
	  NOTE: Any regular user with a valid Windows NT account can be selected. You do
	  not need to select a user account with Exchange Administrative permissions.
	
	7. In the "Windows NT accounts with permissions" dialog box, select the user(s)
	  you added in the previous step and click "View Only Admin" in the Roles
	  dropdown list. If "View Only Admin" Does not appear in the list, unmark all
	  checked boxes except the "Logon Rights" in the Rights box. The Roles option
	  should read "View Only Admin" now.
	
	8. Click OK to close the Site Properties window.
	
	The selected Microsoft Exchange users can now run the Microsoft Exchange
	Administrator program and perform monitoring tasks, such as watching Link or
	Server Monitor Status. These users will not be able to add, delete, or modify
	any object in the Microsoft Exchange organization.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
