---
layout: page
title: "Q160888: PRB: VSS Explorer Error: &quot;This Is an Integration Only Project&quot;"
permalink: /kb/160/Q160888/
---

## Q160888: PRB: VSS Explorer Error: &quot;This Is an Integration Only Project&quot;

{% raw %}

	Article: Q160888
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you try to use the CheckOut, CheckIn, UndoCheckOut, or GetLatestVersion
	operations on a Microsoft Access 97 object in the Microsoft Visual SourceSafe
	5.0 Explorer, you may receive the following error message:
	
	  This is an integration only project, getting files is not allowed from the
	  SourceSafe Explorer.
	
	RESOLUTION
	==========
	
	In some cases, it may be necessary to perform operations on Microsoft Access
	objects from within the SourceSafe Explorer. In those cases, close SourceSafe
	Explorer, remove or remark the Disable_UI line in the Srcsafe.ini file, and then
	reopen SourceSafe Explorer. Then you will be able to perform the desired
	operation in SourceSafe Explorer. This is an example of the Disable_UI line as
	it might appear in Srcsafe.ini:
	
	     [$/Northwind]
	     Disable_UI = Yes
	
	Note that when you reopen the Microsoft Access database, the Visual SourceSafe
	Integration Component (ACCSCC) adds the Disable_UI = Yes line back to the
	Srcsafe.ini file. Optionally, you can add the line back to the file yourself.
	
	NOTE: This setting has no affect on a SourceSafe 4.0 Explorer.
	
	MORE INFORMATION
	================
	
	The Visual SourceSafe Integration Component (ACCSCC) of Microsoft Access 97 adds
	a setting to the Srcsafe.ini file when you add a Microsoft Access database to
	the SourceSafe server database. This entry flags the files in the SourceSafe
	database as belonging to a Microsoft Access database integration project, and it
	looks similar to this:
	
	     [$/Northwind]
	     Disable_UI = Yes
	
	This .ini file entry prevents you from using the SourceSafe 5.0 Explorer to check
	out the Microsoft Access database files. This is by design because the files are
	textual representations of Microsoft Access objects that you should only
	manipulate in the context of a Microsoft Access project.
	
	In addition, if the .ini setting is missing, it is recreated every time the
	Microsoft Access database is reopened. If the ACCSCC cannot write to Srcsafe.ini
	to add the setting, it attempts to write to the SourceSafe user's Ss.ini file
	instead.
	
	Additional query words: AccScc SS VSS
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe500
	Version           : WINDOWS:5.0,97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
