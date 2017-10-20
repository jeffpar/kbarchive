---
layout: page
title: "Q154869: PRB: Error &quot;Too many client tasks&quot; When Using Jet"
permalink: /kb/154/Q154869/
---

## Q154869: PRB: Error &quot;Too many client tasks&quot; When Using Jet

{% raw %}

	Article: Q154869
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When trying to use the database features of Visual Basic, you may receive the
	error message "Too many client tasks." This occurs when more than 10
	applications running on the same machine try to use the Jet database engine.
	
	CAUSE
	=====
	
	The Jet database engine versions 1.1, 2.0, and 2.5 can only be used by 10 client
	applications simultaneously on any one machine.
	
	WORKAROUND
	==========
	
	It is not possible to have more than 10 client applications making use of the
	16-bit Jet database engine on one machine. If it is essential that a software
	system have more than 10 executables on the same machine with access to one or
	more databases, the system could be designed with one "server" exe accessing the
	database and multiple "client" programs making requests for data from this
	"server" via an inter-process communication (IPC) mechanism. For example, with
	Visual Basic version 4.0, this could be achieved using OLE automation.
	
	STATUS
	======
	
	This behavior is by design.
	
	(This is not an issue with Jet 3.0 as used by Visual Basic 4.0 32-bit.)
	
	REFERENCES
	==========
	
	Visual Basic Online Help.
	
	Additional query words: 4.00 vb4win vb416 kbuk
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
