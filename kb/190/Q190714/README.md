---
layout: page
title: "Q190714: XADM: Distribution List Name Changes When Moved to PAB"
permalink: /kb/190/Q190714/
---

## Q190714: XADM: Distribution List Name Changes When Moved to PAB

	Article: Q190714
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a distribution list to a Personal Address Book (PAB), the name
	changes.
	
	CAUSE
	=====
	
	The First Name field is an optional attribute for a Distribution List object. It
	is not exposed for entry through the Exchange Server Administrator program.
	However, during an import of a .csv file, if the First Name field is specified
	for a distribution list, the field will be set. When the distribution list is
	copied from the Global Address List to the Personal Address Book, the First Name
	is displayed instead of the Display Name.
	
	WORKAROUND
	==========
	
	To remove the First Name attribute, export the distribution list to a .csv file
	that has "first name" as one of the column headers. Edit the .csv file and
	replace the first name with "~DEL" and re-import the .csv file. You must then
	remove the distribution list from the Personal Address Book and re-add it to
	correct the name in the Personal Address Book.
	
	MORE INFORMATION
	================
	
	For more information on the "~del" command, see Q152854, "XADM: Using Bulk
	Import to Remove Data," in the Microsoft Knowledge Base.
	
	Additional query words: ~del, PAB, DL, Display Name, First Name
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
