---
layout: page
title: "Q189300: Unable to Recover Nested Public Folder"
permalink: kb/189/Q189300/
---

## Q189300: Unable to Recover Nested Public Folder

	Article: Q189300
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error message may appear when you attempt to recover a deleted
	Public Folder; the message appears even if you had proper permissions on the
	folder before it was deleted:
	
	  Outlook was unable to recover some or all of the items in this folder.
	  Make sure you have the required permissions to recover items in this
	  folder, and try again. If the problem persists, contact your
	  administrator.
	
	CAUSE
	=====
	
	This error occurs when the public folder involved is a subfolder and the Windows
	NT account that you are currently logged in as does not have the proper
	permissions on the parent folder.
	
	You do not have the correct permissions to create objects in the parent folder.
	With delete permissions on the subfolder, you can delete the folder but you must
	have delete permissions on the parent folder in order to recover the deleted
	folder.
	
	WORKAROUND
	==========
	
	Either the owner of the parent folder can recover the item or they must grant
	permissions to the subfolder owner.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	
