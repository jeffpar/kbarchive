---
layout: page
title: "Q174306: XADM: Cannot Delete the Internet Newsgroups Public Folder"
permalink: /kb/174/Q174306/
---

## Q174306: XADM: Cannot Delete the Internet Newsgroups Public Folder

{% raw %}

	Article: Q174306
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you attempt to delete the Internet Newsgroups public folder, while logged on
	to an Exchange Server mailbox that has the role of owner for that folder, you
	may receive the following error message:
	
	  An item could not be deleted. You do not have sufficient permission to
	  perform this operation on this object. See the folder contact of your system
	  administrator.
	
	WORKAROUND
	==========
	
	The Internet Newsgroups public folder cannot be deleted; however, it can be made
	not visible or renamed by a mailbox with the role of owner. To make the Internet
	Newsgroups public folder not visible, do the following:
	
	1. From the Exchange Administrator program, look at the properties of the
	  Internet Newsgroups public folder.
	
	2. On the General Tab, click the Client Permissions button.
	
	3. Highlight default and anonymous names, and uncheck the Folder Visible option
	  for both.
	
	4. Click OK to apply changes on the client permissions for the public folder.
	
	The Internet Newsgroups public folder will no longer be visible to clients
	accessing the Microsoft Exchange Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	
	=============================================================================
	

{% endraw %}
