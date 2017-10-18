---
layout: page
title: "Q193575: BUG: Duplicate Hot Key &quot;Join Source Control Project&quot; Dialog"
permalink: kb/193/Q193575/
---

## Q193575: BUG: Duplicate Hot Key &quot;Join Source Control Project&quot; Dialog

	Article: Q193575
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Source Control installed, the Join Source Control Project dialog box has a
	duplicate hot key, "H", for "Change" (located at the bottom half of the dialog
	box) and for the "Help" button.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Make sure that you have Visual SourceSafe version 6.0 and Visual FoxPro
	  version 6.0 or 5.x installed on the system.
	
	2. In Visual FoxPro 5.x or 6.0, from the Tools menu, choose Options. In the
	  Options dialog box, click the Projects tab.
	
	3. In the "Active source control provider" drop-down list box, select "Microsoft
	  Visual SourceSafe".
	
	4. Click the "Set As Default" button to save this as the default and then click
	  the OK button.
	
	5. From the File menu, choose "Join Source Control Project".
	
	6. When the login prompt displays, type in the appropriate username and
	  password.
	
	7. In the "Create local project from SourceSafe" dialog box, type in "c:\test"
	  in the "Create a new project in the folder" text box, and then click the OK
	  button.
	
	In the "Join Source Control Project" dialog box, the "Change" button, which is on
	the bottom half of the dialog box, and the "Help" button both have "H", as a hot
	key.
	
	Additional query words: kbVFp500abug kbVFp600bug kbProjManager kbInterOp kbSSafe kbSSafe600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
