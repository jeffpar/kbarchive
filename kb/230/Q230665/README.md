---
layout: page
title: "Q230665: XADM: Why a DL Cannot Be the Owner of Another DL"
permalink: /kb/230/Q230665/
---

## Q230665: XADM: Why a DL Cannot Be the Owner of Another DL

{% raw %}

	Article: Q230665
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You cannot define one Exchange Server distribution list (DL) as the owner of
	another Exchange Server DL. If you try to make one DL become the owner of
	another DL through the Exchange Server Administrator program, you receive the
	following message:
	
	  A Distribution List cannot be the owner of a Distribution List. Would you
	  like to choose another recipient to be the owner of this Distribution List?
	
	Through bulk import, you can bypass this message and force a DL to be the owner
	of another DL, but the ownership will not be effective.
	
	MORE INFORMATION
	================
	
	Any Windows NT account with User permissions on a distribution list has
	permissions equivalent to Owner permissions. In fact, the Owner dialog box is
	simply a friendly interface for adding and removing User permissions for a DL.
	The Windows NT permissions are used to validate "Owner" access during everyday
	operation, not the Owner value itself.
	
	When you modify or clear the Owner attribute, the Administrator program checks
	the Permissions page and makes appropriate changes. The Owner attribute is also
	checked against the Permissions page whenever the DL properties are accessed in
	the Administrator program.
	
	To directly monitor who has effective Owner permissions on a DL, monitor the
	Permissions page as well as the Owner value. By default, the Permissions page
	for a DL is not displayed in the Administrator program interface. To display
	this page:
	
	1. On the Tools menu, click Options.
	
	2. Click Permissions.
	
	3. Click to select the "Show Permissions page for all objects" check box.
	
	If you change the primary Windows NT account for a mailbox that is owner of a DL,
	the DL owner can lose the ability to modify the list. You can correct this by
	accessing the DL properties, and clearing and readding the owning mailbox. This
	forces an update of the Windows NT permissions on the DL.
	
	Be aware that even if you have the proper Windows NT account permissions on a DL,
	you still cannot modify it from the client address book unless you are logged on
	to a mailbox in the DL's home site because copies of the DL in sites other than
	its home site are read-only.
	
	If you want to achieve the functional effect of having a DL own a DL, you can do
	so by using Windows NT groups in either of two ways:
	
	- Create a mailbox, such as DL-Name-Owners, and assign a Windows NT group as
	  the primary Windows NT account for the mailbox. Then assign the mailbox as
	  Owner of the DL. You can then update Owner privileges on the DL by updating
	  membership in the Windows NT group.
	
	- Directly assign User permissions on the DL to a Windows NT group, and then
	  update permissions on the DL by updating membership in the Windows NT group.
	
	Although the first method is more complicated, it has two advantages. First, it
	is "self-documenting"--the scheme is more obvious to new or inexperienced
	administrators. Second, the existence of the owner mailbox in the DL's home site
	allows administrators whose own mailboxes are in different sites to still
	administer the DL by logging on to the local Owner mailbox.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
