---
layout: page
title: "Q138155: No NDIS Interrupt Activity Using Windows 95 and Pathworks"
permalink: /kb/138/Q138155/
---

## Q138155: No NDIS Interrupt Activity Using Windows 95 and Pathworks

	Article: Q138155
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
	
	If you upgrade a computer that is connected to a DEC Pathworks 4.1 network and
	contains a DEC Etherworks 3 Turbo (205) network adapter from Windows for
	Workgroups 3.11 to Windows 95, you may receive the following error message when
	you start the computer:
	
	  No NDIS interrupt activity. Maybe NI_IRQ is set wrong or cable is not
	  attached or /DLL broken
	
	CAUSE
	=====
	
	The error message occurs when the following line is processed from the
	Startnet.bat file:
	
	  c:\decnet\schk.exe /h
	
	RESOLUTION
	==========
	
	Change the line stated above in the Startnet.bat file to read:
	
	  c:\decnet\schk.exe /n
	
	After you make this change, restart your computer.
	
	The /N switch specifies that the Ethernet vector not be checked for interrupt
	activity during loading.
	
	
	Additional query words: digital
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
