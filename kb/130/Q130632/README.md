---
layout: page
title: "Q130632: How to Determine Current Licensing Mode (Per Seat or Per Server)"
permalink: kb/130/Q130632/
---

## Q130632: How to Determine Current Licensing Mode (Per Seat or Per Server)

	Article: Q130632
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use Control Panel License Manager, both locally
	and remotely, to quickly identify whether you are using Windows NT version 3.51
	in Per Seat or Per Server Licensing mode.
	
	MORE INFORMATION
	================
	
	Determining Local Licensing Mode
	--------------------------------
	
	To determine the local licensing mode, start Control Panel Licensing.
	
	Determining Remote Licensing Mode
	---------------------------------
	
	To determine a remote computer's licensing mode (as well as local computer),
	start the License Manager and do the following:
	
	1. Select the Server Browser tab.
	
	2. Select domain and server.
	
	3. If the icon displayed is a computer with a file and no CRT, then the computer
	  is running in the Per Server mode. If the icon displayed is a computer with a
	  file and a CRT, then computer is running in the Per Seat mode.
	  Double-clicking on these icons allows you to change the licensing mode and
	  edit the product properties.
	
	Alternate Method of Determining Licensing Mode
	----------------------------------------------
	
	An alternate way of determining which license mode a computer is running both
	locally and remotely is to do the following:
	
	1. Select the Products View tab.
	
	2. Select the Product from the list.
	
	3. Select the Server Browser tab.
	
	4. Select the computer from the list. It displays the licensing mode the
	  computer is running in specific to this product.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
