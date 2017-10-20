---
layout: page
title: "Q122166: InfoMover PCMCIA Card in AST Laptop Fails to Work Under WFWG"
permalink: /kb/122/Q122166/
---

## Q122166: InfoMover PCMCIA Card in AST Laptop Fails to Work Under WFWG

{% raw %}

	Article: Q122166
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The National Semiconductor NE4100 InfoMover PCMCIA network card works correctly
	with most laptops. However, if you use this card in the AST Ascentia 900N laptop
	(portable) computer, you may be unable to log on to busier networks under
	Windows for Workgroups.
	
	CAUSE
	=====
	
	The AST Ascentia 900N uses the relatively rare VLSI PCMCIA controller chip. The
	AST Ascentia 900N also ships with the Cardsoft 3.1 PCMCIA card and socket
	services, which is the first card to support the VLSI chip. However, Windows for
	Workgroups runs well on the Ascentia with other PCMCIA network cards installed,
	runs well in most cases with Cardsoft software, and runs in other laptop
	computers with the NE4100 installed; therefore, Microsoft has been unable to
	determine which element causes the network logon problems under Windows for
	Workgroups.
	
	STATUS
	======
	
	National Semiconductor is aware of this problem and will supply more information
	as it becomes available. You can contact National Semiconductor at (800)
	231-6072.
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3rdparty 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
