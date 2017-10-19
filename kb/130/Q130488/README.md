---
layout: page
title: "Q130488: Error Message: Error Trying to Add Trustee"
permalink: /kb/130/Q130488/
---

## Q130488: Error Message: Error Trying to Add Trustee

	Article: Q130488
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to assign rights to files on a Windows 95 computer running file and
	printer sharing for NetWare networks using the Novell GRANT utility, you receive
	the following error message:
	
	  Error trying to add trustee
	
	CAUSE
	=====
	
	Windows 95 supports assigning rights to directories only. Assigning rights at
	the file level is not supported. Allowing the GRANT utility to assign rights at
	the file level would be inconsistent with the Windows 95 user interface.
	
	MORE INFORMATION
	================
	
	You can use the GRANT utility to assign rights only to directories on a Windows
	95 computer running file and printer sharing for NetWare networks.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
