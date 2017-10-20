---
layout: page
title: "Q258534: FIX: Grid Display and Re-draw Are Slow Under Hebrew Windows"
permalink: /kb/258/Q258534/
---

## Q258534: FIX: Grid Display and Re-draw Are Slow Under Hebrew Windows

{% raw %}

	Article: Q258534
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Displaying or refreshing the record that is off the grid's viewable area may
	appear slow when running under the Hebrew version of Microsoft Windows. On a
	fast computer, the slowness of display and refresh of the record are minimal.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form in Form Designer.
	
	2. Add a table with about 5000 records to the data environment of the form.
	
	3. Drag the table from the data environment and drop it onto the form to create
	  a grid.
	
	4. Run the form.
	
	On a slow computer, the form shows up and pauses for a second, then the grid
	shows up. Now, try to use the DOWN ARROW key to move to the records that are not
	currently in the grid's viewable area, and note that the new records refresh
	very slowly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
