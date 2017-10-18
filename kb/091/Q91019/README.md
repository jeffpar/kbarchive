---
layout: page
title: "Q91019: Characters Lost or Changed and File Access Problems"
permalink: kb/091/Q91019/
---

## Q91019: Characters Lost or Changed and File Access Problems

	Article: Q91019
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Because of limitations in the SMB protocol, some file operations between
	machines with different code pages on the same network may not work correctly.
	This results in character misinterpretations and file access problems.
	
	CAUSE
	=====
	
	The SMB protocol does not have the ability to transmit client code pages to the
	server.
	
	WORKAROUND
	==========
	
	To avoid this problem, make sure all the machines on the network are using the
	same code page. Because these problems usually result from the use of extended
	ASCII characters, using standard ASCII characters (ASCII codes less than 128) in
	filenames can also help.
	
	Additional query words: 3.10 shift symbol garbled denied
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
