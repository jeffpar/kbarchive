---
layout: page
title: "Q320318: PRB: VB Projects Cannot Connect to Relocated VSS Database"
permalink: /kb/320/Q320318/
---

## Q320318: PRB: VB Projects Cannot Connect to Relocated VSS Database

{% raw %}

	Article: Q320318
	Product(s): Microsoft SourceSafe
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 10-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you move a Visual SourceSafe database, you may notice that integrated
	Visual Basic projects cannot connect to the Visual SourceSafe database.
	
	CAUSE
	=====
	
	This problem occurs because the connection information for the Visual Basic
	project points to the old location.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods.
	
	Method 1
	--------
	
	1. If you try to open the Visual Basic project, you receive the following
	  message:
	
	  Project $/"your project" was not found.
	
	  Would you like to browse for the project?
	
	  Click Yes in the message dialog box.
	
	2. In the Visual SourceSafe Login dialog box, click Browse.
	
	3. In the Open SourceSafe Database dialog box, click Browse.
	
	4. In the Find Database dialog box, browse to the new database location, or type
	  the new path in the File Name box.
	
	Method 2
	--------
	
	1. In Visual Basic, click SourceSafe on the Tools menu.
	
	2. Click the Options tab, and then click Advanced.
	
	3. Click the Integration tab. Make sure that Prompt is selected under Choose
	  SourceSafe Database.
	
	4. Quit Visual Basic, and then delete the Mssccprj.scc from your working folder.
	
	5. Open Visual Basic again, and then open your project from the working folder.
	
	6. When you are prompted to add the project to Visual SourceSafe, add the
	  project to the original project in the new database location. Make sure that
	  you delete the text in the Project box.
	
	7. In the Add Project dialog box, click OK.
	
	Method 3
	--------
	
	1. In Visual Basic, click SourceSafe on the Tools menu.
	
	2. Click the Options tab, and then click Advanced.
	
	3. Click the Integration tab.
	
	4. Click SourceSafe on the Tools menu, and then click "Create project from
	  SourceSafe".
	
	5. From the new database location, select the original Visual SourceSafe project
	  that contains the .vbp file. Make sure that you set the working folder under
	  "Create new project in the folder".
	
	6. Click OK to reconnect the Visual Basic project to the Visual SourceSafe
	  database.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q282816 HOWTO: Remove a Visual Basic Project from Visual SourceSafe
	
	Additional query words: error message
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbVBSearch kbSSafeSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbSSafe600 kbSSafe500 kbSSafe32bitSearch
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
