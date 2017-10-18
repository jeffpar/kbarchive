---
layout: page
title: "Q117260: PC Adm: Err Msg: Alias Does Not Exist..."
permalink: kb/117/Q117260/
---

## Q117260: PC Adm: Err Msg: Alias Does Not Exist...

	Article: Q117260
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the IMPORT utility (IMPORT.EXE) to modify addresses in the
	postoffice or to modify a gateway address list (for a SNADS gateway address, for
	example), the following error may appear while IMPORT.EXE is running:
	
	  #04/14/94 15:25:24 | Error [ 29] Alias does not exist Fser Number 3 (3)
	  D Fser Number 3 SNADS:SNADSGATE/SNADSDGN/user3
	
	The SNADS address list, and possibly the global address list (GAL), will then
	contain two entries for one user.
	
	CAUSE
	=====
	
	This problem occurs when the entry for the modified address list in the text
	file used by IMPORT.EXE is incorrectly spelled. For example, a section of such a
	text file, for a SNADS gateway address list, may look like the following:
	
	  M User Number 12                       snads:snadsgate/snadsdgn/user12
	
	    Used to be Number 12                 snads:snadsgate/snadsdgn/user12
	
	  M Fser Number 3                        snads:snadsgate/snadsdgn/user3
	
	    Used to be Number 3                  snads:snadsgate/snadsdgn/user3
	
	The first use of the "M" transaction code is correct; the administrator correctly
	entered "User Number 12" as the name to modify. The second line of this (first)
	"M" transaction is the modification to "User Number 12".
	
	The second use of the "M" transaction is incorrect because the administrator
	incorrectly typed the name to be modified: instead of typing "User Number 3",
	the administrator typed "Fser Number 3". The second line of this (second) "M"
	transaction then contains the modified user name.
	
	The expected result of this incorrect text entry is that IMPORT.EXE ignores the
	incorrectly entered "M" command. However, this is not the case; IMPORT.EXE reads
	"M Fser Number 3" and creates an entry in the address list that points to
	SNADS:SNADSGATE/SNADSDGN/USER3 with the name "Fser Number 3". IMPORT.EXE then
	ignores the second line of the "M" transaction.
	
	The result is an address list with two entries pointing to a single MBG and KEY
	combination.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for PC Networks. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: Import Modify
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
