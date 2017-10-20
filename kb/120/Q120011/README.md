---
layout: page
title: "Q120011: Err Msg with WinLAN Card: The Device Does Not Exist on the..."
permalink: /kb/120/Q120011/
---

## Q120011: Err Msg with WinLAN Card: The Device Does Not Exist on the...

{% raw %}

	Article: Q120011
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11; :3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a network resource using a WinLAN network card by
	Apexx Technology, the following error message is displayed:
	
	  The device does not exist on the network.
	
	CAUSE
	=====
	
	The network resource that you are trying to connect to does not have a unique
	network address. WinLAN cards require that a unique network address be set
	through Network Setup.
	
	RESOLUTION
	==========
	
	To correct the error message, do the following:
	
	1. Open the Network Setup icon.
	
	2. Choose the Drivers button, then choose the Setup button.
	
	3. Choose the Advanced button, then choose the Configuration button. (This opens
	  the Network Address dialog box.)
	
	4. Make sure that the Network Address setting is unique for the network.
	
	  All cards default to address 4 during the setup process; therefore, you need
	  to change the number. Valid selections are from 4 to 254. Save your selection
	  and then restart your computer.
	
	MORE INFORMATION
	================
	
	WinLAN cards are manufactured by Apexx Technology, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	KBCategory: kbnetwork kb3rdparty kbhw
	KBSubcategory: wfw wfwg wgao
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311 kbWFW311DOS
	Version           : WINDOWS:3.11; :3.11
	
	=============================================================================
	

{% endraw %}
