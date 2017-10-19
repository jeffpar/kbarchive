---
layout: page
title: "Q161668: Kids Plus!: Server Application Retains Previous Active Tool"
permalink: /kb/161/Q161668/
---

## Q161668: Kids Plus!: Server Application Retains Previous Active Tool

	Article: Q161668
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Kids, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you open an object in Paint It!, the Paint It! server displays the previous
	active tool and previous foreground color. The default tool selection is the
	pencil and the default foreground color is black. It is possible for these
	default selections to vary.
	
	MORE INFORMATION
	================
	
	For example, if you do the following, the pencil tool in the toolbar is shown as
	selected; however, the active tool is still the spraycan:
	
	1. Insert a new Paint It! object into a client application such as WordPad.
	
	2. Inside of the Paint It! server, select the spraycan using red as foreground
	  color, and paint some stuff with it.
	
	3. Click outside the object to return focus to client.
	
	4. With the right mouse button, click the image, and click Paint It! Image
	  Object.
	
	5. Click Open.
	
	RESULT: The pencil tool in the toolbar is shown as "selected"; however, the
	active tool is still the spraycan. Both the selected and active color is still
	red.
	
	If you then close the image by clicking the Quit button, and then reopen the
	image (via either Edit or Open), both the active and selected tools match
	(pencil) and the color selections revert to Black/White.
	
	Additional query words: wrong invalid different off cursor same
	
	======================================================================
	Keywords          :  
	Technology        : _IKkbbogus kbGamesSearch kbPlusKids kbPlusSearch
	Version           : WINDOWS:1.0
	
	=============================================================================
	
