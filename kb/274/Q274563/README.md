---
layout: page
title: "Q274563: XADM: 0X3b Error Message Occurs When You Run ESEUTIL /D"
permalink: /kb/274/Q274563/
---

## Q274563: XADM: 0X3b Error Message Occurs When You Run ESEUTIL /D

	Article: Q274563
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the eseutil /d command and the Tempdfrg.edb database (/t switch) is
	pointed to a network drive, the action may fail and the following event ID
	message may be logged in the Application event log:
	
	  Event ID: 0
	  Source Ese97
	  Type: Error
	  Category Performance
	  Description: ((296)) unexpected win32 error: 0x3b
	
	CAUSE
	=====
	
	This issue can occur if there are network connectivity issues. If there is even
	a slight or temporary issue with network connectivity when you run edbutil /d or
	eseutil /d over the network to a mapped drive, the action may fail to complete
	or may fail at the end of the procedure.
	
	In this case, the error is 0x3b. To determine the error message, use a calculator
	to convert 0x3b from hexadecimal to decimal (the result is 59), and then type
	Net helpmsg 59 at command prompt. You receive the following message:
	
	  An unexpected network error occurred.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Copy the database that cannot be defragmented to another server on the
	  network that has 110 percent free space on a drive after you copy the
	  database.
	
	2. Run the defragmentation program on the other server, and then copy the
	  database back to the original server.
	
	This procedure resolves the issue successfully and safely. Slight or intermittent
	network errors usually do not affect the copy procedure; these errors have been
	found to only affect the defragmentation procedure.
	
	MORE INFORMATION
	================
	
	If the computer where you want to perform the defragmentation procedure is a
	Microsoft Windows NT Server or Workstation computer that does not have Exchange
	Server installed on it, either copy Edb.dll and Edbutil.exe for Exchange Server
	5.0, or copy Ese.dll and Eseutil.exe for Exchange Server 5.5.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q163627 XADM: How to Defrag an EDB File on a Non-Exchange Server
	
	For additional information about how to run database defragmentation over the
	network, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q164379 XADM: Run Edbutil Across the Network When Priv.edb Gets Too Big
	
	Additional query words: exch2kp2w defrag
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
