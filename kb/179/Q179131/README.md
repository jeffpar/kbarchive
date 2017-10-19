---
layout: page
title: "Q179131: Files Saved in the Temporary Folder on a ZAK Client Workstation"
permalink: /kb/179/Q179131/
---

## Q179131: Files Saved in the Temporary Folder on a ZAK Client Workstation

	Article: Q179131
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 30-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zero Administration Kit for Windows NT Workstation 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Zero Administration Kit (ZAK) client workstation and you
	save a Microsoft Office document (such as a Microsoft Word document), the
	document may be saved in the temporary folder.
	
	CAUSE
	=====
	
	This behavior can occur if you open a Microsoft Office document that you have
	received as an attachment to an e-mail message, and then save the document. The
	document is saved to the temporary folder by default.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In the Microsoft Office program that opens the attached document, the temporary
	folder becomes the folder in which documents are saved by default until you quit
	the program. If you want to reopen a document you have saved in the temporary
	folder, click Open on the File menu, and then type the complete path to the
	document in the File Name box. For example, to open the Test.doc file located in
	the C:\Temp folder, type the following path in the File Name box:
	
	  c:\temp\test.doc
	
	You may also be able to open the document using the Documents menu. The Documents
	menu lists the documents you have used recently. To view the Documents menu,
	click Start, and then point to Documents.
	
	ZAK client workstations are not restricted from creating or modifying files in
	the temporary folder because many programs, including Microsoft Office, do not
	function properly if the temporary folder is restricted. However, you are not
	able to view the temporary folder in Windows NT Explorer or My Computer. On a
	ZAK client workstation, the default temporary folder is C:\Temp.
	
	
	For additional information about this issue, please see the following article in
	the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q170400
	  TITLE : Unauthorized Program Can Be Installed and Run on ZAK Workstation
	
	For information about the Zero Administration Kit for Windows NT Workstation 4.0,
	please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q170271
	  TITLE : Description of Zero Admin Kit for Windows NT Workstation 4.0
	
	Additional query words: environment variable
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTWsearch kbAudDeveloper kbZAWNTW400
	Version           : WINDOWS:
	
	=============================================================================
	
