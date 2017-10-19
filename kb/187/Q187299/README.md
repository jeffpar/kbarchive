---
layout: page
title: "Q187299: SAMPLE: PERSIST.EXE Persists Class Objects with VB6"
permalink: /kb/187/Q187299/
---

## Q187299: SAMPLE: PERSIST.EXE Persists Class Objects with VB6

	Article: Q187299
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbActiveX kbPersistSt kbVBp600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Persist.exe is a self-extracting compressed file that demonstrates how to
	persist objects in Microsoft Visual Basic 6.0. For the purpose of this article,
	if you can answer "yes" to the following question, then you have object
	persistence:
	
	  Can I save this object for later use?
	
	When an object is created in Visual Basic (by instantiating a Visual Basic
	class), that object exists in memory and is destroyed when the application that
	created it is closed. This article demonstrates how to write the property values
	of an object to a file, in other words, "persist" the object. The object can
	later be recreated from the disk file, even if the computer has been shut down
	and restarted. Visual Basic version 6.0 introduces the capability for persisting
	objects in this manner.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Persist.exe
	  (http://download.microsoft.com/download/vb60pro/sample3/1/WIN98/EN-US/Persist.exe)
	
	Release Date: Aug-31-1998
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When you run the self-extracting file, the following files are expanded:
	
	  PersistClient.exe       : Compiled Client Application
	  Projects.dll            : Compiled ActiveX Component
	  PersistClient.vbp       : Source Project for Client Application
	  Form1.frm               : Client Project Form
	  Projects.vbp            : Source Project for ActiveX Component
	  ApprovedProject.cls     : ActiveX Component Class
	  Readme.txt              : Information
	
	Running the Sample Application
	------------------------------
	
	1. Register Projects.dll using RegSvr32.exe. For example:
	
	  Regsvr32 c:\mydirectory\Projects.dll
	
	2. Run PersistClient.exe.
	
	3. Modify the data on the form, and click Save Object.
	
	4. You can now load, modify, and save the object.
	
	Additional query words: persistable
	
	======================================================================
	Keywords          : kbfile kbsample kbActiveX kbPersistSt kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
