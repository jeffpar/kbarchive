---
layout: page
title: "Q82255: Visual Basic Combo Control Receives Extra &quot;Click&quot; Event"
permalink: /kb/082/Q82255/
---

## Q82255: Visual Basic Combo Control Receives Extra &quot;Click&quot; Event

{% raw %}

	Article: Q82255
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Visual Basic in Microsoft Windows version 3.1, double-clicking an
	item listed in a simple Combo control generates the following events:
	
	  Combo(x)_Click
	  Combo(x)_Click
	  Combo(x)_DblClick
	
	However, in Windows 3.0, the events that were generated through the same action
	were:
	
	  Combo(x)_Click
	  Combo(x)_DblClick
	
	This means an extra mouse-button click event is processed and can cause
	unexpected results.
	
	MORE INFORMATION
	================
	
	This is a case where Visual Basic 1.0 is relying on the order in which messages
	are processed. Visual Basic was designed to use the message order that Windows
	3.0 provides. Because Windows 3.1 uses an extended message order to process a
	"click" event, there is an extra occurrence if the application is dependent upon
	message order.
	
	This is not a design problem in Windows 3.1 because Windows is sending the
	correct messages. Visual Basic is just "expecting" the messages to come in a
	specific order.
	
	Additional query words: 3.10 visual basic events click double 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	
	=============================================================================
	

{% endraw %}
