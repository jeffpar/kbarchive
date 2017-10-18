---
layout: page
title: "Q254650: HTML Documents Tagged for Robot Exclusion Appear in Query Result"
permalink: kb/254/Q254650/
---

## Q254650: HTML Documents Tagged for Robot Exclusion Appear in Query Result

	Article: Q254650
	Product(s): Internet Information Server
	Version(s): WINDOWS:; winnt:2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	HTML documents that are tagged for robot exclusion with <meta name="robots"
	content="noindex"> appear in query results if you query one of the following
	properties:
	
	   - Filename
	
	- Size
	
	- Write
	
	No other properties appear in the index.
	
	WORKAROUND
	==========
	
	To work around this issue, do one of the following:
	
	- Use Site Server Search instead of Index Server.
	
	-or-
	
	- Upgrade to Windows 2000 Indexing Service. In Windows 2000, you can set the
	  FILE_ATTRIBUTE_NOT_CONTENT_INDEXED file attribute to completely prevent
	  documents from being indexed. To do this, perform the following steps:
	
	  1. In Windows Explorer, select the desired file or directory.
	
	  2. Right-click the file or directory, and then select Properties.
	
	  3. On the General tab, select Advanced Attributes.
	
	  4. In the Advanced Attributes dialog box, click to uncheck the For fast
	     searching, allow Index Service to index this file check box.
	
	  5. Click OK to confirm the changes.
	
	
	Additional query words: result
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbIdxServSearch kbAudDeveloper kbWinAdvServSearch kbIdxServ200
	Version           : WINDOWS:; winnt:2.0
	Hardware          : x86
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
