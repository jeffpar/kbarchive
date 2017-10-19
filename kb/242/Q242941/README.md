---
layout: page
title: "Q242941: Plug and Play Serial Devices Removed During Printer Installation"
permalink: /kb/242/Q242941/
---

## Q242941: Plug and Play Serial Devices Removed During Printer Installation

	Article: Q242941
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbhw win95 win98 win98se kbHardware
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have an active connection that is using a Plug and Play modem and you
	complete an action (such as installing a printer) that re-enumerates the serial
	devices, the modem becomes temporarily unavailable and your connection is
	dropped. After the re-enumeration is complete, the modem reappears in Device
	Manager and works normally.
	
	CAUSE
	=====
	
	This behavior occurs because all child serial devices are removed and redetected
	by Serenum.vxd when re-enumeration is triggered.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time       Version    Size     File name     Platform
	  ---------------------------------------------------------------
	  10/08/99  8:08:29pm  4.10.2222  20,228   Serenum.vxd   Windows 95
	  10/08/99  8:08:29pm  4.10.2222  20,228   Serenum.vxd   Windows 98
	  10/08/99  8:08:29pm  4.10.2222  20,228   Serenum.vxd   Windows 98
	                                                         Second Edition
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, disconnect any Plug and Play modems before
	reconfiguring devices.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about Windows 98 and Windows 98 Second Edition
	hotfixes, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q206071 General Information About Windows 98 and Windows 98 Second Edition
	  Hotfixes
	
	For additional information about Windows 95 hotfixes, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	Additional query words: w95qfe
	
	======================================================================
	Keywords          : kbhw win95 win98 win98se kbHardware 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
