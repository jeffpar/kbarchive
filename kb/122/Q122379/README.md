---
layout: page
title: "Q122379: WD97: Error Saving Document: &quot;Network or File Permission Error&quot;"
permalink: /kb/122/Q122379/
---

## Q122379: WD97: Error Saving Document: &quot;Network or File Permission Error&quot;

	Article: Q122379
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbnetwork kbole kbdta word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are working over a network and you save a document in Word, the
	following error message may appear:
	
	  There has been a network or file permission error. The network connection may
	  be lost. <Filename.doc>
	
	NOTE: The following error message may also be displayed:
	
	  Make sure that the drive is closed and contains the proper disk or CD.
	
	For additional information about resolving this second error message, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q171406 WD97: How to Disable the Use of UNC
	
	CAUSE
	=====
	
	Case 1
	------
	
	This error message appears when the document is open on two or more computers
	that are running different operating platforms. For example, if the document is
	open on a Macintosh computer and you open it on a second computer running
	Windows or Windows NT, the error occurs when either user tries to save the
	document.
	
	This problem stems from a difference between the ways Macintosh OLE and Windows
	OLE open files. As a result, you cannot save a file on two different operating
	platforms at the same time.
	
	Case 2
	------
	
	This error can occur with Microsoft Word 97 if the Always Create Backup Copy
	option is activated with server or operating systems that do not support long
	file names. This option copies the previous version of a document as a backup
	copy with the name of "Backup of <filename>". As a result, Word cannot
	create a backup copy on server or operating systems that only support 8.3 file
	names (file names with eight characters and a three letter extension).
	
	Case 3
	------
	
	This error occurs in Word 97 for Windows if you save to a MAPROOT type network
	drive connection on a NetWare server where spaces exist in the file or folder
	name.
	
	
	Case 4
	------
	
	This problem may occur if an anti-virus program running on a network has the
	ability to scan for macro viruses in documents in shared network folders.
	
	For example, if you have the following:
	
	- a shared folder on a network server
	
	-and-
	
	- an anti-virus program is running on the network server that is set to monitor
	  the shared folder,
	
	when you attempt to save a document (across the network) to the shared folder,
	the anti-virus checker may cause the error to occur.
	
	Case 5
	------
	
	This problem may occur on Novell networks when the AutoRecover files path is
	either blank or set to a network drive.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods appropriate to
	your situation.
	
	Case 1
	------
	
	Method 1:
	
	Move the document to your local hard disk for editing. Move it back to the server
	after you finish.
	
	Method 2:
	
	Save a copy of the file with a different file name, and work on the copy, either
	on your hard disk or on the server.
	
	Case 2
	------
	
	Turn off the Always Create Backup Copy option by doing the following:
	
	1. Click Options on the Tools Menu.
	
	2. Click the Save tab.
	
	3. Click to clear the Always Create Backup Copy check box.
	
	
	Case 3
	------
	
	Method 1:
	
	Move the document to your local hard disk for editing. Move it back to the server
	after you finish.
	
	Method 2:
	
	Do not use spaces in the directory or document names.
	
	Method 3:
	
	Do not use MAPROOT-drive connections. Map your drive connections to the
	volume-level only.
	
	NOTE: The problem in Case 3 was corrected in Microsoft Office 97 Service Release
	2 (SR-2).
	
	For additional information about SR-2, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	Case 4
	------
	
	Turn off the anti-virus protection on the network server and then try to save the
	document. Contact your anti-virus protection software company for additional
	details and/or updates to their programs.
	
	Case 5
	------
	
	Set the AutoRecover files path to your local drive. To change the AutoRecover
	path, use the following steps:
	
	1. On the Tools menu, click Options.
	
	2. On the File Locations tab, select AutoRecover files and then click Modify.
	
	3. Change the Modify Location dialog box to a folder on your local drive and
	  then click OK.
	
	4. Click OK to close the Options dialog box.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: ibm ibmav pc-cillin intel landesk macafee netshield v-shield
	
	======================================================================
	Keywords          : kbnetwork kbole kbdta word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
