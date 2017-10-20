---
layout: page
title: "Q192575: PRB: Modify of .H File From Project Not Using Syntax Coloring"
permalink: /kb/192/Q192575/
---

## Q192575: PRB: Modify of .H File From Project Not Using Syntax Coloring

{% raw %}

	Article: Q192575
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
	
	If you open a project containing a header (.H) file, and modify it in the
	Project Manager, Visual FoxPro's Syntax Coloring feature is not used.
	
	RESOLUTION
	==========
	
	As a workaround, modify a .H file in the Program Editor, set the preferences to
	allow syntax coloring, and then save the preferences for all .H files. Remove
	all .H files from your project, and add them back in as program files.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Type the following in the Command window:
	
	        MODIFY PROJECT HOME()+'tools\convert\convert'
	
	2. Click the Other tab.
	
	3. Expand the Text Files node in the treeview.
	
	4. Select the first file (convert) and press the Modify button.
	
	Observed: The file displays, but syntax highlighting is not used.
	
	Workaround
	----------
	
	1. Type the following in the Command window:
	
	        MODIFY COMMAND HOME()+'foxpro.h'
	
	2. Right-click in the Editor window and select Properties in the context menu,
	  or from the Properties menu, select Edit.
	
	3. In the Edit Properties dialog box, clear the Word wrap check box, select the
	  "Syntax Coloring", "Save Preferences", and "Apply to .h files" check boxes,
	  and then click OK to close the dialog box.
	
	4. Close the edit window.
	
	5. Remove any .H files from your project (PLEASE be careful to select Remove,
	  and not Delete, in the confirmation dialog box), and add them back in as
	  Programs. Do this by highlighting the Programs node under the Programs tab,
	  selecting the Add button, listing All Files, and selecting your .H files.
	
	Now when the .H files are modified, Syntax coloring will be used.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp500 kbVFp500a kbVFp600 kbVFp600bug kbVFp500abug kbProjManager
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
