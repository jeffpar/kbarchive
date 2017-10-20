---
layout: page
title: "Q167247: XFOR: Dirsync Fails to Import Addresses with Template Info"
permalink: /kb/167/Q167247/
---

## Q167247: XFOR: Dirsync Fails to Import Addresses with Template Info

{% raw %}

	Article: Q167247
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	The directory synchronization agent may incorrectly ignore some incoming
	addresses if the first line provided with template information contains more
	than 32 characters.
	
	An examination of the incoming Srvupds.glb file may show entries similar to this
	one:
	
	  A Doe, John                      SNADS:NETWORK/POSTOFFICE/JOHND
	  M Doe, John                      SNADS:NETWORK/POSTOFFICE/JOHND
	  - ATTRIBUTE 1:/ATTRIBUTE DATA
	  - ATTRIBUTE 2:/ATTRIBUTE DATA
	  - ATTRIBUTE 3:/ATTRIBUTE DATA
	
	This particular entry fails because the line for "ATTRIBUTE 1" is more than 32
	characters long.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Modify the transaction to be shorter than 32 characters.
	
	Additional query words: SNADS
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	

{% endraw %}
