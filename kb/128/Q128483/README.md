---
layout: page
title: "Q128483: BUG: Selected Background Color Not Always Saved"
permalink: /kb/128/Q128483/
---

## Q128483: BUG: Selected Background Color Not Always Saved

{% raw %}

	Article: Q128483
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Background colors assigned to windows, panes, or popups are not updated after
	selecting a new color from the Color dialog. If a color is selected while the
	Default Color checkbox is turned on, the background color is correctly updated.
	However, if the Default checkbox is not turned on before selecting a new
	background color and no other window property is modified, the background color
	reverts to its previous state. As soon as any other property is modified, the
	background color is updated.
	
	CAUSE
	=====
	
	Background color states for an object are not updated properly when:
	
	- The Default Color checkbox is not turned on.
	
	  -or-
	
	- No other property is modified in the Properties dialog box.
	
	RESOLUTION
	==========
	
	To modify the background color for a window, pane, or popup, execute the
	following steps:
	
	1. Select Windows Definitions from the Section menu, and select the object to be
	  modified.
	
	2. Click the Properties button, and turn on the Use Default Color checkbox.
	
	3. Click the Background Color browse button, and click the desired color.
	  Previewing will now display the object with the selected background color.
	  Modifying any other property in addition to the background color, will
	  correctly adjust the object's background color.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00 2.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	

{% endraw %}
