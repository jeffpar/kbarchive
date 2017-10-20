---
layout: page
title: "Q314538: Encarta 2002 Dictionary: Search Results List Is Incorrect"
permalink: /kb/314/Q314538/
---

## Q314538: Encarta 2002 Dictionary: Search Results List Is Incorrect

{% raw %}

	Article: Q314538
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbimu
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia Deluxe 2002, version 1.0 
	- Microsoft Encarta Reference Library 2002, version 1.0 
	- Microsoft Encarta Encyclopedia Standard 2002, version 1.0 
	- Microsoft Encarta Reference Library 2002 - DVD Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type a word or letter in Dictionary search list, the search results
	list is incorrectly displayed. You may experience one of the following
	symptoms:
	
	- The list stops at words that start with the letter "q."
	
	
	- The list stops at "fulfill."
	
	
	- The list stops at words that start with the letter "p."
	
	
	- When you click the letter "r," "b" topics are displayed. When you click the
	  letter "z," "f" topics are displayed. There are similar problems with some
	  other letters.
	
	
	CAUSE
	=====
	
	This behavior can occur if your computer runs programs in the background that
	conflict with the Dictionary search function. The following programs may cause
	this issue:
	
	- Zone Labs ZoneAlarm
	
	- PanicWare Pop-up Stopper
	
	- Synaptics Touch Pad, driver version 5
	
	- OmniPage Pro Ocraware
	
	
	RESOLUTION
	==========
	
	To resolve this behavior, update the conflicting software, turn off the
	conflicting software, or remove the conflicting software.
	
	For information about available software updates or about how to turn off or
	remove the software, refer to the program documentation or contact the
	manufacturer of your software.
	
	To work around this issue, clean boot your computer. To do this, follow the steps
	for your operating system.
	
	Clean Boot Your Computer
	------------------------
	
	Follow the steps for your operating system.
	
	Microsoft Windows Millennium Edition:
	
	For additional information about how to perform a clean boot in Windows
	Millennium Edition, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q267288 How to Perform a Clean Boot in Windows Millennium Edition
	
	Microsoft Windows 98:
	
	Run the System Configuration Utility (Msconfig.exe) to perform a clean boot. To
	do this, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "msconfig" (without the quotation marks), and then
	  click OK.
	
	3. Click the General tab. Click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	For additional information about how to perform a clean boot Windows 98, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	NOTE: To restore your original startup configuration in Windows 98, rerun the
	System Configuration Utility (Msconfig.exe), click the General tab, and then
	click Normal Startup.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbEncartaSearch kbMMSearch kbEncartaRef2002 kbEncartaEncyc2002 kbEncartaEnCyc2002Del kbEncartaRef2002DVD
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
