---
layout: page
title: "Q112483: INFO: Limitations of Run-Time MS Graph"
permalink: /kb/112/Q112483/
---

## Q112483: INFO: Limitations of Run-Time MS Graph

{% raw %}

	Article: Q112483
	Product(s): Microsoft FoxPro
	Version(s): 2.5,2.5a,2.5b,3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Setup Wizard allows the Microsoft Graph run-time module to be included in
	distributed applications. However, the run-time module does not include the full
	functionality of the MS Graph application shipped with FoxPro.
	
	WORKAROUNDS
	-----------
	
	- Although the license agreement for MS Graph prohibits the distribution of the
	  full version of MS Graph with applications, if the workstation on which the
	  executable file is installed has the full version of MS Graph installed
	  through FoxPro or another software package, that workstation will be able to
	  access full graph functionality through the distributed executable file.
	
	- You can use a third-party graphics package instead of MS Graph to create
	  graphs in distributed executables.
	
	MORE INFORMATION
	================
	
	The MS Graph run-time module can only be used to view existing graphs that have
	been created and saved through the FoxPro Graph Wizard. The existing graphs
	cannot be updated to include new data and formatting changes, except using
	UPDATEGRPH. The run-time module also prohibits new graphs from being created.
	
	REFERENCES
	==========
	
	For more information about distributing files with your FoxPro 2.x application,
	see the Distribution Kit "User's Guide."
	
	Additional query words: setupwizard msgraph graphwizard
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : :2.5,2.5a,2.5b,3.0,3.0b,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
