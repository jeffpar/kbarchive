---
layout: page
title: "Q132729: Windows 95 Does Not Prevent Choosing Unsupported Resolution"
permalink: /kb/132/Q132729/
---

## Q132729: Windows 95 Does Not Prevent Choosing Unsupported Resolution

{% raw %}

	Article: Q132729
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
	
	Windows 95 may not prevent you from choosing display resolutions or color depths
	that are not supported by your display adapter. Choosing an unsupported
	resolution or color depth may cause your computer to stop responding (hang), or
	may cause the display to become garbled.
	
	This problem is known to occur with the following display adapters:
	
	- ATI VGA Wonder
	
	
	CAUSE
	=====
	
	This problem typically occurs with display adapters that are available with
	varying amounts of installed memory. Because there is only one driver for all
	variations of a display adapter model, the driver must support the resolution
	and color depth that the adapter is capable of supporting with the greatest
	amount of installed memory. Windows 95 cannot detect when you are using a
	display adapter with less than the greatest amount of installed memory.
	Therefore, Windows 95 may allow you to choose a resolution or color depth that
	is not currently supported by the display adapter.
	
	RESOLUTION
	==========
	
	Choose a lower resolution or color depth that is supported by the display
	adapter. You may need to restart your computer in Safe mode to do so. To start
	your computer in Safe mode, restart your computer, press the F8 key when you see
	the "Starting Windows 95" message, and then choose Safe Mode.
	
	To use the higher resolution or color depth, you must increase the amount of
	memory installed on the display adapter. You may be able to add more memory to
	the adapter you are currently using, or you may need to obtain an adapter that
	has more memory installed. For information about increasing the amount of memory
	on the display adapter, please contact the adapter's manufacturer.
	
	MORE INFORMATION
	================
	
	ATI VGA Wonder
	--------------
	
	Some ATI VGA Wonder display adapters have 256K of installed memory. These
	adapters are not capable of displaying 256 colors, although you can select the
	256-color palette in the Display Properties dialog box.
	
	When you are using the ATI VGA Wonder XL24 display adapter, you can choose the
	High Color (16 Bit) and True Color (24 Bit) color palettes, but these palettes
	are not supported by the display adapter.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
