---
layout: page
title: "Q133252: Windows NT 3.51 GSNW Help Reports The File Is Corrupted"
permalink: /kb/133/Q133252/
---

## Q133252: Windows NT 3.51 GSNW Help Reports The File Is Corrupted

{% raw %}

	Article: Q133252
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Gateway Service for NetWare (GSNW) in Windows NT 3.51 and
	choose Help in Control Panel GSNW, the following error message appears:
	
	  The <drive>:\%SystemRoot%\system32\nwdoc.hlp file is not a Windows Help
	  file, or the file is corrupted.
	
	CAUSE
	=====
	
	The GSNW Setup does not correctly copy the help file to the
	%SYSTEMROOT%\SYSTEM32 directory. The NWDOC.HLP in that directory is only 111
	bytes.
	
	WORKAROUND
	==========
	
	To work around this problem, manually expand NWDOCGW.HL_ from the Windows NT
	Server compact disc (CD) to the %SYSTEMROOT%\SYSTEM32 directory as NWDOC.HLP.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt nwc
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
