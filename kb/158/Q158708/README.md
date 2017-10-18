---
layout: page
title: "Q158708: XCLN: Newprof Fails to Create a Profile"
permalink: kb/158/Q158708/
---

## Q158708: XCLN: Newprof Fails to Create a Profile

	Article: Q158708
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Newprof.exe fails to create a profile if the command line path to the profile
	descriptor file (.PRF) contains a space.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Find the 16-bit directory name for the directory with a space in its name. To
	  find the 16-bit name, view the directory in File Manager.
	
	2. Substitute the 16-bit directory name for the entry with a space after the -P
	  switch.
	
	  For example, instead of using the command line
	
	  C:\EXCHANGE\NEWPROF.EXE -P c:\test newprof\default.prf
	
	use:
	
	  C:\EXCHANGE\NEWPROF.EXE -P c:\testne~1\default.prf
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The workaround described above is usually not a viable option if you are using
	the variable %USERNAME% in a Windows NT login script to signify the directory
	where the profile descriptor file is located and the path to the user's home
	directory contains a space.
	
	
	Additional query words: Profgen newprof profile stfedit setup editor
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
