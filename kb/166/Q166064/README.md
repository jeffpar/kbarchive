---
layout: page
title: "Q166064: WV: IPF in Word Viewer When Document Opened on Server"
permalink: kb/166/Q166064/
---

## Q166064: WV: IPF in Word Viewer When Document Opened on Server

	Article: Q166064
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbnetwork kbusage kbdta kbviewer word97
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word Viewer 97-2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word Viewer 97-2000, if you attempt to open a document from the
	Open dialog box (on the File menu, click Open) by typing a UNC (Universal Naming
	Convention) path to a directory, you may receive an Invalid Page Fault.
	
	CAUSE
	=====
	
	This problem occurs when you are working on a Windows NT network share and all
	of the following conditions are true:
	
	- The server containing the document is in a different domain than the domain
	  you are currently validated on.
	
	- You have been granted adequate permissions to access the document.
	
	- You do not have a mapped drive to the server and share containing the
	  document.
	
	If it was working correctly, after you typed in the UNC location to the file and
	attempted to open the file, Windows NT would display a dialog box asking for
	your domain and password. If the information you supplied was correct and if you
	had been given permissions to access the file, the document would open.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Map the Network Drive
	-------------------------------
	
	Map a drive to the server and share containing the document, and then open the
	document using the drive letter (rather than the UNC path).
	
	Method 2: Copy and Paste to Network Drive
	-----------------------------------------
	
	1. Connect to the server and share from Windows Explorer and copy the document.
	
	2. Connect to a server and share in a domain that you are currently validated
	  on, and paste the document there.
	
	You should be able to open the document using a UNC path to the server and share
	on which you are validated.
	
	Method 3: Copy and Paste to Local Drive
	---------------------------------------
	
	1. Connect to the server and share from Windows Explorer and copy the document.
	
	2. Paste the document to your local hard disk and open it from there.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about Word Viewer 97-2000, please see the following
	Knowledge Base article:
	
	  
	
	  Q165908 WV: How to Obtain Microsoft Word Viewers
	
	Additional query words: IPF
	
	======================================================================
	Keywords          : kbnetwork kbusage kbdta kbviewer word97 
	Technology        : kbWordViewerSearch kbViewerSearch kbWordViewer97
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	
