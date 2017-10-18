---
layout: page
title: "Q142304: Problem with Windows NT DDK Ndis.h"
permalink: kb/142/Q142304/
---

## Q142304: Problem with Windows NT DDK Ndis.h

	Article: Q142304
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT 4.0 Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An incorrect definition in the Windows NT 4.0 DDK prevents a developer from
	building a binary-compatible NDIS Intermediate Driver.
	
	RESOLUTION
	==========
	
	The problem can be resolved by using an updated version of the Ndis.h file.
	
	This update is available from Microsoft support channels or directly from the
	following Internet location:
	
	  ftp://ftp.microsoft.com/developr/win_dk/ndis
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT DDK version 4.0.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: ddk prodnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNT400search kbAudDeveloper kbWinDDKSearch kbWinNT400DDK
	Version           : :
	
	=============================================================================
	
