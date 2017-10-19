---
layout: page
title: "Q82815: OLE Performance Factors with Windows 3.1"
permalink: /kb/082/Q82815/
---

## Q82815: OLE Performance Factors with Windows 3.1

	Article: Q82815
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Windows operating system version 3.1, objects are passed between
	applications through memory with OLE version 1.0; therefore, memory availability
	is often the limiting factor for OLE operations. Using an embedding function
	(such as OLE drag and dropping) with large objects can cause duplication of data
	and require storage space.
	
	MORE INFORMATION
	================
	
	Locality
	--------
	
	To perform OLE functions, both the client and the server applications must be on
	the same local machine. The information (that is, the container document and the
	source files) can be stored on the file server.
	
	Embedding and Packaging
	-----------------------
	
	Embedding and creating packages by dragging and dropping an object from the File
	Manager creates a copy of the object, which is stored in the container document.
	Embedding large objects (such as sound) duplicates a large amount of information
	and requires storage space. Embedding and OLE drag and dropping large objects
	requires large amounts of memory.
	
	Memory Limitations
	------------------
	
	All objects are passed through memory in OLE version 1.0. This places limitations
	on OLE operations especially with low memory conditions.
	
	Size of the Object
	------------------
	
	The size of objects being embedded or linked is limited by the system resources
	(memory and storage) only.
	
	Number of Linked or Embedded Objects per Document
	-------------------------------------------------
	
	The number of objects that you can embed or link is limited by the system
	resources (memory and storage) only.
	
	Activation Time for Objects
	---------------------------
	
	Different servers have different times of activation. For example, a large
	spreadsheet application has a longer activation time than a specialized
	mini-server. Also if the server is already running when you activate an object,
	the activation time is significantly shorter.
	
	Additional query words: 3.10 ole applet accessories
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
