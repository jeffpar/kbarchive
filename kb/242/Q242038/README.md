---
layout: page
title: "Q242038: NTOP: NNTP Postings Renamed with .bad Extension During Recovery"
permalink: kb/242/Q242038/
---

## Q242038: NTOP: NNTP Postings Renamed with .bad Extension During Recovery

	Article: Q242038
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you run a rebuild on a Windows NT Server NNTP site, you may notice that
	the file extensions of newsgroup message posts have been renamed from .nws to
	.bad. These posts are not viewable from a newsgroup client.
	
	MORE INFORMATION
	================
	
	During the NNTP rebuild process, these posts were found to be corrupted and were
	renamed with the .bad extension. Use the following steps to attempt to recover
	these posts:
	
	1. Stop the Microsoft NNTP service.
	
	2. Open a command prompt.
	
	3. Change directories to the NNTP root directory, typically
	  C:\Inetpub\Nntpfile\Root.
	
	4. Change directories again to one of the subdirectories under Root that
	  represents one of your newsgroups, for example, Techtalk.
	
	5. Type "ren *.bad *.nws" (without the quotation marks), and press ENTER. This
	  renames the files with a .bad extension to .nws.
	
	6. Repeat this process for each newsgroup directory and subdirectories.
	
	7. Open the Internet Information Server Microsoft Management Console (MMC).
	  Right-click your NNTP site, and on the Task menu, click Rebuild Server.
	
	8. Click "Thorough Rebuild Type", and click Start.
	
	9. When the rebuild is done, click Finished.
	
	10. Start the Microsoft NNTP service, and verify that the newsgroup posts appear
	  within a newsgroup client.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
