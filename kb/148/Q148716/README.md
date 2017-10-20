---
layout: page
title: "Q148716: XADM: Unable to Configure Windows NT Natural Language"
permalink: /kb/148/Q148716/
---

## Q148716: XADM: Unable to Configure Windows NT Natural Language

{% raw %}

	Article: Q148716
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You might receive the following error message during installation of Microsoft
	Exchange Server:
	
	  Microsoft Exchange Server Setup
	
	  Unable to configure the Windows NT Natural Language for the teletex codepage.
	
	  Access is denied. ID C0020005
	
	CAUSE
	=====
	
	This error message usually occurs because the System32\C_20261.nls file is
	marked read-only. It will also occur if the following registry entry is not
	present:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\NLs
	                    \20261:REG_SZ:C_20261.NLS
	
	WORKAROUND
	==========
	
	First, verify that Windows NT Service Pack 4 (SP4) has been installed. Then make
	sure that C_20261.nls is the file that came with SP4 and it is not marked
	read-only. Finally, make sure that the registry entry above is present.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
