---
layout: page
title: "Q141300: Primary and Secondary WINS Servers in Unattended Setup"
permalink: /kb/141/Q141300/
---

## Q141300: Primary and Secondary WINS Servers in Unattended Setup

{% raw %}

	Article: Q141300
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
	
	Only some of the TCP/IP protocol parameters can be defined at setup time in
	unattended setup. Neither the unattend text file nor the IPINFO.INF file allow
	the user to specify the WINS primary and secondary server IP addresses.
	
	The IP address, subnet mask and default gateway can be specified in IPINFO.INF.
	Changing WINS primary and secondary servers IP addresses can only be done by
	editing the TCP/IP setup script file OEMNXPTC.INF.
	
	MORE INFORMATION
	================
	
	The WINS primary and secondary server IP addresses are stored in a per- network
	adapter key in the values NameServer (REG_SZ) and NameServerBackup (REG_SZ)
	found under the HKEY_LOCAL_MACHINE subtree in the following key:
	
	  \SYSTEM\CurrentControlSet\Services\NetBT\Adapters\YourAdapter.
	
	By default these two keys are not set. All network adapter's TCP/IP information
	are set during TCP/IP configuration, after binding, as the binding process gives
	the network adapters service names.
	
	WORKAROUND
	==========
	
	WARNING: Modification of INF files can cause serious, system-wide problems
	before and after Setup and may require you to reinstall Windows NT to correct
	them. Microsoft cannot guarantee that any problems resulting from the
	modification of INF files can be solved. Make INF modifications at your own
	risk.
	
	To resolve the problem, modify IPINFO.INF and OEMNXPTC.INF. This solution has
	several limitations: it sets the same WINS primary and secondary servers IP
	addresses for all network adapters, therefore it is not very adapted for a
	multiple network adapters setup. On the other hand, after Setup it is impossible
	to reset the two WINS servers IP addresses to none. In this case, restore the
	CD-ROM OEMNXPTC.INF in %SystemRoot%\System32 after setup.
	
	1. Copy the \I386 directory from the Windows NT compact disc to your hard drive.
	
	2. Run expand -r OEMNXPTC.INF on your hard disk
	
	3. Run del OEMNXPTC.INF
	
	4. Modify the IPINFO.INF file to include the appropriate static IP values in the
	  [DefaultIPInfo] section. For additional information on how to do this, please
	  see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q135463
	  TITLE : IPINFO.INF Values Ignored During Setup
	
	5. In OEMNXPTC.INF, search for the [InstallOptions] heading to find the
	  following problem code fragment:
	
	         ifstr(i) $(!STF_GUI_UNATTENDED) == YES
	            set EnableDHCPFlag = 1
	         endif
	         ifstr(i) $(EnableDHCPFlag) == ""
	            set EnableDHCPFlag = 0
	         endif
	    
	
	  This problem is referenced in the following Microsoft Knowledge Base Article:
	
	  ARTICLE-ID: Q133337
	  TITLE : Automate Setup to Configure TCP/IP for Static Addressing Fails
	
	6. In OEMNXPTC.INF, search for the following lines:
	
	     ForListDo $(OldCardList)
	         ifstr(i) $(CardServiceKey) == ""
	             ifstr $(CardList) == ""
	                  set CardList = $($)
	             else
	                  set CardList = $(CardList)"@"$($)
	             endif
	         debug-output "Doing:"$($)
	         debug-output $(CardList)
	         set DefaultIPAddress = *($(IPAddressList),$(CardCount))
	         set DefaultSubnetMask = *($(SubnetMaskList),$(CardCount))
	    
	
	7. Add the following lines right after the previous lines (Change first the
	  NameServer and NameServerBackup IP addresses below with the appropriate IP
	  addresses. A + indicates that the current line and the next line is one
	  complete line):
	
	        Debug-Output "OEMNXPTC.INF: Open netbtkey "$($)
	        OpenRegKey $(!REG_H_LOCAL) "" +
	        "System\CurrentControlSet\Services\NetBT\Adapters\"$($) +
	        $(MAXIMUM_ALLOWED) WinsParamKey
	           ifstr(i) $(WinsParamKey) != ""
	               EnumRegValue $(WinsParamKey) WinsList
	               QueryListSize WinsListSize $(WinsList)
	               Debug-Output "OEMNXPTC.INF: Wins list size = "$(WinsListSize)
	               ifint $(WinsListSize) != 0
	                   ; Value of NameServer : *(*($(WinsList),1),4)
	                   ifstr(i) *(*($(WinsList),1),4) != ""
	                       goto nowinsadd
	                   endif
	               endif
	               set NewValueList = +
	        {{NameServer,$(NoTitle),$(!REG_VT_SZ),"135.135.2.8"},+
	        {NameServerBackup,$(NoTitle),$(!REG_VT_SZ),"135.135.7.1"}+
	                                  }
	               Shell  $(UtilityInf), AddValueList, $(WinsParamKey) , +
	        $(NewValueList)
	               ifint $($ShellCode) != $(!SHELL_CODE_OK)
	                   Debug-Output "OEMNXPTC.INF: ShellCode error: cannot write
	        wins servers addresses."
	                   goto ShellCodeError
	               endif
	        nowinsadd = +
	               CloseRegKey $(WinsParamKey)
	            endif
	    
	
	8. To make use of the changes you have made, run Setup from the directory on
	  your hard drive.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
