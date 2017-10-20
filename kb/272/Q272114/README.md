---
layout: page
title: "Q272114: BUG: EndPage() Fails with Large Spool Files"
permalink: /kb/272/Q272114/
---

## Q272114: BUG: EndPage() Fails with Large Spool Files

{% raw %}

	Article: Q272114
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbGrpDSGDI
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a high-resolution image or a complex drawing that yields a large
	spool file, the EndPage function may fail and return -1, and the GetLastError
	function may return 8 ("Not enough storage is available to process this
	command").
	
	RESOLUTION
	==========
	
	If you are an application developer and you are developing an application that
	could be affected by this problem, consider rendering to a DIB section and then
	using SetDIBitsToDevice/StretchDIBits to send the DIB data to the printer. This
	method will help to reduce the size of the spool file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words: prin spool spooler
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbGrpDSGDI 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
