---
layout: page
title: "Q134483: Briefcase Synchronization Copies Are Deleted By Default"
permalink: kb/134/Q134483/
---

## Q134483: Briefcase Synchronization Copies Are Deleted By Default

	Article: Q134483
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You delete a file inside the Briefcase with the intention of breaking the
	relationship between the Briefcase copy and the original file only to find that
	Briefcase suggests deleting the original as well.
	
	CAUSE
	=====
	
	The Briefcase default behavior is to synchronize any change made to the file in
	the Briefcase with the original outside the Briefcase. If one of these files is
	deleted, Briefcase assumes the copy is to be deleted as well.
	
	RESOLUTION
	==========
	
	Use either of the following methods to work around this behavior:
	
	- Before deleting the file in the Briefcase, select it and then click Split
	  From Original on the Briefcase menu. Any subsequent changes to the file are
	  ignored by Briefcase.
	
	- Delete the file in Briefcase. Click Don't Delete before updating the
	  Briefcase. To use this method, follow these steps:
	
	  1. On the Briefcase menu, click Update All.
	
	  2. Use the right mouse button to click the file that has "Delete" as the
	     suggested action, and then click Don't Delete on the menu that appears.
	
	  3. Repeat step 2 for any other files you do not want to delete.
	
	  4. Click the Update button.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
