---
layout: page
title: "Q219062: DHCPCMD Converts OptionID Parameter to Octal Value"
permalink: /kb/219/Q219062/
---

## Q219062: DHCPCMD Converts OptionID Parameter to Octal Value

{% raw %}

	Article: Q219062
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The version of DHCPCMD available with the Windows NT 4.0 Service Pack 4 Resource
	Kit update has an option to set subnet option values (SetSubnetOptionValue). If
	you examine a DHCP server's registry, you will notice that OptionIDs contain
	leading 0s (zeroes). If you pass a leading 0 to DHCPCMD, it converts the
	optionID to an octal value and thus sets an option value that you may not have
	intended to set.
	
	RESOLUTION
	==========
	
	If, for example, you tried to set DHCP lease duration to one hour (3600 seconds)
	on subnet 192-168.1.1 with the following command:
	
	  DHCPCMD 192.168.1.254 SetSubnetOptionValue 192.168.1.1 051 DWORD 3600
	
	You actually set option 041 (decimal) to a value of 3600. Option (decimal) 041 is
	the IP address of NIS servers on the client subnet. 3600 is not a valid value
	for this option.
	
	To properly set the lease duration (or any other subnet option value), eliminate
	the leading 0 from OptionID on the DHCPCMD command line. In this case, the
	working version of the previous example would be:
	
	  DHCPCMD 192.168.1.254 SetSubnetOptionValue 192.168.1.1 51 DWORD 3600
	
	Note also that the registry value is not a DWORD but is a binary value. Most, if
	not all, of the DHCP option values are stored in binary registry entries.
	(Strings, IP addresses, byte data, and so forth). It is possible to set many of
	the values by specifying DWORD as the type. If an option is of type STRING, then
	STRING must be specified as the type.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : ResourceKit
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
