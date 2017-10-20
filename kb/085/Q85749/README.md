---
layout: page
title: "Q85749: WRK Translation Buffer Information Is Incorrect"
permalink: /kb/085/Q85749/
---

## Q85749: WRK Translation Buffer Information Is Incorrect

{% raw %}

	Article: Q85749
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 269 of the "Microsoft Windows Resource Kit" (WRK) guide for Windows 3.1
	gives inaccurate instructions for placing the 386 enhanced mode translation
	buffers in the upper memory area (UMA).
	
	Paragraph 3 of the section titled "Freeing Conventional Memory in 386 Enhanced
	Mode" states:
	
	  Then add an x= switch to the EMM386 line in the CONFIG.SYS to exclude the
	  unused UMB ranges.
	
	Other information in this section indicates that Windows 3.1 uses these excluded
	ranges for placement of the translation buffers.
	
	This is incorrect; any UMAs excluded by an upper memory block (UMB) provider will
	also be excluded from use by Windows 3.1.
	
	MORE INFORMATION
	================
	
	Windows running in 386 enhanced mode queries any UMB provider (such as
	EMM386.EXE, QEMM, and 386Max) for information about the UMB area.
	
	Every UMB provider creates a data structure that contains the following
	information in 4K granularity (that is, every 4K is marked as one of the
	following):
	
	1. Part of a UMB Something has been loaded into this address range.
	
	2. Part of an EMM page frame The memory is part of a LIM 4.0 page frame.
	
	3. Part of an EMS page frame The memory is part of a LIM 3.2 page frame.
	
	4. Usable This is the region that is "free." All areas marked by an I= parameter
	  in EMM386.EXE, which are not actually used, will be marked as usable.
	
	5. Unusable This is the region that is either RAM, ROM, or specifically excluded
	  (for example, the X= parameter in EMM386.EXE).
	
	6. Unknown All addresses that are not scanned will be marked as Unknown. This
	  region will be scanned by Windows as it normally would.
	
	Under Microsoft Windows 3.0, only numbers 1 and 3 are looked at. Consequently,
	address ranges that need to be excluded on the command line for the UMB provider
	should also be excluded in the [386Enh] section of the SYSTEM.INI with an
	EMMExclude statement.
	
	Under Microsoft Windows 3.1, the whole structure is looked at and assumed to be
	valid. As a result, the following entries in the [386Enh] section of the
	SYSTEM.INI are ignored, except where they do not conflict with the structure
	created by the UMB provider:
	
	1. EMMINCLUDE
	
	2. EMMEXCLUDE
	
	3. RESERVEDHIGHAREA
	
	4. USEABLEHIGHAREA
	
	5. IGNOREINSTALLEDEMM
	
	6. NOEMMDRIVER
	
	7. EMMPAGEFRAME
	
	For example, if EMM386.EXE is installed with the line
	
	  DEVICE=C:\Windows\EMM386.EXE NOEMS
	
	then the line "EMMInclude=B000-B7FF" would be used by Windows 3.1 because the
	B000 region is not scanned by EMM386.EXE. However, the line
	"EMMExclude=D800-DFFF" will be ignored because this region is scanned by
	EMM386.EXE.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
