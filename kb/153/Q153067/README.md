---
layout: page
title: "Q153067: XCLN: EFD: Cannot Move Field Outside Container"
permalink: /kb/153/Q153067/
---

## Q153067: XCLN: EFD: Cannot Move Field Outside Container

	Article: Q153067
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to drag a field outside of the container using the upper left
	handle of the stretch control, it stops at the boundaries of the container
	field. The handle doesn't cause the mouse cursor to change into a "sizing"
	arrow.
	
	MORE INFORMATION
	================
	
	The control is restricted to the boundaries of the container by design. When a
	designer drags a field with the upper left corner handle and drops it on another
	container, a DragDrop event is not generated for that container. As a result,
	that item will not relocate into that new container.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
