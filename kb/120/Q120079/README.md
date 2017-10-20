---
layout: page
title: "Q120079: PRB: INT 2Fh 1684h May Return ES == 0 and DI != 0"
permalink: /kb/120/Q120079/
---

## Q120079: PRB: INT 2Fh 1684h May Return ES == 0 and DI != 0

{% raw %}

	Article: Q120079
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A DLL that calls INT 2Fh function 1684h (Get Device API Entry Point) to
	communicate with a VxD may receive ES == 0 and DI != 0. This is contrary to the
	documentation, which indicates that ES and DI will be zero on failure -- meaning
	if either is non-zero, the function succeeded. However, zero is not a valid code
	selector, so attempting to call the returned address results in a general
	protection (GP) fault.
	
	CAUSE
	=====
	
	This function uses the VMM service Allocate_PM_Call_Back to obtain an address
	for the protected-mode DLL to call. Under low memory conditions, it is possible
	for this service to be unable to create a valid code selector. Internally in
	VMM, the resulting code selector value is not checked, resulting in it blindly
	returning a code selector value of zero to the caller of Allocate_PM_Call_Back.
	In turn, an invalid callback address is returned to the DLL with ES containing
	zero.
	
	RESOLUTION
	==========
	
	Code calling INT 1Fh function 1684h should check to see if ES contains zero on
	return. If ES is zero and DI is zero, the VxD is not loaded or does not export a
	protected mode entry point. If ES is zero and DI is non-zero, the VxD is loaded
	and exports a protected mode entry point, but the entry point address cannot be
	obtained due to low memory conditions.
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK310
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
