---
layout: page
title: "Q142904: Unattended Installation of IBM Auto 16/4 Token Ring Adapter"
permalink: /kb/142/Q142904/
---

## Q142904: Unattended Installation of IBM Auto 16/4 Token Ring Adapter

{% raw %}

	Article: Q142904
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can perform an unattended installation of the IBM
	Auto 16/4 token ring adapter in Windows NT.
	
	MORE INFORMATION
	================
	
	NOTE: Before you start the unattended installation of the token ring adapter,
	please see the following article in the Microsoft Knowledge Base regarding the
	OEMSETUP.INF file for IBMTOK4.SYS:
	
	  ARTICLE-ID: Q137505
	  TITLE : IBM 16/4 Auto Token Ring Adapter Driver Causes Event ID 7000
	
	To perform an unattended installation of the IBM Auto 16/4 token ring adapter,
	close all applications and do the following:
	
	1. Create a directory on your hard disk drive. For example: c:\ibmtok4
	
	2. Copy all the files in the I386 directory of the Windows NT 3.51 compact disc
	  to c:\ibmtok4:
	
	3. Copy IBMTOK4.SYS from the \drvlib\netcard\x86\ibmtok4 directory on the
	  Windows NT compact disc to c:\ibmtok4.
	
	4. Expand the following files in c:\ibmtok4 by typing the following:
	
	  "expand oemnadtk.in_ oemnadtk.inf" (without the quotation marks)
	
	  "expand ntlanman.in_ ntlanman.inf" (without the quotation marks)
	
	5. Make a copy of DOSNET.INF by typing the following in c:\ibmtok4:
	
	  "copy dosnet.inf dosnet.bak" (without the quotation marks)
	
	6. Rename the *.IN_ files in c:\ibmtok4 to *.BAK by typing the following:
	
	  "ren oemnadtk.in_ oemnadtk.bak" (without the quotation marks)
	
	  "ren ntlanman.in_ ntlanman.bak" (without the quotation marks)
	
	7. Change a few lines in OEMNADTK.INF to read as follows:
	
	  ProductSoftwareName = "IbmTok4"
	  ProductSoftwareImagePath = "\SystemRoot\System32\drivers\ibmtok4.sys"
	  ProductHardwareName = "IbmTok4"
	
	  [Files-IBMTok]
	  19,IBMTOK4.SYS , SIZE=25600
	
	  [OptionsTextENG]
	  IBMTOK = "IBM Auto 16/4 Token-Ring Adapter"
	  FunctionTitle = "IBM Auto 16/4 Token-Ring Adapter Card Setup"
	  ProductSoftwareDescription = "IBM Auto 16/4 Token-Ring Adapter Driver"
	  ProductHardwareDescription = "IBM Auto 16/4 Token-Ring Adapter"
	  ProductSoftwareTitle = "IBM Auto 16/4 Token-Ring Adapter Driver"
	  ProductHardwareTitle = "IBM Auto 16/4 Token-Ring Adapter"
	
	8. In DOSNET.INF, change:
	
	  d1,ibmtok.sys
	
	  to
	
	  d1,ibmtok4.sys
	
	9. Change a line in NTLANMAN.INF to read as follows:
	
	  set AdapterSrcDir = $(!OEMNetDrive) - use to read $(OEMNetDrive)
	
	10. Create an answer file (for example: IBMTOK.TXT) in c:\ibmtok4. You may
	  create the answer file using the Setup Manager included in the Windows NT
	  Resource Kit version 3.51. The following is a recommended content of
	  IBMTOK.TXT:
	
	  [Unattended]
	  Method = express
	  ConfirmHardware = no
	  NtUpgrade = no
	  Win31Upgrade = no
	  TargetPath = \WINNT35
	
	  [GuiUnattended]
	  !DetachedProgram = ""
	  !Arguments = ""
	  !SetupNetwork = "YES"
	  !SetupApplications = "NO"
	  !TimeZone = "(GMT-06:00) Central Time (US & Canada)"
	
	  [UserData]
	  !FullName = "Name"
	  !OrgName = "Company"
	  !ComputerName = "IBMTOK4"
	  !ProductId = "xxxxxxxx-xxx"
	
	  ;The NetworkAdapterData and AdapterParameters section for the ;configuration
	  of the IBM Auto 16/4 Token Ring Adaper.
	
	  [NetworkAdapterData]
	  !AutoNetOption = "IBMTOK"
	
	  [AdapterParameters]
	  IoBaseAddress = 1
	  MediaType = 2
	  NetworkAddress = ""
	
	  [TransportData]
	  !InstallNWLink = 1
	  !AUTONETIPXFRAMETYPE = 255
	  !InstallTCPIP = 0
	  !InstallNetBEUI = 1
	
	  [DomainData]
	  !AutoWorkGroup = "WORKGROUP"
	
	11. To start the unattended installation of the IBM Auto 16/4 token ring
	  adapter, type the following at the command prompt (make sure you are in
	  c:\ibmtok4):
	
	  "winnt /s:x:\ /t:c: /u:x:\ibmtok.txt /b" (without the quotation marks)
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
