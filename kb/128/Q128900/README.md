---
layout: page
title: "Q128900: PCMCIA Socket Not Detected on IBM ThinkPad 720C"
permalink: kb/128/Q128900/
---

## Q128900: PCMCIA Socket Not Detected on IBM ThinkPad 720C

	Article: Q128900
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
	
	The detection routine in Windows 95 Setup does not detect the PCMCIA socket in
	your IBM ThinkPad 720 or 720C, the IBM ThinkPad 720 is the monochrome display
	model. PCMCIA socket is also not detected when you run the Add New Hardware
	Wizard from Control Panel. As a result, protected- mode socket services are not
	provided.
	
	CAUSE
	=====
	
	The IBM ThinkPad 720/720C PCMCIA socket uses the Stinger chip set. The Stinger
	chip set is not a supported PCMCIA socket chip set for Windows 95 protected-mode
	socket services.
	
	RESOLUTION
	==========
	
	To use the PCMCIA socket on your IBM ThinkPad 720/720C, install the real- mode
	socket drivers using the manufacturer's instructions.
	
	MORE INFORMATION
	================
	
	To use protected-mode network interface card (NIC) drivers with a PCMCIA NIC,
	the PCMCIA socket must be supported for protected-mode socket services.
	Therefore, you cannot use protected-mode NIC drivers when you are using a PCMCIA
	NIC in the IBM ThinkPad 720/720C.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
