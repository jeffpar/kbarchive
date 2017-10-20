---
layout: page
title: "Q198995: XADM: Fatal Error Installing Exchange Server on MSCS"
permalink: /kb/198/Q198995/
---

## Q198995: XADM: Fatal Error Installing Exchange Server on MSCS

{% raw %}

	Article: Q198995
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 17-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install a Microsoft Cluster Server (MSCS), you try to re-install
	Microsoft Exchange Server before removing all known Exchange Server components.
	You receive the following fatal error message:
	
	  Check that you have sufficient memory and disk space available.
	
	And you try running Setup again.
	
	CAUSE
	=====
	
	You receive this error because the Remove All Option did not remove all the
	registry keys associated with Exchange Server.
	
	NOTE: The Remove All button is displayed when you run Exchange Server Setup and
	select Exchange Server 5.5. Exchange Server detects the presence of an existing
	Exchange Server computer and prompts you to remove all.
	
	RESOLUTION
	==========
	
	Remove the ESE97 Exchange Server registry keys and all services beginning with
	MSExchange located under the
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services registry key. Delete all
	occurrences of the Exchange Server folder, Exchsrvr, from all drives.
	
	Also remove the ESE97 registry key located under
	HKEY_LOCAL_MACHINE\Software\Microsoft and the SETUP key under
	HKEY_LOCAL_MACHINE\Software\Microsoft\Exchange.
	
	WORKAROUND
	==========
	
	Use the Exchange Server Setup program to remove the Exchange Server using the
	Remove All option of the Setup program, then manually delete any remaining
	registry entries and manually delete the Exchsrvr folder.
	
	-or-
	
	Stop the Exchange Server services, then delete ALL the Exchange Server registry
	entries under HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services and manually
	delete the Exchsrvr folder.
	
	MORE INFORMATION
	================
	
	Be sure to make a backup of the Dsadata, Mdbdata, and Mtadata folders before
	deleting the Exchsrvr folders.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
