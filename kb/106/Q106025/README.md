---
layout: page
title: "Q106025: IRQ Option Includes Only IRQs 2-5 for Novell/Anthem NE2000"
permalink: /kb/106/Q106025/
---

## Q106025: IRQ Option Includes Only IRQs 2-5 for Novell/Anthem NE2000

{% raw %}

	Article: Q106025
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure Windows for Workgroups for a Novell/Anthem NE2000 card, you
	can select an IRQ between 2 and 5 (inclusive)--even though the newer
	Novell/Anthem NE2000 cards support IRQs 2-14.
	
	CAUSE
	=====
	
	The Windows for Workgroups NETWORKS.INF file contains 2-5 as a valid IRQ range
	for Novell/Anthem NE2000 cards to maintain compatibility with older cards.
	
	RESOLUTION
	==========
	
	If you have one of the newer Novell/Anthem cards (or a clone) and you are using
	an IRQ in the 6-14 range, do one of the following:
	
	- Select "NE2000 Compatible" instead of "Novell/Anthem NE2000" when configuring
	  Windows for Workgroups.
	
	  -or-
	
	- Edit the PROTOCOL.INI file and change the IRQ to the correct value.
	
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
