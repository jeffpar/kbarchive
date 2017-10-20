---
layout: page
title: "Q196197: PRB: Getting a File From Project Label Using OLE Automation"
permalink: /kb/196/Q196197/
---

## Q196197: PRB: Getting a File From Project Label Using OLE Automation

{% raw %}

	Article: Q196197
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe500 kbSSafe600
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Visual SourceSafe (VSS) OLE automation to get a version of a file
	based on a project-level label, the following unexpected run-time error might
	occur:
	
	  -2147166583
	  Version not found.
	
	CAUSE
	=====
	
	This problem occurs when you are using a Visual SourceSafe version 5.0 database.
	
	RESOLUTION
	==========
	
	Do one of the following to work around this problem:
	
	- Upgrade the database to the version 6.0 format, which also requires the
	  Visual SourceSafe 6.0 client.
	
	- Add one extra line of code to your task procedure (see the MORE INFORMATION
	  section of this article for details).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In the Visual SourceSafe Explorer, you can retrieve a particular version of a
	file based on a project label by viewing the history of that file, selecting the
	inherited project label, and clicking Get. Alternatively, you can specify the
	file and the label from the command line.
	
	You can use the following sample Visual Basic code to accomplish the same task by
	using OLE automation, assuming that the database you are trying to access is in
	the Visual SourceSafe 6.0 format:
	
	  Dim objVSSDB As VSSDatabase
	     Dim objVSSFile As VSSItem
	     Dim objSpecificVer As VSSItem
	
	     Set objVSSDB = New VSSDatabase
	
	     ' Assign values to the Open method parameters.
	     objVSSDB.Open srcsafeini, username, password
	
	     ' Sets file.txt to the object variable.
	     Set objVSSFile = objVSSDB.VSSItem("$/Project1/file.txt", False)
	
	     ' Sets the version of file.txt associated with ProjectLabel.
	     Set objSpecificVer = objVSSFile.Version("ProjectLabel")
	     objSpecificVer.Get "c:\Project1\file.txt"
	
	When you access objects in a Visual SourceSafe 5.0 database, you need to add one
	more line of code. In the above sample, when the objSpecificVer object is set,
	the .VersionNumber property contains the correct version number of the File.txt
	based on the project label, assuming that a valid label is sent to the .Version
	property, but it still contains an invalid object. To work around this, add the
	following line of code just after you set objSpecificVer and just before you
	execute the Get method. For example:
	
	     Set objSpecificVer =
	     objSpecificVer.Version(objSpecificVer.VersionNumber)
	
	This line sets objSpecificVer explicitly by using its own .VersionNumber
	property, from which the .Version property successfully returns a valid object.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	Q153925 FAQ: How Can I Find Out If My VSS Database Has Been Upgraded?
	
	Q175758 HOWTO: Trap Visual SourceSafe OLE Errors
	
	For documentation on the Visual SourceSafe OLE automation specification, please
	see the following Web site:
	
	http://msdn.microsoft.com/ssafe/technical/articles.asp
	
	Additional query words: run-time runtime
	
	======================================================================
	Keywords          : kbAutomation kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
