---
layout: page
title: "Q221430: XADM: View-Only Admin Can Delete/Create Organization Forms Lib."
permalink: /kb/221/Q221430/
---

## Q221430: XADM: View-Only Admin Can Delete/Create Organization Forms Lib.

{% raw %}

	Article: Q221430
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 20-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are logged on as an Exchange Server View-only Administrator at the site
	level, you can delete an existing Organization Forms Library in the Exchange
	Server Administrator program in the Forms Administrator on the Tools menu.
	
	The View-only Administrator exists only at the site level in Exchange Server. A
	View-only Administrator cannot delete objects on any level in Exchange Server. A
	View-only Administrator can only view objects in Exchange Server.
	
	RESOLUTION
	==========
	
	A View-only Administrator cannot actually delete the Organization Forms Library.
	The Forms Administrator only seems to allow the View-only Administrator to
	delete but the user's permissions are not actually checked. The Forms
	Administrator does not notify you that you do not have permissions to delete a
	form. You may seem to be able to delete a form, and the form is removed from the
	Forms Administrator, but after you close and reopen the Forms Administrator, the
	Forms Library is still there. It is not actually deleted.
	
	The problem exists only in the Forms Administrator, and you cannot delete any
	Form Libraries when you are logged on as a View-only Administrator.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	You may also seem to be able to create a new Organization Forms Library when you
	are logged on as a View-only Administrator. If you create a new form, it appears
	in the Forms Administrator, but after you close and reopen the Forms
	Administrator, the new Organization Forms Library is not there. As described in
	the "Resolution" section, the problem exists only in the Forms Administrator.
	You do not have the right to delete or create an object when you are logged on
	as a View-only Administrator, you only have the Logon right.
	
	To delete an object, you need the Delete right, and to create an object, you need
	the "Add child" right.
	
	For additional information about Exchange Server rights, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q168753 XADM: Microsoft Exchange Roles, Rights, and Permissions
	
	Additional query words: OFL; Organization Forms Library; Organizational; Org
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
