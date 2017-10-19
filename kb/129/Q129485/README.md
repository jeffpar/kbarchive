---
layout: page
title: "Q129485: Piping Text Files Using RSH Fails"
permalink: /kb/129/Q129485/
---

## Q129485: Piping Text Files Using RSH Fails

	Article: Q129485
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can use the RSH command to pipe a text file as input to a remote command and
	execute it on a remote host. For example, the following command sends the
	<file name>.TXT to the remote host, which lists the file contents and
	displays the output on the local computer:
	
	  type <file name>.TXT | RSH <host name> more
	
	When you do this under Windows NT version 3.5, the file contents are not
	displayed and the following error message appears:
	
	  Terminal read: The pipe has been ended.
	
	NOTE: In certain circumstances, Windows NT sends an empty file as input for the
	remote command.
	
	WORKAROUND
	==========
	
	To work around this problem, use another command such as RCP to remotely copy
	the file and then use it as input for the remote command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt 3.50 tcpip
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
