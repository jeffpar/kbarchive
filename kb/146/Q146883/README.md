---
layout: page
title: "Q146883: ADT2: WX1200 OLE Controls Cause Error Without OLE 2.02 or Later"
permalink: /kb/146/Q146883/
---

## Q146883: ADT2: WX1200 OLE Controls Cause Error Without OLE 2.02 or Later

{% raw %}

	Article: Q146883
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	- Microsoft Access 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use the OLE controls included in the Microsoft Access
	Developer's Toolkit OLE (Custom) Controls Service Pack, you may receive an error
	message unless you have OLE version 2.02 or later installed on your computer.
	When you use these OLE controls in Windows NT 3.51 or Windows 95 using the OLE
	version 2.01 DLLs included with Microsoft Access 2.0, you may also receive an
	error message. When you run code that references these OLE controls, Microsoft
	Access may prompt you to input a value or may generate a generic error message.
	
	CAUSE
	=====
	
	The DLLs required to support the new OLE controls must be OLE 2.02 or later. For
	more information about this topic, please see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q123593
	  TITLE: ACC2: OLE 2.02 Required to Use Custom Controls
	
	RESOLUTION
	==========
	
	Install OLE version 2.02 or later. OLE 2.02 is available with the Microsoft
	Access version 2.0 Service Pack. For information about how to obtain the Service
	Pack, please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q122927
	  TITLE : WX1124: Microsoft Access Version 2.0 Service Pack
	
	
	Additional query words: adt automation
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbAudDeveloper kbAccessSearch kbAccess200 kbAccessDevTK200 kbZNotKeyword3
	Version           : WINDOWS:2.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
