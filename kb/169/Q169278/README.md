---
layout: page
title: "Q169278: ACC97: MS Access Hangs Adding DB to VSS While in Break Mode"
permalink: /kb/169/Q169278/
---

## Q169278: ACC97: MS Access Hangs Adding DB to VSS While in Break Mode

{% raw %}

	Article: Q169278
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,97
	Operating System(s): 
	Keyword(s): kbAccess kbSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access 97 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	When you try to add a Microsoft Access 97 database to a Microsoft Visual
	SourceSafe project database while a module is in break mode, you may receive the
	following error message:
	
	  This database must be closed before you can add it to SourceSafe.
	
	  Do you want Microsoft Access to close this database?
	
	If you click Yes, Microsoft Access stops responding (hangs).
	
	
	CAUSE
	=====
	
	You cannot add a database to a Visual SourceSafe project database while a module
	is in break mode.
	
	RESOLUTION
	==========
	
	When asked if you want Microsoft Access to close the database, click No, reset
	or close the module, and then retry adding the database to Visual SourceSafe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Access 97. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open Microsoft Access 97 and create a new database.
	
	2. Create a new module, and type the following procedure:
	
	        Sub MySub()
	
	            Msgbox "Hello"
	         Stop
	            Msgbox "Goodbye"
	
	        End Sub
	
	3. Run the procedure from the Debug window until the procedure enters break
	  mode.
	
	4. On the Tools menu, point to SourceSafe, and then click Add Database to
	  SourceSafe.
	
	5. Note that you receive the error message mentioned in the "Symptoms" section.
	  Click Yes. Note that Microsoft Access hangs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAccess kbSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbAccessSearch kbAccess97 kbAccess97Search kbSSafe500
	Version           : WINDOWS:5.0,97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
