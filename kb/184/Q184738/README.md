---
layout: page
title: "Q184738: XADM: Error -1811 Running Edbutil or Eseutil With /T Option"
permalink: /kb/184/Q184738/
---

## Q184738: XADM: Error -1811 Running Edbutil or Eseutil With /T Option

	Article: Q184738
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Edbutil /d /t fails with the following error:
	
	  Operation terminated with error -1811 ...
	
	CAUSE
	=====
	
	The /t option is specified incorrectly.
	
	The following command line will fail with -1811:
	
	  Edbutil /d /ispriv /th:\
	
	The following scenario will also fail with -1811:
	
	  Map Drive Letter to H:\ to <computername>\shared directory
	
	  Edbutil /d /ispriv /th:\shared\tempdfrg.edb
	
	Because the H:\ drive is already mapped to the shared directory, the above
	command fails when it does not find a "sub-directory" called "shared" to put the
	Tempdfrg.edb file into.
	
	WORKAROUND
	==========
	
	The correct command line using Edbutil or Eseutil /d with the /t option is as
	follows:
	
	  Edbutil /d </ispriv /ispub or /ds> /t<drive
	  letter>:\tempfilename
	
	  -or-
	
	  Eseutil /d </ispriv /ispub or /ds> /t<drive letter>:\tempfilename
	
	Example:
	
	  Edbutil /d /ispriv /th:\tempdfrg.edb
	
	MORE INFORMATION
	================
	
	Error -1811 refers to JET_errFileNotFound 4294965485.
	
	EDBUTIL should be used with Exchange Server versions 4.0 and 5.0.
	
	ESEUTIL should be used with Exchange Server version 5.5.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
