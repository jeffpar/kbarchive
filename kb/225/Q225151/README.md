---
layout: page
title: "Q225151: PC Card Modem Does Not Use Assigned Interrupt"
permalink: /kb/225/Q225151/
---

## Q225151: PC Card Modem Does Not Use Assigned Interrupt

	Article: Q225151
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A PC Card (PCMCIA) modem may not always be assigned the same IRQ resource, even
	if the "Use automatic settings" check box in Device Manager is cleared. If the
	"Use automatic settings" check box is cleared and the IRQ assigned to the modem
	is the only available IRQ, the modem may not work. When this occurs, the modem
	shows a status of "Code 10" in Device Manager.
	
	CAUSE
	=====
	
	CardBus Services (Cbss.vxd) includes an interrupt detection mechanism that asks
	the device to assert an interrupt, and then checks the Programmable Interrupt
	Controller. The check may be carried out faster than the hardware can respond,
	and the returned availability of an interrupt for the device may not be valid.
	
	
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name
	  ------------------------------------------------
	  04/02/98  11:18am 4.00.1118    16,249  Cbss.vxd
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	To view a device's resources:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  System.
	
	2. On the Device Manager tab, click the device whose resources you want to view,
	  and then click Properties.
	
	3. Click the Resources tab.
	
	
	Additional query words: failure pic
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	
