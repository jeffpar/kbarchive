---
layout: page
title: "Q171614: Linkcfg.exe is not Writing Out Some Registry Entries for DCA ISC"
permalink: /kb/171/Q171614/
---

## Q171614: Linkcfg.exe is not Writing Out Some Registry Entries for DCA ISC

	Article: Q171614
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The new LINKCFG.EXE program used to support command-line installation of link
	services was not properly saving registry entries when installing DCA SDLC or
	DCA X.25 link services.
	
	Using identical configuration parameters to configure from both manager and
	linkcfg.exe resulted in these differences in the registry:
	
	Manager
	  47286:  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DCASYNC\ 
	          Parameters\ExtraParameters Data1LS DCAX251
	  47335:  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DCAX251\ 
	          Parameters\ExtraParameters DeviceName DCADL$03
	  47348:  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DCAX251\ 
	          Parameters\ExtraParameters OSVCRng 0048-0050
	
	Linkcfg
	  47286:  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DCASYNC\ 
	          Parameters\ExtraParameters Data1LS 
	  47335:  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DCAX251\ 
	          Parameters\ExtraParameters DeviceName      
	  47348:  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DCAX251\ 
	          Parameters\ExtraParameters OSVCRng 
	
	CAUSE
	=====
	
	The Device Parameter Strings were overwritten by the un-initialized
	configuration buffer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, versions 3.0 and 3.0
	SP1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: linkcfg registry DCA ISCA
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
