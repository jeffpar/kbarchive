---
layout: page
title: "Q221124: Slow File Saves Using Structured Storage Commits with Large Docs"
permalink: kb/221/Q221124/
---

## Q221124: Slow File Saves Using Structured Storage Commits with Large Docs

	Article: Q221124
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Workstation version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	As the structured storage file increases in size, it takes more time to save
	than expected.
	
	From a developer's point of view, this is what would be occuring in his or her
	code:
	
	  
	
	  Create root storage in  STGM_TRANSACTED mode.
	  Create a single substorage on the root in STGM_DIRECT mode.
	
	  Loop  for a lot of iterations, say 3000.
	  Create a new stream.
	  Write some data, 150 KB for instance, to stream.
	  Commit root, say every 200 iterations, though loop.
	  Release stream.
	  Goto start of loop.
	
	The commit on the root will become very slow as the file gets larger. After 2,800
	150-KB streams have been written, the commit on the root for the last 200
	streams takes about 16 minutes. During the commit operation, 100 percent of the
	CPU is being consumed and no disk activity occurs. It is only just before the
	commit returns that there will be large amounts of disk activity.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	Two hardcoded values used for this function were increased:
	
	  Define MaxPages 24 to 128
	  Define MaxPagesScratch 3 to 16
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
