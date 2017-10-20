---
layout: page
title: "Q162947: XCLN: Exchange Client Using FTP TCP/IP on Token Ring Network"
permalink: /kb/162/Q162947/
---

## Q162947: XCLN: Exchange Client Using FTP TCP/IP on Token Ring Network

{% raw %}

	Article: Q162947
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	-------------------------------------------------------------------------------
	
	*****************************************************************
	**                          - WARNING -                        **
	**    THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN    **
	**    CONFIRMED, EDITED OR TESTED BY MICROSOFT.  USE ONLY      **
	**    WITH DISCRETION.                                         **
	*****************************************************************
	
	SYMPTOMS
	========
	
	When you are running the Microsoft Exchange Windows 3.x client on Windows 3.1
	and using FTP's TCP/IP protocol stack, the following error message may appear:
	
	  A network error has occurred. Please contact your administrator.
	
	This usually happens when you are accessing the Address Book, trying to check
	details of names in the Global Address Book, synchronizing local Schedule+ file
	to server, sending and receiving large attachments, or moving messages from PST
	to server-based folder. It is also more likely to happen on Token Ring.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Add the following entry to the Pctcp.ini file:
	
	     [pctcp kernel-vxd]
	     window = 1024
	
	MORE INFORMATION
	================
	
	For more information about FTP Software, see:
	
	  FTP Software - PC/TCP
	  FTP Software - can be reached at http://www.ftp.com
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword3
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
