---
layout: page
title: "Q134599: Cannot Access Shared Folder with Extended Characters in Name"
permalink: kb/134/Q134599/
---

## Q134599: Cannot Access Shared Folder with Extended Characters in Name

	Article: Q134599
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
	
	When you are running the U.S. version of Windows 95, you may not be able to
	access a shared folder located on a server running an international version of
	Windows 95 whose name contains certain extended characters.
	
	CAUSE
	=====
	
	This problem can occur if your computer and the server are not using the same
	codepage setting.
	
	RESOLUTION
	==========
	
	To resolve this problem, use either of the following methods:
	
	- Change the name of the folder on the server so that it does not contain
	  extended characters.
	
	- Configure your computer to use the same codepage setting as the server. To do
	  so, you must know the codepage setting in use on the server. To change your
	  codepage setting, follow these steps:
	
	  1. Click the Start button, and then click Help.
	
	  2. On the Index tab, type "codepages" (without the quotation marks) in the
	     "Type the first few letters of the word you're looking for" box.
	
	  3. Click Display.
	
	  4. Double-click the "Adding a language or keyboard layout" topic, and then
	     follow the instructions in the topic.
	
	MORE INFORMATION
	================
	
	The extended characters that cause this problem are 131, 133, 136, 137, 138,
	139, 140, 141, 147, 149, 150, 151, 152, 161, 162, and 163.
	
	The U.S. version of Windows 95 is designed to not allow extended characters in
	folder names.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
