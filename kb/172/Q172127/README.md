---
layout: page
title: "Q172127: File Access Error Using Mcafee Netshield and Word 6.0 or Later"
permalink: /kb/172/Q172127/
---

## Q172127: File Access Error Using Mcafee Netshield and Word 6.0 or Later

{% raw %}

	Article: Q172127
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run McAfee Netshield version 2.52 for Windows NT and Microsoft Word 6.0
	or later, you may receive a "File Access Error" when trying to save a document.
	
	CAUSE
	=====
	
	The problem is caused by the way McAfee NetShield 2.32a scans Word temporary
	files.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following workarounds:
	
	- Remove McAfee Netshield or upgrade it to version 2.53a or later.
	
	  -or-
	
	- Disable the Fast Save feature in Microsoft Word. To disable this feature,
	  perform the following steps:
	
	  1. In Word, click Options from the Tools menu.
	
	  2. In the Options dialogue box, click the Save tab, and then clear the Allow
	     Fast Saves check box.
	
	-or-
	
	- Disable scanning of Microsoft Word .doc files. This is not recommended, as
	  this will leave the system open to macro virus infections.
	
	MORE INFORMATION
	================
	
	McAfee Netshield is a third party product manufactured McAfee Associates, Inc. a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: virus checker files msword prodnt
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
