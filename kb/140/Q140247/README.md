---
layout: page
title: "Q140247: PC WRmt: Err Msg: A TPL File Is Missing from your Server..."
permalink: kb/140/Q140247/
---

## Q140247: PC WRmt: Err Msg: A TPL File Is Missing from your Server...

	Article: Q140247
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a new gateway entry to the Personal Address Book (PAB) of a Remote
	client running against a postoffice (PO) in another language, you will receive
	the following error message in the appropriate language:
	
	  A TPL file is missing from your server - contact your administrator.
	
	CAUSE
	=====
	
	The TPL file that corresponds to the gateway in the language of the remote
	client is missing from the TPL directory on the postoffice and the Remote
	client. Each gateway has corresponding TPL files in the various languages.
	
	RESOLUTION
	==========
	
	To use Mail Remote for Windows with a PO in a different language, you must first
	copy the TPL files associated with the appropriate gateway from a PO in the same
	language as the Remote client to the PO. Then use the Regenerate command from
	the Remote menu before you create the data disk for the remote user.
	
	
	Additional query words: 3.20 remote gateway foreign language
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
