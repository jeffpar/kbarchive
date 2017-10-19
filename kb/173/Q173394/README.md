---
layout: page
title: "Q173394: WD97: Check Links Does Not Accept Some Protocols as Valid Links"
permalink: /kb/173/Q173394/
---

## Q173394: WD97: Check Links Does Not Accept Some Protocols as Valid Links

	Article: Q173394
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	The following list describes how the Check Links feature processes various
	Internet protocols:
	
	  http://     Full check. Verifies that the server can be contacted
	              and the page can be retrieved.
	
	  https://    Full check. Does not verify that a secure connection can be
	              obtained.
	
	  ftp://      Verifies that the server can be contacted. Does not verify
	              that anonymous login will be possible or that the path
	              specified exists.
	
	  mailto:     Does not verify that the address is valid or that mail is
	              deliverable.
	
	  news://     Does not verify the server or newsgroup specified.
	
	  nntp://     Does not verify the server or newsgroup specified.
	
	  wais://     Does not verify the server or path.
	
	  prospero:// Does not verify the server or path.
	
	  others      Reports that the protocol is not recognized, so the link may
	              be broken.
	
	  gopher://   Full check.
	
	For more information about the Check Links feature, click the Office Assistant,
	type "How do I check the links in my document?" (without the quotation marks),
	click Search, click to view "Learn about managing files and links on Web pages",
	and then click the double arrow button after "For information about checking
	links while authoring."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	SUMMARY
	=======
	
	The Check Links feature installed with the August 97 Web Authoring Tools Update
	for Microsoft Word 97 does not recognize some Internet protocols as valid links.
	This article discusses recognized and unrecognized protocols.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
