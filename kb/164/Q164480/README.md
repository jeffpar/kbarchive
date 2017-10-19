---
layout: page
title: "Q164480: WD97: Menu and Toolbar Initialization Response Slow"
permalink: /kb/164/Q164480/
---

## Q164480: WD97: Menu and Toolbar Initialization Response Slow

	Article: Q164480
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbui word97
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The first time you access a menu or toolbar, the response is slower than
	expected. Thereafter, when you access the menu or toolbar, the response is
	immediate.
	
	CAUSE
	=====
	
	When you access a menu for the first time, the program must initiate or
	"enumerate" all of its menus (which makes the response time slower). However, a
	program needs to do this only once per session. Therefore, the second time you
	access a menu, the response time is faster.
	
	Different programs have different menu structures and different ways of achieving
	this menu initiation. This is why some programs have faster response time when
	you first click a menu.
	
	
	Additional query words: vb vbe vba flushing
	
	======================================================================
	Keywords          : kbui word97 
	Technology        : kbWordSearch kbAccessSearch kbWord97 kbWord97Search kbAccess97 kbZNotKeyword2 kbAccess97Search
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
