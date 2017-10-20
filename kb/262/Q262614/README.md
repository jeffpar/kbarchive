---
layout: page
title: "Q262614: BUG: SetTextCharacterExtra() Sometimes Ignored When Printing"
permalink: /kb/262/Q262614/
---

## Q262614: BUG: SetTextCharacterExtra() Sometimes Ignored When Printing

{% raw %}

	Article: Q262614
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbprint kbdraw kbGDI kbPrinting kbDSupport kbGrpDSGDI
	Last Modified: 22-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SetTextCharacterExtra function in the Win32 API apparently is ignored when
	it is used on some printer device contexts in Windows 2000 and Windows NT 4.0.
	
	RESOLUTION
	==========
	
	To work around the problem, avoid using the SetTextCharacterExtra function on a
	printer device context. Instead, use the ExtTextOut function to control the
	advance width between each character, by using the lpDX parameter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The problem occurs only when the device context is a printer device context and
	the print job is spooled with the enhanced metafile (EMF) data type. The
	function always works when it is used on a screen display device context.
	
	The default action of local printer queues in Windows is to spool print jobs by
	using the EMF data type. This can be changed in the Print Processor dialog box
	of the printer's properties dialog box. If the spool data type is "RAW", as is
	the default for most network printers, the problem does not occur. Note that for
	Windows 2000 printers, if the Enable Advanced Printing Features check box in the
	printer properties dialog is selected, the spooler may override the default data
	type setting and spool the print job by using the EMF data type.
	
	The workaround is to specify character advance width by using the ExtTextOut
	function or to ensure that the spool data type is "RAW".
	
	To implement the workaround, the "extra" character spacing should be added to
	each element of the lpDX array that is used for the last parameter to the
	ExtTextOut function. Note that any other advance width modifiers, such as
	justification, should also be applied to this array.
	
	The character spacing used by Windows during a TextOut function call can be
	obtained by using the following functions:
	
	- GetCharABCWidths
	- GetCharABCWidthsI
	- GetCharWidth32
	- GetCharWidthI
	- GetCharacterPlacement
	
	Additional query words: SetTextJustification Spooling TextOut DrawText kbGDIText
	
	======================================================================
	Keywords          : kbprint kbdraw kbGDI kbPrinting kbDSupport kbGrpDSGDI 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinXPHome kbWinXPPro kbWinAdvServSearch kbWinXPProSearch kbWinXPHomeSearch kbWinXPSearch
	Version           : :2000,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
