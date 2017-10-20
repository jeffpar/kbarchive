---
layout: page
title: "Q196168: XADM: Error Configuring Message Service (MSEMS)"
permalink: /kb/196/Q196168/
---

## Q196168: XADM: Error Configuring Message Service (MSEMS)

{% raw %}

	Article: Q196168
	Product(s): Microsoft Exchange
	Version(s): WINNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the one-step merge in the Exmerge.exe utility, the following error
	events are displayed in the Exmerge log file located in C:\Exmerge.log:
	
	  [16:31:21] Copying data from mailbox 'Jim Wallace' ('JIMWA') on Server
	  'BATTLEBAT' to file 'C:\EXMERGEDATA\JIMWA.PST'.
	  [16:31:24] Successfully completed copying mailbox 'Jim Wallace' to file
	  'C:\EXMERGEDATA\JIMWA.PST'
	  [16:31:24] Merging data from file 'C:\EXMERGEDATA\JIMWA.PST' to mailbox
	  'Jim Wallace' ('JIMWAL') on server 'WHAMYOW'.
	  [16:31:25] Error configuring message service (MSEMS)
	  [16:31:25] Errors encountered. Copy process aborted
	  [16:31:25] Deleting file 'C:\EXMERGEDATA\JIMWA.PST'
	  [16:31:25] 1 mailboxes successfully processed. 1 errors encountered
	
	Running in 2-step mode reveals the following:
	
	  Part 1 Log:
	  [16:43:46] Copying data from mailbox 'Jim Wallace' ('JIMWA') on Server
	  'BATTLEBAT' to file 'C:\EXMERGEDATA\JIMWA.PST'.
	
	  Part 2 Log:
	  [16:46:09] Merging data from file 'C:\EXMERGEDATA\JIMW.PST' to mailbox
	  'Jim
	  Wallace' ('JIMW') on server 'WHAMYOW'.
	  [16:46:09] Error. File 'C:\EXMERGEDATA\JIMW.PST' not found. Cannot merge
	  data into mailbox for user 'Jim Wallace' ('JIMW').
	
	CAUSE
	=====
	
	The directory name of the user on the target server is not the same as the user
	name on the original server.
	
	WORKAROUND
	==========
	
	To correct the problem, rename the .pst file created in Step 1 of the
	Exmerge.exe utility to original directory name of the user on the target
	Exchange Server computer.
	
	MORE INFORMATION
	================
	
	This error will occur if the Exchange Server recipient's alias was created with
	a different directory name, and then changed to reflect the original e- mail
	address. This can be determined by looking at the directory name on the new
	Exchange Server computer while running the Exchange Server Administrator program
	in raw mode.
	
	WARNING: Using the raw mode of the Exchange Server Administrator program
	(admin/r) incorrectly can cause serious problems that may require you to
	reinstall Microsoft Windows NT Server and/or Microsoft Exchange Server.
	Microsoft cannot guarantee that problems resulting from the incorrect use of raw
	mode can be solved. Use raw mode at your own risk.
	
	To start the Exchange Server Administrator program in raw mode, at a command
	prompt, type:
	
	  c:\exchsrvr\bin\admin /r
	
	
	Additional query words: EXMERGE MSEMS
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINNT:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
