---
layout: page
title: "Q107527: Dinosaur Movies Are Garbled on COMPAQ 486C Portable"
permalink: kb/107/Q107527/
---

## Q107527: Dinosaur Movies Are Garbled on COMPAQ 486C Portable

	Article: Q107527
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Dinosaurs for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The dinosaur movies will not display correctly in full-screen mode on a Compaq
	486C portable computer if you are using the plasma internal display.
	
	RESOLUTION
	==========
	
	To correct the problem, run the movies in a window.
	
	To run the movies in a window, do the following:
	
	1. Open the Msdinos.ini file located in the Windows folder using a text editor
	  such as Microsoft Notepad.
	
	2. Change or add the following line to the Msdinos.ini file:
	
	  "Videoinwindow=1" (without the quotation marks)
	
	3. Save the changes and exit.
	
	MORE INFORMATION
	================
	
	The Compaq product discussed here is manufactured by Compaq, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: multi media multimedia multi-media vid dinos dino garbage svga
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbDinosaurs100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
