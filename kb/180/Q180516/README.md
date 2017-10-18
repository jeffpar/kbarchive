---
layout: page
title: "Q180516: WD97: Subdocuments Not Saved with Master Document on FTP Server"
permalink: kb/180/Q180516/
---

## Q180516: WD97: Subdocuments Not Saved with Master Document on FTP Server

	Article: Q180516
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a master document to a File Transfer Protocol (FTP) server, the
	subdocuments are not saved to the server. Only the master document is saved to
	the FTP site.
	
	RESOLUTION
	==========
	
	Save the master document to a local or network drive and copy the files to the
	FTP server.
	
	  -or-
	
	Save the document in Rich Text Format (RTF). This forces Word to write out each
	member of the master document to disk, starting with the master document and
	proceeding with each subdocument.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Master Document feature in Word allows you to have one master document
	containing many subdocuments. When you save the master document, a unique name
	is created for the subdocuments in the same directory as the master document.
	
	
	Additional query words: sub
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
