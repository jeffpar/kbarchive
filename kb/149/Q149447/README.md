---
layout: page
title: "Q149447: XADM: How to Perform a Directory Export of the GAL"
permalink: kb/149/Q149447/
---

## Q149447: XADM: How to Perform a Directory Export of the GAL

	Article: Q149447
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to perform a command line Directory Export of the
	Global Address List (GAL) using the Microsoft Exchange Administrator program.
	
	MORE INFORMATION
	================
	
	First, create an Export.ini file with the following contents:
	
	  [export]
	  basepoint=/o=<orgname>
	  exportobject=mailbox
	  informationlevel=full
	  subcontainers=yes
	
	On the above file, <orgname> is the organization name as seen in the
	Microsoft Exchange Administrator program's containers view.
	
	Then, run the following command from an NT VDM (command prompt), or place it in
	the properties of an icon:
	
	  admin /e <path>\export.csv /o <path>\export.ini
	
	In this case, <path> is the complete path to the file including the drive
	letter and subdirectory.
	
	This will create a comma delimited file that contains the mailboxes of all the
	names in the organization's GAL.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
