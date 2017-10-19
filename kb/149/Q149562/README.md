---
layout: page
title: "Q149562: STOP Msg: &quot;c000021a &quot;- Using Local Path for Mandatory Profile"
permalink: /kb/149/Q149562/
---

## Q149562: STOP Msg: &quot;c000021a &quot;- Using Local Path for Mandatory Profile

	Article: Q149562
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you specify a local path for a mandatory profile location in User Manager for
	a non-administrator account, the user will get the following error when logging
	on at the server console:
	
	  Unable to log you on because your mandatory profile is not available.
	
	The following STOP message appears after the user clicks OK:
	
	  STOP: c000021a
	
	CAUSE
	=====
	
	Note that this problem only occurs for users logging on locally at the server
	where their profiles are located. There are two situations that will cause this
	problem. First, the profile may not actually be in the specified location.
	Second, users may have a local path for the profile instead of a network path.
	That is, if the profile is located in c:\users\default on the server A1 and the
	Default directory is shared as \\A1\Default, the correct profile path
	is\A1\Default\<profilename>. If c:\Users\Default\<profilename> is
	specified, the profile won't be found, and you will get the above error
	messages.
	
	Administrators can use either the local path or the network path without
	problems.
	
	RESOLUTION
	==========
	
	This problem has been corrected in Service Pack 4 for Windows NT version 3.51
	and Windows NT 4.0 .
	
	Administrators and other users can use either the local path or the network path
	without generating errors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3. 50 3.51.
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt mandatory profile stop
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
