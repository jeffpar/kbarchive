---
layout: page
title: "Q132043: Err Msg Using %USERNAME% Followed by a Character: The home dir"
permalink: /kb/132/Q132043/
---

## Q132043: Err Msg Using %USERNAME% Followed by a Character: The home dir

{% raw %}

	Article: Q132043
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run User Manager and enter a home directory path that uses one or more
	characters after the %<variable>% string, the following error message
	appears:
	
	  The home directory <Directory Path> for <User Name> could not be
	  created. The user account has been updated. You must create the Home
	  Directory manually.
	
	For example, this problem occurs when you attempt to put your home directory on a
	hidden share (\\SERVER\%USERNAME%$), or you attempt to put your home directory
	on a share with an extension (\\SERVER\%USERNAME%.XXX).
	
	WORKAROUND
	==========
	
	Currently, you can work around this problem only by not using the %USERNAME%
	variable if additional characters need to follow it to complete the share name.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
