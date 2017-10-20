---
layout: page
title: "Q140818: STOP Message: After &quot;DIR ..&#92;&quot; is Issued from a Samba Client"
permalink: /kb/140/Q140818/
---

## Q140818: STOP Message: After &quot;DIR ..&#92;&quot; is Issued from a Samba Client

{% raw %}

	Article: Q140818
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After a "DIR ..\" command is sent to a Windows NT version 3.5 or 3.51 computer
	from a Samba (a public domain Server Message Block (SMB) client, a STOP Message
	(blue screen) appears on the Windows NT computer with various error codes,
	including:
	
	  STOP Message 0x0000001E
	
	  -or-
	
	  STOP Message 0x0000001A
	
	  -or-
	
	  STOP Message 0x00000019
	
	
	CAUSE
	=====
	
	This problem is caused by heap corruption in SRV.SYS. The server code contains
	an error, freeing a unicode string twice.
	
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
