---
layout: page
title: "Q149828: CACLS /C Doesn't Work with /T switch"
permalink: kb/149/Q149828/
---

## Q149828: CACLS /C Doesn't Work with /T switch

	Article: Q149828
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the CACLS/T parameter to change an access control list (ACL), the
	command does not finish if the CACLS command also has the /C parameter provided
	and an "access denied" error is reached. The CACLS command stops at the first
	occurrence of an "access denied" error.
	
	
	MORE INFORMATION
	================
	
	The Cacls.exe security utility located in the %Systemroot%\System32 directory
	displays or modifies access control lists (ACLs) of files. The CACLS /? command
	yields the following output on its usage:
	
	 CACLS filename [/T] [/E] [/C] [/G user:perm] [/R user [...]]
	
	                [/P user:perm [...]] [/D user [...]]
	    filename      Displays ACLs.
	    /T            Changes ACLs of specified files in
	                   the current directory and all subdirectories.
	    /E            Edit ACL instead of replacing it.
	    /C            Continue on access denied errors.
	    /G user:perm  Grant specified user access rights.
	                  Perm can be: R  Read
	                               C  Change (write)
	                               F  Full control
	    /R user       Revoke specified user's access rights (only valid with
	                  /E).
	    /P user:perm  Replace specified user's access rights.
	                  Perm can be: N  None
	                               R  Read
	                               C  Change (write)
	                               F  Full control
	    /D user       Deny specified user access.
	
	Wildcards can be used to specify more that one file in a command.
	You can specify more than one user in a command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	Additional query words: prodnt ACL security utility utils
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
