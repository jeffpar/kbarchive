---
layout: page
title: "Q156479: INFO: Differences Between DLC on Windows 95 and Windows NT"
permalink: /kb/156/Q156479/
---

## Q156479: INFO: Differences Between DLC on Windows 95 and Windows NT

{% raw %}

	Article: Q156479
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.5,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbDLC kbOSWinNT400 kbSDKPlatform kbOSWin95 kbOSWinNT350 kbGrpDSNet
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the major differences between the Win32 Data Link Control
	(DLC) API as implemented on Windows 95 and Windows NT. It assumes familiarity
	with the DLC protocol and the relevant specification documents. It also assumes
	familiarity with the following Microsoft Knowledge Base article that describes
	the differences between Windows NT DLC and the IBM Specifications for OS/2
	1.xx:
	
	  Q156081 Differences between Data Link Control APIs on Windows NT & DOS
	
	MORE INFORMATION
	================
	
	The differences between Windows 95 and Windows NT DLC are as follows:
	
	1. The Windows 95 API continues to use the CCB Application ID field. In Windows
	  NT and DLCAPI.H, this field is defined as uchReserved2 in the LCC_CCB
	  structure and is commented as reserved for DLC DLL. A Windows 95 application
	  must use this field as defined for OS/2 EE. That is:
	
	   - Issue a DIR.OPEN.ADAPTER command with this CCB set to zero. The DLC driver
	     will set this field to an Application ID value.
	
	   - This Application ID must be used in subsequent CCB requests by setting
	     uchReserved2 to this value.
	
	  This difference is necessary because Windows 95 does not have support for the
	  security mechanisms used by Windows NT in lieu of the application ID.
	
	  See The IBM LAN Technical Reference Manual for more information.
	
	2. The fields uchReserved1 and uchReserved3 must not be used by an application
	  under any circumstances.
	
	3. NT-specific extensions such as security, multiple processors, or
	  international character strings are not supported.
	
	4. Windows 95 continues to support the completion method of polling (busy
	  looping) on the CCB's return code (uchDlcStatus in the LLC_CCB structure).
	  This method is not reliable on Windows NT and an application that uses it on
	  Windows 95 may not work on Windows NT.
	
	5. Windows 95 allows a DIR.STATUS command to be issued before a DIR.OPEN.ADAPTER
	  CCB. NT does not allow this. You should be aware of this when writing
	  cross-platform applications.
	
	6. Windows 95 does not support:
	
	   - Multiple logical adapters.
	
	   - TRANSMIT.FRAMES.CCB.
	
	   - Direct station support that is global to all applications.
	
	7. The Windows 95 802.2 implementation does support CCB 1's or a 16-bit DOS
	  interface.
	
	8. An application must issue a BUFFER.CREATE command before issuing any of the
	  following CCBs:
	
	  BUFFER.FREE              DLC.OPEN.SAP         XMIT.I.FRAME
	  BUFFER.GET               DLC.OPEN.STATION     XMIT.DIR.FRAME
	  DIR.CLOSE.DIRECT         DLC.REALLOCATE       XMIT.TEST.CMD
	  DIR.OPEN.DIRECT          DLC.RESET            XMIT.UI.FRAME
	  DLC.CLOSE.SAP            DLC.STATISTICS       XMIT.XID.CMD
	  DLC.CLOSE.STATION        READ                 XMIT.XID.RESP.FINAL
	  DLC.CONNECT.STATION      READ.CANCEL          XMIT.XID.RESP.NOT.FINAL
	  DLC.FLOW.CONTROL         RECEIVE
	  DLC.MODIFY               RECEIVE.CANCEL
	
	REFERENCES
	==========
	
	1. IBM LAN Technical Reference SC30-3383. This describes the basic set of CCB2
	  functions as used by OS/2 EE.
	
	2. DLCAPI.H
	
	3. For more information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q156081 Differences between Data Link Control APIs on Windows NT & DOS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbDLC kbOSWinNT400 kbSDKPlatform kbOSWin95 kbOSWinNT350 kbGrpDSNet 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWin95search kbZNotKeyword3
	Version           : :3.5,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
