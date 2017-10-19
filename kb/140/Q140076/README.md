---
layout: page
title: "Q140076: PC Gen: Err Msg: User &lt;Mailbox Name&gt; Not in the POL..."
permalink: /kb/140/Q140076/
---

## Q140076: PC Gen: Err Msg: User &lt;Mailbox Name&gt; Not in the POL...

	Article: Q140076
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	GIMPORT.EXE does not simplify the administrative overhead associated with groups
	spanning multiple postoffices. Every member of a group spanning multiple
	postoffices MUST exist in the Postoffice Address List (POL) prior to running
	GIMPORT, or you will get the following error for each user not on the list:
	
	  User "mailbox name" not in postoffice address list. Cannot add to group XXX.
	
	CAUSE
	=====
	
	One or more users in the group file that spans multiple postoffices was not
	present in the POL prior to running GIMPORT.
	
	RESOLUTION
	==========
	
	In order for the GIMPORT process to work correctly, each External postoffice
	must have all users from all other External postoffices appear in their POL
	prior to running GIMPORT.EXE. GIMPORT can only create, modify, or delete groups
	containing Microsoft Mail users that are present in the POL.
	
	NOTE: You can automatically add users to the POL by using the IMPORT.EXE program
	that is included with Microsoft Mail for PC Networks.
	
	All users included in the group file spanning multiple postoffices will have to
	be manually added to each of the External Postoffice Lists prior to executing
	the GIMPORT process.
	
	Additional query words: 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320a kbMailPCN350
	Version           : WINDOWS:3.2a,3.5
	
	=============================================================================
	
