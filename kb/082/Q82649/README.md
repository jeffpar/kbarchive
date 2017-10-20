---
layout: page
title: "Q82649: The Benefits of OLE in Windows 3.1"
permalink: /kb/082/Q82649/
---

## Q82649: The Benefits of OLE in Windows 3.1

{% raw %}

	Article: Q82649
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the advantages that OLE provides in the Microsoft Windows
	operating environment version 3.1.
	
	With OLE, applications can specialize in performing one job well. For example, a
	drawing application specializes in drawing only; it no longer needs text-editing
	tools because you can bring in the text into the drawing using an OLE link to a
	text editor that supports OLE.
	
	Applications can automatically be extended for future data formats because the
	content of an object being linked uses the OLE interface, and the client
	application does not care what is being linked.
	
	You can concentrate on the task you are performing instead of concentrating on
	multiple applications required to complete the task. This concept can be
	summarized as a task-centric, rather than tool- centric, view of computing (that
	is, you can concentrate on the document you are producing, not the application
	you are using to produce it.
	
	Files can be more compact with OLE. The data of a linked object is stored in the
	original server document, rather than in the client document. For example, if
	you link your company's revenue spreadsheet to three different Word for Windows
	documents, the spreadsheet is stored on the disk one time only. The Word
	documents require only a link to the spreadsheet.
	
	With OLE, you can print or transmit documents without using the application that
	originally produced the document.
	
	You can update linked objects in a file dynamically. (That is, when you update a
	linked object [not an embedded object], the other instances or copies of the
	linked object are also updated.) As in the earlier example, if the spreadsheet
	is updated, the link is maintained to the other three Word for Windows
	documents. When opened, each Word document displays the updated data.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
