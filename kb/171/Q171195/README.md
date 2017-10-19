---
layout: page
title: "Q171195: &quot;Fatal Exception&quot; Error Suspending and Resuming with MSDLC32"
permalink: /kb/171/Q171195/
---

## Q171195: &quot;Fatal Exception&quot; Error Suspending and Resuming with MSDLC32

	Article: Q171195
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kberrmsg kbfile kbnetwork osr1 osr2 win95 kbDLC kbSDKPlatform kbGrpDSNet
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using the Microsoft 32-bit Data Link Control protocol (MSDLC32) and
	you suspend Windows 95 (using power management features), you may receive a
	"Fatal Exception 06" or "Fatal Exception 0E" error message when you resume
	Windows 95. The error message may be similar to the following message:
	
	  A fatal exception 0E has occurred at 0028:<xxxxxxxx> in VxD VMM(06) +
	  <xxxxxxxx>.
	
	CAUSE
	=====
	
	MSDLC32 does not reinitialize a certain variable correctly when the computer is
	suspended and resumed. This variable may contain random data, resulting in
	unpredictable behavior when you resume the computer.
	
	RESOLUTION
	==========
	
	This issue is resolved by the following updated file for Windows 95 and Windows
	95 OEM Service Release 2:
	
	  Dlc.vxd version 4.10.994 (dated 6/4/97) and later
	
	To install this update, follow these steps:
	
	1. Download the Dlcupd.exe file from the Microsoft Download Center to an empty
	  folder.
	
	2. In My Computer or Windows Explorer, double-click the Dlcupd.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Dlc32upd.exe now
	  (http://download.microsoft.com/download/win95upg/updt_a/1.0/W95/EN-US/Dlc32upd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	STATUS
	======
	
	This issue is resolved in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q170737 Windows 95 MSDLC32 Does Not Receive Broadcast Packets
	
	  Q170736 Windows 95 MSDLC32 Does Not Receive Multicast Packets
	
	  Q159344 Fatal Exception in DLC Running Program from NetWare Server
	
	  Q148765 Availability of DLC Update for MSDLC32 Protocol
	
	  Q156149 MSDLC32 May Not Receive All Packets in Heavy Traffic
	
	For additional information about MSDLC32, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q139561 Availability of MSDLC32 and Support Boundaries
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbfile kbnetwork osr1 osr2 win95 kbDLC kbSDKPlatform kbGrpDSNet 
	Technology        : kbWin95search kbOPKSearch kbWin95 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	
	=============================================================================
	
