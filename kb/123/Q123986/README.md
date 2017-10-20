---
layout: page
title: "Q123986: DHCP Server Excludes Address Clusters Within a Valid Scope"
permalink: /kb/123/Q123986/
---

## Q123986: DHCP Server Excludes Address Clusters Within a Valid Scope

{% raw %}

	Article: Q123986
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a scope is defined so that it includes a valid set of addresses in a range,
	but it excludes or reserves addresses within the last 32 specific addresses of
	that scope, address clusters within the legal range of the scope may not be
	available to the dynamic host configuration protocol (DHCP) server for
	assignment.
	
	For example, a scope with the following settings
	
	  Range Start: 161.240.8.1
	  Range End: 161.240.15.254
	  Subnet Mask: 255.255.248.0
	
	  Excluded Addresses:
	
	     161.240.15.126 -- 161.240.15.150
	     161.240.15.181 -- 161.240.15.184
	     161.240.15.187 -- 161.240.15.254
	
	  Reserved Addresses:
	
	     161.240.15.185, 186
	
	results in the following pattern of DHCP server IP address assignments:
	
	  161.240.9.0
	  161.240.9.224 -- 161.240.9.255
	
	  161.240.10.0
	  161.240.10.224 -- 161.240.10.255
	
	  161.240.11.0
	  161.240.11.224 -- 161.240.11.255
	
	  161.240.12.0
	  161.240.12.224 -- 161.240.12.255
	
	In this example, addresses within the range of 161.240.XX.0 to 161.240.XX.224
	cannot be assigned by the DHCP server even though they are valid addresses
	within the defined scope.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 3.5.
	This problem was corrected in Windows NT version 3.51.
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
