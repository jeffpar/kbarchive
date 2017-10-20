---
layout: page
title: "Q134582: Video Greeting Err Msg: Video for Windows Not Installed"
permalink: /kb/134/Q134582/
---

## Q134582: Video Greeting Err Msg: Video for Windows Not Installed

{% raw %}

	Article: Q134582
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
	
	When you try to run Intel Video Greeting, you may receive the following error
	message:
	
	  Video For Windows Not Installed
	
	Video Greeting will not run, even though Video for Windows is installed.
	
	CAUSE
	=====
	
	Video Greeting requires the Video for Windows drivers to be installed as if they
	were installed in Windows 3.1.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	- Contact Intel to inquire about obtaining an updated version of Video
	  Greeting.
	
	- Add the following line to the [drivers] section of the System.ini file, and
	  then restart your computer:
	
	     vidc.msvc=msvidc.drv
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
