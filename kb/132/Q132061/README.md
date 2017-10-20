---
layout: page
title: "Q132061: I/O Addresses Not Available with Future Domain 850 Series"
permalink: /kb/132/Q132061/
---

## Q132061: I/O Addresses Not Available with Future Domain 850 Series

{% raw %}

	Article: Q132061
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are configuring a Future Domain SCSI controller in Device Manager, you
	may not be able to configure the controller to use the E800h-E9FFh or
	EA00h-EBFFh I/O address range, even though you can configure the controller
	itself to use either of these ranges. This problem is known to occur with the
	following Future Domain controllers:
	
	- TMC-850
	
	- TMC-850M
	
	- TMC-850MER
	
	- TMC-850MEX
	
	CAUSE
	=====
	
	This problem occurs because the Windows 95 SCSI.INF file and hardware detection
	routine do not distinguish between the Future Domain 850- and 860-series
	controllers. Although the 850-series controllers can be configured to use the
	I/O addresses listed above, the 860-series controllers cannot.
	
	RESOLUTION
	==========
	
	The Future Domain 850-series SCSI controllers cannot be configured to use the
	E800h-E9FFh or EA00h-EBFFh I/O address range when you are using the Windows 95
	protected-mode drivers. If you are using protected-mode drivers, use one of the
	following valid address ranges for the controller:
	
	- C800h-C9FFh
	
	- CA00h-CBFFh
	
	- CE00h-CFFFh
	
	- DE00h-DFFFh
	
	If you must use the E800h-E9FFh or EA00h-EBFFh I/O address range, use the
	real-mode drivers included with the controller instead of the Windows 95
	protected-mode drivers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
