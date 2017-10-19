---
layout: page
title: "Q139897: Computer Profile Setup Fails to Setup Intel EtherExpress Pro NIC"
permalink: /kb/139/Q139897/
---

## Q139897: Computer Profile Setup Fails to Setup Intel EtherExpress Pro NIC

	Article: Q139897
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Unattended and Computer Profile Setup (CPS) fails to install the Intel
	EtherExpress Pro network interface card (NIC).
	
	Following the instructions on "Profiling systems with OEM netcards" in the
	CPSREAD.TXT file in the Windows NT version 3.5 Resource Kit or the CPS.HLP file
	in the Windows NT version 3.51 Resource Kit is not sufficient.
	
	CAUSE
	=====
	
	The OEMSETUP.INF file for the Intel EtherExpress Pro card is not designed to
	work with Unattended or Computer Profile Setup.
	
	WORKAROUND
	==========
	
	1. See the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q141519
	  TITLE : Unattended and Computer Profile Setup May Fail to Setup OEM NIC
	
	2. Modify CPS.INI:
	
	  [Registry]
	  FindInstalledServicesAt = SOFTWARE\Microsoft,SOFTWARE\Intel
	
	3. Modify OEMSETUP.INF file.
	
	  WARNING: Modification of Setup files can cause serious, system-wide problems
	  before and after Setup and may require you to reinstall Windows NT to correct
	  them. Microsoft cannot guarantee that any problems resulting from the
	  modification of Setup files can be solved. Make Setup file modifications at
	  your own risk.
	
	  The modifications below only apply to the
	  \DRVLIB\NETCARD\X86\EPRO\OEMSETUP.INF file that is included on the Windows NT
	  3.51 compact disc.
	
	  a. First OEMSETUP.INF modification:
	
	        installadapter = +
	        Debug-Output "At installadapter"
	     ;
	     ;   First, check whether the same version of the software exists
	     ;
	     ;; Following lines added changed for Unattended Install
	        ifstr(i) $(!STF_GUI_UNATTENDED) == "YES"
	           goto skipoptions
	        endif
	
	  b. Second OEMSETUP.INF modification:
	
	        writeparameters = +
	        Debug-Output "At writeparameters"
	     ;
	     ;   Add the rest of the parameters to the Services area
	     ;
	        Ifstr(i) $(MachineType) == "MCA"
	           set NewValueList =
	           { {BusType,$(NoTitle),$(!REG_VT_DWORD),$(BusTypeNum)},+
	           {McaPosId,$(NoTitle),$(!REG_VT_DWORD),$(NETCARD_ID)},+
	           {SlotNumber,$(NoTitle),$(!REG_VT_DWORD),$(SlotNum)},+
	           {MediaType,$(NoTitle),$(!REG_VT_DWORD),1} }
	        else
	           Set IOAddrValue = *($(IOAddrValues),
	           ~($(IOAddrList),$(IOAddrValue)))
	           Shell "" DebugConfiguration "Before Writing Parameters"
	           set NewValueList =
	           { {INTERRUPT,$(NoTitle),$(!REG_VT_DWORD),$(IRQValue)},+
	           {BusType,$(NoTitle),$(!REG_VT_DWORD),$(BusInterfaceType)},+
	           {BusNumber,$(NoTitle),$(!REG_VT_DWORD),$(BusNumber)},+
	           {MediaType,$(NoTitle),$(!REG_VT_DWORD),1},+
	           {IoChannelReady,$(NoTitle),$(!REG_VT_DWORD),$(IOReadyValue)},+
	           {Transceiver,$(NoTitle),$(!REG_VT_DWORD),$(TransceiverValue)},+
	           {IOADDRESS,$(NoTitle),$(!REG_VT_DWORD),$(IOAddrValue)} }
	        endif
	
	        Shell  $(UtilityInf), AddValueList, $(KeyParameters),
	        $(NewValueList)
	
	     ;; Following lines added for Unattended Install
	        ifstr(i) $(!STF_GUI_UNATTENDED) == "YES"
	          Shell $(UtilityInf),AddDefaultNetCardParameters,$(KeyParameters)
	        endif
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	
	Additional query words: automate
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword5
	Version           : :3.5,3.51
	
	=============================================================================
	
