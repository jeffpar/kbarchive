---
layout: page
title: "Q255858: PRB: New Behavior of Multiline CJK Rich Edit Controls w/ Win2000"
permalink: /kb/255/Q255858/
---

## Q255858: PRB: New Behavior of Multiline CJK Rich Edit Controls w/ Win2000

	Article: Q255858
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbSDKPlatform kbVC kbVC500 kbVC500bug kbVC500fix kbVC600 kbVC600bug kbVC600fix kbLocali
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The display of multiline text in rich edit controls may be truncated when
	Chinese, Japanese, or Korean fonts are used.
	
	CAUSE
	=====
	
	There has been a change in the behavior of rich edit controls under Windows 2000
	when Chinese, Japanese, or Korean fonts are used. In earlier versions, there is
	no spacing between lines. With the intention of increasing readability, lines
	are now spaced slightly apart. This can truncate displays if the computation of
	the rectangle for the control does not take this change into account.
	
	RESOLUTION
	==========
	
	The behavior in earlier versions can be recovered; the following code fragment
	suggests a method:
	
	  	PARAFORMAT2 pf;
	  	ZeroMemory((void*)&pf, sizeof(pf));
	  	pf.cbSize = sizeof(pf);
	  	pf.dwMask = PFM_LINESPACING;
	  	pf.dyLineSpacing=lfWeight;
	  	pf.bLineSpacingRule = 4;
	  	::SendMessage(m_field.m_hWnd, EM_SETPARAFORMAT, 0, (LPARAM)&pf);
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSDKPlatform kbVC kbVC500 kbVC500bug kbVC500fix kbVC600 kbVC600bug kbVC600fix kbLocalization kbVC500QFE kbVC600QFE kbGrpDSIntl 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
