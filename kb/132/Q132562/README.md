---
layout: page
title: "Q132562: PC WRmt: Server with Net Name MSG Won't Download Address List"
permalink: /kb/132/Q132562/
---

## Q132562: PC WRmt: Server with Net Name MSG Won't Download Address List

	Article: Q132562
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the server you are dialing in to has the network name of MSG, the Mail Remote
	for Windows client will not properly download the address list. Although the
	server reports the entire list was sent, the client only receives a 1-byte file.
	
	CAUSE
	=====
	
	The network name of MSG is the same as the type name for a message. This
	apparently causes the Mail Remote client to believe it is processing a message
	and not an address list. As a result, the remote client does not update the
	list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
