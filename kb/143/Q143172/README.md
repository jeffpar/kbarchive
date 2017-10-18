---
layout: page
title: "Q143172: Doc Err: Users Cannot Create New Clipbook Pages"
permalink: kb/143/Q143172/
---

## Q143172: Doc Err: Users Cannot Create New Clipbook Pages

	Article: Q143172
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	Page 61 of the Windows NT 3.5 and 3.51 Concepts and Planning Guide states
	the following:
	
	  To create, share, stop sharing, and delete a ClipBook Viewer page,
	  a user must be in one of the following groups on the computer:
	
	     - Administrators
	     - Server Operators
	     - Power Users
	     - Users
	
	This statement is incorrect. Users cannot create new ClipBook pages. Users
	can paste data into existing ClipBook pages when the creator (an
	Administrator, Server Operator or Power User) of the page grants the user
	permission.
	
	Administrators, Server Operators and Power Users have the authority to
	share directories on the network and create shared network objects. When
	you, with only User permissions, attempt to create, share, stop sharing or
	delete a ClipBook Viewer page, the following error message appears:
	
	  You do not have sufficient privileges to perform this action.
	
	This is by design.
	
	Additional query words: prodnt groups
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
