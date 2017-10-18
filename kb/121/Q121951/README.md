---
layout: page
title: "Q121951: PC DOS Win: PAB Retains Old Address of a Moved User"
permalink: kb/121/Q121951/
---

## Q121951: PC DOS Win: PAB Retains Old Address of a Moved User

	Article: Q121951
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A user's Personal Address Book (PAB) does not get updated if one of the users in
	the PAB moves to a different postoffice.
	
	For example, suppose user A has user X in his or her PAB. User X then moves to a
	different postoffice, directory synchronization (Dir-Sync) runs, and the Global
	Address List (GAL) is rebuilt. User A still has user X's old address in his or
	her PAB and needs to re-add user X from the GAL.
	
	If user A creates a group (without re-adding X in his PAB) and adds user X from
	the GAL to this group; the group still gets the old address from the PAB even
	though user X's name was selected from the GAL.
	
	It does not matter whether User X was moved by using the MOVEUSER utility or by
	importing his or her Mail message file (MMF) in the new postoffice.
	
	This applies problem occurs with both the MS-DOS and the Windows Mail clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.0b, and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base when it becomes available.
	
	Additional query words: 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
