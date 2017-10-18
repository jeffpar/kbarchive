---
layout: page
title: "Q123164: Windows 95 Err Msg: The Above Model Is Not Supported By..."
permalink: kb/123/Q123164/
---

## Q123164: Windows 95 Err Msg: The Above Model Is Not Supported By...

	Article: Q123164
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
	
	When you try to print from Wilson WindowWare WinCheck 3.0, you receive the
	following error message:
	
	  The above model is not supported by this driver. Default to <printer
	  name>.
	
	CAUSE
	=====
	
	WinCheck uses the name of the printer driver instead of the printer model name
	when it calls ExtDeviceMode. If you are using a printer that is not the first
	model name listed in the driver file, you receive the above error message.
	
	WORKAROUND
	==========
	
	When you click OK after reading the above error message, you can still print;
	however, you cannot change options such as the paper size, paper source,
	resolution, and so on.
	
	MORE INFORMATION
	================
	
	Wilson WindowWare is aware of this problem. This situation is most likely caused
	by design changes in Windows 95. Microsoft has confirmed that it is not caused
	by a problem in Windows 95. For more information about resolving this issue,
	call Wilson WindowWare at (800) 762-8383.
	
	Additional query words: 3rdparty err msg hppcl5ms
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
