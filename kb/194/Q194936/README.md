---
layout: page
title: "Q194936: ATAPI CD-ROM Changer Miniport Driver Is Not Properly Supported"
permalink: kb/194/Q194936/
---

## Q194936: ATAPI CD-ROM Changer Miniport Driver Is Not Properly Supported

	Article: Q194936
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw osr2 win95 kbHardwarekbfixlist
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ATAPI CD-ROM changer support is not properly supported in Windows 95 OEM Service
	Release versions 2, 2.1, and 2.5 (OSR2) when you are using a third-party
	ATAPI/IDE miniport driver.
	
	CAUSE
	=====
	
	When you are using the ATAPI CD-ROM changer support in OSR2 with an ATAPI/IDE
	miniport driver, SRBs for MECHANICAL STATUS commands have no data buffers.
	
	Atapchng.vxd does not set the IORF_CHAR_COMMAND or the SRB_DATA_IN flags when it
	translates MODE SENSE SRBs to MECHANICAL STATUS SRBs. This results in SCSIPORT
	not setting the data pointer in the SRB.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	it has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next service pack
	that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Version     Size           File name
	  -----------------------------------------------------------
	  09/22/98   07:38p   4.00.1112   11,331 bytes   Atapchng.vxd
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem is known to occur with the VIA Technologies Bus Master IDE driver.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbhw osr2 win95 kbHardware kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
