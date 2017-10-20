---
layout: page
title: "Q86883: Generic Text Driver Causes Underlines to Disappear in Write"
permalink: /kb/086/Q86883/
---

## Q86883: Generic Text Driver Causes Underlines to Disappear in Write

{% raw %}

	Article: Q86883
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience screen redraw problems when using the underline feature in
	Windows Write with the Generic/Text Only printer driver installed. The underline
	may disappear on the screen, but it prints correctly.
	
	This problem only occurs when the default Roman 10 point font is selected. This
	does not occur in other applications such as Microsoft Word for Windows or
	Microsoft Excel for Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows Write version 3.1. We
	are researching this problem and will post new information here as it becomes
	available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Run Control Panel from the Main group, and double-click the Printers option.
	
	2. Choose the Add button. In the List of Printers box, select Generic/Text Only.
	
	3. Choose the Install button.
	
	4. Choose the Set as Default Printer button, then choose Close.
	
	5. Run Write from the Accessories group.
	
	6. From the Character menu, choose Underline.
	
	7. Type a few lines of text, and press ENTER after each line.
	
	Notice that the underlining disappears from the screen.
	
	
	Additional query words: 3.10 3.11 WRITE Generic invisible
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
