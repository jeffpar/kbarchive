---
layout: page
title: "Q165319: XADM: Can't Import Nested Container Recipients into DL"
permalink: /kb/165/Q165319/
---

## Q165319: XADM: Can't Import Nested Container Recipients into DL

{% raw %}

	Article: Q165319
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the directory import process to create distribution lists (DLs), you
	may encounter a problem if you use recipients from sub-containers to populate
	the DLs. The import process completes without any errors, but the DL does not
	work properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	If you use the directory import process to create distribution lists, you have
	to make sure to use the correct distinguished name (DN) in the Members column of
	the Import file. If you have recipients in sub-containers, but you do not
	include both the top-level container and the sub-container in the distinguished
	name for recipients in sub-containers, the import will complete with no errors,
	but the distribution list will not work properly.
	
	For example, say you have the recipient container "Recipients" and a sub-
	container of "Recipients" called "Other". The "Other" sub-container contains
	non-Exchange recipients.
	
	You then create an import file in order to create a distribution list to send to
	some of the "Other" recipients. Call these "User1" and "User2". The distribution
	list is called "Users".
	
	The following mock import file shows the incorrect way to create the import file
	for this example:
	
	  Obj-Class Display Name Alias Name Directory Name Members
	  --------- ------------ ---------- -------------- -------
	  DL        Users        Users      Users          Other/cn=User1
	  DL        Users        Users      Users          Other/cn=User2
	
	After importing this file, you would receive no errors, and the distribution list
	would get created. However, the distribution list would not work because the
	names in the list cannot be resolved. Notice the Members column only specifies
	the Other container and not its parent container, so when Exchange tries to
	resolve the names in the list, it fails.
	
	Here is the same import file with the correct information in it for this
	example:
	
	  Obj-Class Display Name Alias Name Directory Name Members
	  --------- ------------ ---------- -------------- -------
	  DL        Users        Users      Users
	  Recipients/cn=Other/cn=User1
	  DL        Users        Users      Users
	  Recipients/cn=Other/cn=User2
	
	After performing an import using this file, the distribution list will be created
	and it will work properly. Again, notice the Members column has the parent
	container (Recipients) and the sub-container (Other) in the DN for each
	recipient in the list.
	
	NOTE: If you have already created a faulty distribution list, you will need to
	use the Overwrite option when re-importing the list with the correct format, or
	you can delete the distribution list and re-import it using the correct format.
	Using the "Overwrite" option may not work in the desired fashion depending on
	how your import file is formatted.
	
	Additional query words: wrong icon
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
