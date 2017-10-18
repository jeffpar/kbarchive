---
layout: page
title: "Q163246: BUG: Visual FoxPro Loses Graphing When Office 97 Removed"
permalink: kb/163/Q163246/
---

## Q163246: BUG: Visual FoxPro Loses Graphing When Office 97 Removed

	Article: Q163246
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b 5.00 6.00
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300BUG kbvfp500bug kbvfp600bug
	Last Modified: 13-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following symptoms may occur:
	
	- When modifying or building a query with a graph as the destination, you see
	  the following message:
	
	  MSGraph does not appear to be installed properly. Graph could not be made.
	
	- You need to place a graph as an insertable object in an OLE Container Control
	  on a form, but the Insert Object dialog box does not show Microsoft Graph as
	  an insertable object.
	
	- When building a query, the graph icon in the Query Destination dialog box
	  cannot be selected.
	
	CAUSE
	=====
	
	The Office 97 setup process replaces Graph5 with Graph8 as the association for
	.gra extension files.
	
	Removing Office 97 entirely leaves the registry without any reference to a
	graphing tool associated with the .gra extension. Visual FoxPro cannot find a
	graphing tool to use in graphing the results of a query.
	
	Using the "Add/Remove software" functions of Windows 95 or WindowsNT to remove
	only Graph8 does not remove those files nor the registry entries.
	
	Removing Office 97 removes all references to the graph files previously
	installed.
	
	RESOLUTION
	==========
	
	One alternative for resolving this is to re-install Office 97. If the system
	should not have Office 97, then remove all portions of Office 97 except Graph
	and Graph Help.
	
	Another alternative is to install or reinstall Office 95. That will reinstall and
	re-register MS Graph5.
	
	Re-installing MS Graph5 from the Visual FoxPro distribution disk does not solve
	the problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Existing graphs stored in general fields display correctly when the table is
	opened and browsed and the general field is double-clicked. The presentation
	data stored as part of the "Binary Large Object Bitmap" contents of the general
	field contains the information to render the embedded OLE document--that is, the
	graph.
	
	Double-clicking that displayed image results in the following error message:
	
	  OLE error code 0x80040154: Class is not registered.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a Windows 95 or Windows NT system, install Microsoft Office 97.
	
	2. Uninstall Office 97.
	
	3. Open Visual FoxPro, and make a new form.
	
	4. Click the OLE Container Control tool on the Forms toolbar.
	
	5. In the Insert Object dialog box, examine the list of insertable objects. MS
	  Graph does not appear as a choice.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300BUG kbvfp500bug kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : 3.00 3.00b 5.00 6.00
	Issue type        : kbbug
	
	=============================================================================
	
