---
layout: page
title: "Q197971: XADM: The Exchange Server Tmp.edb File"
permalink: /kb/197/Q197971/
---

## Q197971: XADM: The Exchange Server Tmp.edb File

{% raw %}

	Article: Q197971
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Tmp.edb file is stored in the Exchange Server Mdbdata and Dsadata
	directories which are considered the "working area" for the information store or
	directory services.
	
	The Mdbdata and Dsadata directories also contain Edb.chk (the checkpoint file),
	which is important because it contains a pointer indicating which log file the
	transaction roll-forward process should start with. These directories also
	contain the Tmp.edb file, and it contains temporary information used by the
	information store and directory services while running.
	
	MORE INFORMATION
	================
	
	The Tmp.edb file is not backed up and is deleted when the information store or
	directory service is shut down gracefully.
	
	The Tmp.edb file is also used for transient storage during information store
	maintenance and for temporary tables, like creating indexes or sorting data.
	
	The Tmp.edb file does not need to be backed up.
	
	Additional query words: temp
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
