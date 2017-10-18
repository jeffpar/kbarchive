---
layout: page
title: "Q177267: FIX: Unattended Setup Disables EnableDHCPFlag on Second Adapter"
permalink: kb/177/Q177267/
---

## Q177267: FIX: Unattended Setup Disables EnableDHCPFlag on Second Adapter

	Article: Q177267
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform an unattended installation on a system that is multihomed and
	the answer file (Unattend.txt) has the parameter DHCP = YES in the TCP/IP
	parameters section, only the first adapter will receive an IP address. The
	second adapter will be set to use a static IP address in which the IP address
	and subnet mask are blank.
	
	CAUSE
	=====
	
	This is caused by the EnableDHCPFlag in Oemnxptc.inf being set to 0 (zero),
	which means off, for the second adapter.
	
	
	RESOLUTION
	==========
	
	To work around this problem, modify the Oemnxptc.inf file on the distribution
	share so that it checks to see if STF_GUI_UNATTENDED is set to YES.
	
	1. On your distribution share, expand the Oemnxptc.in_ file by typing the
	  following at the command prompt:
	
	  "Expand Oemnxptc.in_ Oemnxptc.inf" (without the quotation marks)
	
	2. Rename the compressed Oemnxptc.in_ file to Oemnxptc.sav.
	
	  This step is required because this not only offers a backup copy of the file
	  but the setup program will always use the compressed version of the file if
	  both are present.
	
	3. Use any text editor to modify the following section of the .inf file:
	
	  Before modifications are made:
	
	  [InstallOption]
	  set Option   = $($1)
	  set SrcDir   = $($2)
	  set AddCopy  = $($3)
	  set DoCopy   = $($4)
	  set DoConfig = $($5)
	  set InstallFromRas = $($6)
	  set EnableDHCPFlag = $($7)
	  set InstallList = $($8)
	  ifstr(i) $(EnableDHCPFlag) == ""
	  set EnableDHCPFlag = 0
	  Debug-Output "DHCP Phase 1 Flag :"$(EnableDHCPFlag)
	  Debug-Output "DHCP Phase 1 Adapter :"$(EnableDHCPForThisAdapter)
	  endif
	  ifstr(i) $(InstallList) == ""
	  set InstallList = {"1","1","0","0","0","0","0","0"}
	
	  After modification are made:
	
	  [InstallOption]
	  set Option   = $($1)
	  set SrcDir   = $($2)
	  set AddCopy  = $($3)
	  set DoCopy   = $($4)
	  set DoConfig = $($5)
	  set InstallFromRas = $($6)
	  set EnableDHCPFlag = $($7)
	  set InstallList = $($8)
	  ifstr(i) $(EnableDHCPFlag) == ""
	  set EnableDHCPFlag = 0
	  ;**************modified code begins here****************
	  Ifstr(i) $(!STF_GUI_UNATTENDED) == YES
	  set EnableDHCPFlag = 1
	  endif
	  ;**************Modifications end here******************
	  Debug-Output "DHCP Phase 1 Flag :"$(EnableDHCPFlag)
	  Debug-Output "DHCP Phase 1 Adapter :"$(EnableDHCPForThisAdapter)
	  endif
	  ifstr(i) $(InstallList) == ""
	  set InstallList = {"1","1","0","0","0","0","0","0"}
	
	4. Save the file and begin your unattended setup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: unattend two NIC Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
