---
layout: page
title: "Q123992: Basic Configurations for COM Ports in Windows 95"
permalink: /kb/123/Q123992/
---

## Q123992: Basic Configurations for COM Ports in Windows 95

{% raw %}

	Article: Q123992
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 includes a set of "Basic Configurations" for communications (COM)
	ports. These configuration options make it easier for you to avoid hardware
	conflicts by letting you easily change the settings a COM port uses.
	
	These Basic Configurations provide the following:
	
	- A default configuration for each COM port. You cannot change this default
	  setting.
	
	- Additional configurations for each port that lets you edit the IRQ setting.
	  These configurations do not let you change I/O addresses.
	
	- Additional configurations for each port that lets you edit both the IRQ and
	  the I/O range.
	
	MORE INFORMATION
	================
	
	Basic Configurations are determined by the following table:
	
	  Basic
	  Configuration   IRQ Setting   Editable?   I/O Setting   Editable?
	  -----------------------------------------------------------------
	  0                    4           No        03F8-03FF        No
	  1                    4           Yes       03F8-03FF        No
	  2                    3           No        02F8-02FF        No
	  3                    3           Yes       02F8-02FF        No
	  4                    4           No        03E8-03EF        No
	  5                    4           Yes       03E8-03EF        No
	  6                    3           No        02E8-02EF        No
	  7                    3           Yes       02E8-02EF        No
	  8                Variable        Yes       Variable         Yes
	
	COM 1 defaults to Basic Configuration 0. The IRQ can be changed by selecting
	Basic Configuration 1.
	
	COM 2 defaults to Basic Configuration 2. The IRQ can be changed by selecting
	Basic Configuration 3.
	
	COM 3 defaults to Basic Configuration 4. The IRQ can be changed by selecting
	Basic Configuration 5.
	
	COM 4 defaults to Basic Configuration 6. The IRQ can be changed by selecting
	Basic Configuration 7.
	
	Basic Configuration 8 can be used to configure additional COM ports because it
	lets you change the IRQ and the I/O address.
	
	Example
	-------
	
	The following is a sample procedure for changing the IRQ for COM 1:
	
	1. Click the Start button on the taskbar.
	
	2. On the Settings menu, click Control Panel, then double-click the System
	  icon.
	
	  NOTE: You can skip steps 1 and 2 if you use the right (secondary) mouse button
	  to click the My Computer icon and then click Properties.
	
	3. Click the Device Manager tab, double-click Ports (COM & LPT), then
	  double-click Communications Port (COM1).
	
	4. Click the Resources tab.
	
	  NOTE: COM 1 defaults to Basic Configuration 0, and the settings are according
	  to the table above.
	
	5. Click the arrow next to the Setting Based On box, and click Basic
	  Configuration 1.
	
	6. Under Resource Settings, double-click Interrupt Request (or IRQ), then click
	  the up or down arrow to change the Value field setting.
	
	7. Click OK and restart Windows when you are prompted.
	
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWin95search kbWin95
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
